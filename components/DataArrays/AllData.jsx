import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaDatabase,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHome,
  FaLaptopCode,
  FaBoxArchive,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";
import { BsPuzzle } from "react-icons/bs";
import {} from "react-icons/fa6";
import {
  FaPalette,
  FaMobile,
  FaServer,
  FaWordpress,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiTypescript,
  SiRedux,
  SiAdobephotoshop,
  SiDocker,
  SiAmazonaws,
  SiFigma,
  SiJest,
  SiPostman,
  SiWordpress,
  SiWoocommerce,
  SiExpress,
  SiNestjs,
  SiRedis,
  SiKubernetes,
  SiNginx,
  SiCypress,
  SiAdobexd,
  SiPwa,
} from "react-icons/si";
import { TbPhotoShare } from "react-icons/tb";
export const aboutme = {
  title: "معرفی",
  info: [
    {
      icon: <FaUser className="text-cyan-400" />,
      fieldname: "نام کامل",
      fieldvalue: "سعید رضایی",
    },
    {
      icon: <FaGraduationCap className="text-cyan-400" />,
      fieldname: "رشته تحصیلی",
      fieldvalue: "مهندسی نرم‌افزار",
    },
    {
      icon: <FaBriefcase className="text-cyan-400" />,
      fieldname: "موقعیت شغلی",
      fieldvalue: "توسعه‌دهنده فول‌استک (طراح سایت)",
    },
    {
      icon: <FaMapMarkerAlt className="text-cyan-400" />,
      fieldname: "موقعیت مکانی",
      fieldvalue: "ایران",
    },
    {
      icon: <FaPhoneAlt className="text-cyan-400" />,
      fieldname: "شماره تماس",
      fieldvalue: "۹۳۸۸۴۴۹۱۸۱ ۹۸+",
    },
    {
      icon: <FaEnvelope className="text-cyan-400" />,
      fieldname: "ایمیل",
      fieldvalue: "saeid.rezaei@example.com",
    },
  ],
};

export const experience = {
  title: "سوابق کاری",
  description:
    "با بیش از 4 سال تجربه در توسعه پروژه‌های وب و اپلیکیشن‌های مدرن",
  items: [
    {
      company: "شرکت هوشمند پرداز هاویر",
      position: "توسعه‌دهنده فول‌استک",
      period: "۱۴۰۲ - تاکنون",
      description:
        "توسعه و طراحی وب‌سایت‌های واکنش‌گرا با استفاده از React، Next.js و Node.js، Sql",
      projects: [
        { name: "سامانه هاویر کشت", link: "https://havirkesht.ir/" },
        {
          name: "وب سایت (bse) برای کشور استرالیا",
          link: "https://blueskyeng.com.au/",
        },
        {
          name: "چت بات هوشمند کارخانه آرد استاد",
          link: "https://chat.havirard.ir/",
        },
        {
          name: "سامانه دامداری",
          link: "https://havirdam.ir/",
        },
        { name: "وب‌سایت شخصی", link: "#" },
      ],
    },
  ],
};

export const skills = {
  title: "مهارت‌های تخصصی",
  description: "تسلط کامل بر طیف وسیعی از تکنولوژی‌های توسعه وب و اپلیکیشن",
  skillsitem: [
    // Frontend

    {
      icon: <SiPwa className="text-blue-500" />,
      name: "PWA (اپلیکیشن)",
      level: "پیشرفته",
    },
    {
      icon: <FaReact className="text-cyan-400" />,
      name: "React (فرانت اند)",
      level: "پیشرفته",
    },
    {
      icon: <FaNodeJs className="text-green-500" />,
      name: "Node.js (بک اند)",
      level: "پیشرفته",
    },
    {
      icon: <SiWordpress className="text-blue-600" />,
      name: "WordPress (وردپرس)",
      level: "پیشرفته",
    },
    {
      icon: <SiMysql className="text-blue-600" />,
      name: "MySQL (دیتابیس)",
      level: "پیشرفته",
    },
    {
      icon: <SiFigma className="text-purple-400" />,
      name: "Figma (طراحی UI و UX)",
      level: "پیشرفته",
    },
    {
      icon: <SiTypescript className="text-blue-500" />,
      name: "TypeScript",
      level: "پیشرفته",
    },
    {
      icon: <SiNextdotjs className="text-white" />,
      name: "Next.js",
      level: "پیشرفته",
    },
    {
      icon: <SiJavascript className="text-yellow-400" />,
      name: "JavaScript",
      level: "پیشرفته",
    },
    {
      icon: <SiTailwindcss className="text-cyan-300" />,
      name: "Tailwind CSS",
      level: "پیشرفته",
    },
    {
      icon: <FaBootstrap className="text-purple-500" />,
      name: "Bootstrap",
      level: "پیشرفته",
    },
    {
      icon: <FaSass className="text-pink-400" />,
      name: "Sass/SCSS",
      level: "پیشرفته",
    },
    {
      icon: <FaHtml5 className="text-orange-500" />,
      name: "HTML5",
      level: "پیشرفته",
    },
    {
      icon: <FaCss3Alt className="text-blue-400" />,
      name: "CSS3",
      level: "پیشرفته",
    },
    {
      icon: <SiRedux className="text-purple-400" />,
      name: "Redux",
      level: "پیشرفته",
    },
    {
      icon: <SiNestjs className="text-red-500" />,
      name: "NestJS",
      level: "متوسط",
    },
    {
      icon: <SiMongodb className="text-green-400" />,
      name: "MongoDB",
      level: "پیشرفته",
    },

    {
      icon: <SiRedis className="text-red-600" />,
      name: "Redis",
      level: "پیشرفته",
    },
    {
      icon: <FaDatabase className="text-blue-400" />,
      name: "SQL Server",
      level: "پیشرفته",
    },
    {
      icon: <SiWoocommerce className="text-purple-600" />,
      name: "WooCommerce",
      level: "پیشرفته",
    },
    {
      icon: <FaGitAlt className="text-orange-500" />,
      name: "Git",
      level: "پیشرفته",
    },
    {
      icon: <SiDocker className="text-blue-400" />,
      name: "Docker",
      level: "متوسط",
    },
    {
      icon: <SiAmazonaws className="text-yellow-400" />,
      name: "AWS",
      level: "پیشرفته",
    },
    {
      icon: <TbPhotoShare className="text-yellow-400" />,
      name: "photoshop",
      level: "متوسط",
    },
    {
      icon: <SiJest className="text-red-400" />,
      name: "Jest",
      level: "پیشرفته",
    },
    {
      icon: <SiPostman className="text-orange-500" />,
      name: "Postman",
      level: "پیشرفته",
    },

    {
      icon: <SiAdobephotoshop className="text-blue-400" />,
      name: "Photoshop",
      level: "متوسط",
    },
    {
      icon: <SiAdobexd className="text-pink-500" />,
      name: "Adobe XD",
      level: "متوسط",
    },

    {
      icon: <SiMaterialdesign className="text-blue-500 text-xl" />,
      name: "shadcn ui",
      level: "پیشرفته",
    },

    // گزینه ۲: استفاده از آیکون کامپوننت (نماد کامپوننت‌های UI)
    {
      icon: <BsPuzzle className="text-purple-500 text-xl" />,
      name: "shadcn ui",
      level: "پیشرفته",
    },
  ],
};

export const education = {
  title: "تحصیلات",
  description: " مهندس نرم‌افزار با تمرکز بر توسعه وب و فناوری‌های مدرن",
  degree: "کارشناس مهندسی نرم‌افزار",
  university: "فارغ التحصیل دانشگاه ملی شهید مدنی",
  period: "۱۴۰۰ - تاکنون",
  achievements: [
    "کسب رتبه برتر در پروژه‌های برنامه‌نویسی وب",
    "شرکت در کارگاه‌های تخصصی توسعه front-end / BackEnd به صورت تخصصی ",
    "توسعه پروژه‌های عملی با تکنولوژی‌های روز",
    "شرکت در مسابقات برنامه نویسی و مدیرت تیم و توسعه چند طرفه",
  ],
};

export const services = [
  {
    num: "01",
    title: "توسعه Front-end",
    description:
      "پیاده‌سازی رابط کاربری مدرن و واکنش‌گرا با React, Next.js,  و TypeScript با تمرکز بر عملکرد و تجربه کاربری عالی.",
    icon: <FaCode className="text-2xl text-cyan-400" />,
    href: "",
    technologies: ["React", "Next.js", , "TypeScript", "Tailwind CSS"],
  },
  {
    num: "02",
    title: "توسعه Back-end",
    description:
      "طراحی و توسعه APIهای امن و مقیاس‌پذیر با Node.js, Express و پایگاه‌داده‌های رابطه‌ای و غیررابطه‌ای.",
    icon: <FaServer className="text-2xl text-purple-400" />,
    href: "",
    technologies: ["Node.js", "Express", , "Sql", "MongoDB"],
  },
  {
    num: "03",
    title: "توسعه اپلیکیشن (PWA)",
    description:
      "ساخت اپلیکیشن‌های هیبرید و کراس پلتفرم با   و  برای iOS و Android.",
    icon: <FaMobile className="text-2xl text-green-400" />,
    href: "",
    technologies: ["PWA"],
  },
  {
    num: "04",
    title: "توسعه وردپرس",
    description:
      "طراحی قالب‌های سفارشی، توسعه پلاگین‌های حرفه‌ای و راه‌اندازی فروشگاه‌های WooCommerce با وردپرس.",
    icon: <FaWordpress className="text-2xl text-blue-400" />,
    href: "",
    technologies: ["WordPress", "WooCommerce", "Elementor"],
  },
  {
    num: "05",
    title: "طراحی UI/UX",
    description:
      "طراحی رابط کاربری جذاب و تجربه کاربری بهینه با تمرکز بر سادگی، کاربردپذیری و زیبایی شناسی.",
    icon: <FaPalette className="text-2xl text-amber-400" />,
    href: "",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
  },

  // {
  //   num: "06",
  //   title: "سئو و بهینه‌سازی",
  //   description:
  //     "بهینه‌سازی وبسایت برای موتورهای جستجو، افزایش سرعت و در هنگام طراحی استفاده از کد استاندارد برای بهبود عملکرد  .",
  //   icon: <FaSearch className="text-2xl text-red-400" />,
  //   href: "",
  //   technologies: ["SEO"],
  // },
  {
    num: "06",
    title: "مدیریت پایگاه داده",
    description:
      "طراحی، بهینه‌سازی و مدیریت پایگاه‌های داده رابطه‌ای و NoSQL برای عملکرد و امنیت بالا.",
    icon: <FaDatabase className="text-2xl text-indigo-400" />,
    href: "",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Database Optimization",
    ],
  },
  {
    num: "07",
    title: "امنیت سایبری",
    description:
      "پیاده‌سازی راهکارهای امنیتی، تست نفوذ و محافظت از وبسایت‌ها در برابر تهدیدات سایبری.",
    icon: <FaShieldAlt className="text-2xl text-yellow-400" />,
    href: "",
    technologies: [
      "Web Security",
      "Penetration Testing",
      "SSL/TLS",
      "Data Encryption",
    ],
  },
  {
    num: "08",
    title: "مشاوره فنی",
    description:
      "مشاوره تخصصی در انتخاب تکنولوژی، معماری نرم‌افزار و راهکارهای مقیاس‌پذیر برای کسب‌وکارها.",
    icon: <FaCogs className="text-2xl text-teal-400" />,
    href: "",
    technologies: [
      "Technical Consulting",
      "System Architecture",
      "Cloud Solutions",
      "DevOps",
      "Microservices",
    ],
  },
];

export const projects = [
  {
    name: "03",
    id: "kalachi-shop",
    category: "فروشگاه آنلاین کالا چی",
    description:
      "تجربه‌ای نوین از خرید آنلاین با وب‌سایت فروشگاهی کالا چی با طراحی تعاملی و امکانات پیشرفته، تجربه خرید آنلاین شما را به سطح جدیدی ارتقا می‌دهد. با قابلیت جستجوی پیشرفته، به راحتی محصولات مورد نظر خود را پیدا کنید و با چت آنلاین، از پشتیبانی فوری و مؤثر بهره‌مند شوید. طراحی کاربرپسند ما، خریدی سریع و راحت را برای شما به ارمغان می‌آورد.",
    detailedDescription: `
    فروشگاه اینترنتی کالا چی یک پلتفرم تجارت الکترونیک کامل و پیشرفته شبیه به دیجی کالا است. این سیستم شامل:
    • نمایش پیشرفته محصولات با فیلترها و دسته‌بندی‌های هوشمند
    • سبد خرید و سیستم ثبت سفارش پیشرفته
    • درگاه پرداخت امن و یکپارچه
    • پنل کاربری با امکان پیگیری سفارشات و مدیریت آدرس‌ها
    • سیستم نظردهی و امتیازدهی به محصولات
    • چت آنلاین با پشتیبانی برای پاسخگویی به سوالات
    • پنل مدیریت جامع برای مدیریت محصولات، سفارشات و کاربران
    • سیستم پیشنهاد محصولات بر اساس رفتار کاربر
    • طراحی کاملاً ریسپانسیو و بهینه‌شده برای موبایل
    این پلتفرم با تمرکز بر سادگی استفاده و کارایی بالا توسعه یافته است.
  `,
    stack: [
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Sass" },
      { name: "Redux" },
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Node.js" },
      { name: "Sql" },
    ],
    features: [
      "نمایش محصولات با فیلترهای پیشرفته",
      "سبد خرید و ثبت سفارش",
      "درگاه پرداخت امن",
      "پنل کاربری پیشرفته",
      "سیستم نظردهی و امتیازدهی",
      "چت آنلاین با پشتیبانی",
      "مدیریت موجودی و قیمت",
      "سیستم پیشنهاد محصولات",
      "جستجوی پیشرفته",
      "پیگیری وضعیت سفارش",
      "مدیریت آدرس‌های کاربران",
      "ریسپانسیو و PWA",
    ],
    images: [
      "/image/header-2.png",
      "/image/main-26.png",
      "/image/main-223.png",
      "/image/cate.png",
      "/image/shop.png",
      "/image/productpage.png",
      "/image/panel.png",
      "/image/admin-21.png",
      "/image/about-shop.png",
      "/image/cantact.png",
    ],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
    technologies: [
      {
        category: "Frontend",
        items: [
          "React.js",
          "Next.js",
          "JavaScript",
          "Sass",
          "Redux",
          "Redux Toolkit",
          "TailwindCss",
          "TailwindCss",
        ],
      },
      {
        category: "UI/UX",
        items: [
          "Responsive Design",
          "PWA (Progressive Web App)",
          "CSS Modules",
          "Mobile-First Design",
        ],
      },
      {
        category: "State Management",
        items: ["Redux", "Context API", "React Hooks"],
      },
      {
        category: "Performance",
        items: ["Lazy Loading", "Image Optimization", "Code Splitting"],
      },
    ],
    projectInfo: {
      startDate: "1402/10/01",
      endDate: "1403/02/20",
      status: "تکمیل شده",
      teamSize: "تک توسعه‌دهنده (فول استک)",
      client: "پروژه شخصی",
      industry: "خرده‌فروشی آنلاین",
      targetMarket: "ایران",
    },
    challenges: [
      "پیاده‌سازی سبد خرید و مدیریت حالت پیچیده",
      "بهینه‌سازی عملکرد برای تعداد زیاد محصولات",
      "ایجاد تجربه کاربری یکپارچه در دستگاه‌های مختلف",
      "پیاده‌سازی سیستم فیلترهای پیشرفته",
      "مدیریت وضعیت سفارش و موجودی محصولات",
    ],
    solutions: [
      "استفاده از Redux برای مدیریت حالت پیچیده برنامه",
      "پیاده‌سازی لazy loading و pagination برای محصولات",
      "استفاده از طراحی ریسپانسیو و PWA",
      "ایجاد الگوریتم‌های کارآمد برای فیلتر و جستجو",
      "طراحی سیستم مدیریت وضعیت سفارش به صورت real-time",
    ],
    specialFeatures: [
      "طراحی شبیه به دیجی کالا با تجربه کاربری آشنا",
      "سیستم چت آنلاین برای پشتیبانی مشتریان",
      "پنل مدیریت جامع برای مدیریت کامل فروشگاه",
      "سیستم امتیازدهی و بررسی محصولات",
      "پیشنهاد محصولات بر اساس سبد خرید و تاریخچه",
      "بهینه‌سازی برای SEO و موتورهای جستجو",
      "سرعت بارگذاری بالا و عملکرد روان",
      "پشتیبانی از حالت آفلاین (PWA)",
    ],
    compliance: [
      "مطابق با استانداردهای تجارت الکترونیک ایران",
      "امنیت اطلاعات کاربران و پرداخت‌ها",
      "رعایت اصول سئو و دسترسی‌پذیری",
      "پشتیبانی از مرورگرهای مختلف",
    ],
  },
  {
    name: "06",
    id: "bluesky-engineering",
    category: "سامانه استخدام BlueSky",
    description:
      "پلتفرم تخصصی استخدام و جذب نیروی کار برای شرکت BlueSky Engineering استرالیا. این سیستم امکان آپلود رزومه، چت آنلاین با ادمین و ارسال نمونه کارها را برای متقاضیان فراهم می‌کند.",
    detailedDescription: `
    سامانه استخدام BlueSky Engineering یک پلتفرم پیشرفته برای مدیریت فرآیند جذب و استخدام نیروی متخصص در کشور استرالیا است. این سیستم شامل:
    • سیستم آپلود هوشمند رزومه و مدارک
    • چت  با پشتیبان‌های شرکت
    • ارسال و مدیریت نمونه کارها
    • پنل مدیریت پیشرفته برای بررسی درخواست‌ها
    • سیستم پیگیری وضعیت درخواست استخدام
    • پنل کاربری شخصی‌سازی شده
    • طراحی ریسپانسیو و PWA
    • امنیت بالا برای حفاظت از اطلاعات شخصی
    این پلتفرم با تمرکز بر سادگی استفاده و کارایی بالا توسعه یافته است.
  `,
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Sql" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "Socket.io" },
      { name: "JWT" },
      { name: "Multer" },
      { name: "React Hook Form" },
      { name: "Zod" },
      { name: "Framer Motion" },
    ],
    features: [
      "آپلود رزومه و مدارک",
      "چت آنلاین با ادمین",
      "ارسال نمونه کارها",
      "پنل کاربری پیشرفته",
      "پیگیری وضعیت درخواست",
      "سیستم اطلاع‌رسانی",
      "مدیریت چندزبانه",
      "امنیت بالا",
      "پنل مدیریت جامع",
      "گزارش‌گیری و آمار",
      "جستجوی پیشرفته",
      "ریسپانسیو و PWA",
    ],
    images: [
      "/image/bse/1 (6).png",
      "/image/bse/1 (1).png",
      "/image/bse/1 (2).png",
      "/image/bse/1 (3).png",
      "/image/bse/1 (4).png",
      "/image/bse/1 (5).png",
    ],
    live: "https://blueskyeng.com.au",
    technologies: [
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "Mongoose", "Socket.io"],
      },
      {
        category: "Authentication",
        items: ["JWT", "Bcrypt", "OAuth2", "Cookie-based Auth"],
      },
      {
        category: "File Handling",
        items: ["Multer", "Cloudinary", "PDF.js", "File validation"],
      },
      {
        category: "Real-time",
        items: ["Socket.io", "WebRTC", "Real-time notifications"],
      },
      {
        category: "Forms & Validation",
        items: ["React Hook Form", "Zod", "Yup", "Formik"],
      },
    ],
    projectInfo: {
      startDate: "1403/03/01",
      endDate: "1403/07/15",
      status: "تکمیل شده و فعال",
      teamSize: " تک دهنده به صورت فول استک",
      client: "BlueSky Engineering استرالیا",
      industry: "جذب و استخدام نیروی کار",
      targetMarket: "استرالیا و بین‌الملل",
    },
    challenges: [
      "پیاده‌سازی چت آنلاین Real-time",
      "مدیریت آپلود امن فایل‌ها",
      "پشتیبانی چندزبانه",
      "همگام‌سازی با قوانین استخدام استرالیا",
      "امنیت اطلاعات کاربران",
    ],
    solutions: [
      "استفاده از Socket.io برای چت Real-time",
      "پیاده‌سازی سیستم آپلود امن با validation",
      "استفاده از i18n برای چندزبانه کردن",
      "مطالعه قوانین کاری استرالیا",
      "رمزنگاری پیشرفته و HTTPS",
    ],
    specialFeatures: [
      "پشتیبانی از فرمت‌های مختلف رزومه (PDF, DOC, DOCX)",
      "چت Real-time با امکان ارسال فایل",
      "سیستم امتیازدهی خودکار رزومه",
      "پنل مدیریت پیشرفته با آمار Real-time",
      "نوتیفیکیشن‌های لحظه‌ای",
      "پشتیبانی از تم تاریک و روشن",
      "بهینه‌سازی برای SEO",
      "سرعت بارگذاری بالا",
    ],
    compliance: [
      "مطابق با قوانین حریم خصوصی استرالیا",
      "سازگار با GDPR",
      "امنیت اطلاعات کاربران",
      "بکاپ‌گیری خودکار",
      "SSL Encryption",
    ],
  },

  {
    name: "05",
    id: "havir-kesht-system",
    category: "سامانه جامع هاویر کشت",
    description:
      "سامانه جامع مدیریت کشاورزی و فروش محصولات کشاورزی شامل سموم، بذر، کود و تجهیزات کشاورزی. این پلتفرم با قابلیت‌های پیشرفته مدیریت فروش، پنل مدیریتی یکپارچه و طراحی PWA برای دسترسی آسان توسعه یافته است.",
    detailedDescription: `
    سامانه هاویر کشت یک پلتفرم جامع در حوزه کشاورزی است که با آخرین تکنولوژی‌های روز دنیا توسعه یافته است. این سیستم شامل:
    
    • مدیریت کامل محصولات کشاورزی (سموم، بذر، کود، تجهیزات)
    • پنل مدیریت پیشرفته با قابلیت آنالیز فروش
    • سبد خرید و پرداخت آنلاین
    • سیستم مدیریت مشتریان و پنل کاربری
    • پنل مدیریت محتوا و بلاگ تخصصی کشاورزی
    • طراحی Progressive Web App (PWA) برای دسترسی آسان
    • بهینه‌سازی شده برای موبایل و دسکتاپ
    
    این پروژه با تمرکز بر کاربرپسندی و کارایی بالا توسعه داده شده و از امنیت و سرعت بالایی برخوردار است.
  `,
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "PWA" },
      { name: "React Query" },
      { name: "Chart.js" },
      { name: "Formik" },
      { name: "Yup" },
      { name: "Jest" },
      { name: "Cypress" },
    ],
    features: [
      "مدیریت محصولات و دسته‌بندی‌ها",
      "سیستم خرید و سبد خرید پیشرفته",
      "درگاه پرداخت آنلاین",
      "پنل مدیریت جامع",
      "تحلیل آمار و نمودارهای فروش",
      "مدیریت کاربران و سطوح دسترسی",
      "بلاگ و مدیریت محتوا",
      "جستجوی پیشرفته محصولات",
      "فیلترهای هوشمند",
      "ریسپانسیو و PWA",
      "سیستم نظردهی و امتیازدهی",
      "مدیریت انبار و موجودی",
    ],
    images: [
      "/image/Havir/1 (5).png",
      "/image/Havir/1 (1).png",
      "/image/Havir/1 (2).png",
      "/image/Havir/1 (3).png",
      "/image/Havir/1 (4).png",
      "/image/Havir/Screenshot 2025-09-04 235010.png",
    ],
    live: "https://havirkesht.ir",
    // github: "https://github.com/Saeid-Rezaei0/havir-kesht",
    technologies: [
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux Toolkit",
          "React Query",
        ],
      },
      {
        category: "Styling",
        items: ["Tailwind CSS", "CSS Modules", "Responsive Design"],
      },
      {
        category: "State Management",
        items: ["Redux Toolkit", "React Context", "Zustand"],
      },
      {
        category: "Testing",
        items: ["Jest", "React Testing Library", "Cypress"],
      },
      {
        category: "Performance",
        items: ["PWA", "Lazy Loading", "Image Optimization", "Code Splitting"],
      },
      {
        category: "Tools",
        items: ["Webpack", "Babel", "ESLint", "Prettier", "Git"],
      },
    ],
    projectInfo: {
      startDate: "1403/12/01",
      endDate: "1404/6/15",
      status: "تکمیل شده",
      teamSize: "تیم ورک توسعه‌دهنده",
      client: "شرکت هوشمند پرداز هاویر",
      industry: "کشاورزی و فروش محصولات کشاورزی",
    },
    challenges: [
      "پیاده سازی سیستم مدیریت محصولات پیچیده",
      "بهینه‌سازی عملکرد برای حجم بالای داده",
      "ایجاد پنل مدیریت کاربرپسند",
      "پیاده سازی PWA با قابلیت آفلاین",
      "یکپارچه‌سازی درگاه پرداخت چندگانه",
    ],
    solutions: [
      "استفاده از Redux Toolkit برای مدیریت state پیچیده",
      "بهینه‌سازی تصاویر و lazy loading",
      "طراحی کامپوننت‌های ماژولار",
      "پیاده سازی service worker برای قابلیت آفلاین",
      "استفاده از TypeScript برای کاهش خطاها",
    ],
  },
  {
    name: "02",
    id: 2,
    category: "وب سایت فروش قهوه",
    description:
      "تجربه‌ای نوین از خرید آنلاین قهوه  با وب‌سایت فروش قهوه با طراحی تعاملی و امکانات پیشرفته، تجربه خرید آنلاین شما را به سطح جدیدی ارتقا می‌دهد. با قابلیت جستجوی پیشرفته، به راحتی محصولات مورد نظر خود را پیدا کنید و با چت آنلاین، از پشتیبانی فوری و مؤثر بهره‌مند شوید. طراحی کاربرپسند ، پنل کاربردی جهت راحتی کار صفحه علاقه مندی... خریدی سریع و راحت را برای شما به ارمغان می‌آورد",
    stack: [
      { name: "html 5" },
      { name: "css 5" },
      { name: "javascript" },
      { name: "BootStrap" },
      { name: "React.js" },
    ],
    images: [
      "/image/set_cofef.png",
      "/image/set_coffe_2.png",
      "/image/set_coffe_3.png",
      "/image/set_coffe_4png.png",
      "/image/set_coffe_5.png",
    ],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "09",
    id: "havir-chatbot",
    category: "چت بات هوشمند",
    description:
      "دستیار هوشمند مبتنی بر هوش مصنوعی برای پاسخگویی به سوالات کشاورزی، مشاوره محصولات و پشتیبانی مشتریان.",
    detailedDescription: `
    چت بات هوشمند هاویر کشت یک دستیار مجازی پیشرفته است که با استفاده از تکنولوژی‌های مدرن هوش مصنوعی توسعه یافته است. این سیستم شامل:
    • موتور پردازش زبان طبیعی (NLP) برای درخواست‌های کاربران
    • پایگاه دانش تخصصی کشاورزی و محصولات
    • سیستم یادگیری و بهبود مستمر
    • یکپارچه‌سازی با سیستم فروش و پشتیبانی
    • پشتیبانی از چندین زبان (فارسی، انگلیسی)
    • قابلیت درک context و گفتگوی چندمرحله‌ای
    • ارائه توصیه‌های شخصی‌سازی شده
    • گزارش‌گیری و تحلیل تعاملات کاربران
    • طراحی ریسپانسیو و PWA
    • امنیت بالا و محرمانگی داده‌ها
    
    این چت بات به منظور ارائه خدمات 24/7 به کشاورزان و مشتریان توسعه یافته است.
  `,
    stack: [
      { name: "React", level: "پیشرفته" },
      { name: "TypeScript", level: "پیشرفته" },
      { name: "Next.js", level: "پیشرفته" },
      { name: "Node.js", level: "پیشرفته" },
      { name: "Python", level: "پیشرفته" },
      { name: "TensorFlow", level: "متوسط" },
      { name: "NLP", level: "پیشرفته" },
      { name: "MongoDB", level: "پیشرفته" },
      { name: "Socket.io", level: "پیشرفته" },
      { name: "OpenAI API", level: "پیشرفته" },
      { name: "Tailwind CSS", level: "پیشرفته" },
      { name: "Docker", level: "متوسط" },
    ],
    features: [
      "پردازش زبان طبیعی (NLP)",
      "پایگاه دانش تخصصی کشاورزی",
      "یادگیری و بهبود مستمر",
      "یکپارچه‌سازی با سیستم فروش",
      "پشتیبانی چندزبانه",
      "درک context گفتگو",
      "توصیه‌های شخصی‌سازی شده",
      "گزارش‌گیری و تحلیل",
      "پشتیبانی 24/7",
      "امنیت و محرمانگی",
      "ریسپانسیو و PWA",
      "گزارش خطا و بازخورد",
    ],
    images: [
      "/image/chatBot/1 (5).png",
      "/image/chatBot/1 (1).png",
      "/image/chatBot/1 (2).png",
      "/image/chatBot/1 (3).png",
      "/image/chatBot/1 (4).png",
    ],
    live: "https://chat.havirard.ir",
    technologies: [
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Socket.io Client",
        ],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "Python", "FastAPI", "WebSockets"],
      },
      {
        category: "AI & ML",
        items: ["TensorFlow", "NLTK", "spaCy", "Hugging Face", "OpenAI API"],
      },
      {
        category: "Database",
        items: ["MongoDB", "Redis", "Elasticsearch", "Vector Databases"],
      },
      {
        category: "NLP",
        items: [
          "Intent Recognition",
          "Entity Extraction",
          "Sentiment Analysis",
          "Language Translation",
        ],
      },
      {
        category: "DevOps",
        items: ["Docker", "Kubernetes", "CI/CD", "Monitoring", "Logging"],
      },
    ],
    projectInfo: {
      startDate: "1403/10/01",
      endDate: "1404/03/20",
      status: "فعال و در حال توسعه",
      teamSize:
        "تیم 3 نفره (AI Specialist, Full-stack Developer, Domain Expert, backend Dev)",
      client: "شرکت هوشمند پرداز هاویر",
      industry: "کشاورزی و فناوری اطلاعات",
      targetUsers: "کشاورزان، مشتریان، کارشناسان فروش",
    },
    capabilities: [
      "پاسخ به سوالات محصولات کشاورزی",
      "مشاوره در مورد سموم و کودها",
      "راهنمایی در مورد آفات و بیماری‌ها",
      "پشتیبانی فروش و قیمت‌گذاری",
      "مدیریت شکایات و پیشنهادات",
      "رزرو زمان مشاوره تخصصی",
      "ارائه گزارش‌های هواشناسی",
      "پیشنهاد محصولات بر اساس نیاز کاربر",
    ],
    challenges: [
      "پیاده‌سازی پردازش زبان طبیعی برای فارسی",
      "ایجاد پایگاه دانش تخصصی کشاورزی",
      "یکپارچه‌سازی با سیستم‌های موجود",
      "مدیریت context گفتگوهای طولانی",
      "امنیت و حریم خصوصی داده‌ها",
    ],
    solutions: [
      "استفاده از مدل‌های زبانی پیشرفته",
      "همکاری با متخصصان حوزه کشاورزی",
      "API-based integration",
      "State management پیشرفته",
      "رمزنگاری end-to-end",
    ],
    nlpFeatures: [
      "تشخیص قصد کاربر (Intent Recognition)",
      "استخراج موجودیت‌ها (Entity Extraction)",
      "تحلیل احساسات (Sentiment Analysis)",
      "پاسخ‌های context-aware",
      "یادگیری از تعاملات کاربران",
      "پشتیبانی از لهجه‌های مختلف",
      "تصحیح خودکار اشتباهات تایپی",
    ],
    integration: [
      "یکپارچه با سیستم CRM",
      "اتصال به پایگاه داده محصولات",
      "سینک با سیستم فروش",
      "ارتباط با سرویس‌های هواشناسی",
      "اتصال به سیستم ticketting",
    ],
    analytics: [
      "تحلیل حجم تعاملات",
      "مانیتورینگ رضایت کاربران",
      "پیگیری سوالات متداول",
      "آنالیز عملکرد مدل AI",
      "گزارش‌های عملکردی",
    ],
    performance: {
      responseTime: "< 2 ثانیه",
      accuracy: "85% در تشخیص درست",
      uptime: "99.9%",
      languages: "فارسی، انگلیسی",
      concurrentUsers: "1000+ کاربر همزمان",
    },
    compliance: [
      "مطابق با قوانین حریم خصوصی",
      "امنیت داده‌های کاربران",
      "ذخیره‌سازی امن گفتگوها",
      "پایش مستقل امنیتی",
      "بکاپ‌گیری منظم",
    ],
  },
  {
    name: "07",
    id: "havir-dam-dari",
    category: "سامانه جامع مدیریت دامداری",
    description:
      "پلتفرم یکپارچه مدیریت گاوداری و دامپروری با قابلیت‌های پیشرفته نظارت بر سلامت دام، مدیریت تغذیه و تولیدات.",
    detailedDescription: `
    سامانه مدیریت دامداری یک پلتفرم جامع برای مدیریت گاوداری و دامپروری است. این سیستم شامل:
    
    • مدیریت اطلاعات دام (شیردهی، سلامت، تولیدمثل)
    • سیستم نظارت بر تغذیه و خوراک دام
    • مدیریت تولیدات (شیر، گوشت، فرآورده‌ها)
    • پنل veterinary و سلامت دام
    • سیستم گزارش‌گیری و آمار پیشرفته
    • مدیریت مالی و هزینه‌ها
    • پنل کاربری برای کارکنان
    • اعلان‌های هوشمند و هشدارها
    • طراحی ریسپانسیو و PWA
    • پشتیبانی از چندین واحد دامداری
    
    این پلتفرم با هدف بهینه‌سازی فرآیندهای دامپروری و افزایش بهره‌وری توسعه یافته است.
  `,
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Chart.js" },
      { name: "Redux" },
      { name: "PWA" },
      { name: "React Query" },
      { name: "JWT" },
      { name: "React Hook Form" },
      { name: "Zod" },
      { name: "React-Select" },
      { name: "shadcn-ui" },
    ],
    features: [
      "مدیریت اطلاعات دام",
      "سیستم سلامت و veterinary",
      "مدیریت تغذیه و خوراک",
      "پیگیری تولیدات شیر",
      "مدیریت تولیدمثل دام",
      "پنل گزارش‌گیری پیشرفته",
      "مدیریت مالی و هزینه‌ها",
      "اعلان‌های هوشمند",
      "پنل مدیریت چندواحدی",
      "گزارش‌های تحلیلی",
      "مدیریت انبار خوراک",
      "ریسپانسیو و PWA",
    ],
    images: [
      "/image/dam/1 (1).png",
      "/image/dam/1 (2).png",
      "/image/dam/1 (3).png",
    ],
    live: "https://havirdam.ir",
    technologies: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      },
      {
        category: "State Management",
        items: ["React Query", "React Context", "Zustand"],
      },
      {
        category: "Data Visualization",
        items: ["Chart.js", "D3.js", "React Charts"],
      },
      {
        category: "Forms & Validation",
        items: ["React Hook Form", "Zod", "Yup"],
      },
      {
        category: "Performance",
        items: ["PWA", "Lazy Loading", "Image Optimization"],
      },
    ],
    projectInfo: {
      startDate: "1403/05/01",
      endDate: "1403/09/20",
      status: "تکمیل شده و فعال",
      teamSize: "تیم ورک توسعه‌دهنده",
      client: "شرکت هوشمند پرداز هاویر",
      industry: "دامپروری و کشاورزی",
      targetMarket: "ایران",
      scale: "مدیریت 1000+ رأس دام",
    },
    challenges: [
      "مدیریت داده‌های پیچیده دامداری",
      "پیاده‌سازی سیستم سلامت دام",
      "گزارش‌گیری تحلیلی پیشرفته",
      "همگام‌سازی داده‌های Real-time",
      "بهینه‌سازی برای مناطق با اینترنت ضعیف",
    ],
    solutions: [
      "طراحی دیتابیس بهینه برای داده‌های دام",
      "پیاده‌سازی سیستم veterinary کامل",
      "استفاده از Chart.js برای ویژوالیزیشن",
      "React Query برای state management",
      "PWA برای عملکرد آفلاین",
    ],
    specialFeatures: [
      "سیستم هوشمند پیش‌بینی تولید شیر",
      "مدیریت چرخه تولیدمثل دام",
      "هشدارهای سلامت خودکار",
      "پنل veterinary با تاریخچه کامل",
      "گزارش‌های تحلیلی تولیدات",
      "مدیریت انبار خوراک دام",
      "پشتیبانی از بارکدخوان برای دام",
      "خروجی Excel برای گزارش‌ها",
    ],
    modules: [
      {
        name: "مدیریت دام",
        features: ["ثبت اطلاعات دام", "پیگیری سن و نژاد", "مدیریت گله‌ها"],
      },
      {
        name: "سیستم سلامت",
        features: ["ثبت واکسیناسیون", "پیگیری بیماری‌ها", "تاریخچه veterinary"],
      },
      {
        name: "تغذیه",
        features: ["مدیریت خوراک", "برنامه غذایی", "پیگیری مصرف"],
      },
      {
        name: "تولیدات",
        features: ["ثبت تولید شیر", "مدیریت گوشت", "فرآورده‌های جانبی"],
      },
      {
        name: "مالی",
        features: ["هزینه‌ها", "درآمدها", "سود و زیان"],
      },
    ],
    compliance: [
      "مطابق با استانداردهای دامپروری ایران",
      "سیستم امنیتی پیشرفته",
      "پشتیبان‌گیری روزانه",
      "حفاظت از داده‌های حساس",
      "SSL Encryption",
    ],
    analytics: [
      "آمار تولید شیر روزانه",
      "نرخ باروری دام",
      "هزینه‌های خوراک",
      "کارایی تولید",
      "گزارش‌های مالی",
    ],
  },

  {
    name: "08",
    id: "makimal-poultry",
    category: "شبکه ملی توزیع دان و جوجه",
    description:
      "پلتفرم جامع ارتباط مرغداران، تولیدکنندگان دان و توزیع‌کنندگان جوجه در سطح کشور با قابلیت مدیریت زنجیره تأمین.",
    detailedDescription: `
    سامانه ماکیمال یک اکوسیستم کامل برای صنعت طیور ایران است که تمامی حلقه‌های زنجیره تأمین را به هم متصل می‌کند. این پلتفرم شامل:
    
    • شبکه ملی تولیدکنندگان دان مرغ
    • سیستم توزیع هوشمند جوجه یکروزه
    • پنل مدیریت مرغداران و پرورش‌دهندگان
    • بازارگاه آنلاین محصولات طیور
    • سیستم نظارت بر کیفیت و سلامت
    • مدیریت لجستیک و حمل و نقل
    • پنل مالی و پرداخت‌های آنلاین
    • آنالیز بازار و قیمت‌گذاری هوشمند
    • آموزش و مشاوره تخصصی
    • طراحی PWA برای دسترسی آسان
    
    این سامانه با هدف ساماندهی بازار طیور و افزایش بهره‌وری در صنعت مرغداری توسعه یافته است.
  `,
    stack: [
      { name: "React", level: "پیشرفته" },
      { name: "TypeScript", level: "پیشرفته" },
      { name: "Next.js", level: "پیشرفته" },
      { name: "Tailwind CSS", level: "پیشرفته" },
      { name: "Redux Toolkit", level: "پیشرفته" },
      { name: "React Query", level: "پیشرفته" },
      { name: "Chart.js", level: "پیشرفته" },
      { name: "PWA", level: "پیشرفته" },
    ],
    features: [
      "شبکه تولیدکنندگان دان",
      "سیستم توزیع جوجه",
      "مدیریت مرغداری‌ها",
      "بازارگاه محصولات طیور",
      "سیستم نظارت بر کیفیت",
      "مدیریت لجستیک و حمل‌ونقل",
      "پنل مالی و پرداخت آنلاین",
      "آنالیز بازار و قیمت‌گذاری",
      "آموزش و مشاوره تخصصی",
      "گزارش‌گیری پیشرفته",
      "نقشه هوشمند توزیع",
      "ریسپانسیو و PWA",
    ],
    images: [
      "/image/maki/1 (6).png",
      "/image/maki/1 (7).png",
      "/image/maki/1 (1).png",
      "/image/maki/1 (2).png",
      "/image/maki/1 (3).png",
      "/image/maki/1 (4).png",
      "/image/maki/1 (5).png",
    ],
    live: "https://makimal.ir",
    technologies: [
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Redux Toolkit",
          "React Query",
        ],
      },
      {
        category: "Backend",
        items: [
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "Socket.io",
          "JWT",
        ],
      },
      {
        category: "Mapping & Logistics",
        items: [
          "Mapbox GL JS",
          "Leaflet",
          "Routing Algorithms",
          "GPS Tracking",
        ],
      },
      {
        category: "Data & Analytics",
        items: ["Chart.js", "D3.js", "Data Visualization", "Market Analysis"],
      },
      {
        category: "Payment",
        items: [
          "Zarinpal",
          "Payment Gateway",
          "Financial Reports",
          "Accounting",
        ],
      },
      {
        category: "Mobile",
        items: [
          "PWA",
          "React Native",
          "Offline Capability",
          "Push Notifications",
        ],
      },
    ],
    projectInfo: {
      startDate: "1403/08/01",
      endDate: "1404/02/15",
      status: "در حال توسعه",
      teamSize: "تیم 5 نفره",
      client: "اتحادیه مرغداران ایران",
      industry: "صنعت طیور و کشاورزی",
      targetMarket: "سراسر ایران",
      scale: "500+ تولیدکننده, 1000+ مرغداری",
    },
    challenges: [
      "یکپارچه‌سازی زنجیره تأمین گسترده",
      "مدیریت لجستیک در سطح ملی",
      "کنترل کیفیت محصولات",
      "پیش‌بینی قیمت و بازار",
      "هماهنگی بین تولیدکنندگان مختلف",
    ],
    solutions: [
      "پیاده‌سازی سیستم توزیع هوشمند",
      "استفاده از الگوریتم‌های بهینه‌سازی مسیر",
      "سیستم رتبه‌بندی کیفیت محصولات",
      "آنالیز داده‌های بازار با هوش مصنوعی",
      "پلتفرم ارتباطی یکپارچه",
    ],
    specialFeatures: [
      "نقشه هوشمند توزیع ملی",
      "سیستم رتبه‌بندی تولیدکنندگان",
      "پیش‌بینی قیمت با هوش مصنوعی",
      "کنترل کیفیت آنلاین",
      "مدیریت زنجیره سرمایی",
      "پنل مشاوره تخصصی",
      "آموزش‌های ویدیویی",
      "گزارش‌های تحلیلی بازار",
    ],
    modules: [
      {
        name: "تولیدکنندگان دان",
        features: [
          "ثبت محصولات",
          "مدیریت قیمت",
          "کنترل کیفیت",
          "ارسال به مناطق",
        ],
      },
      {
        name: "توزیع جوجه",
        features: [
          "ثبت نژادها",
          "مدیریت سفارشات",
          "برنامه‌ریزی حمل",
          "پیگیری سلامت",
        ],
      },
      {
        name: "مرغداران",
        features: ["ثبت مرغداری", "مدیریت خرید", "پیگیری تولید", "گزارش‌گیری"],
      },
      {
        name: "بازارگاه",
        features: [
          "فروش محصولات",
          "حراجی آنلاین",
          "دریافت پیشنهادات",
          "امتیازدهی",
        ],
      },
      {
        name: "لجستیک",
        features: [
          "بهینه‌سازی مسیر",
          "پیگیری حمل",
          "مدیریت ناوگان",
          "کنترل دما",
        ],
      },
    ],
    stakeholders: [
      {
        type: "تولیدکنندگان دان",
        benefits: ["دسترسی به بازار گسترده", "مدیریت فروش", "افزایش مشتری"],
      },
      {
        type: "پرورش‌دهندگان جوجه",
        benefits: ["توزیع هوشمند", "کنترل کیفیت", "دسترسی به مرغداران"],
      },
      {
        type: "مرغداران",
        benefits: ["تهیه مواد اولیه", "دسترسی به جوجه سالم", "مشاوره تخصصی"],
      },
      {
        type: "توزیع‌کنندگان",
        benefits: ["بهینه‌سازی مسیر", "افزایش درآمد", "مدیریت ناوگان"],
      },
    ],
    compliance: [
      "مطابق با استانداردهای وزارت جهاد کشاورزی",
      "کنترل کیفیت سازمان دامپزشکی",
      "استانداردهای حمل و نقل",
      "قوانین مالیاتی",
      "حریم خصوصی داده‌ها",
    ],
    impact: {
      economic: "کاهش 30% هزینه‌های توزیع",
      quality: "افزایش 40% کنترل کیفیت",
      access: "دسترسی 80% مرغداران به منابع",
      efficiency: "افزایش 35% بهره‌وری",
    },
  },

  {
    name: "01",
    id: 1,
    category: " وب سایت  فروش انلاین ساعت",
    description:
      "در این وب‌سایت فروش ساعت، با مجموعه‌ای متنوع از ساعت‌های لوکس، اسپرت و کلاسیک، هر سلیقه‌ای پوشش داده شده است. امکانات جستجوی پیشرفته به شما کمک می‌کند تا به‌راحتی ساعت مورد نظر خود را پیدا کنید. با پشتیبانی 24 ساعته و چت آنلاین، سوالات شما در سریع‌ترین زمان پاسخ داده می‌شود. طراحی مدرن این وب‌سایت، خرید را برای شما آسان و لذت‌بخش می‌کند",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "javascript" },
      { name: "BootStrap" },
      { name: "Map-online" },
    ],
    images: [
      "/image/watch.png",
      "/image/watch3.png",
      "/image/watch11.png",
      "/image/watch417.png",
      "/image/watch67.png",
      "/image/watch13221.png",
      "/image/watch881.png",
    ],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "04",
    id: 4,
    category: "باغ تالار پالادیوم",
    description:
      "با طراحی تعاملی و نقشه‌های ناوبری دقیق، دسترسی به بخش‌های مختلف باغ تالار ما آسان و سریع است. منوهای آکاردئونی ما تجربه کاربری شما را بهبود می‌بخشند و اطلاعات مورد نیاز را به شکلی منظم و زیبا ارائه می‌دهند. صفحه گالری ما نیز امکانات و زیبایی‌های باغ تالار را به شکلی کاربردی و جذاب به نمایش می‌گذارد.",
    stack: [
      { name: "html 5" },
      { name: "css 5" },
      { name: "javascript" },
      { name: "BootStrap" },
      { name: "React.js" },
    ],
    images: [
      "/image/header.png",
      "/image/main.png",
      "/image/main-2.png",
      "/image/slider.png",
      "/image/contact.png",
      "/image/map.png",
    ],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "05",
    id: 5,
    category: "وب سایت شخصی خودم  ",
    description:
      " (نسخه قبلی) وب سایت شخصی خودم که برای ارائه خدمات و ثبت سفارش های کاربران ساخته شده که از تکنولوژی های روز استفاده شده",
    stack: [
      { name: "framer-motion" },
      { name: "Tailwind CSS" },
      { name: "javascript" },
      { name: "React" },
      { name: "Next.js" },
    ],
    images: [
      "/image/my-web.png",
      "/image/my-web-2.png",
      "/image/my-web-33.png",
    ],
    live: "",
    github: "https://saeidrezaei.netlify.app",
  },
  {
    name: "06",
    id: 9,
    category: "وب سایت اموزشی (ری اکت اپ)",
    description:
      "وب سایت اموزشی و فروش دوره های اموزشی(react_app) جهت فروش دوره به صورت انلاین و دانلودی با کیفیتی عالی و تجربه کاربری راحت در اختیار مشتری",
    stack: [
      { name: "javascript" },
      { name: "React.js" },
      { name: "Sass" },
      { name: "Redux" },
      { name: "Next.js" },
    ],
    images: [
      "/image/educate_1 (2).png",
      "/image/educate_1 (1).png",
      "/image/educate_1 (3).png",
      "/image/educate_1 (4).png",
      "/image/educate_1 (5).png",
      "/image/educate_1 (6).png",
    ],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "10",
    id: "palladium-wedding",
    category: "کارت دعوت عروسی",
    description: "کارت دعوت عروسی به روش دیجیتال برای دعوات مهمانان",
    detailedDescription: `
    سایت تالار عروسی پالادیوم یک پلتفرم جامع برای مدیریت و رزرو تالارهای عروسی است که شامل:
    • سیستم رزرواسیون آنلاین پیشرفته
    • گالری تصاویر و ویدیوهای تالار
    • پنل مدیریت چندنفره برای کارکنان
    • سیستم مدیریت مالی و پرداخت‌ها
    • تقویم رزرواسیون هوشمند
    • سیستم اطلاع‌رسانی و نوتیفیکیشن
    • مدیریت منو و خدمات جانبی
    • نظرسنجی و سیستم امتیازدهی
    • طراحی لوکس و مناسب مجالس
    • پشتیبانی از چندین زبان
    
    این پلتفرم به منظور ارائه بهترین تجربه به متقاضیان و مدیریت آسان برای صاحبان تالار توسعه یافته است.
  `,
    stack: [
      { name: "html", level: "پیشرفته" },
      { name: "css", level: "پیشرفته" },
      { name: "js", level: "پیشرفته" },
      { name: "swiper", level: "پیشرفته" },
    ],
    features: [
      "سیستم رزرواسیون آنلاین",
      "گالری چندرسانه‌ای",
      "پنل مدیریت پیشرفته",
      "مدیریت مالی و پرداخت",
      "تقویم هوشمند",
      "سیستم نوتیفیکیشن",
      "مدیریت منو و خدمات",
      "نظرسنجی و امتیازدهی",
      "چندزبانه",
      "گزارش‌گیری",
      "ریسپانسیو",
      "SEO Optimization",
    ],
    images: [
      "/image/wedd/1 (1).png",
      "/image/wedd/1 (7).png",
      "/image/wedd/1 (2).png",
      "/image/wedd/1 (6).png",
      "/image/wedd/1 (3).png",
      "/image/wedd/1 (4).png",
      "/image/wedd/1 (5).png",
    ],
    live: "https://saeid-rezaei0.github.io/wedding_cart2/",
    technologies: [
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Chart.js",
        ],
      },
      {
        category: "Backend",
        items: [
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "JWT",
          "Socket.io",
        ],
      },
      {
        category: "State Management",
        items: ["Redux Toolkit", "React Query", "Context API", "Zustand"],
      },
      {
        category: "UI/UX",
        items: ["Responsive Design", "Mobile First", "Dark Mode", "Animation"],
      },
      {
        category: "Payment",
        items: [
          "Zarinpal",
          "Payment Gateway",
          "Invoice System",
          "Financial Reports",
        ],
      },
      {
        category: "Performance",
        items: ["CDN", "Image Optimization", "Lazy Loading", "Caching"],
      },
    ],
    projectInfo: {
      startDate: "1401/11/1",
      endDate: "1401/11/5",
      status: "تکمیل شده و فعال",
      teamSize: "تک توسعه‌دهنده",
      client: "تالار عروسی پالادیوم",
      industry: "مراسم و مجالس",
      targetUsers: "متقاضیان تالار عروسی، مدیران تالار",
    },
    adminPanelFeatures: [
      "داشبورد مدیریتی پیشرفته",
      "مدیریت رزرواسیون",
      "مدیریت مالی و تراکنش‌ها",
      "مدیریت کاربران و سطوح دسترسی",
      "مدیریت گالری و محتوا",
      "مدیریت منو و خدمات",
      "گزارش‌گیری و آمار",
      "تنظیمات سیستم",
    ],
    bookingSystem: [
      "تقویم رزرواسیون Real-time",
      "سیستم پرداخت آنلاین",
      "تاییدیه خودکار رزرو",
      "ارسال ایمیل و SMS",
      "مدیریت ظرفیت و تاریخ",
      "سیستم waiting list",
      "کنسل کردن رزرو",
      "پیگیری وضعیت",
    ],
    challenges: [
      "مدیریت تقویم رزرواسیون پیچیده",
      "یکپارچه‌سازی درگاه پرداخت",
      "مدیریت ظرفیت و overlapping",
      "پشتیبانی از دستگاه‌های مختلف",
      "امنیت داده‌های حساس",
    ],
    solutions: [
      "پیاده‌سازی الگوریتم‌های مدیریت زمان",
      "استفاده از درگاه‌های پرداخت معتبر",
      "سیستم validation پیشرفته",
      "تست cross-browser و cross-device",
      "رمزنگاری و امنیت پیشرفته",
    ],
    specialFeatures: [
      "Virtual Tour 360 درجه",
      "سیستم مقایسه پکیج‌ها",
      "ماشین حساب هزینه مراسم",
      "چک لیست برنامه‌ریزی",
      "سیستم دعوت نامه الکترونیک",
      "نظرسنجی مهمانان",
      "پشتیبانی چت آنلاین",
      "وبلاگ آموزشی مراسم",
    ],
    modules: [
      {
        name: "مدیریت رزرواسیون",
        features: ["تقویم", "پکیج‌ها", "تایید رزرو", "مدیریت تاریخ"],
      },
      {
        name: "مدیریت مالی",
        features: ["پرداخت‌ها", "صورتحساب", "گزارش مالی", "تخفیف‌ها"],
      },
      {
        name: "مدیریت محتوا",
        features: ["گالری", "وبلاگ", "نظرات", "امتیازدهی"],
      },
      {
        name: "مدیریت کاربران",
        features: ["پروفایل", "سطح دسترسی", "تاریخچه", "اعتبارسنجی"],
      },
    ],
    performance: {
      pageLoad: "< 3 ثانیه",
      mobileScore: "95% در Lighthouse",
      seoScore: "92% در Lighthouse",
      availability: "99.9% uptime",
      database: "MongoDB Atlas Cluster",
    },
    security: [
      "SSL Encryption",
      "JWT Authentication",
      "Role-based Access Control",
      "Data Encryption",
      "Regular Security Audits",
    ],
  },
];
