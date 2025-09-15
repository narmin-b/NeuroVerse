import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      nav: {
        home: "Ana Sayfa",
        lessons: "Dersler",
        features: "Özellikler",
        benefits: "Faydalar",
        contact: "İletişim",
        login: "Giriş / Kayıt",
        welcome: "Hoş geldin, {{name}}!",
        reports: "Raporlar",
        manageClasses: "Sınıfları Yönet",
        myLessons: "Derslerim",
        profile: "Profil",
        logout: "Çıkış"
      },
      manage: {
        header: "Sınıfları Yönet",
        subheader: "Sınıflarınızı ve öğrencilerinizi oluşturun ve yönetin",
        createNewClass: "Yeni Sınıf Oluştur",
        className: "Sınıf Adı",
        description: "Açıklama",
        createClass: "Sınıf Oluştur",
        addStudent: "Öğrenci Ekle",
        remove: "Kaldır",
        viewReports: "Raporları Görüntüle",
        editClass: "Sınıfı Düzenle",
        addStudentTo: "{{name}} sınıfına öğrenci ekle",
        studentName: "Öğrenci Adı",
        email: "E-posta",
        editClassWithName: "Sınıfı Düzenle: {{name}}",
        saveChanges: "Değişiklikleri Kaydet",
        manageStudents: "Öğrencileri Yönet",
        addNewStudent: "Yeni Öğrenci Ekle",
        delete: "Sil",
        classCodeLabel: "Sınıf Kodu",
        noCode: "KOD-YOK",
        copy: "Kopyala",
        refresh: "Yenile",
        pendingRequests: "Bekleyen İstekler",
        noPendingRequests: "Bekleyen istek yok.",
        approve: "Onayla",
        reject: "Reddet",
        rejectReason: "(Opsiyonel) Reddetme nedeni"
      },
      reports: {
        students: "Öğrenciler",
        active: "Aktif",
        inactive: "Pasif",
        eeg: "EEG",
        goBack: "Geri Dön",
        noCourseAssigned: "Ders atanmamış",
        studentNotFound: "Öğrenci bulunamadı.",
        aiAnalysis: "Yapay Zeka Analizi",
        quizSuccessFail: "Quiz Başarı/Başarısızlık Oranı",
        success: "Başarı",
        fail: "Başarısızlık",
        modifyMaterialBalance: "Ders İçeriği Dengesini Düzenle",
        text: "Metin",
        video: "Video",
        quiz: "Quiz",
        classes: "Sınıflar",
        studentsCount: "öğrenci"
      },
      lessons: {
        available: "Mevcut Dersler",
        start: "Dersi Başlat",
        completed: "Tamamlandı",
        modules: "Modüller",
        moduleCountLabel: "{{count}} Modül",
        duration: "Süre",
        difficultyLabel: "Zorluk",
        chooseCoursePrompt: "Hangi programlama dilini öğrenmek istiyorsunuz?",
        finishCourse: "Dersi Bitir",
        markModuleComplete: "Modülü Tamamla",
        attention: "Dikkat Seviyesi",
        timeRemaining: "Kalan süre",
        backToLessons: "Derslere Dön",
        previous: "Önceki",
        next: "Sonraki",
        tabs: { text: "Metin", quiz: "Quiz", video: "Video" },
        attention: "Dikkat Seviyesi",
        lowAttentionPrompt: "Dikkat düşük. İçeriği değiştirelim mi?",
        switchVideo: "Videoya Geç",
        tryQuiz: "Quiz Dene",
        continueText: "Metin ile Devam Et",
        backText: "Metne Dön",
        quizComplete: "Quiz Tamamlandı!",
        markComplete: "Tamamlandı olarak işaretle",
        cancel: "İptal",
        whatYouWillLearn: "Neler Öğreneceksiniz",
        syllabus: "Müfredat",
        showAll: "Tümünü Göster",
        showLess: "Daha Az Göster",
        startLesson: "Dersi Başlat"
      },

      eeg: {
        tracking: "EEG Takip",
        trackingActive: "EEG Takip Aktif",
        active: "EEG Aktif",
        attentionShort: "{{value}}% Dikkat",
        finalQuiz: "Quiz"
      },

      brainAligned: {
        learning: "Beyin Uyumlu Öğrenme",
        quizDesc: "Beyin uyumlu öğrenme için tasarlanmış interaktif sınav",
        videoDesc: "Beyin uyumlu öğrenme için optimize edilmiş video içerik"
      },

      attentionPopup: {
        title: "Dikkat Uyarısı",
        message: "Dikkat seviyeniz: {{value}}%",
        intro: "Dikkat seviyenizde bir düşüş fark ettik. Odaklanmanıza yardımcı olabilecek öneriler:",
        dismiss: "Kapat",
        focusedNow: "Şimdi Odaklandım",
        suggestions: {
          switchToText: { title: "Metin Moduna Geç", desc: "Metin okumak dikkatinizi toparlamaya yardımcı olabilir" },
          tryQuiz: { title: "Etkileşimli Quiz Dene", desc: "Sorularla etkileşim odaklanmayı artırabilir" },
          watchVideo: { title: "Video İçerik İzle", desc: "Görsel içerik odağı yeniden kazanmanıza yardımcı olabilir" },
          takeQuickQuiz: { title: "Kısa Bir Quiz Çöz", desc: "Etkileşimli içerik odağı korumaya yardımcı olabilir" },
          takeShortBreak: { title: "Kısa Bir Mola Ver", desc: "Kısa bir mola zihninizi tazeleyebilir" },
          breakAlert: "Odak için 2-3 dakikalık kısa bir mola vermeyi düşünün!"
        }
      },
      dashboard: {
        overallLearningProgress: "Genel Öğrenme İlerlemesi",
        weeklyProgress: "Haftalık İlerleme",
        weeklyProgressTrend: "Haftalık İlerleme Trendi",
        timeSpentMinutes: "Harcanan Süre (dakika)",
        timeSpentPerCourse: "Ders Bazında Harcanan Süre",
        timeLabel: "Süre: {{h}}s {{m}}d",
        progressOverview: "İlerleme Özeti",
        complete: "Tamamlandı",
        courseProgressSummary: "Ders İlerleme Özeti",
        modulesShort: "modül",
        weekDays: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]
      },
      topics: {
        python: "Python Temelleri",
        web: "HTML/CSS ile Web Geliştirme",
        js: "JavaScript Temelleri"
      },
      tags: { programming: "Programlama", web: "Web Geliştirme" },
      difficulty: { beginner: "Başlangıç", intermediate: "Orta" },

      myLessons: {
        headerSubtitle: "Öğrenme ilerlemenizi takip edin ve kaldığınız yerden devam edin",
        enrolledCourses: "Kayıtlı Kurslar",
        next: "Sonraki",
        lastAccess: "Son erişim",
        progress: "İlerleme",
        modulesLabel: "Modüller: {{completed}}/{{total}}",
        timeSpent: "Geçen süre: {{time}}",
        continueLearning: "Öğrenmeye Devam Et",
        viewDetails: "Detayları Görüntüle",
        recentActivities: "Son Aktiviteler",
        viewAllActivities: "Tüm aktiviteleri görüntüle",
        activity: {
          completion: "Modül {{num}} tamamlandı: {{name}}",
          start: "Modül {{num}} başlatıldı: {{name}}",
          quiz: "Test alındı: {{name}}",
          video: "Video izlendi: {{name}}",
          timeAgoHours: "{{count}} saat önce",
          timeAgoDays: "{{count}} gün önce"
        }
      },

      features: {
        header: "Platform Özellikleri",
        items: [
          { title: "EEG Veri Toplama", desc: "Dikkat ve bilişsel yükü ölçmek için gerçek zamanlı beyin dalgası verilerini yakalayın." },
          { title: "AI Analizi", desc: "Derin öğrenme modelleri (LSTM/CNN) katılım ve öğrenme ihtiyaçları için EEG desenlerini analiz eder." },
          { title: "Uyarlanabilir İçerik", desc: "Öğrenci odaklanmasına göre ders formatını dinamik olarak ayarlayın—etkileşimli, video veya ses." },
          { title: "Öğretmen Paneli", desc: "Öğrenci katılımını takip etmek için eğitimcilere gerçek zamanlı analitik ve raporlama." },
          { title: "Geri Bildirim ve Doğrulama", desc: "Öğrenci geri bildirimi ve doğrulama yoluyla sürekli iyileştirme." }
        ]
      },

      benefits: {
        header: "Kim Faydalanır?",
        studentsTitle: "Öğrenciler İçin",
        studentsDesc: "Odaklanmanıza ve öğrenme ihtiyaçlarınıza gerçek zamanlı olarak uyarlanan kişiselleştirilmiş, ilgi çekici dersler.",
        teachersTitle: "Öğretmenler İçin",
        teachersDesc: "Her öğrencinin ilerlemesini desteklemenize yardımcı olacak anlık analitik ve uygulanabilir içgörüler."
      },

      profile: {
        noSession: "Oturum bulunamadı.",
        roleLabel: "Rol",
        classLabel: "Sınıf",
        totalEnrolled: "Toplam Kayıtlı Ders",
        totalFinished: "Bitirilen Ders",
        classCount: "Sınıf Sayısı",
        studentCount: "Öğrenci Sayısı",
        myLessons: "Derslerim",
        goToLessons: "Derslere git",
        noneEnrolled: "Henüz kayıtlı dersiniz yok.",
        percentComplete: "%{{percent}} tamamlandı"
      },

      auth: {
        signInTitle: "Hesabınıza giriş yapın",
        signUpTitle: "Hesabınızı oluşturun",
        welcomeBack: "NeuroVerse'e tekrar hoş geldiniz",
        joinToday: "Bugün NeuroVerse'e katılın",
        iam: "Ben bir:",
        student: "Öğrenci",
        teacher: "Öğretmen",
        username: "Kullanıcı Adı",
        email: "E-posta",
        firstName: "Ad",
        lastName: "Soyad",
        classCode: "Sınıf Kodu (Öğretmeninizden alın)",
        password: "Şifre",
        confirmPassword: "Şifreyi Onayla",
        signIn: "Giriş Yap",
        signUp: "Hesap Oluştur",
        toggleToSignUp: "Hesabınız yok mu? Kayıt olun",
        toggleToSignIn: "Zaten hesabınız var mı? Giriş yapın",
        passwordsNoMatch: "Şifreler eşleşmiyor",
        invalidCredentials: "Geçersiz kullanıcı adı veya şifre",
        usernameExists: "Kullanıcı adı zaten mevcut",
        requireClassCode: "Geçerli bir sınıf kodu giriniz",
        demoCredentialsTitle: "Demo Giriş Bilgileri:",
        studentsDemo: "Öğrenciler: Ayşe Öğrenci/password123, Mehmet Öğrenci/password123",
        teachersDemo: "Öğretmenler: Ahmet Öğretmen/password123, Fatma Hoca/password123"
      },

      contact: {
        header: "Bizimle İletişime Geçin",
        thankYou: "Mesajınız için teşekkürler!",
        placeholderName: "Adınız",
        placeholderEmail: "E-posta Adresiniz",
        placeholderMessage: "Mesajınız",
        submit: "Mesaj Gönder"
      },

      chat: {
        title: "AI Yardımcı",
        toggleAria: "AI Yardımcı",
        placeholder: "Soru sor veya öneri iste...",
        send: "Gönder",
        busy: "Bekleyin…",
        greeting: "Merhaba! Ben NeuroVerse AI Yardımcı. Bugün neye odaklanmak istersin?"
      },

      home: {
        heroTitle: "AI Destekli Akıllı Öğrenme",
        heroSubtitle: "EEG tabanlı dikkat takibi ve uyarlanabilir içerikle her öğrenciye özel, etkileyici bir öğrenme deneyimi.",
        ctaStart: "Hemen Başla",
        ctaHow: "Nasıl Çalışır?",
        heroImgAlt: "EEG başlıklı bir öğrenci",
        heroBadge: "Gerçek zamanlı dikkat verisiyle içerik dinamik olarak uyarlanır.",

        studentTitle: "Öğrenciler için: Anında geri bildirim",
        studentBody1: "Dikkat seviyeniz düştüğünde sistem otomatik olarak içerik türünü değiştirir: metinden videoya geçer,",
        studentBody2: "kısa bir quiz önerir veya konuyu sadeleştirir. Böylece öğrenme ritminiz korunur.",
        studentBullet1: "Kişiselleştirilmiş modül akışı",
        studentBullet2: "EEG ile dikkat takibi",
        studentBullet3: "Anında içerik önerileri",
        studentImageAlt: "Ders içeriği ile etkileşimde bulunan öğrenci",
        studentImageBadge: "Adaptif Öğrenme",

        teacherTitle: "Öğretmenler için: Sınıf analitiği",
        teacherBody1: "Öğrencilerin dikkat ve ilerleme verilerini tek ekranda görün. Zorlanan öğrencilere özel içerik atayın,",
        teacherBody2: "sınıf genelinde materyal dengesini ayarlayın ve etkili müdahalelerde bulunun.",
        teacherImageAlt: "Bilgisayarda sınıf ilerlemesini izleyen öğretmen",
        teacherImageBadge: "Gerçek Zamanlı Paneller",

        welcomeQuestion: "Bugün öğrenmeye nereden devam etmek istersin?",
        quickLessonsTitle: "Ders Kütüphanesi",
        quickLessonsDesc: "Yeni ders keşfet ve başla.",
        quickMyLessonsTitle: "Derslerim",
        quickMyLessonsDesc: "Devam ettiğin modüllere dön.",
        quickRecentTitle: "Son Etkinlik",
        quickRecentDesc: "Kaldığın yerden devam et.",
        quickSupportTitle: "Destek",
        quickSupportDesc: "Yardım mı gerekli? İletişime geç.",

        activityTitle: "Haftalık Aktivite",
        activitySubtitle: "Özet veriler örnektir.",
        activityTime: "Çalışma Süresi",
        activityCompleted: "Tamamlanan Modül",
        activityQuiz: "Quiz Başarısı",
        activityImageAlt: "Çalışırken öğrenci",

        aiRecsTitle: "AI Önerileri",
        aiLabel: "AI",
        aiCtaGo: "Git"
      },

      lessonsContent: {
        python: {
          title: "Python Temelleri",
          summary: "Python programlamanın temellerini öğrenin ve ilk uygulamalarınızı geliştirin.",
          meta: {
            duration: "6-8 saat",
            difficulty: "Başlangıç"
          },
          whatYouWillLearn: [
            "Python sözdizimi ve değişkenler",
            "Veri tipleri ve koleksiyonlar",
            "Döngüler ve koşullar",
            "Fonksiyonlar",
            "Basit projeler"
          ],
          syllabus: {
            modules: [
              { title: "Değişkenler ve Veri Tipleri" },
              { title: "Döngüler" },
              { title: "Koşullu İfadeler" },
              { title: "Fonksiyonlar" },
              { title: "Listeler" },
              { title: "String'ler" },
              { title: "Sözlükler" },
              { title: "Demetler (Tuples)" },
              { title: "Kümeler (Sets)" },
              { title: "Dosya İşleme" },
              { title: "Hatalar/İstisnalar" },
              { title: "Python Quiz" }
            ]
          },
          modules: {
            variables: { 
              title: "Değişkenler ve Veri Tipleri", 
              text: [
                "Python'da değişkenler bellek üzerinde bir değere isim vermemizi sağlar. Bir değişken oluşturduğunuzda sağ taraftaki değerin türüne göre otomatik olarak tip atanır.",
                "Temel veri tipleri: int (tam sayı), float (ondalıklı sayı), str (metin), bool (True/False). Python dinamik tiplidir, yani değişkenin tipini önceden belirtmeniz gerekmez.",
                "İyi isimlendirme önemlidir. Örneğin toplam_puan yerine tp yazmak kodu okunaksız yapar. Anlamlı, okunaklı ve küçük harfli isimler tercih edilir.",
                "```python\ntoplam_puan = 42\noyuncu_adi = 'Ada'\nprint(f'{oyuncu_adi}: {toplam_puan}')\n```",
                "Tip dönüştürme:",
                "```python\nint('3')\nfloat('3.14')\nstr(42)\n```",
                "Dönüştürme sırasında ValueError oluşabileceğini unutmayın.",
                "Çoklu atama ve takas: `x, y = 1, 2`; `x, y = y, x`."
              ],
              quiz: {
                title: "Sınav",
                questions: [
                  { q: "Hangisi bir integer'dır?", a: ["'10'", "10", "10.0"], correct: 1 },
                  { q: "Boolean değerler nelerdir?", a: ["True/False", "0/1", "Yes/No"], correct: 0 }
                ]
              },
              video: { 
                title: "Değişkenlere Giriş", 
                description: "Python değişkenleri ve veri tiplerine hızlı giriş",
                url: "https://youtu.be/sJkyGixATl0?si=sAJye_kpC2Nrf5Nr"
              }
            },
            loops: { 
              title: "Döngüler", 
              text: [
                "Döngüler, aynı işlemleri bir liste, dizi ya da sayı aralığı üzerinde tekrarlamak için kullanılır. Python'da en yaygın iki döngü: for ve while.",
                "for döngüsü bir koleksiyonun elemanlarını sırayla gezer. while döngüsü ise koşul True olduğu sürece çalışır. Sonsuz döngülerden kaçınmak için koşulun değiştiğinden emin olun.",
                "range(start, stop, step) fonksiyonu belirli bir aralıkta sayılar üretir ve for ile sıklıkla kullanılır.",
                "```python\nfor i in range(1, 4):\n    print(i)\n```",
                "Erken çıkış için `break`, bir sonraki adıma atlamak için `continue` kullanılır.",
                "Indis ile gezinmek için `enumerate(dizi)`; sözlüklerde anahtar/değer için `dict.items()` kullanılabilir.",
                "Liste üreteçleri: `[x*x for x in range(5) if x%2==0]`."
              ],
              quiz: {
                title: "Sınav",
                questions: [
                  { q: "for döngüsü hangi yapıyı gezer?", a: ["Sadece listeler", "Yinelenebilir her şey", "Sadece sayılar"], correct: 1 }
                ]
              },
              video: { 
                title: "Döngüler", 
                description: "for ve while döngülerine kısa bakış",
                url: "https://youtu.be/wZZ34Uk1C2U?si=X3NeB-vfHFYg3nnz"
              }
            },
            conditionals: { 
              title: "Koşullu İfadeler", 
              text: [
                "Koşullar, belirli bir şarta göre farklı kod bloklarının çalıştırılmasını sağlar. if ile başlar, ek durumlar için elif, aksi durum için else kullanılır.",
                "Karşılaştırma operatörleri (`==`, `!=`, `<`, `>`, `<=`, `>=`) ve mantıksal operatörler (`and`, `or`, `not`) sıkça kullanılır.",
                "İç içe koşullar yerine koşulları net ve kısa olacak şekilde düzenlemek, okunabilirliği artırır.",
                "Doğruluk/Yanlışlık: boş koleksiyonlar ve 0 False; dolu değerler True sayılır.",
                "Üçlü ifade: `deger_if_true if kosul else deger_if_false`.",
                "Üyelik kontrolleri: `if 'py' in 'python': ...`; `if key in my_dict: ...`",
                "```python\nx = 10\nif x > 10:\n    print('büyük')\nelif x == 10:\n    print('eşit')\nelse:\n    print('küçük')\n```"
              ],
              quiz: {
                title: "Sınav",
                questions: [
                  { q: "elif hangi durumda kullanılır?", a: ["Ek koşul", "Döngü bitirme", "Fonksiyon tanımı"], correct: 0 }
                ]
              },
              video: { 
                title: "Koşullar", 
                description: "if/elif/else ile karar yapıları",
                url: "https://youtu.be/ucrjAonOUAI?si=Pv3Uha3ov2YdozJV"
              }
            },
            functions: { 
              title: "Fonksiyonlar", 
              text: [
                "Fonksiyonlar, bir işi kapsülleyerek tekrar kullanmamızı sağlar. def anahtar kelimesi ile tanımlanır ve gerekirse parametre alır.",
                "Fonksiyon gövdesi içindeki return ifadesi bir değer döndürür. Return yazılmazsa Python None döndürür.",
                "Parametre varsayılan değer alabilir (ör: `def selam(isim='Dünya')`). Bu sayede opsiyonel davranışlar tanımlanabilir.",
                "Docstring ile fonksiyonun ne yaptığını kısaca açıklayın: `def topla(a, b): \"\"\"Toplamı döndür.\"\"\"`.",
                "`*args` ve `**kwargs` değişken sayıda argümanı yakalamak için kullanılır.",
                "```python\ndef selam(isim: str, vurgu: bool = False) -> str:\n    m = f'Merhaba {isim}'\n    return m + '!' if vurgu else m\n```"
              ],
              quiz: {
                title: "Sınav",
                questions: [
                  { q: "Fonksiyon nasıl tanımlanır?", a: ["func", "def", "function"], correct: 1 }
                ]
              },
              video: { 
                title: "Fonksiyonlar", 
                description: "Parametreler ve dönüş değerleri",
                url: "https://youtu.be/McUxTvOyZ1w?si=wGUbbDu9mHiPe0Xr"
              }
            },
            lists: { 
              title: "Listeler", 
              text: [
                "Listeler, sıralı ve değiştirebilir veri yapılarıdır. Köşeli parantez ile tanımlanır ve heterojen tipleri içerebilir.",
                "Temel işlemler: ekleme (`append`, `insert`), çıkarma (`remove`, `pop`), dilimleme (`list[start:stop:step]`) ve sıralama (`sort`).",
                "Liste üreteçleri (list comprehensions) hızlı ve okunabilir dönüşümler sağlar: `[x*x for x in range(5)]`.",
                "Sıralama: `my_list.sort()` (yerinde) vs `sorted(my_list)` (yeni liste).",
                "Kopya oluşturma: `my_list.copy()` veya `list(my_list)`; `a = b` aynı listeyi paylaşır.",
                "```python\nnums = [3, 1, 2]\nnums.append(5)\nprint(sorted(nums))  # [1, 2, 3, 5]\n```"
              ],
              quiz: {
                title: "Sınav",
                questions: [
                  { q: "Listenin ilk elemanına nasıl erişilir?", a: ["list[0]", "list(1)", "list.first"], correct: 0 }
                ]
              },
              video: { 
                title: "Listeler", 
                description: "Listelerle çalışma ve dilimleme",
                url: "https://youtu.be/OlSyO4O-GM8?si=Yp0bF0E91xgJHN7u"
              }
            },
            strings: {
              title: "String'ler",
              text: [
                "String'ler Unicode karakter dizileridir. Tek veya çift tırnakla oluşturulur: `'merhaba'` veya `\"merhaba\"`.",
                "Yaygın metodlar: `lower()`, `upper()`, `strip()`, `replace()`, `split()`, `join()`.",
                "Dilimleme: `s[0]`, `s[-1]`, `s[1:4]`.",
                "f-string ile biçimlendirme: `f\"{isim} puan: {puan}\"`.",
                "Kaçış dizileri: `\\n` (yeni satır), `\\t` (sekme); ham string için `r'\\yol'`.",
                "```python\nisim = 'Ada'\npuan = 42\nprint(f'{isim} puan: {puan}')\n```"
              ],
              video: { 
                title: "String'ler", 
                description: "String metodları ve işlemleri",
                url: "https://youtu.be/dpyWdDf0Js4?si=IGN1OoHMdCCSGcJC"
              }
            },
            dictionaries: {
              title: "Sözlükler",
              text: [
                "Sözlükler anahtar-değer eşlemesi tutar: `kullanici = {'isim': 'Ada', 'yas': 36}`.",
                "Erişim/güncelleme: `kullanici['isim']`, `kullanici.get('rol', 'ogrenci')`, `kullanici['yas'] = 37`.",
                "Döngü: `items()`, `keys()`, `values()` ile gezinilebilir.",
                "Faydalı metodlar: `update()`, `pop()`, `setdefault()`, sözlük üreteçleri `{k: v for ...}`.",
                "Anahtarlar hashlenebilir (değişmez) tipler olmalıdır: `str`, `int` veya değişmez tuple.",
                "```python\nk = {'isim': 'Ada'}\nk.setdefault('rol', 'ogrenci')\nfor anahtar, deger in k.items():\n    print(anahtar, deger)\n```"
              ],
              video: { 
                title: "Sözlükler", 
                description: "Anahtar-değer eşlemesi ve sözlük metodları",
                url: "https://youtu.be/QTMMimIXwtQ?si=ny8UH5S8bf0tJLZA"
              }
            },
            tuples: {
              title: "Tuples",
              text: [
                "Tuples sıralı ve değişmez dizilerdir: `(1, 2, 3)`.",
                "Çoklu dönüş değeri ve sabit kayıtlar için idealdir.",
                "Açma (unpacking): `x, y = (10, 20)`.",
                "```python\npt = (10, 20)\nx, y = pt\nprint(x, y)\n```"
              ],
              video: { 
                title: "Tuples", 
                description: "Tuples ve unpacking işlemleri",
                url: "https://youtu.be/riUlmur7zII?si=AWt_zmmFDngD7fj2"
              }
            },
            sets: {
              title: "Kümeler (Sets)",
              text: [
                "Kümeler tekrarsız öğelerden oluşur: `{1, 2, 3}`.",
                "Birleşim/kesişim/fark gibi işlemler desteklenir.",
                "```python\na = {1, 2, 3}\nb = {3, 4}\nprint(a | b, a & b, a - b)\n```"
              ],
              video: { 
                title: "Kümeler", 
                description: "Sets ve küme işlemleri",
                url: "https://youtu.be/OlSyO4O-GM8?si=J0bPeF595e1uSefu"
              }
            },
            files: {
              title: "Dosya İşleme",
              text: [
                "Dosyalar `open(yol, mod)` ile açılır. Kapatmayı unutmayın veya context manager kullanın.",
                "Yaygın modlar: `\"r\"` (okuma), `\"w\"` (yazma/sıfırlama), `\"a\"` (ekleme), `\"rb\"` (ikili).",
                "```python\nfrom pathlib import Path\np = Path('notlar.txt')\nwith p.open('w', encoding='utf-8') as f:\n    f.write('Merhaba\\n')\n```"
              ],
              video: { 
                title: "Dosya İşleme", 
                description: "Dosya okuma/yazma ve pathlib kullanımı",
                url: "https://youtu.be/5aaPdOIZKIA?si=5iEfCKB0-d8fUI8b"
              }
            },
            exceptions: {
              title: "Hatalar/İstisnalar",
              text: [
                "Hataları try/except ile yakalayın; gerekirse finally ile temizliği yapın.",
                "Özel hata fırlatma: `raise ValueError('mesaj')`.",
                "```python\ntry:\n    n = int('sayi-degil')\nexcept ValueError as e:\n    print('Donusum basarisiz:', e)\n```"
              ],
              video: { 
                title: "Hata Yönetimi", 
                description: "try/except/finally ile hata yakalama",
                url: ""
              }
            },
            quiz: {
              title: "Final Sınavı",
              questions: [
                { q: "Aşağıdakilerden hangisi string tipindedir?", a: ["42", "\"Merhaba\"", "True"], correct: 1 },
                { q: "for i in range(3): print(i) çıktısı nedir?", a: ["1 2 3", "0 1 2", "0 1 2 3"], correct: 1 }
              ]
            },
            video: { 
              title: "Python Video", 
              description: "Python eğitim videosu (yer tutucu)",
              url: "https://www.youtube.com/watch?v=example12"
            }
          }
        },
        web: {
          title: "HTML & CSS ile Web Geliştirme",
          summary: "HTML ve CSS ile web geliştirmenin temellerini öğrenin. HTML yapısından CSS stillerine, responsive tasarımdan erişilebilirliğe kadar kapsamlı bir öğrenme yolculuğu.",
          meta: {
            duration: "8-10 saat",
            difficulty: "Başlangıç"
          },
          whatYouWillLearn: [
            "HTML temelleri ve yapısı",
            "HTML elementleri ve formlar",
            "CSS temelleri ve seçiciler",
            "CSS layout ve positioning",
            "CSS Grid ve Flexbox",
            "CSS animasyonları ve efektler",
            "Responsive web tasarım",
            "Web erişilebilirliği",
            "Modern web standartları",
            "Profesyonel web projeleri oluşturma"
          ],
          syllabus: {
            modules: [
              { title: "HTML Temelleri" },
              { title: "HTML Elementleri ve Yapı" },
              { title: "HTML Formları ve Input Türleri" },
              { title: "CSS Temelleri" },
              { title: "CSS Seçiciler ve Spesifiklik" },
              { title: "CSS Layout ve Positioning" },
              { title: "CSS Grid ve Flexbox" },
              { title: "CSS Animasyonları ve Efektler" },
              { title: "Responsive Web Tasarım" },
              { title: "Web Erişilebilirliği" },
              { title: "Web Quiz" }
            ]
          },
          modules: {
            html_fundamentals: { 
              title: "HTML Temelleri", 
              text: [
                "HTML (HyperText Markup Language), web sayfaları oluşturmak için kullanılan standart işaretleme dilidir. Web sayfalarının yapısını ve içeriğini sağlar.",
                "Her HTML belgesi DOCTYPE bildirimi ile başlar ve temel bir yapıya sahiptir:",
                "```<!DOCTYPE html>\n<html>\n<head>\n    <title>Sayfa Başlığı</title>\n</head>\n<body>\n    <h1>Bu bir başlık</h1>\n    <p>Bu bir paragraf.</p>\n</body>\n</html>```",
                "Temel HTML kavramları:",
                "• Elementler: HTML'in yapı taşları (örn. <p>, <h1>, <div>)",
                "• Etiketler: Elementleri tanımlayan işaretleme (<p>içerik</p>)",
                "• Özellikler: Elementler hakkında ek bilgi (class, id, src)",
                "• İç içe geçme: Elementler diğer elementleri içerebilir",
                "• Kendini kapatan etiketler: Kapanış etiketi gerektirmeyen elementler (<img>, <br>)",
                "",
                "HTML5, daha iyi yapı için semantik elementler getirdi:",
                "• <header> - Tanıtım içeriği",
                "• <nav> - Navigasyon linkleri",
                "• <main> - Ana içerik",
                "• <section> - Tematik gruplama",
                "• <article> - Bağımsız içerik",
                "• <aside> - Yan içerik",
                "• <footer> - Alt bilgi içeriği"
              ],
              quiz: { 
                title: "HTML Temelleri Quiz", 
                questions: [ 
                  { q: "HTML ne anlama gelir?", a: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language"], correct: 0 },
                  { q: "Ana başlık için hangi etiket kullanılır?", a: ["<h1>", "<head>", "<header>"], correct: 0 },
                  { q: "DOCTYPE bildiriminin amacı nedir?", a: ["Sayfa başlığını tanımlar", "HTML sürümünü belirtir", "CSS stilleri ekler"], correct: 1 },
                  { q: "Hangisi kendini kapatan etikettir?", a: ["<p>", "<img>", "<div>"], correct: 1 }
                ] 
              },
              video: { title: "HTML Temelleri", description: "HTML yapısı ve temel elementlere giriş" }
            },
            html_elements: { 
              title: "HTML Elementleri ve Yapı", 
              text: [
                "HTML elementleri web sayfalarının yapı taşlarıdır. Her elementin belirli bir amacı ve yapısı vardır.",
                "Metin Elementleri:",
                "```<h1>Ana Başlık</h1>\n<h2>Alt Başlık</h2>\n<h3>Bölüm Başlığı</h3>\n<p>Bu <strong>kalın</strong> ve <em>italik</em> metin içeren bir paragraftır.</p>\n<blockquote>Bu bir alıntıdır</blockquote>```",
                "Listeler:",
                "```<!-- Sırasız liste -->\n<ul>\n    <li>İlk öğe</li>\n    <li>İkinci öğe</li>\n    <li>Üçüncü öğe</li>\n</ul>\n\n<!-- Sıralı liste -->\n<ol>\n    <li>İlk adım</li>\n    <li>İkinci adım</li>\n    <li>Üçüncü adım</li>\n</ol>```",
                "Linkler ve Görseller:",
                "```<!-- Linkler -->\n<a href=\"https://www.example.com\">Örnek Siteyi Ziyaret Et</a>\n<a href=\"#section1\">Bölüm 1'e Git</a>\n<a href=\"mailto:contact@example.com\">E-posta Gönder</a>\n\n<!-- Görseller -->\n<img src=\"resim.jpg\" alt=\"Açıklama\" width=\"300\" height=\"200\">\n<img src=\"foto.png\" alt=\"Profil resmi\" class=\"profile-img\">```",
                "Tablolar:",
                "```<table>\n    <thead>\n        <tr>\n            <th>İsim</th>\n            <th>Yaş</th>\n            <th>Şehir</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Ahmet</td>\n            <td>25</td>\n            <td>İstanbul</td>\n        </tr>\n    </tbody>\n</table>```",
                "HTML Özellikleri:",
                "• class - CSS sınıf adı",
                "• id - Benzersiz tanımlayıcı",
                "• src - Görseller/scriptler için kaynak URL",
                "• href - Link hedefi",
                "• alt - Görseller için alternatif metin",
                "• title - Araç ipucu metni",
                "• data-* - Özel veri özellikleri"
              ],
              quiz: { 
                title: "HTML Elementleri Quiz", 
                questions: [ 
                  { q: "Hangi etiket en büyük başlığı oluşturur?", a: ["<h6>", "<h1>", "<head>"], correct: 1 },
                  { q: "'alt' özelliği ne işe yarar?", a: ["Hizalama ekler", "Alternatif metin sağlar", "Animasyon oluşturur"], correct: 1 },
                  { q: "Sırasız listeler için hangi etiket kullanılır?", a: ["<ol>", "<ul>", "<li>"], correct: 1 },
                  { q: "<div> etiketinin amacı nedir?", a: ["Link oluşturur", "Elementleri gruplar", "Görsel ekler"], correct: 1 }
                ] 
              },
              video: { title: "HTML Elementleri", description: "HTML elementleri, özellikler ve yapıyı anlama" }
            },
            html_forms: { 
              title: "HTML Formları ve Input Türleri", 
              text: [
                "Formlar kullanıcıların veri girişi yapmasına ve göndermesine olanak tanır. Etkileşimli web uygulamaları için gereklidir.",
                "Temel Form Yapısı:",
                "```<form action=\"/submit\" method=\"POST\">\n    <label for=\"name\">İsim:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required>\n    \n    <label for=\"email\">E-posta:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n    \n    <button type=\"submit\">Gönder</button>\n</form>```",
                "Input Türleri:",
                "```<!-- Metin girişi -->\n<input type=\"text\" name=\"username\" placeholder=\"Kullanıcı adı girin\">\n\n<!-- E-posta girişi -->\n<input type=\"email\" name=\"email\" required>\n\n<!-- Şifre girişi -->\n<input type=\"password\" name=\"password\">\n\n<!-- Sayı girişi -->\n<input type=\"number\" name=\"age\" min=\"1\" max=\"100\">\n\n<!-- Tarih girişi -->\n<input type=\"date\" name=\"birthday\">\n\n<!-- Onay kutusu -->\n<input type=\"checkbox\" id=\"newsletter\" name=\"newsletter\">\n<label for=\"newsletter\">Bülteni abone ol</label>\n\n<!-- Radyo düğmeleri -->\n<input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\">\n<label for=\"male\">Erkek</label>\n<input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\">\n<label for=\"female\">Kadın</label>```",
                "Select ve Textarea:",
                "```<!-- Açılır menü -->\n<select name=\"country\">\n    <option value=\"tr\">Türkiye</option>\n    <option value=\"us\">Amerika Birleşik Devletleri</option>\n    <option value=\"uk\">Birleşik Krallık</option>\n</select>\n\n<!-- Uzun metin için textarea -->\n<textarea name=\"message\" rows=\"4\" cols=\"50\" placeholder=\"Mesajınızı girin\"></textarea>```",
                "Form Doğrulama:",
                "```<form>\n    <input type=\"text\" required placeholder=\"Zorunlu alan\">\n    <input type=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\">\n    <input type=\"number\" min=\"18\" max=\"65\" required>\n    <input type=\"url\" placeholder=\"Web sitesi URL'si\">\n    <input type=\"tel\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" placeholder=\"123-456-7890\">\n</form>```"
              ],
              quiz: { 
                title: "HTML Formları Quiz", 
                questions: [ 
                  { q: "Şifreler için hangi input türü kullanılır?", a: ["text", "password", "hidden"], correct: 1 },
                  { q: "'required' özelliği ne yapar?", a: ["Alanı isteğe bağlı yapar", "Alanı zorunlu yapar", "Stil ekler"], correct: 1 },
                  { q: "Açılır menü oluşturan etiket hangisidir?", a: ["<input>", "<select>", "<option>"], correct: 1 },
                  { q: "'label' etiketinin amacı nedir?", a: ["Stil ekler", "Metni input ile ilişkilendirir", "Kenarlık oluşturur"], correct: 1 }
                ] 
              },
              video: { title: "HTML Formları", description: "Çeşitli input türleri ile etkileşimli formlar oluşturma" }
            },
            css_fundamentals: { 
              title: "CSS Temelleri", 
              text: [
                "CSS (Cascading Style Sheets), HTML elementlerinin görsel görünümünü kontrol eder. İçeriği sunumdan ayırır.",
                "CSS Sözdizimi:",
                "```css\nseçici {\n    özellik: değer;\n    özellik: değer;\n}\n\n/* Örnek */\nh1 {\n    color: blue;\n    font-size: 24px;\n    text-align: center;\n}```",
                "CSS Eklemenin Üç Yolu:",
                "```<!-- 1. Satır içi CSS -->\n<h1 style=\"color: red; font-size: 30px;\">Merhaba Dünya</h1>\n\n<!-- 2. Dahili CSS -->\n<head>\n    <style>\n        h1 { color: blue; }\n        p { font-size: 16px; }\n    </style>\n</head>\n\n<!-- 3. Harici CSS -->\n<head>\n    <link rel=\"stylesheet\" href=\"styles.css\">\n</head>```",
                "Temel Özellikler:",
                "```css\n/* Metin özellikleri */\np {\n    color: #333333;\n    font-family: Arial, sans-serif;\n    font-size: 16px;\n    font-weight: normal;\n    text-align: left;\n    line-height: 1.5;\n    text-decoration: none;\n}\n\n/* Arka plan özellikleri */\nbody {\n    background-color: #f0f0f0;\n    background-image: url('resim.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n/* Kutu modeli özellikleri */\n.box {\n    width: 300px;\n    height: 200px;\n    margin: 20px;\n    padding: 15px;\n    border: 2px solid #000;\n}```"
              ],
              quiz: { 
                title: "CSS Temelleri Quiz", 
                questions: [ 
                  { q: "CSS ne anlama gelir?", a: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"], correct: 0 },
                  { q: "Metin rengini değiştiren özellik hangisidir?", a: ["font-color", "color", "text-color"], correct: 1 },
                  { q: "Doğru CSS sözdizimi hangisidir?", a: ["seçici: özellik { değer; }", "seçici { özellik: değer; }", "özellik: değer { seçici; }"], correct: 1 },
                  { q: "Font boyutuna göre olan birim hangisidir?", a: ["px", "em", "pt"], correct: 1 }
                ] 
              },
              video: { title: "CSS Temelleri", description: "CSS sözdizimi ve temel stillendirmeye giriş" }
            },
            css_selectors: { 
              title: "CSS Seçiciler ve Spesifiklik", 
              text: [
                "CSS seçicileri, stillendirme için HTML elementlerini hedefler. Etkili CSS için seçicileri anlamak çok önemlidir.",
                "Temel Seçiciler:",
                "```css\n/* Element seçici */\np { color: blue; }\n\n/* Sınıf seçici */\n.highlight { background-color: yellow; }\n\n/* ID seçici */\n#header { font-size: 24px; }\n\n/* Evrensel seçici */\n* { margin: 0; padding: 0; }```",
                "Özellik Seçicileri:",
                "```css\n/* Özellik var */\n[title] { border: 1px solid red; }\n\n/* Özellik değere eşit */\n[type=\"text\"] { background-color: #f0f0f0; }\n\n/* Özellik değer içeriyor */\n[class*=\"btn\"] { padding: 10px; }```"
              ],
              quiz: { 
                title: "CSS Seçiciler Quiz", 
                questions: [ 
                  { q: "Hangi seçici en yüksek spesifikliğe sahiptir?", a: ["class", "id", "element"], correct: 1 },
                  { q: "'>' kombinatörü neyi seçer?", a: ["Torunlar", "Doğrudan çocuklar", "Kardeşler"], correct: 1 },
                  { q: "Hangi sözde sınıf hover durumunu hedefler?", a: [":focus", ":hover", ":active"], correct: 1 },
                  { q: "[class*=\"btn\"] neyi seçer?", a: ["class=\"btn\" olan elementler", "class'ında \"btn\" içeren elementler", "class'ı \"btn\" ile başlayan elementler"], correct: 1 }
                ] 
              },
              video: { title: "CSS Seçiciler", description: "CSS seçicileri ve spesifiklik kurallarında uzmanlaşma" }
            },
            css_layout: { 
              title: "CSS Layout ve Positioning", 
              text: [
                "CSS, web sayfasındaki elementlerin düzenini ve konumlandırmasını kontrol etmek için güçlü araçlar sağlar.",
                "Display Özelliği:",
                "```css\n/* Blok elementler */\ndiv { display: block; }\n\n/* Satır içi elementler */\nspan { display: inline; }\n\n/* Flexbox konteyner */\n.container { display: flex; }\n\n/* Grid konteyner */\n.grid { display: grid; }```",
                "Position Özelliği:",
                "```css\n/* Relative konumlandırma */\n.relative {\n    position: relative;\n    top: 10px;\n    left: 20px;\n}\n\n/* Absolute konumlandırma */\n.absolute {\n    position: absolute;\n    top: 50px;\n    right: 10px;\n}\n\n/* Fixed konumlandırma */\n.fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n}```"
              ],
            quiz: {
                title: "CSS Layout Quiz", 
              questions: [
                  { q: "Hangi position değeri elementi normal akıştan çıkarır?", a: ["relative", "absolute", "static"], correct: 1 },
                  { q: "'box-sizing: border-box' ne yapar?", a: ["Kenarlık ekler", "Padding'i genişliğe dahil eder", "Margin'i kaldırır"], correct: 1 },
                  { q: "Hangi display değeri flexbox konteyner oluşturur?", a: ["block", "flex", "grid"], correct: 1 },
                  { q: "Hangi özellik yığın sırasını kontrol eder?", a: ["stack", "z-index", "order"], correct: 1 }
                ] 
              },
              video: { title: "CSS Layout", description: "CSS konumlandırma ve düzen tekniklerini anlama" }
            },
            css_grid_flexbox: { 
              title: "CSS Grid ve Flexbox", 
              text: [
                "CSS Grid ve Flexbox, karmaşık, responsive düzenler oluşturmak için güçlü araçlar sağlayan modern düzen sistemleridir.",
                "Flexbox (Tek boyutlu düzenler):",
                "```css\n.flex-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}```",
                "CSS Grid (İki boyutlu düzenler):",
                "```css\n.grid-container {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: auto 1fr auto;\n    gap: 20px;\n}```"
              ],
              quiz: { 
                title: "CSS Grid ve Flexbox Quiz", 
                questions: [ 
                  { q: "Hangi düzen sistemi tek boyutludur?", a: ["Grid", "Flexbox", "Her ikisi"], correct: 1 },
                  { q: "Grid'de 'fr' birimi neyi temsil eder?", a: ["Sabit piksel", "Mevcut alanın kesri", "Font boyutu"], correct: 1 },
                  { q: "Flexbox'ta ana eksen hizalamasını hangi özellik kontrol eder?", a: ["align-items", "justify-content", "flex-direction"], correct: 1 },
                  { q: "Grid'de 'auto-fit' ne yapar?", a: ["İçeriği sığdırır", "Sığan kadar sütun oluşturur", "Sütunları eşit genişlik yapar"], correct: 1 }
                ] 
              },
              video: { title: "CSS Grid ve Flexbox", description: "Responsive tasarım için modern CSS düzen sistemleri" }
            },
            css_animations: { 
              title: "CSS Animasyonları ve Efektler", 
              text: [
                "CSS animasyonları ve efektler, web sitelerini yumuşak geçişler, dönüşümler ve keyframe animasyonları ile hayata geçirir.",
                "Geçişler:",
                "```css\n.button {\n    background-color: blue;\n    transition: background-color 0.3s ease;\n}\n\n.button:hover {\n    background-color: red;\n}```",
                "Dönüşümler:",
                "```css\n.rotate { transform: rotate(45deg); }\n.scale { transform: scale(1.5); }\n.translate { transform: translate(50px, 20px); }```",
                "Keyframe Animasyonları:",
                "```css\n@keyframes slideIn {\n    0% { transform: translateX(-100%); opacity: 0; }\n    100% { transform: translateX(0); opacity: 1; }\n}\n\n.slide-in { animation: slideIn 1s ease-out; }```"
              ],
              quiz: { 
                title: "CSS Animasyonları Quiz", 
                questions: [ 
                  { q: "Hangi özellik yumuşak geçişler oluşturur?", a: ["animation", "transition", "transform"], correct: 1 },
                  { q: "'ease-in-out' zamanlama fonksiyonu ne yapar?", a: ["Yavaş başlar, hızlı biter", "Hızlı başlar, yavaş biter", "Yavaş başlar, hızlanır, sonra yavaşlar"], correct: 2 },
                  { q: "Hangi dönüşüm elementi hareket ettirir?", a: ["rotate()", "translate()", "scale()"], correct: 1 },
                  { q: "'animation-iteration-count: infinite' ne yapar?", a: ["Bir kez oynatır", "Sürekli oynatır", "İki kez oynatır"], correct: 1 }
                ] 
              },
              video: { title: "CSS Animasyonları", description: "CSS ile etkileyici animasyonlar ve efektler oluşturma" }
            },
            responsive_design: { 
              title: "Responsive Web Tasarım", 
              text: [
                "Responsive web tasarım, web sitelerinin tüm cihazlarda ve ekran boyutlarında iyi çalışmasını sağlar.",
                "Viewport Meta Etiketi:",
                "```<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">```",
                "Medya Sorguları:",
                "```css\n.container { width: 100%; padding: 10px; }\n\n@media (min-width: 768px) {\n    .container { width: 750px; margin: 0 auto; }\n}```",
                "Esnek Görseller:",
                "```css\nimg {\n    max-width: 100%;\n    height: auto;\n}```"
              ],
              quiz: { 
                title: "Responsive Tasarım Quiz", 
                questions: [ 
                  { q: "Mobil öncelikli yaklaşım nedir?", a: ["Masaüstü için önce tasarla", "Mobil için önce tasarla", "Tablet için önce tasarla"], correct: 1 },
                  { q: "Hangi CSS fonksiyonu akışkan tipografi oluşturur?", a: ["fluid()", "clamp()", "responsive()"], correct: 1 },
                  { q: "CSS Grid'de 'auto-fit' ne yapar?", a: ["İçeriği konteynere sığdırır", "Sığan kadar sütun oluşturur", "Tüm sütunları eşit genişlik yapar"], correct: 1 },
                  { q: "Önerilen minimum dokunma hedefi boyutu nedir?", a: ["24px", "32px", "44px"], correct: 2 }
                ] 
              },
              video: { title: "Responsive Tasarım", description: "Mobil öncelikli responsive web siteleri oluşturma" }
            },
            web_accessibility: { 
              title: "Web Erişilebilirliği", 
              text: [
                "Web erişilebilirliği, web sitelerinin engelli kişiler tarafından kullanılabilir olmasını sağlar.",
                "Semantik HTML:",
                "```html\n<header>\n    <nav aria-label=\"Ana navigasyon\">\n        <ul>\n            <li><a href=\"#home\">Ana Sayfa</a></li>\n        </ul>\n    </nav>\n</header>\n<main>\n    <article>\n        <h1>Makale Başlığı</h1>\n        <p>Makale içeriği...</p>\n    </article>\n</main>```",
                "ARIA:",
                "```html\n<button aria-label=\"Dialogu kapat\">×</button>\n<input type=\"text\" aria-describedby=\"email-help\" id=\"email\">\n<div id=\"email-help\">E-posta adresinizi girin</div>```"
              ],
              quiz: { 
                title: "Web Erişilebilirliği Quiz", 
                questions: [ 
                  { q: "ARIA ne anlama gelir?", a: ["Accessible Rich Internet Applications", "Advanced Responsive Interface Access", "Automated Reading Interface Assistant"], correct: 0 },
                  { q: "Görseller için alternatif metin sağlayan özellik hangisidir?", a: ["title", "alt", "src"], correct: 1 },
                  { q: "Önerilen minimum renk kontrast oranı nedir?", a: ["3:1", "4.5:1", "7:1"], correct: 1 },
                  { q: "Ana sayfa içeriği için hangi element kullanılmalıdır?", a: ["<div>", "<main>", "<section>"], correct: 1 }
                ] 
              },
              video: { title: "Web Erişilebilirliği", description: "Web sitelerini tüm kullanıcılar için erişilebilir yapma" }
            },
            quiz: {
              title: "Web Geliştirme Quiz",
              questions: [
                { q: "Hangi HTML etiketi en büyük başlığı oluşturur?", a: ["<h6>", "<h1>", "<head>"], correct: 1 },
                { q: "CSS ne anlama gelir?", a: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"], correct: 0 },
                { q: "Hangi CSS özelliği metin rengini değiştirir?", a: ["font-color", "color", "text-color"], correct: 1 },
                { q: "Mobil öncelikli yaklaşım nedir?", a: ["Masaüstü için önce tasarla", "Mobil için önce tasarla", "Tablet için önce tasarla"], correct: 1 },
                { q: "Hangi düzen sistemi iki boyutludur?", a: ["Flexbox", "Grid", "Float"], correct: 1 },
                { q: "'alt' özelliği ne yapar?", a: ["Hizalama ekler", "Alternatif metin sağlar", "Animasyon oluşturur"], correct: 1 },
                { q: "Hangi CSS özelliği yumuşak geçişler oluşturur?", a: ["animation", "transition", "transform"], correct: 1 },
                { q: "Semantik HTML'in amacı nedir?", a: ["Stil ekler", "Erişilebilirliği artırır", "Animasyon oluşturur"], correct: 1 },
                { q: "Şifreler için hangi input türü kullanılır?", a: ["text", "password", "hidden"], correct: 1 },
                { q: "'box-sizing: border-box' ne yapar?", a: ["Kenarlık ekler", "Padding'i genişliğe dahil eder", "Margin'i kaldırır"], correct: 1 }
              ]
            },
            video: { title: "Web Video", description: "HTML/CSS eğitim videosu (yer tutucu)" }
          }
        },
        js: {
          title: "JavaScript Programlama Dili",
          summary: "Web'in programlama dili olan JavaScript'i sıfırdan öğrenin. Temel sözdiziminden modern ES6+ özelliklerine, DOM manipülasyonundan asenkron programlamaya kadar kapsamlı bir eğitim.",
          meta: {
            duration: "12-15 saat",
            difficulty: "Başlangıç"
          },
          whatYouWillLearn: [
            "JavaScript sözdizimi ve temel kavramlar",
            "Değişkenler, veri tipleri ve operatörler",
            "Fonksiyonlar ve kapsam (scope) kavramı",
            "Döngüler, koşullar ve kontrol yapıları",
            "Nesneler, diziler ve veri yapıları",
            "DOM manipülasyonu ve olay yönetimi",
            "Asenkron JavaScript (Promises, async/await)",
            "Modern ES6+ özellikleri",
            "Hata yönetimi ve debugging",
            "Web API'leri ve AJAX"
          ],
          syllabus: {
            modules: [
              { title: "JavaScript'e Giriş" },
              { title: "Değişkenler ve Veri Tipleri" },
              { title: "Operatörler ve İfadeler" },
              { title: "Fonksiyonlar" },
              { title: "Döngüler ve Koşullar" },
              { title: "Nesneler ve Diziler" },
              { title: "DOM Manipülasyonu" },
              { title: "Olay Yönetimi" },
              { title: "Asenkron JavaScript" },
              { title: "Modern JavaScript (ES6+)" },
              { title: "Hata Yönetimi" },
              { title: "Web API'leri ve AJAX" }
            ]
          },
          modules: {
            beginning: { 
              title: "JavaScript'e Giriş", 
              text: [
                "JavaScript, web'in programlama dilidir. HTML sayfalarına dinamik davranış kazandırır ve kullanıcı etkileşimlerini yönetir.",
                "JavaScript, web geliştirmenin 3 temel dilinden biridir:",
                "• HTML - Web sayfalarının içeriğini tanımlar",
                "• CSS - Web sayfalarının düzenini belirler", 
                "• JavaScript - Web sayfalarının davranışını programlar",
                "",
                "JavaScript'in temel özellikleri:",
                "• Tarayıcıda çalışır (client-side)",
                "• Dinamik ve etkileşimli web sayfaları oluşturur",
                "• Asenkron programlama destekler",
                "• Modern web uygulamalarının temelini oluşturur",
                "",
                "```javascript\n// İlk JavaScript kodunuz\nconsole.log('Merhaba, Dünya!');\n```"
              ],
              quiz: { 
                title: "JavaScript'e Giriş Quiz", 
                questions: [ 
                  { q: "JavaScript hangi amaçla kullanılır?", a: ["Web sayfalarının stilini belirlemek", "Web sayfalarının içeriğini tanımlamak", "Web sayfalarına dinamik davranış kazandırmak"], correct: 2 },
                  { q: "JavaScript hangi ortamda çalışır?", a: ["Sadece sunucuda", "Sadece tarayıcıda", "Hem tarayıcıda hem sunucuda"], correct: 2 },
                  { q: "Web geliştirmenin 3 temel dili hangileridir?", a: ["HTML, CSS, JavaScript", "Python, Java, C++", "PHP, MySQL, Apache"], correct: 0 }
                ] 
              },
              video: { title: "JavaScript'e Giriş", description: "JavaScript nedir, nerede çalışır ve web geliştirmedeki rolü" }
            },
            variables: { 
              title: "Değişkenler ve Veri Tipleri", 
              text: [
                "Değişkenler, veri saklamak için kullanılan isimlendirilmiş depolama alanlarıdır.",
                "",
                "JavaScript'te 3 tür değişken bildirimi vardır:",
                "• var - Eski yöntem, fonksiyon kapsamı",
                "• let - Modern yöntem, blok kapsamı",
                "• const - Sabit değerler için, blok kapsamı",
                "",
                "```javascript\n// Değişken bildirimi\nlet isim = 'Ahmet';\nconst yas = 25;\nvar eskiYontem = 'Kullanılmamalı';\n```",
                "",
                "Veri Tipleri:",
                "• String (Metin): 'Merhaba', \"Dünya\"",
                "• Number (Sayı): 42, 3.14, -10",
                "• Boolean (Mantıksal): true, false",
                "• Undefined: Tanımsız değer",
                "• Null: Boş değer",
                "• Object (Nesne): { isim: 'Ahmet' }",
                "• Array (Dizi): [1, 2, 3]",
                "",
                "```javascript\n// Farklı veri tipleri\nlet metin = 'JavaScript';\nlet sayi = 42;\nlet mantiksal = true;\nlet bos = null;\nlet tanimsiz = undefined;\n```",
                "",
                "Değişken İsimlendirme Kuralları:",
                "• Harf, rakam, _ ve $ kullanılabilir",
                "• Rakam ile başlayamaz",
                "• Rezerve kelimeler kullanılamaz",
                "• Anlamlı isimler seçin"
              ],
              quiz: { 
                title: "Değişkenler ve Veri Tipleri Quiz", 
                questions: [ 
                  { q: "Sabit bir değer için hangi anahtar kelime kullanılır?", a: ["let", "const", "var"], correct: 1 },
                  { q: "JavaScript'te hangi veri tipi yoktur?", a: ["String", "Number", "Float"], correct: 2 },
                  { q: "Değişken ismi hangi karakterle başlayamaz?", a: ["Harf", "Rakam", "Alt çizgi"], correct: 1 },
                  { q: "let ve const arasındaki temel fark nedir?", a: ["let daha hızlıdır", "const değeri değiştirilemez", "const daha az bellek kullanır"], correct: 1 }
                ] 
              },
              video: { title: "Değişkenler ve Veri Tipleri", description: "JavaScript'te değişken bildirimi ve temel veri tipleri" }
            },
            operators: { 
              title: "Operatörler ve İfadeler", 
              text: [
                "Operatörler, değerler üzerinde işlem yapmak için kullanılan sembollerdir.",
                "",
                "Aritmetik Operatörler:",
                "• + (Toplama): 5 + 3 = 8",
                "• - (Çıkarma): 10 - 4 = 6",
                "• * (Çarpma): 3 * 4 = 12",
                "• / (Bölme): 15 / 3 = 5",
                "• % (Mod): 10 % 3 = 1",
                "• ** (Üs): 2 ** 3 = 8",
                "• ++ (Artırma): x++ veya ++x",
                "• -- (Azaltma): x-- veya --x",
                "",
                "```javascript\n// Aritmetik operatörler\nlet a = 10, b = 3;\nconsole.log(a + b); // 13\nconsole.log(a - b); // 7\nconsole.log(a * b); // 30\nconsole.log(a / b); // 3.333...\nconsole.log(a % b); // 1\nconsole.log(a ** b); // 1000\n```",
                "",
                "Karşılaştırma Operatörleri:",
                "• == (Eşit): Değer karşılaştırması",
                "• === (Tam eşit): Değer ve tip karşılaştırması",
                "• != (Eşit değil)",
                "• !== (Tam eşit değil)",
                "• > (Büyük), < (Küçük)",
                "• >= (Büyük eşit), <= (Küçük eşit)",
                "",
                "```javascript\n// Karşılaştırma operatörleri\nconsole.log(5 == '5'); // true (tip dönüşümü)\nconsole.log(5 === '5'); // false (tip farklı)\nconsole.log(10 > 5); // true\n```",
                "",
                "Mantıksal Operatörler:",
                "• && (VE): Her iki koşul da doğru olmalı",
                "• || (VEYA): En az biri doğru olmalı",
                "• ! (DEĞİL): Koşulu tersine çevirir",
                "",
                "```javascript\n// Mantıksal operatörler\nlet yas = 25;\nlet ehliyet = true;\n\nif (yas >= 18 && ehliyet) {\n  console.log('Araba kullanabilirsiniz');\n}\n```"
              ],
              quiz: { 
                title: "Operatörler ve İfadeler Quiz", 
                questions: [ 
                  { q: "Mantıksal VE operatörü hangisidir?", a: ["&", "&&", "and"], correct: 1 },
                  { q: "10 % 3 işleminin sonucu nedir?", a: ["3", "1", "0"], correct: 1 },
                  { q: "5 == '5' ve 5 === '5' arasındaki fark nedir?", a: ["Aynıdır", "== tip dönüşümü yapar, === yapmaz", "=== tip dönüşümü yapar, == yapmaz"], correct: 1 },
                  { q: "Üs alma operatörü hangisidir?", a: ["^", "**", "pow()"], correct: 1 }
                ] 
              },
              video: { title: "Operatörler ve İfadeler", description: "JavaScript'te aritmetik, karşılaştırma ve mantıksal operatörler" }
            },
            functions: { 
              title: "Fonksiyonlar", 
              text: [
                "Fonksiyonlar, belirli bir görevi yerine getiren yeniden kullanılabilir kod bloklarıdır.",
                "",
                "Fonksiyon Bildirimi (Function Declaration):",
                "```javascript\nfunction topla(a, b) {\n  return a + b;\n}\n\nlet sonuc = topla(5, 3); // 8\n```",
                "",
                "Fonksiyon İfadesi (Function Expression):",
                "```javascript\nconst carp = function(a, b) {\n  return a * b;\n};\n\nlet sonuc = carp(4, 6); // 24\n```",
                "",
                "Ok Fonksiyonları (Arrow Functions):",
                "```javascript\n// Tek satır\nconst kare = x => x * x;\n\n// Çok satır\nconst selamla = (isim) => {\n  return `Merhaba, ${isim}!`;\n};\n```",
                "",
                "Fonksiyon Parametreleri:",
                "• Varsayılan parametreler",
                "• Rest parametreler (...args)",
                "• Destructuring parametreler",
                "",
                "```javascript\n// Varsayılan parametre\nfunction selamla(isim = 'Misafir') {\n  return `Merhaba, ${isim}!`;\n}\n\n// Rest parametreler\nfunction toplam(...sayilar) {\n  return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);\n}\n```",
                "",
                "Kapsam (Scope) ve Closure:",
                "• Fonksiyonlar kendi kapsamlarını oluşturur",
                "• Closure, dış kapsamdaki değişkenlere erişim sağlar",
                "• let ve const blok kapsamı oluşturur"
              ],
              quiz: { 
                title: "Fonksiyonlar Quiz", 
                questions: [ 
                  { q: "Fonksiyon nasıl çağrılır?", a: ["call func", "func()", "run func"], correct: 1 },
                  { q: "Ok fonksiyonu hangi sözdizimini kullanır?", a: ["function()", "() =>", "func()"], correct: 1 },
                  { q: "Rest parametreler hangi sembolle gösterilir?", a: ["...", "&&", "||"], correct: 0 },
                  { q: "Fonksiyonun değer döndürmesi için hangi kelime kullanılır?", a: ["return", "give", "output"], correct: 0 }
                ] 
              },
              video: { title: "Fonksiyonlar", description: "JavaScript'te fonksiyon tanımlama, parametreler ve kapsam" }
            },
            loops: { 
              title: "Döngüler ve Koşullar", 
              text: [
                "Döngüler ve koşullar, programın akışını kontrol eden temel yapılardır.",
                "",
                "Koşullu İfadeler (if-else):",
                "```javascript\nlet yas = 18;\n\nif (yas >= 18) {\n  console.log('Reşit');\n} else if (yas >= 13) {\n  console.log('Genç');\n} else {\n  console.log('Çocuk');\n}\n```",
                "",
                "Switch-Case Yapısı:",
                "```javascript\nlet gun = 'Pazartesi';\n\nswitch(gun) {\n  case 'Pazartesi':\n    console.log('Hafta başı');\n    break;\n  case 'Cuma':\n    console.log('Hafta sonu yaklaşıyor');\n    break;\n  default:\n    console.log('Normal gün');\n}\n```",
                "",
                "For Döngüsü:",
                "```javascript\n// Klasik for döngüsü\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0, 1, 2, 3, 4\n}\n\n// For-in döngüsü (nesneler için)\nconst kisi = { isim: 'Ahmet', yas: 25 };\nfor (let ozellik in kisi) {\n  console.log(ozellik, kisi[ozellik]);\n}\n\n// For-of döngüsü (diziler için)\nconst sayilar = [1, 2, 3, 4, 5];\nfor (let sayi of sayilar) {\n  console.log(sayi);\n}\n```",
                "",
                "While Döngüsü:",
                "```javascript\nlet i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}\n\n// Do-while döngüsü\nlet j = 0;\ndo {\n  console.log(j);\n  j++;\n} while (j < 5);\n```",
                "",
                "Döngü Kontrolü:",
                "• break: Döngüden çıkar",
                "• continue: Mevcut iterasyonu atla",
                "• return: Fonksiyondan çıkar"
              ],
              quiz: { 
                title: "Döngüler ve Koşullar Quiz", 
                questions: [ 
                  { q: "Hangi döngü en az bir kez çalışır?", a: ["for", "while", "do-while"], correct: 2 },
                  { q: "Döngüden çıkmak için hangi kelime kullanılır?", a: ["exit", "break", "stop"], correct: 1 },
                  { q: "if-else if-else yapısında kaç tane else olabilir?", a: ["Sınırsız", "1", "2"], correct: 1 },
                  { q: "For-of döngüsü hangi veri yapısı için kullanılır?", a: ["Nesneler", "Diziler", "Fonksiyonlar"], correct: 1 }
                ] 
              },
              video: { title: "Döngüler ve Koşullar", description: "JavaScript'te koşullu ifadeler ve döngü yapıları" }
            },
            objects: { 
              title: "Nesneler ve Diziler", 
              text: [
                "Nesneler ve diziler, karmaşık verileri organize etmek için kullanılan veri yapılarıdır.",
                "",
                "Nesneler (Objects):",
                "```javascript\n// Nesne oluşturma\nconst kisi = {\n  isim: 'Ahmet',\n  yas: 25,\n  meslek: 'Geliştirici',\n  selamla: function() {\n    return `Merhaba, ben ${this.isim}`;\n  }\n};\n\n// Özelliklere erişim\nconsole.log(kisi.isim); // 'Ahmet'\nconsole.log(kisi['yas']); // 25\nconsole.log(kisi.selamla()); // 'Merhaba, ben Ahmet'\n```",
                "",
                "Diziler (Arrays):",
                "```javascript\n// Dizi oluşturma\nconst sayilar = [1, 2, 3, 4, 5];\nconst meyveler = ['elma', 'armut', 'muz'];\n\n// Dizi metodları\nconsole.log(sayilar.length); // 5\nconsole.log(sayilar[0]); // 1\n\n// Diziye eleman ekleme\nmeyveler.push('çilek');\nmeyveler.unshift('portakal');\n\n// Diziden eleman çıkarma\nmeyveler.pop(); // Son elemanı çıkar\nmeyveler.shift(); // İlk elemanı çıkar\n```",
                "",
                "Dizi İterasyon Metodları:",
                "```javascript\nconst sayilar = [1, 2, 3, 4, 5];\n\n// forEach - Her eleman için işlem\nsayilar.forEach(sayi => console.log(sayi));\n\n// map - Yeni dizi oluştur\nconst kareler = sayilar.map(sayi => sayi * sayi);\n\n// filter - Koşula uyan elemanları filtrele\nconst ciftler = sayilar.filter(sayi => sayi % 2 === 0);\n\n// reduce - Diziyi tek değere indirge\nconst toplam = sayilar.reduce((acc, sayi) => acc + sayi, 0);\n```",
                "",
                "Destructuring:",
                "```javascript\n// Nesne destructuring\nconst { isim, yas } = kisi;\n\n// Dizi destructuring\nconst [ilk, ikinci, ...geriKalan] = sayilar;\n```"
              ],
            quiz: {
                title: "Nesneler ve Diziler Quiz", 
              questions: [
                  { q: "Nesne özelliğine erişmek için hangi sözdizimi kullanılır?", a: ["obj.property", "obj[property]", "Her ikisi de"], correct: 2 },
                  { q: "Dizinin uzunluğunu almak için hangi özellik kullanılır?", a: ["size", "length", "count"], correct: 1 },
                  { q: "Diziye eleman eklemek için hangi metod kullanılır?", a: ["add()", "push()", "insert()"], correct: 1 },
                  { q: "map() metodu ne yapar?", a: ["Diziyi filtreler", "Yeni dizi oluşturur", "Diziyi sıralar"], correct: 1 }
                ] 
              },
              video: { title: "Nesneler ve Diziler", description: "JavaScript'te nesne ve dizi oluşturma, erişim ve metodlar" }
            },
            dom: { 
              title: "DOM Manipülasyonu", 
              text: [
                "DOM (Document Object Model), HTML belgelerini JavaScript ile manipüle etmeyi sağlar.",
                "",
                "DOM Elementlerini Seçme:",
                "```javascript\n// ID ile seçme\nconst element = document.getElementById('myId');\n\n// Sınıf ile seçme\nconst elements = document.getElementsByClassName('myClass');\n\n// Etiket ile seçme\nconst divs = document.getElementsByTagName('div');\n\n// CSS seçici ile seçme (modern)\nconst element = document.querySelector('#myId');\nconst elements = document.querySelectorAll('.myClass');\n```",
                "",
                "Element İçeriğini Değiştirme:",
                "```javascript\n// Metin içeriği\nconst title = document.querySelector('h1');\ntitle.textContent = 'Yeni Başlık';\ntitle.innerHTML = '<em>Vurgulu</em> Başlık';\n\n// Özellik değiştirme\ntitle.setAttribute('class', 'highlight');\ntitle.style.color = 'red';\n```",
                "",
                "Element Oluşturma ve Ekleme:",
                "```javascript\n// Yeni element oluştur\nconst yeniDiv = document.createElement('div');\nyeniDiv.textContent = 'Yeni içerik';\nyeniDiv.className = 'new-element';\n\n// Elementi sayfaya ekle\ndocument.body.appendChild(yeniDiv);\n\n// Belirli bir yere ekle\nconst container = document.querySelector('.container');\ncontainer.insertBefore(yeniDiv, container.firstChild);\n```",
                "",
                "Event Listener Ekleme:",
                "```javascript\nconst button = document.querySelector('#myButton');\n\nbutton.addEventListener('click', function() {\n  console.log('Buton tıklandı!');\n});\n\n// Ok fonksiyonu ile\nbutton.addEventListener('click', () => {\n  console.log('Buton tıklandı!');\n});\n```",
                "",
                "Form İşleme:",
                "```javascript\nconst form = document.querySelector('#myForm');\n\nform.addEventListener('submit', function(event) {\n  event.preventDefault(); // Sayfa yenilenmesini engelle\n  \n  const formData = new FormData(form);\n  const data = Object.fromEntries(formData);\n  \n  console.log('Form verisi:', data);\n});\n```"
              ],
              quiz: { 
                title: "DOM Manipülasyonu Quiz", 
                questions: [ 
                  { q: "ID ile element seçmek için hangi metod kullanılır?", a: ["getElementById()", "getElementByClass()", "querySelector()"], correct: 0 },
                  { q: "Element içeriğini değiştirmek için hangi özellik kullanılır?", a: ["content", "textContent", "value"], correct: 1 },
                  { q: "Yeni element oluşturmak için hangi metod kullanılır?", a: ["createElement()", "newElement()", "makeElement()"], correct: 0 },
                  { q: "Form gönderimini engellemek için hangi metod kullanılır?", a: ["preventDefault()", "stopSubmit()", "cancelForm()"], correct: 0 }
                ] 
              },
              video: { title: "DOM Manipülasyonu", description: "HTML elementlerini JavaScript ile seçme, değiştirme ve etkileşim" }
            },
            events: { 
              title: "Olay Yönetimi", 
              text: [
                "Olaylar, kullanıcı etkileşimlerini yakalamak ve yanıtlamak için kullanılır.",
                "",
                "Temel Olay Türleri:",
                "• Mouse olayları: click, mouseover, mouseout, mousedown, mouseup",
                "• Klavye olayları: keydown, keyup, keypress",
                "• Form olayları: submit, change, focus, blur",
                "• Pencere olayları: load, resize, scroll",
                "",
                "Event Listener Ekleme:",
                "```javascript\nconst button = document.querySelector('#myButton');\n\n// Temel kullanım\nbutton.addEventListener('click', function(event) {\n  console.log('Tıklandı!');\n  console.log('Olay:', event);\n});\n\n// Ok fonksiyonu ile\nbutton.addEventListener('click', (event) => {\n  console.log('Tıklandı!');\n});\n```",
                "",
                "Olay Nesnesi (Event Object):",
                "```javascript\nbutton.addEventListener('click', function(event) {\n  console.log('Hedef element:', event.target);\n  console.log('Olay türü:', event.type);\n  console.log('Koordinatlar:', event.clientX, event.clientY);\n  \n  // Varsayılan davranışı engelle\n  event.preventDefault();\n  \n  // Olayın yayılmasını durdur\n  event.stopPropagation();\n});\n```",
                "",
                "Klavye Olayları:",
                "```javascript\ndocument.addEventListener('keydown', function(event) {\n  console.log('Basılan tuş:', event.key);\n  console.log('Tuş kodu:', event.code);\n  \n  // Enter tuşu kontrolü\n  if (event.key === 'Enter') {\n    console.log('Enter tuşuna basıldı!');\n  }\n});\n```",
                "",
                "Form Olayları:",
                "```javascript\nconst form = document.querySelector('#myForm');\nconst input = document.querySelector('#myInput');\n\n// Form gönderimi\nform.addEventListener('submit', function(event) {\n  event.preventDefault();\n  console.log('Form gönderildi!');\n});\n\n// Input değişikliği\ninput.addEventListener('change', function(event) {\n  console.log('Değer değişti:', event.target.value);\n});\n\n// Focus olayları\ninput.addEventListener('focus', () => console.log('Input odaklandı'));\ninput.addEventListener('blur', () => console.log('Input odaktan çıktı'));\n```",
                "",
                "Event Delegation:",
                "```javascript\n// Dinamik elementler için event delegation\ndocument.addEventListener('click', function(event) {\n  if (event.target.matches('.dynamic-button')) {\n    console.log('Dinamik buton tıklandı!');\n  }\n});\n```"
              ],
              quiz: { 
                title: "Olay Yönetimi Quiz", 
                questions: [ 
                  { q: "Tıklama olayı hangisidir?", a: ["onhover", "onclick", "onsubmit"], correct: 1 },
                  { q: "Event listener eklemek için hangi metod kullanılır?", a: ["addEventListener()", "onEvent()", "listenEvent()"], correct: 0 },
                  { q: "Varsayılan davranışı engellemek için hangi metod kullanılır?", a: ["preventDefault()", "stopDefault()", "cancelDefault()"], correct: 0 },
                  { q: "Enter tuşu kontrolü için hangi özellik kullanılır?", a: ["event.key", "event.code", "event.keyCode"], correct: 0 }
                ] 
              },
              video: { title: "Olay Yönetimi", description: "JavaScript'te olay dinleme, işleme ve event delegation" }
            },
            async: { 
              title: "Asenkron JavaScript", 
              text: [
                "Asenkron programlama, uzun süren işlemleri engellemeden çalıştırmayı sağlar.",
                "",
                "Promise'ler:",
                "```javascript\nconst veriPromise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('Veri alındı!');\n  }, 1000);\n});\n\nveriPromise\n  .then(sonuc => console.log(sonuc))\n  .catch(hata => console.error(hata));\n```",
                "",
                "Async/Await:",
                "```javascript\nasync function veriAl() {\n  try {\n    const sonuc = await veriPromise;\n    console.log(sonuc);\n  } catch (hata) {\n    console.error(hata);\n  }\n}\n```",
                "",
                "Fetch API:",
                "```javascript\nasync function kullaniciAl() {\n  const response = await fetch('https://api.example.com/users');\n  const data = await response.json();\n  return data;\n}\n```"
              ],
              quiz: { 
                title: "Asenkron JavaScript Quiz", 
                questions: [ 
                  { q: "Promise'in başarılı durumu hangi metodla işlenir?", a: ["then()", "catch()", "finally()"], correct: 0 },
                  { q: "Async fonksiyon içinde hangi kelime kullanılır?", a: ["wait", "await", "async"], correct: 1 },
                  { q: "Promise hata durumu hangi metodla işlenir?", a: ["then()", "catch()", "error()"], correct: 1 }
                ] 
              },
              video: { title: "Asenkron JavaScript", description: "Promise'ler, async/await ve asenkron programlama" }
            },
            modern: { 
              title: "Modern JavaScript (ES6+)", 
              text: [
                "Modern JavaScript, ES6+ özelliklerle daha güçlü ve temiz kod yazmayı sağlar.",
                "",
                "Template Literals:",
                "```javascript\nconst isim = 'Ahmet';\nconst mesaj = `Merhaba ${isim}`;\n```",
                "",
                "Destructuring:",
                "```javascript\nconst { isim, yas } = kisi;\nconst [ilk, ikinci] = sayilar;\n```",
                "",
                "Arrow Functions:",
                "```javascript\nconst kare = x => x * x;\nconst topla = (a, b) => a + b;\n```",
                "",
                "Classes:",
                "```javascript\nclass Kisi {\n  constructor(isim, yas) {\n    this.isim = isim;\n    this.yas = yas;\n  }\n  \n  selamla() {\n    return `Merhaba, ben ${this.isim}`;\n  }\n}\n```"
              ],
              quiz: { 
                title: "Modern JavaScript Quiz", 
                questions: [ 
                  { q: "Template literal hangi sembollerle yazılır?", a: ["\"\"", "''", "``"], correct: 2 },
                  { q: "Arrow function hangi sembolle yazılır?", a: ["->", "=>", ">>"], correct: 1 },
                  { q: "Class'ta constructor ne zaman çalışır?", a: ["Her metod çağrısında", "Nesne oluşturulurken", "Class tanımlanırken"], correct: 1 }
                ] 
              },
              video: { title: "Modern JavaScript", description: "ES6+ özellikleri ve modern JavaScript teknikleri" }
            },
            errors: { 
              title: "Hata Yönetimi", 
              text: [
                "Hata yönetimi, programın beklenmedik durumlarda düzgün çalışmaya devam etmesini sağlar.",
                "",
                "Try-Catch-Finally:",
                "```javascript\ntry {\n  const sonuc = 10 / 0;\n  console.log(sonuc);\n} catch (hata) {\n  console.error('Hata:', hata.message);\n} finally {\n  console.log('İşlem tamamlandı');\n}\n```",
                "",
                "Promise Hata Yönetimi:",
                "```javascript\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(hata => console.error('Hata:', hata));\n```"
              ],
              quiz: { 
                title: "Hata Yönetimi Quiz", 
                questions: [ 
                  { q: "Hata yakalamak için hangi blok kullanılır?", a: ["try-catch", "if-else", "switch-case"], correct: 0 },
                  { q: "finally bloğu ne zaman çalışır?", a: ["Sadece hata oluştuğunda", "Sadece hata oluşmadığında", "Her durumda"], correct: 2 },
                  { q: "Promise hatalarını yakalamak için hangi metod kullanılır?", a: ["then()", "catch()", "finally()"], correct: 1 }
                ] 
              },
              video: { title: "Hata Yönetimi", description: "JavaScript'te hata yakalama ve işleme" }
            },
            apis: { 
              title: "Web API'leri ve AJAX", 
              text: [
                "Web API'leri, sunucu ile veri alışverişi yapmayı sağlar.",
                "",
                "Fetch API:",
                "```javascript\nfetch('https://api.example.com/users')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Hata:', error));\n```",
                "",
                "JSON İşleme:",
                "```javascript\n// JSON stringify\nconst kisi = { isim: 'Ahmet', yas: 25 };\nconst jsonString = JSON.stringify(kisi);\n\n// JSON parse\nconst kisi = JSON.parse(jsonString);\n```"
              ],
              quiz: { 
                title: "Web API'leri Quiz", 
                questions: [ 
                  { q: "Modern web API istekleri için hangi metod kullanılır?", a: ["XMLHttpRequest", "Fetch API", "jQuery.ajax"], correct: 1 },
                  { q: "JSON'ı JavaScript nesnesine çevirmek için hangi metod kullanılır?", a: ["JSON.stringify()", "JSON.parse()", "JSON.convert()"], correct: 1 },
                  { q: "POST isteği göndermek için hangi özellik kullanılır?", a: ["method", "type", "action"], correct: 0 }
                ] 
              },
              video: { title: "Web API'leri", description: "Fetch API ve sunucu ile veri alışverişi" }
            },
            quiz: {
              title: "JavaScript Genel Quiz",
              questions: [
                { q: "JavaScript hangi amaçla kullanılır?", a: ["Web sayfalarına dinamik davranış kazandırmak", "Veritabanı yönetimi", "Sunucu programlama"], correct: 0 },
                { q: "const ile tanımlanan değişken değiştirilebilir mi?", a: ["Evet", "Hayır", "Sadece fonksiyon içinde"], correct: 1 },
                { q: "Arrow function'da this nasıl çalışır?", a: ["Global window'u gösterir", "Leksik olarak bağlanır", "Undefined'dır"], correct: 1 },
                { q: "Promise'in 3 durumu hangileridir?", a: ["pending, resolved, rejected", "waiting, success, error", "loading, done, failed"], correct: 0 },
                { q: "DOM element seçmek için hangi metod kullanılır?", a: ["getElementById()", "getElementByClass()", "Her ikisi de"], correct: 2 }
              ]
            },
            video: { title: "JavaScript Eğitim Serisi", description: "Kapsamlı JavaScript eğitim videoları - temel kavramlardan modern özelliklere kadar tüm konular" }
          }
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        lessons: "Lessons",
        features: "Features",
        benefits: "Benefits",
        contact: "Contact",
        login: "Login / Register",
        welcome: "Welcome, {{name}}!",
        reports: "Reports",
        manageClasses: "Manage Classes",
        myLessons: "My Lessons",
        profile: "Profile",
        logout: "Logout"
      },
      reports: {
        students: "Students",
        active: "Active",
        inactive: "Inactive",
        eeg: "EEG",
        goBack: "Go Back",
        noCourseAssigned: "No course assigned",
        studentNotFound: "Student not found.",
        aiAnalysis: "AI Analysis",
        quizSuccessFail: "Quiz Success/Fail Rate",
        success: "Success",
        fail: "Fail",
        modifyMaterialBalance: "Modify Course Material Balance",
        text: "Text",
        video: "Video",
        quiz: "Quiz",
        classes: "Classes",
        studentsCount: "students"
      },
      manage: {
        header: "Manage Classes",
        subheader: "Create and manage your classes and students",
        createNewClass: "Create New Class",
        className: "Class Name",
        description: "Description",
        createClass: "Create Class",
        addStudent: "Add Student",
        remove: "Remove",
        viewReports: "View Reports",
        editClass: "Edit Class",
        addStudentTo: "Add Student to {{name}}",
        studentName: "Student Name",
        email: "Email",
        editClassWithName: "Edit Class: {{name}}",
        saveChanges: "Save Changes",
        manageStudents: "Manage Students",
        addNewStudent: "Add New Student",
        delete: "Delete",
        classCodeLabel: "Class Code",
        noCode: "NO-CODE",
        copy: "Copy",
        refresh: "Refresh",
        pendingRequests: "Pending Requests",
        noPendingRequests: "No pending requests.",
        approve: "Approve",
        reject: "Reject",
        rejectReason: "(Optional) Rejection reason"
      },
      lessons: {
        available: "Available Lessons",
        start: "Start Lesson",
        completed: "Completed",
        modules: "Modules",
        moduleCountLabel: "{{count}} Modules",
        duration: "Duration",
        difficultyLabel: "Difficulty",
        chooseCoursePrompt: "Which programming language would you like to learn?",
        finishCourse: "Finish Course",
        markModuleComplete: "Mark Module Complete",
        attention: "Attention Level",
        timeRemaining: "Time remaining",
        backToLessons: "Back to Lessons",
        previous: "Previous",
        next: "Next",
        tabs: { text: "Text", quiz: "Quiz", video: "Video" },
        attention: "Attention Level",
        lowAttentionPrompt: "Attention is low. Switch up the content?",
        switchVideo: "Switch to Video",
        tryQuiz: "Try a Quiz",
        continueText: "Continue with Text",
        backText: "Back to Text",
        quizComplete: "Quiz Complete!",
        markComplete: "Mark as Complete",
        cancel: "Cancel",
        whatYouWillLearn: "What You Will Learn",
        syllabus: "Syllabus",
        showAll: "Show All",
        showLess: "Show Less",
        startLesson: "Start Lesson"
      },

      eeg: {
        tracking: "EEG Tracking",
        trackingActive: "EEG Tracking Active",
        active: "EEG Active",
        attentionShort: "{{value}}% Attention",
        finalQuiz: "Quiz"
      },

      brainAligned: {
        learning: "Brain-Aligned Learning",
        quizDesc: "Interactive quiz designed for brain-aligned learning",
        videoDesc: "Video content optimized for brain-aligned learning"
      },

      attentionPopup: {
        title: "Attention Alert",
        message: "Your attention level is at {{value}}%",
        intro: "We've noticed your attention level has dropped. Here are some suggestions to help you refocus:",
        dismiss: "Dismiss",
        focusedNow: "I'm Focused Now",
        suggestions: {
          switchToText: { title: "Switch to Text Mode", desc: "Reading text content can help refocus your attention" },
          tryQuiz: { title: "Try Interactive Quiz", desc: "Engage with questions to boost concentration" },
          watchVideo: { title: "Watch Video Content", desc: "Visual content might help regain focus" },
          takeQuickQuiz: { title: "Take a Quick Quiz", desc: "Interactive content can help maintain focus" },
          takeShortBreak: { title: "Take a Short Break", desc: "A brief pause might help refresh your mind" },
          breakAlert: "Consider taking a 2-3 minute break to refresh your focus!"
        }
      },
      dashboard: {
        overallLearningProgress: "Overall Learning Progress",
        weeklyProgress: "Weekly Progress",
        weeklyProgressTrend: "Weekly Progress Trend",
        timeSpentMinutes: "Time Spent (minutes)",
        timeSpentPerCourse: "Time Spent per Course",
        timeLabel: "Time: {{h}}h {{m}}m",
        progressOverview: "Progress Overview",
        complete: "Complete",
        courseProgressSummary: "Course Progress Summary",
        modulesShort: "modules",
        weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      topics: {
        python: "Python Fundamentals",
        web: "Web Development with HTML/CSS",
        js: "JavaScript Basics"
      },
      tags: { programming: "Programming", web: "Web Dev" },
      difficulty: { beginner: "Beginner", intermediate: "Intermediate" },

      myLessons: {
        headerSubtitle: "Track your progress and pick up where you left off",
        enrolledCourses: "Enrolled Courses",
        next: "Next",
        lastAccess: "Last access",
        progress: "Progress",
        modulesLabel: "Modules: {{completed}}/{{total}}",
        timeSpent: "Time spent: {{time}}",
        continueLearning: "Continue Learning",
        viewDetails: "View Details",
        recentActivities: "Recent Activities",
        viewAllActivities: "View all activities",
        activity: {
          completion: "Module {{num}} completed: {{name}}",
          start: "Module {{num}} started: {{name}}",
          quiz: "Quiz taken: {{name}}",
          video: "Video watched: {{name}}",
          timeAgoHours: "{{count}} hours ago",
          timeAgoDays: "{{count}} days ago"
        }
      },

      features: {
        header: "Platform Features",
        items: [
          { title: "EEG Data Capture", desc: "Capture real-time brainwave data to measure attention and cognitive load." },
          { title: "AI Analysis", desc: "Deep learning (LSTM/CNN) analyzes EEG patterns for engagement and learning needs." },
          { title: "Adaptive Content", desc: "Dynamically adjust lesson format—interactive, video, or audio—based on student focus." },
          { title: "Teacher Dashboard", desc: "Real-time analytics and reporting for educators to track student engagement." },
          { title: "Feedback and Validation", desc: "Continuous improvement through student feedback and validation." }
        ]
      },

      benefits: {
        header: "Who Benefits?",
        studentsTitle: "For Students",
        studentsDesc: "Personalized, engaging lessons that adapt in real time to your focus and learning needs.",
        teachersTitle: "For Teachers",
        teachersDesc: "Instant analytics and actionable insights to support each student’s progress."
      },

      profile: {
        noSession: "No session found.",
        roleLabel: "Role",
        classLabel: "Class",
        totalEnrolled: "Total Enrolled Courses",
        totalFinished: "Courses Finished",
        classCount: "Classes",
        studentCount: "Students",
        myLessons: "My Lessons",
        goToLessons: "Go to lessons",
        noneEnrolled: "You have no enrolled courses yet.",
        percentComplete: "{{percent}}% complete"
      },

      auth: {
        signInTitle: "Sign in to your account",
        signUpTitle: "Create your account",
        welcomeBack: "Welcome back to NeuroVerse",
        joinToday: "Join NeuroVerse today",
        iam: "I am a:",
        student: "Student",
        teacher: "Teacher",
        username: "Username",
        email: "Email",
        firstName: "First Name",
        lastName: "Last Name",
        classCode: "Class Code (from your teacher)",
        password: "Password",
        confirmPassword: "Confirm Password",
        signIn: "Sign In",
        signUp: "Create Account",
        toggleToSignUp: "Don't have an account? Sign up",
        toggleToSignIn: "Already have an account? Sign in",
        passwordsNoMatch: "Passwords do not match",
        invalidCredentials: "Invalid username or password",
        usernameExists: "Username already exists",
        requireClassCode: "Please enter a valid class code",
        demoCredentialsTitle: "Demo Credentials:",
        studentsDemo: "Students: Ayşe Öğrenci/password123, Mehmet Öğrenci/password123",
        teachersDemo: "Teachers: Ahmet Öğretmen/password123, Fatma Hoca/password123"
      },

      contact: {
        header: "Contact Us",
        thankYou: "Thanks for your message!",
        placeholderName: "Your Name",
        placeholderEmail: "Your Email Address",
        placeholderMessage: "Your Message",
        submit: "Send Message"
      },

      chat: {
        title: "AI Assistant",
        toggleAria: "AI Assistant",
        placeholder: "Ask a question or request a suggestion...",
        send: "Send",
        busy: "Please wait…",
        greeting: "Hello! I'm the NeuroVerse AI Assistant. What would you like to focus on today?"
      },

      home: {
        heroTitle: "AI-Powered Smart Learning",
        heroSubtitle: "EEG-based attention tracking and adaptive content deliver a personalized, engaging learning experience.",
        ctaStart: "Get Started",
        ctaHow: "How it Works",
        heroImgAlt: "A student wearing an EEG headset",
        heroBadge: "Content adapts dynamically based on real-time attention data.",

        studentTitle: "For Students: Instant feedback",
        studentBody1: "When your attention drops, the system automatically switches content type: it may move from text to video,",
        studentBody2: "suggest a short quiz, or simplify the topic to keep your learning rhythm.",
        studentBullet1: "Personalized module flow",
        studentBullet2: "Attention tracking with EEG",
        studentBullet3: "Instant content suggestions",
        studentImageAlt: "Student interacting with lesson content",
        studentImageBadge: "Adaptive Learning",

        teacherTitle: "For Teachers: Class analytics",
        teacherBody1: "View attention and progress data in one place. Assign targeted content to struggling students,",
        teacherBody2: "tune material balance across the class, and intervene effectively.",
        teacherImageAlt: "Teacher monitoring class progress on a computer",
        teacherImageBadge: "Real-time Dashboards",

        welcomeQuestion: "Where would you like to continue learning today?",
        quickLessonsTitle: "Lesson Library",
        quickLessonsDesc: "Discover and start a new lesson.",
        quickMyLessonsTitle: "My Lessons",
        quickMyLessonsDesc: "Return to your in-progress modules.",
        quickRecentTitle: "Recent Activity",
        quickRecentDesc: "Pick up where you left off.",
        quickSupportTitle: "Support",
        quickSupportDesc: "Need help? Get in touch.",

        activityTitle: "Weekly Activity",
        activitySubtitle: "Summary data is for demo.",
        activityTime: "Time Spent",
        activityCompleted: "Modules Completed",
        activityQuiz: "Quiz Success",
        activityImageAlt: "Student studying",

        aiRecsTitle: "AI Recommendations",
        aiLabel: "AI",
        aiCtaGo: "Go"
      },

      lessonsContent: {
        python: {
          title: "Python Programming Language",
          summary: "Learn Python from scratch with comprehensive modules covering everything from basic syntax to advanced concepts like file handling, error management, and data structures.",
          meta: {
            duration: "10-12 hours",
            difficulty: "Beginner"
          },
          whatYouWillLearn: [
            "Python fundamentals and syntax",
            "Variables, data types, and type conversion",
            "Control flow with loops and conditionals",
            "Functions and parameter handling",
            "Data structures: lists, strings, dictionaries, tuples, sets",
            "File handling and I/O operations",
            "Error handling and exception management",
            "Object-oriented programming basics",
            "Python best practices and coding standards",
            "Building simple projects and applications"
          ],
          syllabus: {
            modules: [
              { title: "Variables and Data Types" },
              { title: "Loops" },
              { title: "Conditionals" },
              { title: "Functions" },
              { title: "Lists" },
              { title: "Strings" },
              { title: "Dictionaries" },
              { title: "Tuples" },
              { title: "Sets" },
              { title: "File Handling" },
              { title: "Error Handling" },
              { title: "Python Quiz" }
            ]
          },
          modules: {
            variables: { 
              title: "Variables and Data Types", 
              text: [
                "A variable binds a name to a value. Python assigns types at runtime (dynamic typing).",
                "Common types: int (whole numbers), float (decimals), str (text), bool (True/False).",
                "Use clear, lowercase names with underscores.",
                "```total_score = 42\nplayer_name = 'Ada'\nprint(f'{player_name}: {total_score}')\n```",
                "Type conversion:",
                "```int('3')\nfloat('3.14')\nstr(42)\n```",
                "Be mindful of ValueError when converting.",
                "Multiple assignment is supported: `x, y = 1, 2`. You can also swap: `x, y = y, x`.",
                "Input/output basics: `name = input('Name: ')`; `print(f'Hello {name}')` (f-strings)."
              ],
              video: { 
                title: "Variables and Data Types", 
                description: "Python variables and data types introduction",
                url: "https://www.youtube.com/watch?v=example13"
              }
            },
            loops: { 
              title: "Loops", 
              text: [
                "for iterates over items of a sequence (e.g., list, string, range).",
                "```for i in range(1, 4):\n    print(i)\n```",
                "while repeats as long as a condition stays True; ensure the condition eventually changes.",
                "Use `break` to exit early and `continue` to skip to the next iteration.",
                "`range(start, stop, step)` is commonly used with for.",
                "You can loop with indexes via `enumerate(seq)` and over keys/values via `dict.items()`.",
                "List comprehensions are compact loops that build lists: `[x*x for x in range(5) if x%2==0]`."
              ],
              video: { 
                title: "Loops", 
                description: "for and while loops in Python",
                url: "https://www.youtube.com/watch?v=example14"
              }
            },
            conditionals: { 
              title: "Conditionals", 
              text: [
                "Use if, elif, else to branch logic based on conditions.",
                "Comparison operators: `==`, `!=`, `<`, `>`, `<=`, `>=`. Logical operators: `and`, `or`, `not`.",
                "Keep conditions readable; extract complex checks into well‑named variables.",
                "Truthy/Falsy: empty containers and 0 are falsy; non‑empty values are truthy.",
                "Ternary: `expr_if_true if condition else expr_if_false`.",
                "Membership checks: `if 'py' in 'python': ...`; `if key in my_dict: ...`"
              ],
              video: { 
                title: "Conditionals", 
                description: "if/elif/else statements and logical operators",
                url: "https://www.youtube.com/watch?v=example15"
              }
            },
            functions: { 
              title: "Functions", 
              text: [
                "Define with def name(params): and return a value with return.",
                "Parameters can have default values and accept variable arguments (`*args`, `**kwargs`).",
                "Aim for small, single‑purpose functions that are easy to test.",
                "Docstrings describe behavior: `def add(a, b): \"\"\"Return sum of a and b.\"\"\"`",
                "Functions are first‑class: pass them as arguments, store them in variables, return them.",
                "Scope: variables assigned inside a function are local unless declared global/nonlocal."
              ],
              video: { 
                title: "Functions", 
                description: "Function definition, parameters, and return values",
                url: "https://www.youtube.com/watch?v=example16"
              }
            },
            lists: { 
              title: "Lists", 
              text: [
                "Lists are ordered, mutable collections written with square brackets: `[1, 2, 3]`.",
                "Common ops: `append`, `extend`, `insert`, `remove`, `pop`, slicing (`list[start:stop:step]`).",
                "List comprehensions provide concise transformations: `[x*x for x in range(5)]`.",
                "Sorting: `my_list.sort()` (in place) vs `sorted(my_list)` (new list).",
                "Copy carefully: use `my_list.copy()` or `list(my_list)`, not `a = b` which shares the list."
              ],
              video: { 
                title: "Lists", 
                description: "Working with lists and list comprehensions",
                url: "https://www.youtube.com/watch?v=example17"
              }
            },
            strings: {
              title: "Strings",
              text: [
                "Strings are sequences of Unicode characters. Create with quotes: `'hi'` or `\"hi\"`.",
                "Common methods: `lower()`, `upper()`, `strip()`, `replace()`, `split()`, `join()`.",
                "Slicing works like lists: `s[0]`, `s[-1]`, `s[1:4]`.",
                "Formatted strings (f-strings) embed expressions: `f\"{name} has {points} points\"`.",
                "Escape sequences: `\\n` (newline), `\\t` (tab), or use raw strings `r'\\path'`."
              ],
              video: { 
                title: "Strings", 
                description: "String methods and operations",
                url: "https://www.youtube.com/watch?v=example18"
              }
            },
            dictionaries: {
              title: "Dictionaries",
              text: [
                "Dictionaries map keys to values: `user = {'name': 'Ada', 'age': 36}`.",
                "Access/update via keys: `user['name']`, `user.get('role', 'student')`, `user['age'] = 37`.",
                "Iterate with `items()`, `keys()`, `values()`.",
                "Useful methods: `update()`, `pop()`, `setdefault()`, dict comprehensions `{k: v for ...}`.",
                "Keys must be hashable (immutable) types like `str`, `int`, or tuples of immutables."
              ],
              video: { 
                title: "Dictionaries", 
                description: "Key-value mapping and dictionary methods",
                url: "https://www.youtube.com/watch?v=example19"
              }
            },
            tuples: { 
              title: "Tuples", 
              text: [
                "Tuples are immutable sequences, similar to lists but cannot be modified after creation.",
                "Tuples are created using parentheses or just commas:",
                "```# Creating tuples\ncoordinates = (10, 20)\ncolors = 'red', 'green', 'blue'  # Parentheses optional\nsingle_item = (42,)  # Note the comma for single item```",
                "Tuples are immutable, so you cannot add, remove, or change elements:",
                "```point = (3, 4)\n# point[0] = 5  # This would raise TypeError\nprint(point[0])  # Accessing is fine: 3```",
                "Common tuple operations:",
                "```# Unpacking\na, b = (1, 2)\nprint(a, b)  # 1 2\n\n# Multiple assignment\nx, y, z = 10, 20, 30\n\n# Returning multiple values from functions\ndef get_name_age():\n    return 'Alice', 25\n\nname, age = get_name_age()```",
                "Tuples are useful for:",
                "• Returning multiple values from functions",
                "• Storing related data that shouldn't change",
                "• Using as dictionary keys (unlike lists)",
                "• Performance (slightly faster than lists)"
              ],
              quiz: { 
                title: "Tuples Quiz", 
                questions: [ 
                  { q: "What makes tuples different from lists?", a: ["They're faster", "They're immutable", "They use different brackets"], correct: 1 },
                  { q: "How do you create a single-item tuple?", a: ["(42)", "(42,)", "[42]", "42"], correct: 1 },
                  { q: "Can tuples be used as dictionary keys?", a: ["Yes", "No", "Only if they contain strings"], correct: 0 },
                  { q: "What happens if you try to modify a tuple?", a: ["It works", "TypeError", "ValueError"], correct: 1 }
                ] 
              },
              video: { title: "Tuples", description: "Understanding tuples and their immutability in Python" }
            },
            sets: { 
              title: "Sets", 
              text: [
                "Sets are unordered collections of unique elements. They automatically remove duplicates.",
                "Creating sets:",
                "```# Using curly braces\nfruits = {'apple', 'banana', 'orange'}\n\n# Using set() function\nnumbers = set([1, 2, 3, 2, 1])  # Removes duplicates: {1, 2, 3}\n\n# Empty set (not {})\nempty_set = set()```",
                "Set operations:",
                "```set1 = {1, 2, 3, 4}\nset2 = {3, 4, 5, 6}\n\n# Union\nunion = set1 | set2  # {1, 2, 3, 4, 5, 6}\n\n# Intersection\nintersection = set1 & set2  # {3, 4}\n\n# Difference\ndifference = set1 - set2  # {1, 2}\n\n# Symmetric difference\nsym_diff = set1 ^ set2  # {1, 2, 5, 6}```",
                "Set methods:",
                "```colors = {'red', 'green', 'blue'}\n\n# Add elements\ncolors.add('yellow')\ncolors.update(['purple', 'pink'])\n\n# Remove elements\ncolors.remove('red')  # Raises KeyError if not found\ncolors.discard('red')  # No error if not found\n\n# Check membership\nif 'blue' in colors:\n    print('Blue is in the set')```",
                "Sets are useful for:",
                "• Removing duplicates from lists",
                "• Fast membership testing",
                "• Mathematical set operations",
                "• Finding unique elements"
              ],
            quiz: {
                title: "Sets Quiz", 
                questions: [ 
                  { q: "What happens when you add duplicate elements to a set?", a: ["Error occurs", "Duplicates are removed", "Set becomes invalid"], correct: 1 },
                  { q: "How do you create an empty set?", a: ["{}", "set()", "[]", "()"], correct: 1 },
                  { q: "What operator finds the intersection of two sets?", a: ["&", "|", "-", "^"], correct: 0 },
                  { q: "Which method removes an element without raising an error?", a: ["remove()", "discard()", "pop()", "clear()"], correct: 1 }
                ] 
              },
              video: { title: "Sets", description: "Working with sets and set operations in Python" }
            },
            files: { 
              title: "File Handling", 
              text: [
                "File handling allows you to read from and write to files on your computer.",
                "Opening and reading files:",
                "```# Reading a file\nwith open('data.txt', 'r') as file:\n    content = file.read()\n    print(content)\n\n# Reading line by line\nwith open('data.txt', 'r') as file:\n    for line in file:\n        print(line.strip())  # strip() removes newline```",
                "Writing to files:",
                "```# Writing to a file\nwith open('output.txt', 'w') as file:\n    file.write('Hello, World!')\n    file.write('\\nThis is a new line')\n\n# Appending to a file\nwith open('log.txt', 'a') as file:\n    file.write('New log entry\\n')```",
                "File modes:",
                "• 'r' - Read mode (default)",
                "• 'w' - Write mode (overwrites existing file)",
                "• 'a' - Append mode (adds to end of file)",
                "• 'x' - Exclusive creation (fails if file exists)",
                "• 'b' - Binary mode (for images, etc.)",
                "",
                "Working with CSV files:",
                "```import csv\n\n# Reading CSV\nwith open('data.csv', 'r') as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)\n\n# Writing CSV\nwith open('output.csv', 'w', newline='') as file:\n    writer = csv.writer(file)\n    writer.writerow(['Name', 'Age', 'City'])\n    writer.writerow(['Alice', '25', 'New York'])```",
                "Error handling with files:",
                "```try:\n    with open('nonexistent.txt', 'r') as file:\n        content = file.read()\nexcept FileNotFoundError:\n    print('File not found!')\nexcept PermissionError:\n    print('Permission denied!')```"
              ],
              quiz: { 
                title: "File Handling Quiz", 
                questions: [ 
                  { q: "What mode should you use to append to a file?", a: ["'r'", "'w'", "'a'", "'x'"], correct: 2 },
                  { q: "Why use 'with open()' instead of just 'open()'?", a: ["It's faster", "It automatically closes the file", "It's more secure"], correct: 1 },
                  { q: "What does 'w' mode do to existing files?", a: ["Appends to them", "Overwrites them", "Creates a backup"], correct: 1 },
                  { q: "Which exception is raised when a file doesn't exist?", a: ["FileError", "FileNotFoundError", "IOError"], correct: 1 }
                ] 
              },
              video: { title: "File Handling", description: "Reading from and writing to files in Python" }
            },
            errors: { 
              title: "Error Handling", 
              text: [
                "Error handling allows your program to gracefully handle unexpected situations and continue running.",
                "Try-except blocks:",
                "```try:\n    number = int(input('Enter a number: '))\n    result = 10 / number\n    print(f'Result: {result}')\nexcept ValueError:\n    print('Please enter a valid number!')\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')\nexcept Exception as e:\n    print(f'An error occurred: {e}')```",
                "Common exception types:",
                "• ValueError - Invalid value for operation",
                "• TypeError - Wrong type for operation",
                "• NameError - Variable not defined",
                "• IndexError - List index out of range",
                "• KeyError - Dictionary key not found",
                "• FileNotFoundError - File doesn't exist",
                "• ZeroDivisionError - Division by zero",
                "",
                "Finally block:",
                "```try:\n    file = open('data.txt', 'r')\n    content = file.read()\nexcept FileNotFoundError:\n    print('File not found!')\nfinally:\n    file.close()  # Always executed```",
                "Raising custom exceptions:",
                "```def validate_age(age):\n    if age < 0:\n        raise ValueError('Age cannot be negative')\n    if age > 150:\n        raise ValueError('Age seems unrealistic')\n    return True\n\ntry:\n    validate_age(-5)\nexcept ValueError as e:\n    print(f'Error: {e}')```",
                "Best practices:",
                "• Be specific with exception types",
                "• Don't catch all exceptions unless necessary",
                "• Log errors for debugging",
                "• Provide meaningful error messages"
              ],
              quiz: { 
                title: "Error Handling Quiz", 
                questions: [ 
                  { q: "What does the finally block do?", a: ["Handles errors", "Always runs", "Only runs on success"], correct: 1 },
                  { q: "Which exception is raised for invalid type operations?", a: ["ValueError", "TypeError", "NameError"], correct: 1 },
                  { q: "What keyword is used to raise an exception?", a: ["raise", "throw", "error"], correct: 0 },
                  { q: "Should you catch all exceptions with 'except:'?", a: ["Yes, always", "No, be specific", "Only for testing"], correct: 1 }
                ] 
              },
              video: { title: "Error Handling", description: "Handling exceptions and errors in Python" }
            },
            quiz: {
              title: "Final Quiz",
              questions: [
                { q: "Which one is a string?", a: ["42", "\"Hello\"", "True"], correct: 1 },
                { q: "Output of for i in range(3): print(i)?", a: ["1 2 3", "0 1 2", "0 1 2 3"], correct: 1 }
              ]
            },
            video: { 
              title: "Python Video", 
              description: "Python tutorial video (placeholder)",
              url: "https://www.youtube.com/watch?v=example20"
            }
          }
        },
        web: {
          title: "Web Development with HTML/CSS",
          summary: "Learn to build web pages using HTML and CSS.",
          meta: {
            duration: "5-6 hours",
            difficulty: "Beginner"
          },
          whatYouWillLearn: [
            "HTML tags",
            "Styling with CSS",
            "Images and links",
            "Lists and tables",
            "Basic forms"
          ],
          syllabus: {
            modules: [
              { title: "HTML Fundamentals" },
              { title: "HTML Elements & Structure" },
              { title: "HTML Forms & Input Types" },
              { title: "CSS Fundamentals" },
              { title: "CSS Selectors & Specificity" },
              { title: "CSS Layout & Positioning" },
              { title: "CSS Grid & Flexbox" },
              { title: "CSS Animations & Effects" },
              { title: "Responsive Web Design" },
              { title: "Web Accessibility" },
              { title: "Web Quiz" }
            ]
          },
          modules: {
            html_fundamentals: { 
              title: "HTML Fundamentals", 
              text: [
                "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of web pages.",
                "Every HTML document starts with a DOCTYPE declaration and has a basic structure:",
                "```<!DOCTYPE html>\n<html>\n<head>\n    <title>Page Title</title>\n</head>\n<body>\n    <h1>This is a Heading</h1>\n    <p>This is a paragraph.</p>\n</body>\n</html>```",
                "Key HTML concepts:",
                "• Elements: Building blocks of HTML (e.g., <p>, <h1>, <div>)",
                "• Tags: Markup that defines elements (<p>content</p>)",
                "• Attributes: Additional information about elements (class, id, src)",
                "• Nesting: Elements can contain other elements",
                "• Self-closing tags: Elements that don't need closing tags (<img>, <br>)",
                "",
                "HTML5 introduced semantic elements for better structure:",
                "• <header> - Introductory content",
                "• <nav> - Navigation links",
                "• <main> - Main content",
                "• <section> - Thematic grouping",
                "• <article> - Independent content",
                "• <aside> - Sidebar content",
                "• <footer> - Footer content"
              ],
              quiz: { 
                title: "HTML Fundamentals Quiz", 
                questions: [ 
                  { q: "What does HTML stand for?", a: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language"], correct: 0 },
                  { q: "Which tag is used for the main heading?", a: ["<h1>", "<head>", "<header>"], correct: 0 },
                  { q: "What is the purpose of the DOCTYPE declaration?", a: ["Define page title", "Specify HTML version", "Add CSS styles"], correct: 1 },
                  { q: "Which is a self-closing tag?", a: ["<p>", "<img>", "<div>"], correct: 1 }
                ] 
              },
              video: { title: "HTML Fundamentals", description: "Introduction to HTML structure and basic elements" }
            },
            headings_paragraphs: { title: "Headings and Paragraphs", text: "Headings via h1–h6, paragraphs via p." },
            html_forms: { 
              title: "HTML Forms & Input Types", 
              text: [
                "Forms allow users to input and submit data. They are essential for interactive web applications.",
                "Basic Form Structure:",
                "```<form action=\"/submit\" method=\"POST\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required>\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n    \n    <button type=\"submit\">Submit</button>\n</form>```",
                "Input Types:",
                "```<!-- Text input -->\n<input type=\"text\" name=\"username\" placeholder=\"Enter username\">\n\n<!-- Email input -->\n<input type=\"email\" name=\"email\" required>\n\n<!-- Password input -->\n<input type=\"password\" name=\"password\">\n\n<!-- Number input -->\n<input type=\"number\" name=\"age\" min=\"1\" max=\"100\">\n\n<!-- Date input -->\n<input type=\"date\" name=\"birthday\">\n\n<!-- Checkbox -->\n<input type=\"checkbox\" id=\"newsletter\" name=\"newsletter\">\n<label for=\"newsletter\">Subscribe to newsletter</label>\n\n<!-- Radio buttons -->\n<input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\">\n<label for=\"male\">Male</label>\n<input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\">\n<label for=\"female\">Female</label>```",
                "Select and Textarea:",
                "```<!-- Dropdown select -->\n<select name=\"country\">\n    <option value=\"us\">United States</option>\n    <option value=\"uk\">United Kingdom</option>\n    <option value=\"ca\">Canada</option>\n</select>\n\n<!-- Textarea for longer text -->\n<textarea name=\"message\" rows=\"4\" cols=\"50\" placeholder=\"Enter your message\"></textarea>```",
                "Form Validation:",
                "```<form>\n    <input type=\"text\" required placeholder=\"Required field\">\n    <input type=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\">\n    <input type=\"number\" min=\"18\" max=\"65\" required>\n    <input type=\"url\" placeholder=\"Website URL\">\n    <input type=\"tel\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" placeholder=\"123-456-7890\">\n</form>```"
              ],
            quiz: {
                title: "HTML Forms Quiz", 
              questions: [
                  { q: "Which input type is used for passwords?", a: ["text", "password", "hidden"], correct: 1 },
                  { q: "What does the 'required' attribute do?", a: ["Makes field optional", "Makes field mandatory", "Adds styling"], correct: 1 },
                  { q: "Which tag creates a dropdown menu?", a: ["<input>", "<select>", "<option>"], correct: 1 },
                  { q: "What is the purpose of the 'label' tag?", a: ["Adds styling", "Associates text with input", "Creates borders"], correct: 1 }
                ] 
              },
              video: { title: "HTML Forms", description: "Creating interactive forms with various input types" }
            },
            css_fundamentals: { 
              title: "CSS Fundamentals", 
              text: [
                "CSS (Cascading Style Sheets) controls the visual appearance of HTML elements. It separates content from presentation.",
                "CSS Syntax:",
                "```css\nselector {\n    property: value;\n    property: value;\n}\n\n/* Example */\nh1 {\n    color: blue;\n    font-size: 24px;\n    text-align: center;\n}```",
                "Three Ways to Add CSS:",
                "```<!-- 1. Inline CSS -->\n<h1 style=\"color: red; font-size: 30px;\">Hello World</h1>\n\n<!-- 2. Internal CSS -->\n<head>\n    <style>\n        h1 { color: blue; }\n        p { font-size: 16px; }\n    </style>\n</head>\n\n<!-- 3. External CSS -->\n<head>\n    <link rel=\"stylesheet\" href=\"styles.css\">\n</head>```",
                "Basic Properties:",
                "```css\n/* Text properties */\np {\n    color: #333333;\n    font-family: Arial, sans-serif;\n    font-size: 16px;\n    font-weight: normal;\n    text-align: left;\n    line-height: 1.5;\n    text-decoration: none;\n}\n\n/* Background properties */\nbody {\n    background-color: #f0f0f0;\n    background-image: url('image.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n/* Box model properties */\n.box {\n    width: 300px;\n    height: 200px;\n    margin: 20px;\n    padding: 15px;\n    border: 2px solid #000;\n}```"
              ],
              quiz: { 
                title: "CSS Fundamentals Quiz", 
                questions: [ 
                  { q: "What does CSS stand for?", a: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"], correct: 0 },
                  { q: "Which property changes text color?", a: ["font-color", "color", "text-color"], correct: 1 },
                  { q: "What is the correct CSS syntax?", a: ["selector: property { value; }", "selector { property: value; }", "property: value { selector; }"], correct: 1 },
                  { q: "Which unit is relative to font size?", a: ["px", "em", "pt"], correct: 1 }
                ] 
              },
              video: { title: "CSS Fundamentals", description: "Introduction to CSS syntax and basic styling" }
            },
            css_selectors: { 
              title: "CSS Selectors & Specificity", 
              text: [
                "CSS selectors target HTML elements for styling. Understanding selectors is crucial for effective CSS.",
                "Basic Selectors:",
                "```css\n/* Element selector */\np { color: blue; }\n\n/* Class selector */\n.highlight { background-color: yellow; }\n\n/* ID selector */\n#header { font-size: 24px; }\n\n/* Universal selector */\n* { margin: 0; padding: 0; }```",
                "Attribute Selectors:",
                "```css\n/* Attribute exists */\n[title] { border: 1px solid red; }\n\n/* Attribute equals value */\n[type=\"text\"] { background-color: #f0f0f0; }\n\n/* Attribute contains value */\n[class*=\"btn\"] { padding: 10px; }\n\n/* Attribute starts with value */\n[href^=\"https\"] { color: green; }\n\n/* Attribute ends with value */\n[src$=\".jpg\"] { border-radius: 5px; }```",
                "Pseudo-classes:",
                "```css\n/* Link states */\na:link { color: blue; }\na:visited { color: purple; }\na:hover { color: red; }\na:active { color: orange; }\n\n/* Form states */\ninput:focus { border-color: blue; }\ninput:invalid { border-color: red; }\ninput:valid { border-color: green; }\n\n/* Position-based */\np:first-child { font-weight: bold; }\np:last-child { margin-bottom: 0; }\np:nth-child(2n) { background-color: #f0f0f0; }```",
                "CSS Specificity (from highest to lowest):",
                "1. Inline styles (1000 points)",
                "2. IDs (100 points each)",
                "3. Classes, attributes, pseudo-classes (10 points each)",
                "4. Elements and pseudo-elements (1 point each)"
              ],
              quiz: { 
                title: "CSS Selectors Quiz", 
                questions: [ 
                  { q: "Which selector has the highest specificity?", a: ["class", "id", "element"], correct: 1 },
                  { q: "What does the '>' combinator select?", a: ["Descendants", "Direct children", "Siblings"], correct: 1 },
                  { q: "Which pseudo-class targets hover state?", a: [":focus", ":hover", ":active"], correct: 1 },
                  { q: "What does [class*=\"btn\"] select?", a: ["Elements with class=\"btn\"", "Elements with class containing \"btn\"", "Elements with class starting with \"btn\""], correct: 1 }
                ] 
              },
              video: { title: "CSS Selectors", description: "Mastering CSS selectors and specificity rules" }
            },
            css_layout: { 
              title: "CSS Layout & Positioning", 
              text: [
                "CSS provides powerful tools for controlling the layout and positioning of elements on a web page.",
                "Display Property:",
                "```css\n/* Block elements */\ndiv { display: block; }\n\n/* Inline elements */\nspan { display: inline; }\n\n/* Inline-block elements */\n.button { display: inline-block; }\n\n/* Flexbox container */\n.container { display: flex; }\n\n/* Grid container */\n.grid { display: grid; }\n\n/* Hidden elements */\n.hidden { display: none; }```",
                "Position Property:",
                "```css\n/* Static (default) */\n.static { position: static; }\n\n/* Relative positioning */\n.relative {\n    position: relative;\n    top: 10px;\n    left: 20px;\n}\n\n/* Absolute positioning */\n.absolute {\n    position: absolute;\n    top: 50px;\n    right: 10px;\n}\n\n/* Fixed positioning */\n.fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n/* Sticky positioning */\n.sticky {\n    position: sticky;\n    top: 0;\n}```",
                "Box Model:",
                "```css\n.box {\n    width: 300px;\n    height: 200px;\n    padding: 20px;\n    border: 5px solid #000;\n    margin: 10px;\n    box-sizing: border-box; /* Include padding and border in width */\n}\n\n/* Box-sizing reset */\n* {\n    box-sizing: border-box;\n}```",
                "Float and Clear:",
                "```css\n/* Float elements */\n.left { float: left; }\n.right { float: right; }\n\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    display: table;\n    clear: both;\n}```"
              ],
              quiz: { 
                title: "CSS Layout Quiz", 
                questions: [ 
                  { q: "Which position value removes element from normal flow?", a: ["relative", "absolute", "static"], correct: 1 },
                  { q: "What does 'box-sizing: border-box' do?", a: ["Adds borders", "Includes padding in width", "Removes margins"], correct: 1 },
                  { q: "Which display value creates a flexbox container?", a: ["block", "flex", "grid"], correct: 1 },
                  { q: "What property controls stacking order?", a: ["stack", "z-index", "order"], correct: 1 }
                ] 
              },
              video: { title: "CSS Layout", description: "Understanding CSS positioning and layout techniques" }
            },
            css_grid_flexbox: { 
              title: "CSS Grid & Flexbox", 
              text: [
                "CSS Grid and Flexbox are modern layout systems that provide powerful tools for creating complex, responsive layouts.",
                "Flexbox (One-dimensional layouts):",
                "```css\n/* Flexbox container */\n.flex-container {\n    display: flex;\n    flex-direction: row; /* row, column, row-reverse, column-reverse */\n    justify-content: center; /* flex-start, flex-end, center, space-between, space-around */\n    align-items: center; /* flex-start, flex-end, center, stretch, baseline */\n    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */\n    gap: 20px;\n}\n\n/* Flexbox items */\n.flex-item {\n    flex: 1; /* flex-grow flex-shrink flex-basis */\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 200px;\n    align-self: flex-start;\n}```",
                "CSS Grid (Two-dimensional layouts):",
                "```css\n/* Grid container */\n.grid-container {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr; /* Fractional units */\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        \"header header header\"\n        \"sidebar main aside\"\n        \"footer footer footer\";\n    gap: 20px;\n    justify-items: center;\n    align-items: start;\n}\n\n/* Grid items */\n.grid-item {\n    grid-column: 1 / 3; /* Start / End */\n    grid-row: 1;\n    grid-area: header; /* Named grid area */\n    justify-self: stretch;\n    align-self: center;\n}```",
                "Responsive Grid:",
                "```css\n.responsive-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 1rem;\n}\n\n/* Media queries for different screen sizes */\n@media (max-width: 768px) {\n    .grid-container {\n        grid-template-columns: 1fr;\n        grid-template-areas:\n            \"header\"\n            \"main\"\n            \"sidebar\"\n            \"aside\"\n            \"footer\";\n    }\n}```"
              ],
              quiz: { 
                title: "CSS Grid & Flexbox Quiz", 
                questions: [ 
                  { q: "Which layout system is one-dimensional?", a: ["Grid", "Flexbox", "Both"], correct: 1 },
                  { q: "What does 'fr' unit represent in Grid?", a: ["Fixed pixels", "Fraction of available space", "Font size"], correct: 1 },
                  { q: "Which property controls main axis alignment in Flexbox?", a: ["align-items", "justify-content", "flex-direction"], correct: 1 },
                  { q: "What does 'auto-fit' do in Grid?", a: ["Fits content", "Creates as many columns as fit", "Makes columns equal width"], correct: 1 }
                ] 
              },
              video: { title: "CSS Grid & Flexbox", description: "Modern CSS layout systems for responsive design" }
            },
            css_animations: { 
              title: "CSS Animations & Effects", 
              text: [
                "CSS animations and effects bring websites to life with smooth transitions, transforms, and keyframe animations.",
                "Transitions:",
                "```css\n/* Basic transition */\n.button {\n    background-color: blue;\n    transition: background-color 0.3s ease;\n}\n\n.button:hover {\n    background-color: red;\n}\n\n/* Multiple properties */\n.card {\n    transition: all 0.3s ease-in-out;\n    transform: scale(1);\n}\n\n.card:hover {\n    transform: scale(1.05);\n    box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n}```",
                "Transforms:",
                "```css\n/* 2D Transforms */\n.rotate {\n    transform: rotate(45deg);\n}\n\n.scale {\n    transform: scale(1.5);\n}\n\n.translate {\n    transform: translate(50px, 20px);\n}\n\n.skew {\n    transform: skew(10deg, 5deg);\n}\n\n/* Multiple transforms */\n.complex {\n    transform: rotate(45deg) scale(1.2) translate(10px, 10px);\n}```",
                "Keyframe Animations:",
                "```css\n/* Define keyframes */\n@keyframes slideIn {\n    0% {\n        transform: translateX(-100%);\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0);\n        opacity: 1;\n    }\n}\n\n/* Apply animation */\n.slide-in {\n    animation: slideIn 1s ease-out;\n}\n\n/* Animation properties */\n.bounce {\n    animation-name: bounce;\n    animation-duration: 2s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n}```"
              ],
              quiz: { 
                title: "CSS Animations Quiz", 
                questions: [ 
                  { q: "Which property creates smooth transitions?", a: ["animation", "transition", "transform"], correct: 1 },
                  { q: "What does 'ease-in-out' timing function do?", a: ["Starts slow, ends fast", "Starts fast, ends slow", "Starts slow, speeds up, then slows down"], correct: 2 },
                  { q: "Which transform moves an element?", a: ["rotate()", "translate()", "scale()"], correct: 1 },
                  { q: "What does 'animation-iteration-count: infinite' do?", a: ["Plays once", "Plays forever", "Plays twice"], correct: 1 }
                ] 
              },
              video: { title: "CSS Animations", description: "Creating engaging animations and effects with CSS" }
            },
            web_accessibility: { 
              title: "Web Accessibility", 
              text: [
                "Web accessibility ensures websites are usable by people with disabilities. It's not just good practice—it's often legally required.",
                "Semantic HTML:",
                "```html\n<!-- Use semantic elements -->\n<header>\n    <nav aria-label=\"Main navigation\">\n        <ul>\n            <li><a href=\"#home\">Home</a></li>\n            <li><a href=\"#about\">About</a></li>\n            <li><a href=\"#contact\">Contact</a></li>\n        </ul>\n    </nav>\n</header>\n\n<main>\n    <article>\n        <h1>Article Title</h1>\n        <p>Article content...</p>\n    </article>\n</main>```",
                "ARIA (Accessible Rich Internet Applications):",
                "```html\n<!-- ARIA labels and descriptions -->\n<button aria-label=\"Close dialog\">×</button>\n<input type=\"text\" aria-describedby=\"email-help\" id=\"email\">\n<div id=\"email-help\">Enter your email address</div>\n\n<!-- ARIA roles -->\n<div role=\"button\" tabindex=\"0\" aria-pressed=\"false\">Custom Button</div>\n<div role=\"alert\" aria-live=\"polite\">Important message</div>```",
                "Keyboard Navigation:",
                "```css\n/* Focus indicators */\n:focus {\n    outline: 2px solid #0066cc;\n    outline-offset: 2px;\n}\n\n/* Skip links */\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 6px;\n    background: #000;\n    color: #fff;\n    padding: 8px;\n    text-decoration: none;\n}\n\n.skip-link:focus {\n    top: 6px;\n}```",
                "Color and Contrast:",
                "```css\n/* Ensure sufficient color contrast */\n.text {\n    color: #333333; /* Dark text on light background */\n    background-color: #ffffff;\n}\n\n/* Don't rely solely on color */\n.error {\n    color: #d32f2f;\n    border-left: 4px solid #d32f2f;\n    padding-left: 8px;\n}```"
              ],
              quiz: { 
                title: "Web Accessibility Quiz", 
                questions: [ 
                  { q: "What does ARIA stand for?", a: ["Accessible Rich Internet Applications", "Advanced Responsive Interface Access", "Automated Reading Interface Assistant"], correct: 0 },
                  { q: "Which attribute provides alternative text for images?", a: ["title", "alt", "src"], correct: 1 },
                  { q: "What is the minimum recommended color contrast ratio?", a: ["3:1", "4.5:1", "7:1"], correct: 1 },
                  { q: "Which element should be used for main page content?", a: ["<div>", "<main>", "<section>"], correct: 1 }
                ] 
              },
              video: { title: "Web Accessibility", description: "Making websites accessible to all users" }
            },
            responsive_design: { 
              title: "Responsive Web Design", 
              text: [
                "Responsive web design ensures websites work well on all devices and screen sizes. It's essential for modern web development.",
                "Viewport Meta Tag:",
                "```<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">```",
                "Media Queries:",
                "```css\n/* Mobile first approach */\n.container {\n    width: 100%;\n    padding: 10px;\n}\n\n/* Tablet styles */\n@media (min-width: 768px) {\n    .container {\n        width: 750px;\n        margin: 0 auto;\n        padding: 20px;\n    }\n}\n\n/* Desktop styles */\n@media (min-width: 1024px) {\n    .container {\n        width: 1200px;\n        padding: 30px;\n    }\n}```",
                "Flexible Images:",
                "```css\n/* Responsive images */\nimg {\n    max-width: 100%;\n    height: auto;\n}\n\n/* Responsive background images */\n.hero {\n    background-image: url('hero-mobile.jpg');\n    background-size: cover;\n    background-position: center;\n}\n\n@media (min-width: 768px) {\n    .hero {\n        background-image: url('hero-desktop.jpg');\n    }\n}```",
                "Responsive Typography:",
                "```css\n/* Fluid typography */\nhtml {\n    font-size: 16px;\n}\n\nh1 {\n    font-size: clamp(1.5rem, 4vw, 3rem);\n    line-height: 1.2;\n}\n\np {\n    font-size: clamp(1rem, 2.5vw, 1.25rem);\n    line-height: 1.6;\n}```"
              ],
              quiz: { 
                title: "Responsive Design Quiz", 
                questions: [ 
                  { q: "What is the mobile-first approach?", a: ["Design for desktop first", "Design for mobile first", "Design for tablet first"], correct: 1 },
                  { q: "Which CSS function creates fluid typography?", a: ["fluid()", "clamp()", "responsive()"], correct: 1 },
                  { q: "What does 'auto-fit' do in CSS Grid?", a: ["Fits content to container", "Creates as many columns as fit", "Makes all columns equal width"], correct: 1 },
                  { q: "What is the minimum recommended touch target size?", a: ["24px", "32px", "44px"], correct: 2 }
                ] 
              },
              video: { title: "Responsive Design", description: "Creating mobile-first responsive websites" }
            },
            quiz: {
              title: "Web Development Quiz",
              questions: [
                { q: "Which HTML tag creates the largest heading?", a: ["<h6>", "<h1>", "<head>"], correct: 1 },
                { q: "What does CSS stand for?", a: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"], correct: 0 },
                { q: "Which CSS property changes text color?", a: ["font-color", "color", "text-color"], correct: 1 },
                { q: "What is the mobile-first approach?", a: ["Design for desktop first", "Design for mobile first", "Design for tablet first"], correct: 1 },
                { q: "Which layout system is two-dimensional?", a: ["Flexbox", "Grid", "Float"], correct: 1 },
                { q: "What does the 'alt' attribute do?", a: ["Adds alignment", "Provides alternative text", "Creates animation"], correct: 1 },
                { q: "Which CSS property creates smooth transitions?", a: ["animation", "transition", "transform"], correct: 1 },
                { q: "What is the purpose of semantic HTML?", a: ["Adds styling", "Improves accessibility", "Creates animations"], correct: 1 },
                { q: "Which input type is used for passwords?", a: ["text", "password", "hidden"], correct: 1 },
                { q: "What does 'box-sizing: border-box' do?", a: ["Adds borders", "Includes padding in width", "Removes margins"], correct: 1 }
              ]
            },
            video: { title: "Web Video", description: "HTML/CSS tutorial video (placeholder)" }
          }
        },
        js: {
          title: "JavaScript Programming Language",
          summary: "Learn JavaScript from scratch with comprehensive modules covering everything from basic syntax to modern ES6+ features, DOM manipulation, asynchronous programming, and web APIs.",
          meta: {
            duration: "12-15 hours",
            difficulty: "Beginner"
          },
          whatYouWillLearn: [
            "JavaScript fundamentals and syntax",
            "Variables, data types, and operators",
            "Functions and scope concepts",
            "Loops and conditional statements",
            "Objects, arrays, and data structures",
            "DOM manipulation and event handling",
            "Asynchronous JavaScript (Promises, async/await)",
            "Modern ES6+ features",
            "Error handling and debugging",
            "Web APIs and AJAX"
          ],
          syllabus: {
            modules: [
              { title: "Introduction to JavaScript" },
              { title: "Variables and Data Types" },
              { title: "Operators and Expressions" },
              { title: "Functions" },
              { title: "Loops and Conditionals" },
              { title: "Objects and Arrays" },
              { title: "DOM Manipulation" },
              { title: "Event Handling" },
              { title: "Asynchronous JavaScript" },
              { title: "Modern JavaScript (ES6+)" },
              { title: "Error Handling" },
              { title: "Web APIs and AJAX" }
            ]
          },
          modules: {
            intro: { 
              title: "Introduction to JavaScript", 
              text: [
                "JavaScript is a high-level, interpreted programming language that adds interactivity and dynamic behavior to web pages.",
                "JavaScript is primarily used for:",
                "• Adding interactivity to web pages",
                "• Creating dynamic content",
                "• Handling user events (clicks, form submissions)",
                "• Making web pages responsive and engaging",
                "• Building web applications and mobile apps",
                "• Server-side development (Node.js)",
                "• Game development and desktop applications",
                "",
                "JavaScript can be added to HTML in three ways:",
                "```<!-- 1. Inline JavaScript -->\n<button onclick=\"alert('Hello!')\">Click me</button>\n\n<!-- 2. Internal JavaScript -->\n<script>\n    console.log('Hello, World!');\n</script>\n\n<!-- 3. External JavaScript -->\n<script src=\"script.js\"></script>```",
                "",
                "```// Your first JavaScript code\nconsole.log('Hello, World!');\n```"
              ],
            quiz: {
                title: "Introduction to JavaScript Quiz", 
              questions: [
                  { q: "What is JavaScript primarily used for?", a: ["Web page styling", "Web page structure", "Web page interactivity"], correct: 2 },
                  { q: "Which tag is used to include JavaScript in HTML?", a: ["<js>", "<script>", "<javascript>"], correct: 1 },
                  { q: "What does console.log() do?", a: ["Shows an alert", "Displays text in console", "Creates a button"], correct: 1 },
                  { q: "Can JavaScript run on both client and server?", a: ["No, only client", "No, only server", "Yes, both"], correct: 2 }
                ] 
              },
              video: { title: "Introduction to JavaScript", description: "Getting started with JavaScript programming" }
            },
            beginning: { 
              title: "Variables and Data Types", 
              text: [
                "Variables in JavaScript are containers for storing data values. JavaScript has three ways to declare variables.",
                "Variable Declaration:",
                "• let - Block-scoped, can be reassigned",
                "• const - Block-scoped, cannot be reassigned",
                "• var - Function-scoped (older method, avoid)",
                "",
                "```// Variable declaration\nlet name = 'John';\nconst age = 25;\nvar oldMethod = 'Should not be used';\n```",
                "",
                "Data Types:",
                "• String: Text data ('Hello', \"World\")",
                "• Number: Numeric data (42, 3.14)",
                "• Boolean: True/false values",
                "• Undefined: Variable declared but not assigned",
                "• Null: Intentional absence of value",
                "• Object: Complex data structures",
                "• Array: [1, 2, 3]",
                "",
                "```// Different data types\nlet text = 'JavaScript';\nlet number = 42;\nlet boolean = true;\nlet empty = null;\nlet undefined = undefined;\n```"
              ],
              quiz: { 
                title: "Variables and Data Types Quiz", 
                questions: [ 
                  { q: "Which keyword creates a constant variable?", a: ["let", "const", "var"], correct: 1 },
                  { q: "What data type is 'Hello'?", a: ["Number", "String", "Boolean"], correct: 1 },
                  { q: "Which variable declaration should you avoid?", a: ["let", "const", "var"], correct: 2 },
                  { q: "What is the value of an uninitialized variable?", a: ["null", "undefined", "0"], correct: 1 }
                ] 
              },
              video: { title: "Variables and Data Types", description: "Understanding JavaScript variables and data types" }
            },
            operators: { 
              title: "Operators and Expressions", 
              text: [
                "Operators perform operations on variables and values. JavaScript has several types of operators.",
                "Arithmetic Operators:",
                "• + Addition: 5 + 3 = 8",
                "• - Subtraction: 5 - 3 = 2",
                "• * Multiplication: 5 * 3 = 15",
                "• / Division: 15 / 3 = 5",
                "• % Modulus (remainder): 10 % 3 = 1",
                "• ** Exponentiation: 2 ** 3 = 8",
                "",
                "```// Arithmetic operators\nlet a = 10;\nlet b = 3;\nconsole.log(a + b); // 13\nconsole.log(a - b); // 7\nconsole.log(a * b); // 30\nconsole.log(a / b); // 3.333...\nconsole.log(a % b); // 1\n```",
                "",
                "Comparison Operators:",
                "• == Equal to (loose equality)",
                "• === Equal to (strict equality)",
                "• != Not equal to (loose)",
                "• !== Not equal to (strict)",
                "• > Greater than",
                "• < Less than",
                "• >= Greater than or equal",
                "• <= Less than or equal",
                "",
                "```// Comparison operators\nlet x = 5;\nlet y = '5';\nconsole.log(x == y);  // true (loose)\nconsole.log(x === y); // false (strict)\nconsole.log(x > 3);   // true\n```"
              ],
              quiz: { 
                title: "Operators and Expressions Quiz", 
                questions: [ 
                  { q: "What is the result of 10 % 3?", a: ["3", "1", "0"], correct: 1 },
                  { q: "Which operator checks strict equality?", a: ["==", "===", "="], correct: 1 },
                  { q: "What does the && operator do?", a: ["OR operation", "AND operation", "NOT operation"], correct: 1 },
                  { q: "What is 2 ** 3?", a: ["6", "8", "9"], correct: 1 }
                ] 
              },
              video: { title: "Operators and Expressions", description: "Working with JavaScript operators and expressions" }
            },
            functions: { 
              title: "Functions", 
              text: [
                "Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.",
                "Function Declaration:",
                "```function greet(name) {\n  return 'Hello, ' + name + '!';\n}\n\nlet message = greet('Alice');\nconsole.log(message); // Hello, Alice!\n```",
                "",
                "Function Expression:",
                "```const greet = function(name) {\n  return 'Hello, ' + name + '!';\n};\n```",
                "",
                "Arrow Functions (ES6):",
                "```const greet = (name) => {\n  return 'Hello, ' + name + '!';\n};\n\n// Shorter version for single expression\nconst greet = name => 'Hello, ' + name + '!';\n```",
                "",
                "Function Parameters:",
                "• Parameters are variables in the function definition",
                "• Arguments are values passed when calling the function",
                "• Functions can have multiple parameters",
                "• Default parameters can be set",
                "",
                "```function calculateArea(length = 1, width = 1) {\n  return length * width;\n}\n\nconsole.log(calculateArea(5, 3)); // 15\nconsole.log(calculateArea(5));     // 5 (width defaults to 1)\n```"
              ],
              quiz: { 
                title: "Functions Quiz", 
                questions: [ 
                  { q: "How do you call a function?", a: ["call func", "func()", "run func"], correct: 1 },
                  { q: "What does the return statement do?", a: ["Stops the function", "Returns a value", "Both"], correct: 2 },
                  { q: "Which is an arrow function?", a: ["function() {}", "() => {}", "arrow() {}"], correct: 1 },
                  { q: "What happens if a function has no return?", a: ["Error", "Returns undefined", "Returns null"], correct: 1 }
                ] 
              },
              video: { title: "Functions", description: "Creating and using functions in JavaScript" }
            },
            events: { 
              title: "Event Handling", 
              text: [
                "Events are actions that happen in the browser, such as clicks, key presses, or page loads. JavaScript can respond to these events.",
                "Adding Event Listeners:",
                "```let button = document.getElementById('myButton');\n\n// Method 1: addEventListener (recommended)\nbutton.addEventListener('click', function() {\n  console.log('Button clicked!');\n});\n\n// Method 2: onclick property\nbutton.onclick = function() {\n  console.log('Button clicked!');\n};\n```",
                "",
                "Event Object:",
                "```button.addEventListener('click', function(event) {\n  console.log('Event type:', event.type);\n  console.log('Target element:', event.target);\n  console.log('Mouse position:', event.clientX, event.clientY);\n  \n  // Prevent default behavior\n  event.preventDefault();\n  \n  // Stop event propagation\n  event.stopPropagation();\n});\n```",
                "",
                "Common Event Types:",
                "• click - Mouse click",
                "• dblclick - Double click",
                "• keydown/keyup - Keyboard press/release",
                "• load - Page loaded",
                "• submit - Form submission",
                "• change - Input value changed",
                "• focus/blur - Element focused/unfocused"
              ],
              quiz: { 
                title: "Event Handling Quiz", 
                questions: [ 
                  { q: "Which method is recommended for adding event listeners?", a: ["onclick", "addEventListener", "attachEvent"], correct: 1 },
                  { q: "What does preventDefault() do?", a: ["Stops event", "Prevents default behavior", "Continues event"], correct: 1 },
                  { q: "Which event fires when a key is pressed?", a: ["keydown", "keyup", "Both"], correct: 2 },
                  { q: "What does stopPropagation() do?", a: ["Stops event", "Prevents event bubbling", "Continues event"], correct: 1 }
                ] 
              },
              video: { title: "Event Handling", description: "Handling user interactions and browser events" }
            },
            loops: { 
              title: "Loops and Conditionals", 
              text: [
                "Loops and conditionals control the flow of your program, allowing you to make decisions and repeat actions.",
                "If-Else Statements:",
                "```let age = 18;\nif (age >= 18) {\n  console.log('You are an adult');\n} else if (age >= 13) {\n  console.log('You are a teenager');\n} else {\n  console.log('You are a child');\n}\n```",
                "",
                "For Loop:",
                "```for (let i = 0; i < 5; i++) {\n  console.log('Count: ' + i);\n}\n// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4\n```",
                "",
                "While Loop:",
                "```let count = 0;\nwhile (count < 3) {\n  console.log('Count: ' + count);\n  count++;\n}\n```"
              ],
              quiz: { 
                title: "Loops and Conditionals Quiz", 
                questions: [ 
                  { q: "Which loop runs at least once?", a: ["for", "while", "do-while"], correct: 2 },
                  { q: "What does the break statement do?", a: ["Continues loop", "Exits loop", "Skips iteration"], correct: 1 },
                  { q: "Which operator is used for ternary condition?", a: ["?", ":", "??"], correct: 0 },
                  { q: "What does i++ do?", a: ["Adds 1 to i", "Subtracts 1 from i", "Multiplies i by 2"], correct: 0 }
                ] 
              },
              video: { title: "Loops and Conditionals", description: "Controlling program flow with loops and conditionals" }
            },
            objects: { 
              title: "Objects and Arrays", 
              text: [
                "Objects and arrays are fundamental data structures in JavaScript for storing and organizing data.",
                "Objects:",
                "```let person = {\n  name: 'John',\n  age: 30,\n  city: 'New York',\n  greet: function() {\n    return 'Hello, I am ' + this.name;\n  }\n};\n\nconsole.log(person.name);        // John\nconsole.log(person['age']);      // 30\nconsole.log(person.greet());     // Hello, I am John\n```",
                "",
                "Array Creation and Access:",
                "```let fruits = ['apple', 'banana', 'orange'];\nlet numbers = [1, 2, 3, 4, 5];\nlet mixed = ['hello', 42, true, { name: 'John' }];\n\nconsole.log(fruits[0]);    // apple\nconsole.log(fruits.length); // 3\n```"
              ],
              quiz: { 
                title: "Objects and Arrays Quiz", 
                questions: [ 
                  { q: "How do you access object properties?", a: ["obj.property", "obj[property]", "Both"], correct: 2 },
                  { q: "What does push() do to an array?", a: ["Removes last element", "Adds element to end", "Adds element to beginning"], correct: 1 },
                  { q: "What does map() return?", a: ["Modified original array", "New array", "Single value"], correct: 1 },
                  { q: "How do you get array length?", a: [".size", ".length", ".count"], correct: 1 }
                ] 
              },
              video: { title: "Objects and Arrays", description: "Working with JavaScript objects and arrays" }
            },
            dom: { 
              title: "DOM Manipulation", 
              text: [
                "The Document Object Model (DOM) represents the HTML document as a tree structure. JavaScript can manipulate the DOM to change content, structure, and styling.",
                "Selecting Elements:",
                "```// By ID\nlet element = document.getElementById('myId');\n\n// By class name\nlet elements = document.getElementsByClassName('myClass');\n\n// Modern selectors\nlet element = document.querySelector('#myId');\nlet elements = document.querySelectorAll('.myClass');\n```",
                "",
                "Modifying Content:",
                "```let element = document.getElementById('myDiv');\n\n// Change text content\nelement.textContent = 'New text';\nelement.innerHTML = '<strong>Bold text</strong>';\n\n// Change attributes\nelement.setAttribute('class', 'newClass');\nelement.style.color = 'red';\n```"
              ],
              quiz: { 
                title: "DOM Manipulation Quiz", 
                questions: [ 
                  { q: "What does DOM stand for?", a: ["Document Object Model", "Data Object Management", "Dynamic Object Model"], correct: 0 },
                  { q: "Which method selects by ID?", a: ["getElementById()", "getElementByClass()", "querySelector()"], correct: 0 },
                  { q: "What does innerHTML do?", a: ["Gets text only", "Gets/sets HTML content", "Gets attributes"], correct: 1 },
                  { q: "How do you add an event listener?", a: ["addEventListener()", "onClick()", "addEvent()"], correct: 0 }
                ] 
              },
              video: { title: "DOM Manipulation", description: "Manipulating the Document Object Model with JavaScript" }
            },
            async: { 
              title: "Asynchronous JavaScript", 
              text: [
                "Asynchronous JavaScript allows code to run without blocking the main thread, essential for handling time-consuming operations like API calls.",
                "Promises:",
                "```function fetchData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('Data received!');\n    }, 1000);\n  });\n}\n\nfetchData()\n  .then(result => {\n    console.log(result); // Data received!\n  })\n  .catch(error => {\n    console.error('Error:', error);\n  });\n```",
                "",
                "Async/Await:",
                "```async function fetchData() {\n  try {\n    const result = await fetchData();\n    console.log(result); // Data received!\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\nfetchData();\n```"
              ],
              quiz: { 
                title: "Asynchronous JavaScript Quiz", 
                questions: [ 
                  { q: "What does async/await do?", a: ["Makes code synchronous", "Makes code asynchronous", "Stops execution"], correct: 1 },
                  { q: "What does .then() do?", a: ["Handles success", "Handles errors", "Both"], correct: 0 },
                  { q: "What does fetch() return?", a: ["Data", "Promise", "Callback"], correct: 1 },
                  { q: "What does Promise.all() do?", a: ["Runs promises in sequence", "Waits for all promises", "Runs first promise"], correct: 1 }
                ] 
              },
              video: { title: "Asynchronous JavaScript", description: "Working with async operations and Promises" }
            },
            modern: { 
              title: "Modern JavaScript (ES6+)", 
              text: [
                "ES6+ (ECMAScript 2015+) introduced many modern features that make JavaScript more powerful and easier to use.",
                "Template Literals:",
                "```let name = 'John';\nlet age = 30;\n\n// Old way\nlet message = 'Hello, ' + name + ', you are ' + age + ' years old';\n\n// Template literals\nlet message = `Hello, ${name}, you are ${age} years old`;\nconsole.log(message); // Hello, John, you are 30 years old\n```",
                "",
                "Arrow Functions:",
                "```// Regular function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow function\nconst add = (a, b) => a + b;\n\n// With one parameter\nconst square = x => x * x;\n\n// With no parameters\nconst greet = () => 'Hello!';\n```"
              ],
              quiz: { 
                title: "Modern JavaScript Quiz", 
                questions: [ 
                  { q: "What are template literals enclosed in?", a: ["Quotes", "Backticks", "Parentheses"], correct: 1 },
                  { q: "What does destructuring do?", a: ["Creates objects", "Extracts values", "Deletes properties"], correct: 1 },
                  { q: "Which is an arrow function?", a: ["function() {}", "() => {}", "arrow() {}"], correct: 1 },
                  { q: "What does the spread operator do?", a: ["Combines arrays", "Splits arrays", "Sorts arrays"], correct: 0 }
                ] 
              },
              video: { title: "Modern JavaScript", description: "ES6+ features and modern JavaScript syntax" }
            },
            error: { 
              title: "Error Handling", 
              text: [
                "Error handling allows your program to gracefully handle unexpected situations and continue running.",
                "Try-Catch Blocks:",
                "```try {\n  // Code that might throw an error\n  let result = riskyOperation();\n  console.log('Success:', result);\n} catch (error) {\n  // Handle the error\n  console.error('Error occurred:', error.message);\n} finally {\n  // Code that always runs\n  console.log('Cleanup code');\n}\n```",
                "",
                "Throwing Custom Errors:",
                "```function divide(a, b) {\n  if (b === 0) {\n    throw new Error('Division by zero is not allowed');\n  }\n  return a / b;\n}\n\ntry {\n  let result = divide(10, 0);\n} catch (error) {\n  console.error('Error:', error.message); // Division by zero is not allowed\n}\n```"
              ],
              quiz: { 
                title: "Error Handling Quiz", 
                questions: [ 
                  { q: "What does try-catch do?", a: ["Prevents errors", "Handles errors", "Creates errors"], correct: 1 },
                  { q: "What does finally do?", a: ["Handles errors", "Always runs", "Only on success"], correct: 1 },
                  { q: "What keyword throws an error?", a: ["throw", "error", "catch"], correct: 0 },
                  { q: "What does .catch() handle?", a: ["Success", "Errors", "Both"], correct: 1 }
                ] 
              },
              video: { title: "Error Handling", description: "Handling errors and exceptions in JavaScript" }
            },
            apis: { 
              title: "Web APIs and AJAX", 
              text: [
                "Web APIs allow JavaScript to communicate with servers and fetch data without reloading the page.",
                "Fetch API (Modern):",
                "```// GET request\nfetch('https://jsonplaceholder.typicode.com/posts')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    return response.json();\n  })\n  .then(data => {\n    console.log('Posts:', data);\n  })\n  .catch(error => {\n    console.error('Error:', error);\n  });\n```",
                "",
                "Working with JSON:",
                "```// Converting to JSON\nlet person = { name: 'John', age: 30 };\nlet jsonString = JSON.stringify(person);\nconsole.log(jsonString); // {\"name\":\"John\",\"age\":30}\n\n// Parsing JSON\nlet jsonData = '{\"name\":\"John\",\"age\":30}';\nlet parsedPerson = JSON.parse(jsonData);\nconsole.log(parsedPerson.name); // John\n```"
              ],
              quiz: { 
                title: "Web APIs and AJAX Quiz", 
                questions: [ 
                  { q: "What does fetch() return?", a: ["Data", "Promise", "Response"], correct: 1 },
                  { q: "What does JSON.stringify() do?", a: ["Parses JSON", "Converts to JSON", "Validates JSON"], correct: 1 },
                  { q: "What method is used for POST requests?", a: ["GET", "POST", "PUT"], correct: 1 },
                  { q: "What does .json() do?", a: ["Converts to JSON", "Parses JSON response", "Validates JSON"], correct: 1 }
                ] 
              },
              video: { title: "Web APIs and AJAX", description: "Working with web APIs and making HTTP requests" }
            },
            quiz: {
              title: "JavaScript Quiz",
              questions: [
                { q: "Which keyword creates a constant variable?", a: ["let", "const", "var"], correct: 1 },
                { q: "What does console.log() do?", a: ["Shows alert", "Displays in console", "Creates button"], correct: 1 },
                { q: "Which operator checks strict equality?", a: ["==", "===", "="], correct: 1 },
                { q: "What does addEventListener() do?", a: ["Adds element", "Adds event listener", "Adds style"], correct: 1 },
                { q: "What does fetch() return?", a: ["Data", "Promise", "Response"], correct: 1 },
                { q: "Which is an arrow function?", a: ["function() {}", "() => {}", "arrow() {}"], correct: 1 },
                { q: "What does try-catch do?", a: ["Prevents errors", "Handles errors", "Creates errors"], correct: 1 },
                { q: "What does JSON.stringify() do?", a: ["Parses JSON", "Converts to JSON", "Validates JSON"], correct: 1 }
              ]
            },
            video: { title: "JS Video", description: "JavaScript tutorial video (placeholder)" }
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: (typeof localStorage !== 'undefined' && localStorage.getItem('lng')) || 'tr',
    fallbackLng: 'en',
    load: 'languageOnly',
    supportedLngs: ['en', 'tr'],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    returnObjects: true
  });

export default i18n;

