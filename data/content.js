export const content = {
  id: {
    cvUrl: "/Dias Pradana CV Indonesia.pdf",
    profile: {
      name: "Dias Pradana",
      location: "Gresik, Jawa Timur",
      status: "Terbuka untuk peluang kerja",
      summaryShort:
        "Lulusan S1 Teknik Informatika Universitas Muhammadiyah Gresik (IPK 3.71) dengan pengalaman dalam pengembangan web dan IT Support. Terampil menggunakan Laravel, React JS, Next.js, JavaScript, serta MySQL dan PostgreSQL.",
      paragraphs: [
        "Berpengalaman dalam membangun aplikasi web, mengelola basis data, serta mengembangkan dan menguji fitur aplikasi. Memiliki pengalaman menggunakan Laravel, React JS, Next.js, JavaScript, MySQL, dan PostgreSQL.",
        "Memiliki pengalaman di bidang IT Support dan operasional, termasuk troubleshooting, instalasi dan konfigurasi Windows, pengelolaan perangkat, serta pengolahan data. Terbiasa bekerja secara teliti, menyelesaikan masalah, belajar hal baru, dan bekerja dalam tim."
      ],
      tags: ["Web Development", "Backend Development", "IT Support"],
    },

    roles: ["Web Developer", "Backend Developer", "IT Support"],

    stats: [
      { label: "IPK", value: "3.71", suffix: "/4.00" },
      { label: "Proyek", value: "4", suffix: "" },
      { label: "Sertifikasi", value: "10", suffix: "+" },
      { label: "Domisili", value: "Gresik", suffix: "" },
    ],

    navLinks: [
      { id: "home", label: "Beranda", num: "01" },
      { id: "about", label: "Tentang", num: "02" },
      { id: "services", label: "Layanan", num: "03" },
      { id: "project", label: "Proyek", num: "04" },
      { id: "contact", label: "Kontak", num: "05" },
    ],

    services: [
      {
        icon: "code",
        title: "Web Development",
        description:
          "Membangun aplikasi web dari nol menggunakan Laravel & React JS  mulai dari struktur database, API, hingga antarmuka yang responsif dan mudah dipakai.",
        points: ["Laravel & PHP", "React JS", "Desain responsif"],
      },
      {
        icon: "database",
        title: "Backend Development",
        description:
          "Merancang dan mengelola basis data serta logika back-end, termasuk manajemen pengguna berbasis hak akses, integrasi data, dan ekspor laporan.",
        points: ["PostgreSQL & MySQL", "REST API", "Filament / Admin Panel"],
      },
      {
        icon: "server",
        title: "IT Support",
        description:
          "Menangani kebutuhan IT operasional sehari-hari, instalasi & konfigurasi perangkat, troubleshooting cepat, hingga koordinasi tim di lapangan.",
        points: ["Instalasi & konfigurasi Windows", "Troubleshooting perangkat", "Dukungan operasional tim"],
      },
    ],

    experience: [
      {
        period: "Feb 2026 – Jul 2026",
        title: "VSM (Wakil Kepala Toko) / PIC IT",
        org: "Alibaba Store, Gresik",
        points: [
          "Instalasi Microsoft Office, aktivasi Windows, serta konfigurasi laptop dan printer.",
          "Memastikan perangkat IT berfungsi baik untuk mendukung operasional toko.",
          "Mengoordinasikan operasional toko bersama tim untuk mencapai target penjualan.",
        ],
      },
      {
        period: "Okt 2025 – Jan 2026",
        title: "Tim Proses Online Shop",
        org: "PT Behaestex, Gresik",
        points: [
          "Mengelola data pesanan dan dokumen pengiriman menggunakan Microsoft Office.",
          "Memastikan akurasi data pesanan sesuai SOP yang berlaku.",
        ],
      },
      {
        period: "Jul 2025 – Sep 2025",
        title: "Programmer Intern",
        org: "PT Cipta Nirmala (RS Semen Gresik)",
        points: [
          "Mengembangkan aplikasi web manajemen risiko rumah sakit menggunakan Laravel.",
          "Mengelola dan mengolah basis data PostgreSQL untuk mendukung aplikasi.",
          "Melakukan testing, debugging, dan perbaikan aplikasi bersama tim.",
        ],
      },
      {
        period: "2022 – 2026",
        title: "S1 Teknik Informatika — IPK 3.71/4.00",
        org: "Universitas Muhammadiyah Gresik",
        points: [
          "Asisten Lab Praktikum Jaringan Komputer selama satu semester, membimbing praktikum mahasiswa.",
        ],
      },
    ],

    projects: [
      {
        id: "proyek-risiko",
        eyebrow: "Magang · PT Cipta Nirmala",
        title: "Sistem Manajemen Risiko Rumah Sakit",
        description:
          "Aplikasi web untuk mencatat, menganalisis, dan melaporkan risiko klinis maupun non-klinis rumah sakit secara terpusat dan lengkap dengan dashboard monitoring, manajemen pengguna berbasis hak akses, matriks risiko, dan ekspor laporan ke Excel & PDF.",
        stack: ["Laravel", "Filament", "PostgreSQL"],
        hero: "/assets/proj-risiko-dashboard.jpg",
        shots: ["/assets/proj-risiko-user.jpg", "/assets/proj-risiko-analisis.jpg"],
      },
      {
        id: "proyek-toko",
        eyebrow: "Proyek pribadi",
        title: "Toko Kita E-Commerce Frontend",
        description:
          "Frontend toko online yang responsif dengan katalog produk, pencarian & filter, halaman deals, detail produk, keranjang, wishlist, hingga riwayat pesanan. Data produk diambil dari DummyJSON API, sedangkan keranjang & wishlist disimpan di localStorage.",
        stack: ["React JS", "JavaScript", "HTML/CSS"],
        hero: "/assets/proj-ecommerce-hero.jpg",
        shots: ["/assets/proj-ecommerce-produk.jpg"],
      },
      {
        id: "proyek-tulisan",
        eyebrow: "Tugas akhir / riset",
        title: "Deteksi Keteraturan Tulisan Tangan",
        description:
          "Program deteksi keteraturan tulisan tangan menggunakan ekstraksi fitur Local Binary Pattern (LBP) dan klasifikasi Support Vector Machine (SVM) Penerapan pengolahan citra dan machine learning untuk analisis pola visual.",
        stack: ["MATLAB", "LBP", "SVM"],
      },
      {
        id: "proyek-portfolio",
        eyebrow: "Proyek pribadi",
        title: "Personal Portfolio Website",
        description:
           "Website portofolio pribadi dengan fitur dark/light mode, toggle bahasa Indonesia-Inggris, navigasi responsif, animasi Framer Motion, dan form kontak terintegrasi Web3Forms API. Menampilkan profil, skills, pengalaman, dan proyek secara terstruktur.",
        stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
         hero: "/assets/proj-portofolio-hero.png",
        shots: ["/assets/proj-portofolio-services.png", "/assets/proj-portofolio-contact.png"],
      },
    ],

    skillGroups: [
      { title: "Pemrograman & Web", items: ["PHP", "Laravel", "React JS", "Next.js", "JavaScript", "HTML", "CSS"] },
      { title: "Basis Data", items: ["MySQL", "PostgreSQL"] },
      { title: "Tools", items: ["Git", "Microsoft Word", "Excel", "PowerPoint"] },
      { title: "IT Support", items: ["Instalasi & Konfigurasi Windows", "MS Office", "Laptop & Printer"] },
      { title: "Data & Analitis", items: ["Pengolahan Data", "Problem Solving"] },
      { title: "Soft Skills", items: ["Komunikasi", "Kerja Sama Tim", "Adaptasi", "Cepat Belajar"] },
    ],

    certifications: [
      { date: "Sep 2026", text: "React JS Bootcamp — WPU Course" },
      { date: "Ags 2026", text: "Uji Kompetensi Microsoft Excel — Excelab Learning", note: "Predikat Sangat Kompeten" },
      { date: "Ags 2026", text: "Website Development: Backend — MySkill" },
      { date: "Ags 2026", text: "Index Match, VLOOKUP & HLOOKUP di MS Excel — MySkill" },
      { date: "Ags 2026", text: "Automation Webinar: UiPath x IOH — ONE Indonesia" },
      { date: "Jul 2026", text: "Laravel: Pemula sampai Mahir — Udemy" },
      { date: "Des 2025", text: "Machine Learning Bootcamp — Rumah Coding" },
      { date: "Mei 2025", text: "AI Engineer for Milenial — Digital Talent Scholarship (KOMDIGI)" },
      { date: "Apr 2025", text: "Introduction to Cloud Computing — Digital Talent Scholarship (KOMDIGI)" },
      { date: "Mar 2025", text: "Generative AI untuk Pendidikan — Digital Talent Scholarship (KOMDIGI)" },
    ],

    contacts: [
      { label: "Email", value: "diaspradana44@gmail.com", href: "mailto:diaspradana44@gmail.com", icon: "mail" },
      { label: "WhatsApp", value: "0882-9013-9876", href: "https://wa.me/6288290139876", icon: "whatsapp" },
      { label: "GitHub", value: "github.com/Diaspradana05", href: "https://github.com/Diaspradana05", icon: "github" },
      { label: "LinkedIn", value: "linkedin.com/in/diaspradana", href: "https://linkedin.com/in/dias-pradana-25585b321", icon: "linkedin" },
    ],

    ui: {
      greeting: "Halo, saya",
      availableBadge: "Tersedia",
      photoAlt: "Foto",
      downloadCV: "Unduh CV",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
      quickFacts: "Ringkasan Cepat",
      education: "Pendidikan",
      educationValue: "S1 Teknik Informatika",
      gpa: "IPK",
      domicile: "Domisili",
      status: "Status",
      aboutTitle: "Tentang Saya",
      experienceHeading: "Pengalaman",
      certificationsHeading: "Sertifikasi",
      servicesTitle: "Layanan",
      servicesIntro:
        "Layanan yang bisa saya bantu kerjakan, didukung tools dan teknologi yang saya kuasai sehari-hari.",
      techStackHeading: "Tech Stack",
      techStackIntro: "Tools dan teknologi yang saya gunakan untuk mendukung layanan di atas.",
      projectsTitle: "Proyek",
      projectsIntro: "Empat proyek yang mewakili sisi back-end, front-end, riset, dan portofolio ini sendiri.",
      contactTitle: "Kontak",
      contactIntro:
        "Terbuka untuk peluang sebagai Web Developer, Backend Developer, maupun IT Support. Isi form di bawah atau hubungi langsung lewat salah satu kanal berikut.",
      sendMessageTitle: "Kirim Pesan Langsung",
      formName: "Nama",
      formNamePlaceholder: "Nama lengkap kamu",
      formEmail: "Email",
      formEmailPlaceholder: "nama@perusahaan.com",
      formSubject: "Subjek",
      formSubjectPlaceholder: "Peluang kerja / kolaborasi proyek",
      formMessage: "Pesan",
      formMessagePlaceholder: "Tulis pesan kamu di sini...",
      formSend: "Kirim Pesan",
      formSending: "Mengirim...",
      formSuccess: "Pesan berhasil terkirim. Terima kasih!",
      formErrorNoKey:
        "Access key Web3Forms belum diatur. Tambahkan NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY di file .env.local.",
      formErrorGeneric: "Gagal mengirim pesan. Coba lagi nanti.",
      formErrorNetwork: "Terjadi kesalahan jaringan. Coba lagi nanti.",
      footerBuiltWith: "Dibuat dengan Next.js.",
      themeToLight: "Aktifkan mode terang",
      themeToDark: "Aktifkan mode gelap",
      openMenu: "Buka menu navigasi",
      switchLanguageTo: "Switch to English",
    },
  },

  en: {
    cvUrl: "/Dias Pradana CV English.pdf",
    profile: {
      name: "Dias Pradana",
      location: "Gresik, East Java",
      status: "Open to work opportunities",
      summaryShort:
        "Bachelor's degree graduate in Informatics Engineering from Universitas Muhammadiyah Gresik (GPA 3.71) with experience in web development and IT Support. Skilled in Laravel, React JS, Next.js, JavaScript, MySQL, and PostgreSQL.",
      paragraphs: [
         "Experienced in building web applications, managing databases, and developing and testing application features. Proficient in using Laravel, React JS, Next.js, JavaScript, MySQL, and PostgreSQL.",
         "Experienced in IT Support and operations, including troubleshooting, Windows installation and configuration, device management, and data processing. Detail oriented, problem solving, adaptable, quick to learn, and able to work independently or as part of a team."
      ],
      tags: ["Web Development", "Backend Development", "IT Support"],
    },

    roles: ["Web Developer", "Backend Developer", "IT Support"],

    stats: [
      { label: "GPA", value: "3.71", suffix: "/4.00" },
      { label: "Projects", value: "4", suffix: "" },
      { label: "Certifications", value: "10", suffix: "+" },
      { label: "Location", value: "Gresik", suffix: "" },
    ],

    navLinks: [
      { id: "home", label: "Home", num: "01" },
      { id: "about", label: "About", num: "02" },
      { id: "services", label: "Services", num: "03" },
      { id: "project", label: "Project", num: "04" },
      { id: "contact", label: "Contact", num: "05" },
    ],

    services: [
      {
        icon: "code",
        title: "Web Development",
        description:
          "Building web applications from scratch with Laravel & React JS from the database structure and API, to a responsive, easy to use interface.",
        points: ["Laravel & PHP", "React JS", "Responsive design"],
      },
      {
        icon: "database",
        title: "Backend Development",
        description:
          "Designing and managing databases and backend logic, including role-based user management, data integration, and report exports.",
        points: ["PostgreSQL & MySQL", "REST API", "Filament / Admin Panel"],
      },
      {
        icon: "server",
        title: "IT Support",
        description:
          "Handling day to day IT operational needs, device installation & configuration, quick troubleshooting, and on site team coordination.",
        points: ["Windows installation & configuration", "Device troubleshooting", "Team operational support"],
      },
    ],

    experience: [
      {
        period: "Feb 2026 – Jul 2026",
        title: "VSM (Vice Store Manager) / IT PIC",
        org: "Alibaba Store, Gresik",
        points: [
          "Installed Microsoft Office, activated Windows, and configured laptops and printers.",
          "Made sure IT devices were working properly to support store operations.",
          "Coordinated store operations with the team to reach sales targets.",
        ],
      },
      {
        period: "Oct 2025 – Jan 2026",
        title: "Online Shop Processing Team",
        org: "PT Behaestex, Gresik",
        points: [
          "Managed order data and shipping documents using Microsoft Office.",
          "Ensured order data accuracy according to the applicable SOP.",
        ],
      },
      {
        period: "Jul 2025 – Sep 2025",
        title: "Programmer Intern",
        org: "PT Cipta Nirmala (Semen Gresik Hospital)",
        points: [
          "Developed a hospital risk management web application using Laravel.",
          "Managed and processed the PostgreSQL database powering the application.",
          "Performed testing, debugging, and fixes together with the team.",
        ],
      },
      {
        period: "2022 – 2026",
        title: "B.Sc. in Informatics Engineering — GPA 3.71/4.00",
        org: "Universitas Muhammadiyah Gresik",
        points: [
          "Teaching assistant for the Computer Networks lab for one semester, mentoring students during practicals.",
        ],
      },
    ],

    projects: [
      {
        id: "proyek-risiko",
        eyebrow: "Internship · PT Cipta Nirmala",
        title: "Hospital Risk Management System",
        description:
          "A centralized web application for logging, analyzing, and reporting a hospital's clinical and non-clinical risks complete with a monitoring dashboard, role-based user management, a risk matrix, and Excel/PDF report exports.",
        stack: ["Laravel", "Filament", "PostgreSQL"],
        hero: "/assets/proj-risiko-dashboard.jpg",
        shots: ["/assets/proj-risiko-user.jpg", "/assets/proj-risiko-analisis.jpg"],
      },
      {
        id: "proyek-toko",
        eyebrow: "Personal project",
        title: "Toko Kita E-Commerce Frontend",
        description:
          "A responsive online store frontend with a product catalog, search & filters, a deals page, product details, cart, wishlist, and order history. Product data comes from the DummyJSON API, while the cart & wishlist are stored in localStorage.",
        stack: ["React JS", "JavaScript", "HTML/CSS"],
        hero: "/assets/proj-ecommerce-hero.jpg",
        shots: ["/assets/proj-ecommerce-produk.jpg"],
      },
      {
        id: "proyek-tulisan",
        eyebrow: "Final project / research",
        title: "Handwriting Regularity Detection",
        description:
          "A program that detects handwriting regularity using Local Binary Pattern (LBP) feature extraction and Support Vector Machine (SVM) classification applying image processing and machine learning to visual pattern analysis.",
        stack: ["MATLAB", "LBP", "SVM"],
      },
      {
        id: "proyek-portfolio",
        eyebrow: "Personal project",
        title: "Personal Portfolio Website",
        description:
          "Personal portfolio website featuring dark/light mode, Indonesian-English language toggle, responsive navigation, Framer Motion animations, and a contact form integrated with the Web3Forms API. Showcases profile, skills, experience, and projects in a structured layout.",
        stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        hero: "/assets/proj-portofolio-hero.png",
        shots: ["/assets/proj-portofolio-services.png", "/assets/proj-portofolio-contact.png"],
      },
    ],

    skillGroups: [
      { title: "Programming & Web", items: ["PHP", "Laravel", "React JS", "Next.js", "JavaScript", "HTML", "CSS"] },
      { title: "Databases", items: ["MySQL", "PostgreSQL"] },
      { title: "Tools", items: ["Git", "Microsoft Word", "Excel", "PowerPoint"] },
      { title: "IT Support", items: ["Windows Installation & Configuration", "MS Office", "Laptop & Printer"] },
      { title: "Data & Analytics", items: ["Data Processing", "Problem Solving"] },
      { title: "Soft Skills", items: ["Communication", "Teamwork", "Adaptability", "Fast Learner"] },
    ],

    certifications: [
      { date: "Sep 2026", text: "React JS Bootcamp — WPU Course" },
      { date: "Aug 2026", text: "Microsoft Excel Competency Test — Excelab Learning", note: "Highly Competent Grade" },
      { date: "Aug 2026", text: "Website Development: Backend — MySkill" },
      { date: "Aug 2026", text: "Index Match, VLOOKUP & HLOOKUP in MS Excel — MySkill" },
      { date: "Aug 2026", text: "Automation Webinar: UiPath x IOH — ONE Indonesia" },
      { date: "Jul 2026", text: "Laravel: Beginner to Advanced — Udemy" },
      { date: "Dec 2025", text: "Machine Learning Bootcamp — Rumah Coding" },
      { date: "May 2025", text: "AI Engineer for Millennials — Digital Talent Scholarship (KOMDIGI)" },
      { date: "Apr 2025", text: "Introduction to Cloud Computing — Digital Talent Scholarship (KOMDIGI)" },
      { date: "Mar 2025", text: "Generative AI for Education — Digital Talent Scholarship (KOMDIGI)" },
    ],

    contacts: [
      { label: "Email", value: "diaspradana44@gmail.com", href: "mailto:diaspradana44@gmail.com", icon: "mail" },
      { label: "WhatsApp", value: "0882-9013-9876", href: "https://wa.me/6288290139876", icon: "whatsapp" },
      { label: "GitHub", value: "github.com/Diaspradana05", href: "https://github.com/Diaspradana05", icon: "github" },
      { label: "LinkedIn", value: "linkedin.com/in/diaspradana", href: "https://linkedin.com/in/dias-pradana-25585b321", icon: "linkedin" },
    ],

    ui: {
      greeting: "Hi, I'm",
      availableBadge: "Available",
      photoAlt: "Photo of",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      quickFacts: "Quick Facts",
      education: "Education",
      educationValue: "B.Sc. Informatics Engineering",
      gpa: "GPA",
      domicile: "Location",
      status: "Status",
      aboutTitle: "About Me",
      experienceHeading: "Experience",
      certificationsHeading: "Certifications",
      servicesTitle: "Services",
      servicesIntro:
        "Services I can help with, backed by the tools and technologies I use on a daily basis.",
      techStackHeading: "Tech Stack",
      techStackIntro: "Tools and technologies I use to support the services above.",
      projectsTitle: "Project",
      projectsIntro: "Four projects that represent my back-end, front-end, research, and this portfolio itself.",
      contactTitle: "Contact",
      contactIntro:
        "Open to opportunities as a Web Developer, Backend Developer, or IT Support. Fill out the form below or reach out directly through one of the channels below.",
      sendMessageTitle: "Send a Message",
      formName: "Name",
      formNamePlaceholder: "Your full name",
      formEmail: "Email",
      formEmailPlaceholder: "you@company.com",
      formSubject: "Subject",
      formSubjectPlaceholder: "Job opportunity / project collaboration",
      formMessage: "Message",
      formMessagePlaceholder: "Write your message here...",
      formSend: "Send Message",
      formSending: "Sending...",
      formSuccess: "Your message has been sent. Thank you!",
      formErrorNoKey:
        "The Web3Forms access key hasn't been set yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local file.",
      formErrorGeneric: "Failed to send your message. Please try again later.",
      formErrorNetwork: "A network error occurred. Please try again later.",
      footerBuiltWith: "Built with Next.js.",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      openMenu: "Open navigation menu",
      switchLanguageTo: "Ganti ke Bahasa Indonesia",
    },
  },
};
