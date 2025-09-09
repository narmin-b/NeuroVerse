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
        delete: "Sil"
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
        studentsDemo: "Öğrenciler: student1/password123, student2/password123",
        teachersDemo: "Öğretmenler: teacher1/password123, teacher2/password123"
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
              video: { title: "Değişkenlere Giriş", description: "Python değişkenleri ve veri tiplerine hızlı giriş" }
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
              video: { title: "Döngüler", description: "for ve while döngülerine kısa bakış" }
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
              video: { title: "Koşullar", description: "if/elif/else ile karar yapıları" }
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
              video: { title: "Fonksiyonlar", description: "Parametreler ve dönüş değerleri" }
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
              video: { title: "Listeler", description: "Listelerle çalışma ve dilimleme" }
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
              ]
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
              ]
            },
            tuples: {
              title: "Demetler (Tuples)",
              text: [
                "Demetler sıralı ve değişmez dizilerdir: `(1, 2, 3)`.",
                "Çoklu dönüş değeri ve sabit kayıtlar için idealdir.",
                "Açma (unpacking): `x, y = (10, 20)`.",
                "```python\npt = (10, 20)\nx, y = pt\nprint(x, y)\n```"
              ]
            },
            sets: {
              title: "Kümeler (Sets)",
              text: [
                "Kümeler tekrarsız öğelerden oluşur: `{1, 2, 3}`.",
                "Birleşim/kesişim/fark gibi işlemler desteklenir.",
                "```python\na = {1, 2, 3}\nb = {3, 4}\nprint(a | b, a & b, a - b)\n```"
              ]
            },
            files: {
              title: "Dosya İşleme",
              text: [
                "Dosyalar `open(yol, mod)` ile açılır. Kapatmayı unutmayın veya context manager kullanın.",
                "Yaygın modlar: `\"r\"` (okuma), `\"w\"` (yazma/sıfırlama), `\"a\"` (ekleme), `\"rb\"` (ikili).",
                "```python\nfrom pathlib import Path\np = Path('notlar.txt')\nwith p.open('w', encoding='utf-8') as f:\n    f.write('Merhaba\\n')\n```"
              ]
            },
            exceptions: {
              title: "Hatalar/İstisnalar",
              text: [
                "Hataları try/except ile yakalayın; gerekirse finally ile temizliği yapın.",
                "Özel hata fırlatma: `raise ValueError('mesaj')`.",
                "```python\ntry:\n    n = int('sayi-degil')\nexcept ValueError as e:\n    print('Donusum basarisiz:', e)\n```"
              ]
            },
            quiz: {
              title: "Sınav",
              questions: [
                { q: "Aşağıdakilerden hangisi string tipindedir?", a: ["42", "\"Merhaba\"", "True"], correct: 1 },
                { q: "for i in range(3): print(i) çıktısı nedir?", a: ["1 2 3", "0 1 2", "0 1 2 3"], correct: 1 }
              ]
            },
            video: { title: "Python Video", description: "Python eğitim videosu (yer tutucu)" }
          }
        },
        web: {
          title: "HTML/CSS ile Web Geliştirme",
          summary: "HTML ve CSS ile web sayfaları oluşturmayı öğrenin.",
          meta: {
            duration: "5-6 saat",
            difficulty: "Başlangıç"
          },
          whatYouWillLearn: [
            "HTML etiketleri",
            "CSS ile stil verme",
            "Görseller ve bağlantılar",
            "Listeler ve tablolar",
            "Basit formlar"
          ],
          syllabus: {
            modules: [
              { title: "HTML Temelleri" },
              { title: "Başlıklar ve Paragraflar" },
              { title: "Listeler ve Linkler" },
              { title: "CSS Giriş" },
              { title: "Formlar" },
              { title: "Web Quiz" }
            ]
          },
          modules: {
            html_basics: { title: "HTML Temelleri", text: [
              "HTML, web sayfalarının iskeletini oluşturan işaretleme dilidir. Etiketler (tags) ile içerik tanımlanır.",
              "Bir HTML belgesinin temel yapısı: <!DOCTYPE html>, <html>, <head> ve <body> bölümlerinden oluşur.",
              "Anlamlı etiketler (semantic tags) kullanmak erişilebilirlik ve SEO için önemlidir (header, main, footer)."
            ],
              quiz: { title: "Quiz", questions: [ { q: "En büyük başlık etiketi?", a: ["<h6>", "<h1>", "<head>"], correct: 1 } ] },
              video: { title: "HTML Temelleri", description: "HTML yapı taşlarına giriş" }
            },
            headings_paragraphs: { title: "Başlıklar ve Paragraflar", text: [
              "Başlıklar içerik hiyerarşisini kurar: h1 en üst seviye, h2-h6 alt başlıklardır.",
              "Paragraflar p etiketi ile tanımlanır; metin biçimlendirme strong, em, a gibi etiketlerle yapılır.",
              "Uzun metinlerde doğru başlık yapısı, okuyucunun içeriği taramasını kolaylaştırır."
            ],
              quiz: { title: "Quiz", questions: [ { q: "Paragraf etiketi nedir?", a: ["<para>", "<p>", "<pg>"] , correct: 1 } ] },
              video: { title: "Metin Yapısı", description: "Başlık ve paragraf kullanımı" }
            },
            lists_links: { title: "Listeler ve Linkler", text: [
              "Listeler ul (sırasız) ve ol (sıralı) etiketleriyle oluşturulur; li ile madde eklenir.",
              "Linkler a etiketi ile yazılır; href ile hedef URL tanımlanır, yeni sekmede açmak için target özniteliği kullanılabilir.",
              "Gezinme menüleri listelerle semantik ve erişilebilir bir şekilde oluşturulabilir."
            ],
              quiz: { title: "Quiz", questions: [ { q: "Bağlantı için hangi etiket?", a: ["<a>", "<link>", "<url>"], correct: 0 } ] },
              video: { title: "Listeler ve Linkler", description: "Menüler ve navigasyon" }
            },
            css_intro: { title: "CSS Giriş", text: [
              "CSS, HTML öğelerini seçerek görsel stil uygular. Seçiciler, özellikler ve değerlerden oluşur.",
              "Kutu modeli (box model) margin, border, padding ve content alanlarından oluşur.",
              "Sınıflar (class) ve kimlikler (id) ile seçiciler güçlendirilir; modern projelerde utility-first yaklaşımlar da yaygındır."
            ],
              quiz: { title: "Quiz", questions: [ { q: "Rengi kırmızı yapan özellik?", a: ["font", "color", "paint"], correct: 1 } ] },              video: { title: "CSS'e Giriş", description: "Seçiciler ve temel stiller" }
            },
            forms: { title: "Formlar", text: [
              "Formlar, kullanıcıdan veri toplamak için kullanılır; form etiketinin içinde input, select, textarea, button gibi elemanlar yer alır.",
              "Erişilebilirlik için label etiketlerini doğru kullanmak önemlidir. Basit doğrulamalar HTML5 ile yapılabilir.",
              "Sunucuya veri gönderimi genellikle POST metodu ile yapılır; modern uygulamalarda AJAX veya fetch tercih edilir."
            ],
              quiz: { title: "Quiz", questions: [ { q: "Formu gönderen etiket?", a: ["<send>", "<submit>", "<button>"], correct: 2 } ] },
              video: { title: "Formlar", description: "Form elementleri ve doğrulama" }
            },
            quiz: {
              title: "Quiz",
              questions: [
                { q: "Bir paragraf için hangi etiket kullanılır?", a: ["<div>", "<p>", "<span>"], correct: 1 },
                { q: "<a> etiketi ne işe yarar?", a: ["Resim eklemek", "Bağlantı oluşturmak", "Liste yapmak"], correct: 1 }
              ]
            },
            video: { title: "Web Video", description: "HTML/CSS eğitim videosu (yer tutucu)" }
          }
        },
        js: {
          title: "JavaScript Temelleri",
          summary: "JavaScript ile web sayfalarına etkileşim ekleyin.",
          meta: {
            duration: "6-7 saat",
            difficulty: "Orta"
          },
          whatYouWillLearn: [
            "JavaScript sözdizimi",
            "Değişkenler ve veri tipleri",
            "Fonksiyonlar",
            "Operatörler",
            "Olaylarla etkileşim"
          ],
          syllabus: {
            modules: [
              { title: "JavaScript'e Giriş" },
              { title: "Değişkenler" },
              { title: "Operatörler" },
              { title: "Fonksiyonlar" },
              { title: "Olaylar" },
              { title: "JS Quiz" }
            ]
          },
          modules: {
            intro: { title: "JavaScript'e Giriş", text: [
              "JavaScript, web sayfalarına dinamik davranış kazandıran programlama dilidir.",
              "Tarayıcıda DOM üzerinde çalışır, olaylara tepki verir ve verilerle etkileşim kurar.",
              "Modern JS ekosisteminde modüller, paket yöneticileri ve araç zincirleri (bundler) önemli bir yere sahiptir."
            ],
              quiz: { title: "Quiz", questions: [ { q: "JS hangi amaçla kullanılır?", a: ["Stil", "İçerik", "Etkileşim"], correct: 2 } ] },
              video: { title: "JS'ye Başlangıç", description: "JS nedir ve nerede çalışır" }
            },
            variables: { title: "Değişkenler", text: [
              "let ve const blok seviyesinde kapsam sunar; var fonksiyon kapsamlıdır ve tercih edilmez.",
              "const değişmez bağ ataması yapar; nesne içeriği değişebilir ancak referans değişmez.",
              "Anlamlı isimlendirme ve gölgelemeden (shadowing) kaçınmak iyi pratiklerdir."
            ],
              quiz: { title: "Quiz", questions: [ { q: "Değişmeyecek değer için?", a: ["let", "const", "var"], correct: 1 } ] },
              video: { title: "JS Değişkenler", description: "let/const/var farkları" }
            },
            operators: { title: "Operatörler", text: [
              "+ - * / temel aritmetik operatörlerdir; % mod alır, ** üs alma yapar.",
              "Mantıksal operatörler: && (ve), || (veya), ! (değil). Karşılaştırmalar === ile tür güvenli yapılmalıdır.",
              "Kısa devre (short-circuit) değerlendirme koşullu ifadeleri sadeleştirir."
            ],
              quiz: { title: "Quiz", questions: [ { q: "Mantıksal VE?", a: ["&", "&&", "and"], correct: 1 } ] },
              video: { title: "Operatörler", description: "Aritmetik ve mantıksal operatörler" }
            },
            functions: { title: "Fonksiyonlar", text: [
              "Fonksiyonlar bildirimselle (function) veya ifadesel (const fn = () => {}) yazılabilir.",
              "Ok fonksiyonları this bağlamını leksik olarak yakalar ve kısa söz dizimi sunar.",
              "Parametre varsayılanları, rest/spread operatörleri ve saf fonksiyonlar modern JS'te sık kullanılır."
            ],
              quiz: { title: "Quiz", questions: [ { q: "Fonksiyon nasıl çağrılır?", a: ["call func", "func()", "run func"], correct: 1 } ] },
              video: { title: "Fonksiyonlar", description: "Parametreler ve geri dönüş" }
            },
            events: { title: "Olaylar", text: [
              "Olaylar, kullanıcı etkileşimlerini yakalamayı sağlar. addEventListener ile abonelik yapılır.",
              "Etkinlik nesnesi (event) hedef, tuş, koordinat gibi bilgiler taşır.",
              "Varsayılan davranışı önlemek için event.preventDefault(), yayılmayı durdurmak için stopPropagation kullanılır."
            ],
              quiz: { title: "Quiz", questions: [ { q: "Tıklama olayı?", a: ["onhover", "onclick", "onsubmit"], correct: 1 } ] },
              video: { title: "Olaylar", description: "Event dinleme ve işleme" }
            },
            quiz: {
              title: "Quiz",
              questions: [
                { q: "Alert kutusu açmak için hangi kod kullanılır?", a: ["alert(\"Merhaba\");", "console.log(\"Merhaba\");", "print(\"Merhaba\");"], correct: 0 },
                { q: "Sabit bir değer için hangi anahtar kelime kullanılır?", a: ["let", "const", "var"], correct: 1 }
              ]
            },
            video: { title: "JS Video", description: "JavaScript eğitim videosu (yer tutucu)" }
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
        delete: "Delete"
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
        studentsDemo: "Students: student1/password123, student2/password123",
        teachersDemo: "Teachers: teacher1/password123, teacher2/password123"
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
          title: "Python Fundamentals",
          summary: "Learn Python fundamentals and build your first apps.",
          meta: {
            duration: "6-8 hours",
            difficulty: "Beginner"
          },
          whatYouWillLearn: [
            "Basic Python syntax, variables, and naming",
            "Core data types: numbers, strings, booleans",
            "Lists and other collections (list basics)",
            "Flow control with conditionals and loops",
            "Function definitions and parameters"
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
              ]
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
              ]
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
              ]
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
              ]
            },
            lists: { 
              title: "Lists", 
              text: [
                "Lists are ordered, mutable collections written with square brackets: `[1, 2, 3]`.",
                "Common ops: `append`, `extend`, `insert`, `remove`, `pop`, slicing (`list[start:stop:step]`).",
                "List comprehensions provide concise transformations: `[x*x for x in range(5)]`.",
                "Sorting: `my_list.sort()` (in place) vs `sorted(my_list)` (new list).",
                "Copy carefully: use `my_list.copy()` or `list(my_list)`, not `a = b` which shares the list."
              ]
            },
            strings: {
              title: "Strings",
              text: [
                "Strings are sequences of Unicode characters. Create with quotes: `'hi'` or `\"hi\"`.",
                "Common methods: `lower()`, `upper()`, `strip()`, `replace()`, `split()`, `join()`.",
                "Slicing works like lists: `s[0]`, `s[-1]`, `s[1:4]`.",
                "Formatted strings (f-strings) embed expressions: `f\"{name} has {points} points\"`.",
                "Escape sequences: `\\n` (newline), `\\t` (tab), or use raw strings `r'\\path'`."
              ]
            },
            dictionaries: {
              title: "Dictionaries",
              text: [
                "Dictionaries map keys to values: `user = {'name': 'Ada', 'age': 36}`.",
                "Access/update via keys: `user['name']`, `user.get('role', 'student')`, `user['age'] = 37`.",
                "Iterate with `items()`, `keys()`, `values()`.",
                "Useful methods: `update()`, `pop()`, `setdefault()`, dict comprehensions `{k: v for ...}`.",
                "Keys must be hashable (immutable) types like `str`, `int`, or tuples of immutables."
              ]
            },
            quiz: {
              title: "Quiz",
              questions: [
                { q: "Which one is a string?", a: ["42", "\"Hello\"", "True"], correct: 1 },
                { q: "Output of for i in range(3): print(i)?", a: ["1 2 3", "0 1 2", "0 1 2 3"], correct: 1 }
              ]
            },
            video: { title: "Python Video", description: "Python tutorial video (placeholder)" }
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
              { title: "HTML Basics" },
              { title: "Headings and Paragraphs" },
              { title: "Lists and Links" },
              { title: "CSS Introduction" },
              { title: "Forms" },
              { title: "Web Quiz" }
            ]
          },
          modules: {
            html_basics: { title: "HTML Basics", text: "HTML forms the skeleton of web pages. Example: <h1>Hello</h1>." },
            headings_paragraphs: { title: "Headings and Paragraphs", text: "Headings via h1–h6, paragraphs via p." },
            lists_links: { title: "Lists and Links", text: "Unordered lists (ul), ordered lists (ol), links (a)." },
            css_intro: { title: "CSS Introduction", text: "CSS styles HTML elements. Example: p { color: red; }." },
            forms: { title: "Forms", text: "Forms via form tag with input and button." },
            quiz: {
              title: "Quiz",
              questions: [
                { q: "Which tag is for a paragraph?", a: ["<div>", "<p>", "<span>"], correct: 1 },
                { q: "What does the <a> tag do?", a: ["Add image", "Create link", "Make list"], correct: 1 }
              ]
            },
            video: { title: "Web Video", description: "HTML/CSS tutorial video (placeholder)" }
          }
        },
        js: {
          title: "JavaScript Basics",
          summary: "Add interactivity to web pages with JavaScript.",
          meta: {
            duration: "6-7 hours",
            difficulty: "Intermediate"
          },
          whatYouWillLearn: [
            "JavaScript syntax",
            "Variables and data types",
            "Functions",
            "Operators",
            "Events"
          ],
          syllabus: {
            modules: [
              { title: "Introduction to JavaScript" },
              { title: "Variables" },
              { title: "Operators" },
              { title: "Functions" },
              { title: "Events" },
              { title: "JS Quiz" }
            ]
          },
          modules: {
            intro: { title: "Introduction to JavaScript", text: "JS is used for dynamic web pages. Added with the <script> tag." },
            variables: { title: "Variables", text: "Define variables using let, const, var." },
            operators: { title: "Operators", text: "Math and logical operators like + - * / && ||." },
            functions: { title: "Functions", text: "Reusable code blocks defined with function." },
            events: { title: "Events", text: "Capture interactions with events like onclick and onchange." },
            quiz: {
              title: "Quiz",
              questions: [
                { q: "Which shows an alert box?", a: ["alert(\"Hello\");", "console.log(\"Hello\");", "print(\"Hello\");"], correct: 0 },
                { q: "Which keyword is for a constant?", a: ["let", "const", "var"], correct: 1 }
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

