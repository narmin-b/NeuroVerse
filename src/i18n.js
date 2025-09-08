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
              { title: "Python Quiz" }
            ]
          },
          modules: {
            variables: { 
              title: "Değişkenler ve Veri Tipleri", 
              text: [
                "Python'da değişkenler bellek üzerinde bir değere isim vermemizi sağlar. Bir değişken oluşturduğunuzda sağ taraftaki değerin türüne göre otomatik olarak tip atanır.",
                "Temel veri tipleri: int (tam sayı), float (ondalıklı sayı), str (metin), bool (True/False). Python dinamik tiplidir, yani değişkenin tipini önceden belirtmeniz gerekmez.",
                "İyi isimlendirme önemlidir. Örneğin toplam_puan yerine tp yazmak kodu okunaksız yapar. Anlamlı, okunaklı ve küçük harfli isimler tercih edilir."
              ],
              quiz: {
                title: "Final Sınavı",
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
                "range(start, stop, step) fonksiyonu belirli bir aralıkta sayılar üretir ve for ile sıklıkla kullanılır."
              ],
              quiz: {
                title: "Final Sınavı",
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
                "Karşılaştırma operatörleri (==, !=, <, >, <=, >=) ve mantıksal operatörler (and, or, not) koşul ifadelerinde sıkça kullanılır.",
                "İç içe koşullar yerine koşulları net ve kısa olacak şekilde düzenlemek, okunabilirliği artırır."
              ],
              quiz: {
                title: "Final Sınavı",
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
                "Parametre varsayılan değer alabilir (ör: def selam(isim='Dünya')). Bu sayede opsiyonel davranışlar tanımlanabilir."
              ],
              quiz: {
                title: "Final Sınavı",
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
                "Temel işlemler: ekleme (append, insert), çıkarma (remove, pop), dilimleme (list[start:stop:step]) ve sıralama (sort).",
                "Liste üreteçleri (list comprehensions) hızlı ve okunabilir dönüşümler sağlar: [x*x for x in range(5)]."
              ],
              quiz: {
                title: "Final Sınavı",
                questions: [
                  { q: "Listenin ilk elemanına nasıl erişilir?", a: ["list[0]", "list(1)", "list.first"], correct: 0 }
                ]
              },
              video: { title: "Listeler", description: "Listelerle çalışma ve dilimleme" }
            },
            quiz: {
              title: "Final Sınavı",
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
              quiz: { title: "Final Sınavı", questions: [ { q: "En büyük başlık etiketi?", a: ["<h6>", "<h1>", "<head>"], correct: 1 } ] },
              video: { title: "HTML Temelleri", description: "HTML yapı taşlarına giriş" }
            },
            headings_paragraphs: { title: "Başlıklar ve Paragraflar", text: [
              "Başlıklar içerik hiyerarşisini kurar: h1 en üst seviye, h2-h6 alt başlıklardır.",
              "Paragraflar p etiketi ile tanımlanır; metin biçimlendirme strong, em, a gibi etiketlerle yapılır.",
              "Uzun metinlerde doğru başlık yapısı, okuyucunun içeriği taramasını kolaylaştırır."
            ],
              quiz: { title: "Final Sınavı", questions: [ { q: "Paragraf etiketi nedir?", a: ["<para>", "<p>", "<pg>"] , correct: 1 } ] },
              video: { title: "Metin Yapısı", description: "Başlık ve paragraf kullanımı" }
            },
            lists_links: { title: "Listeler ve Linkler", text: [
              "Listeler ul (sırasız) ve ol (sıralı) etiketleriyle oluşturulur; li ile madde eklenir.",
              "Linkler a etiketi ile yazılır; href ile hedef URL tanımlanır, yeni sekmede açmak için target özniteliği kullanılabilir.",
              "Gezinme menüleri listelerle semantik ve erişilebilir bir şekilde oluşturulabilir."
            ],
              quiz: { title: "Final Sınavı", questions: [ { q: "Bağlantı için hangi etiket?", a: ["<a>", "<link>", "<url>"], correct: 0 } ] },
              video: { title: "Listeler ve Linkler", description: "Menüler ve navigasyon" }
            },
            css_intro: { title: "CSS Giriş", text: [
              "CSS, HTML öğelerini seçerek görsel stil uygular. Seçiciler, özellikler ve değerlerden oluşur.",
              "Kutu modeli (box model) margin, border, padding ve content alanlarından oluşur.",
              "Sınıflar (class) ve kimlikler (id) ile seçiciler güçlendirilir; modern projelerde utility-first yaklaşımlar da yaygındır."
            ],
              quiz: { title: "Final Sınavı", questions: [ { q: "Rengi kırmızı yapan özellik?", a: ["font", "color", "paint"], correct: 1 } ] },
              video: { title: "CSS'e Giriş", description: "Seçiciler ve temel stiller" }
            },
            forms: { title: "Formlar", text: [
              "Formlar, kullanıcıdan veri toplamak için kullanılır; form etiketinin içinde input, select, textarea, button gibi elemanlar yer alır.",
              "Erişilebilirlik için label etiketlerini doğru kullanmak önemlidir. Basit doğrulamalar HTML5 ile yapılabilir.",
              "Sunucuya veri gönderimi genellikle POST metodu ile yapılır; modern uygulamalarda AJAX veya fetch tercih edilir."
            ],
              quiz: { title: "Final Sınavı", questions: [ { q: "Formu gönderen etiket?", a: ["<send>", "<submit>", "<button>"], correct: 2 } ] },
              video: { title: "Formlar", description: "Form elementleri ve doğrulama" }
            },
            quiz: {
              title: "Final Sınavı",
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
              quiz: { title: "Final Sınavı", questions: [ { q: "JS hangi amaçla kullanılır?", a: ["Stil", "İçerik", "Etkileşim"], correct: 2 } ] },
              video: { title: "JS'ye Başlangıç", description: "JS nedir ve nerede çalışır" }
            },
            variables: { title: "Değişkenler", text: [
              "let ve const blok seviyesinde kapsam sunar; var fonksiyon kapsamlıdır ve tercih edilmez.",
              "const değişmez bağ ataması yapar; nesne içeriği değişebilir ancak referans değişmez.",
              "Anlamlı isimlendirme ve gölgelemeden (shadowing) kaçınmak iyi pratiklerdir."
            ],
              quiz: { title: "Final Sınavı", questions: [ { q: "Değişmeyecek değer için?", a: ["let", "const", "var"], correct: 1 } ] },
              video: { title: "JS Değişkenler", description: "let/const/var farkları" }
            },
            operators: { title: "Operatörler", text: [
              "+ - * / temel aritmetik operatörlerdir; % mod alır, ** üs alma yapar.",
              "Mantıksal operatörler: && (ve), || (veya), ! (değil). Karşılaştırmalar === ile tür güvenli yapılmalıdır.",
              "Kısa devre (short-circuit) değerlendirme koşullu ifadeleri sadeleştirir."
            ],
              quiz: { title: "Final Sınavı", questions: [ { q: "Mantıksal VE?", a: ["&", "&&", "and"], correct: 1 } ] },
              video: { title: "Operatörler", description: "Aritmetik ve mantıksal operatörler" }
            },
            functions: { title: "Fonksiyonlar", text: [
              "Fonksiyonlar bildirimselle (function) veya ifadesel (const fn = () => {}) yazılabilir.",
              "Ok fonksiyonları this bağlamını leksik olarak yakalar ve kısa söz dizimi sunar.",
              "Parametre varsayılanları, rest/spread operatörleri ve saf fonksiyonlar modern JS'te sık kullanılır."
            ],
              quiz: { title: "Final Sınavı", questions: [ { q: "Fonksiyon nasıl çağrılır?", a: ["call func", "func()", "run func"], correct: 1 } ] },
              video: { title: "Fonksiyonlar", description: "Parametreler ve geri dönüş" }
            },
            events: { title: "Olaylar", text: [
              "Olaylar, kullanıcı etkileşimlerini yakalamayı sağlar. addEventListener ile abonelik yapılır.",
              "Etkinlik nesnesi (event) hedef, tuş, koordinat gibi bilgiler taşır.",
              "Varsayılan davranışı önlemek için event.preventDefault(), yayılmayı durdurmak için stopPropagation kullanılır."
            ],
              quiz: { title: "Final Sınavı", questions: [ { q: "Tıklama olayı?", a: ["onhover", "onclick", "onsubmit"], correct: 1 } ] },
              video: { title: "Olaylar", description: "Event dinleme ve işleme" }
            },
            quiz: {
              title: "Final Sınavı",
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

      lessonsContent: {
        python: {
          title: "Python Fundamentals",
          summary: "Learn Python fundamentals and build your first apps.",
          meta: {
            duration: "6-8 hours",
            difficulty: "Beginner"
          },
          whatYouWillLearn: [
            "Python syntax and variables",
            "Data types and collections",
            "Loops and conditionals",
            "Functions",
            "Simple projects"
          ],
          syllabus: {
            modules: [
              { title: "Variables and Data Types" },
              { title: "Loops" },
              { title: "Conditionals" },
              { title: "Functions" },
              { title: "Lists" },
              { title: "Python Quiz" }
            ]
          },
          modules: {
            variables: { title: "Variables and Data Types", text: "Variables store data. Types: int, float, string, bool." },
            loops: { title: "Loops", text: "Loops repeat operations. Common loops: for and while." },
            conditionals: { title: "Conditionals", text: "Control flow using if, elif, else." },
            functions: { title: "Functions", text: "Reusable code blocks defined with def." },
            lists: { title: "Lists", text: "Lists hold multiple values. Defined with square brackets." },
            quiz: {
              title: "Final Quiz",
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
              title: "Final Quiz",
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
              title: "Final Quiz",
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

