// Minimal Gemini client using REST API and Vite env var
// Requires: VITE_GEMINI_API_KEY in your environment
console.log('Gemini key present:', Boolean(import.meta.env.VITE_GEMINI_API_KEY));

const API_KEY = import.meta?.env?.VITE_GEMINI_API_KEY;
const MODEL = 'gemini-1.5-flash';

export async function generateAIResponse(prompt) {
  if (!API_KEY) {
    return 'AI yapılandırılmadı: API anahtarı bulunamadı. Lütfen VITE_GEMINI_API_KEY ayarlayın.';
  }

  try {
    // simple retry with backoff for 429/5xx
    let lastError = null;
    for (let attempt = 0; attempt < 2; attempt++) {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 512
          }
        })
      });

      if (res.ok) {
        const data = await res.json();
        const candidate = data?.candidates?.[0];
        const text = candidate?.content?.parts?.map((p) => p.text).join('\n').trim();
        return text || 'Üzgünüm, şu anda bir yanıt oluşturamadım.';
      }

      // handle rate limit specifically
      if (res.status === 429) {
        const retryAfter = Number(res.headers.get('retry-after')) || 0.5;
        await new Promise((r) => setTimeout(r, retryAfter * 1000 * (attempt + 1)));
        lastError = '429';
        continue;
      }

      // other errors: try once more then fail
      lastError = `${res.status} ${await res.text()}`;
      await new Promise((r) => setTimeout(r, 300 * (attempt + 1)));
    }
    if (lastError === '429') {
      return 'Şu anda çok fazla istek var. Lütfen birkaç saniye sonra tekrar dener misin?';
    }
    return `AI hatası: ${lastError}`;
  } catch (err) {
    return `AI bağlantı hatası: ${String(err)}`;
  }
}

export async function getAIRecommendations(context) {
  if (!API_KEY) {
    return { error: 'API key missing', items: [] };
  }

  const systemInstruction = `You are an adaptive learning coach for a coding education app.
Return 3 concise, student-friendly recommendations as strict JSON with the shape:
{"items":[{"title":"string","description":"string","cta":"string","route":"/path"}]}.
No markdown, no extra text.`;

  const prompt = `${systemInstruction}\n\nContext JSON:\n${JSON.stringify(context)}`;

  try {
    // retry for transient/rate-limit errors
    let lastStatus = 0;
    for (let attempt = 0; attempt < 2; attempt++) {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: prompt }] }
          ],
          generationConfig: { temperature: 0.6, topP: 0.9, topK: 40, maxOutputTokens: 400 }
        })
      });
      lastStatus = res.status;
      if (res.ok) {
        const data = await res.json();
        const raw = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('\n') || '';
        let parsed;
        try {
          parsed = JSON.parse(raw);
        } catch (_) {
          const match = raw.match(/\{[\s\S]*\}$/);
          parsed = match ? JSON.parse(match[0]) : null;
        }
        const items = Array.isArray(parsed?.items) ? parsed.items.slice(0, 3) : [];
        return { items };
      }
      if (res.status === 429) {
        const retryAfter = Number(res.headers.get('retry-after')) || 0.5;
        await new Promise((r) => setTimeout(r, retryAfter * 1000 * (attempt + 1)));
        continue;
      }
      await new Promise((r) => setTimeout(r, 300 * (attempt + 1)));
    }
    if (lastStatus === 429) return { error: 'rate_limited', items: [] };
    return { error: `HTTP ${lastStatus}`, items: [] };
  } catch (e) {
    return { error: String(e), items: [] };
  }
}


