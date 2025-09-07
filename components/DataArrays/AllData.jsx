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
  FaFileAlt,
  FaBookOpen,
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
      fieldvalue: "saeid.rezaei695@gmail.com",
    },
  ],
};

import { Code2, PhoneCall } from "lucide-react";
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

export const links = [
  {
    name: "خانه",
    path: "/",
    icon: <FaHome className="text-xl" />,
  },
  {
    name: "خدمات",
    path: "/Services",
    icon: <FaCogs className="text-xl" />,
  },
  {
    name: "رزومه",
    path: "/Resume",
    icon: <FaFileAlt className="text-xl" />,
  },
  {
    name: "نمونه کارها",
    path: "/Examplework",
    icon: <Code2 size={22} />,
  },
  {
    name: "مقالات",
    path: "/Articles",
    icon: <FaBookOpen className="text-xl" />,
  },

  {
    name: "راه‌های ارتباطی",
    path: "/Contact",
    icon: <PhoneCall className="text-xl" size={18} />,
  },
];

export const articles = [
  {
    id: 1,
    title: "بهینه‌سازی عملکرد در React با استفاده از useMemo و useCallback",
    excerpt:
      "آیا می‌دانید استفاده نادرست از useMemo و useCallback می‌تواند عملکرد برنامه React شما را بدتر کند؟ در این راهنمای جامع، به شما نشان می‌دهیم که چگونه و دقیقاً در چه مواقعی از این هوک‌های حیاتی React استفاده کنید تا رندرهای غیرضروری را حذف کرده و عملکرد برنامه‌های بزرگ مقیاس خود را به طور چشمگیری بهبود بخشید. همراه با مثال‌های عملی و معیارهای اندازه‌گیری عملکرد.",
    image: "/article/1.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "۸ دقیقه",
    tags: ["React", "بهینه‌سازی", "جاوااسکریپت", "Performance"],
    views: 2245,
    category: "فرانت‌اند",
    slug: "optimizing-react-performance",
    content: `
      <p>یکی از چالش‌های اصلی در توسعه برنامه‌های React، مدیریت بهینه رندرها و جلوگیری از محاسبات غیرضروری است. هوک‌های useMemo و useCallback دو ابزار قدرتمند در React هستند که به ما در حل این چالش کمک می‌کنند.</p>
      
      <h2>useMemo چیست و چه زمانی باید از آن استفاده کرد؟</h2>
      <p>useMemo یک هوک در React است که به ما امکان می‌دهد مقادیر محاسبه‌شده را ذخیره کرده و فقط زمانی که وابستگی‌های آن تغییر می‌کنند، مجدداً محاسبه کنیم. این هوک برای بهینه‌سازی محاسبات سنگین بسیار مفید است.</p>
      
      <p>مثال زیر نشان می‌دهد چگونه می‌توان از useMemo برای محاسبه یک لیست فیلترشده استفاده کرد:</p>
      
      <pre><code>const expensiveValue = useMemo(() => {
  return items.filter(item => item.category === selectedCategory);
}, [items, selectedCategory]);</code></pre>
      
      <p>در این مثال، فقط زمانی که items یا selectedCategory تغییر کنند، فیلتر کردن مجدداً انجام می‌شود. این از انجام محاسبات غیرضروری در هر رندر جلوگیری می‌کند.</p>
      
      <h2>useCallback و بهینه‌سازی توابع</h2>
      <p>useCallback شبیه به useMemo است، اما به جای ذخیره مقادیر، توابع را memoize می‌کند. این هوک زمانی مفید است که می‌خواهید از ایجاد مجدد توابع در هر رندر جلوگیری کنید، به ویژه هنگامی که آن توابع به کامپوننت‌های فرزند ارسال می‌شوند.</p>
      
      <pre><code>const handleClick = useCallback(() => {
  setCount(prevCount => prevCount + 1);
}, []);</code></pre>
      
      <p>در این مثال، تابع handleClick فقط یک بار ایجاد می‌شود و در رندرهای بعدی از نسخه memoized آن استفاده می‌شود.</p>
      
      <h2>چه زمانی از useMemo و useCallback استفاده نکنیم؟</h2>
      <p>استفاده نادرست از useMemo و useCallback می‌تواند عملکرد برنامه را کاهش دهد. این هوک‌ها خود مقداری overhead دارند و استفاده از آنها برای محاسبات ساده یا توابع کوچک می‌تواند بی‌فایده یا حتی مضر باشد.</p>
      
      <p>قانون کلی این است که فقط زمانی از useMemo و useCallback استفاده کنید که:</p>
      <ul>
        <li>محاسبات بسیار سنگین هستند</li>
        <li>توابع به کامپوننت‌های فرزند ارسال می‌شوند و می‌خواهید از رندرهای غیرضروری جلوگیری کنید</li>
        <li>مقادیر به عنوان وابستگی به هوک‌های دیگر ارسال می‌شوند</li>
      </ul>
      
      <h2>نتیجه‌گیری</h2>
      <p>useMemo و useCallback ابزارهای قدرتمندی برای بهینه‌سازی عملکرد در React هستند، اما باید با دقت و فقط در مواقع لازم استفاده شوند. با استفاده صحیح از این هوک‌ها، می‌توانید رندرهای غیرضروری را کاهش داده و تجربه کاربری بهتری ایجاد کنید.</p>
    `,
  },
  {
    id: 2,
    title: "آموزش کامل TypeScript برای توسعه دهندگان React",
    excerpt:
      "TypeScript نه تنها یک انتخاب، بلکه یک ضرورت برای توسعه اپلیکیشن‌های enterprise-level است. در این آموزش گام‌به‌گام، از نصب و پیکربندی اولیه تا advanced type patterns مخصوص پروژه‌های React را فرا بگیرید. با typing کردن props، hooks، context و reducers به صورت حرفه‌ای آشنا شوید و از باگ‌های رایج در طول توسعه جلوگیری کنید.",
    image: "/article/2.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "۱۲ دقیقه",
    tags: ["TypeScript", "React", "آموزش", "Enterprise"],
    views: 1987,
    category: "فرانت‌اند",
    slug: "typescript-for-react-developers",
    content: `
      <p>TypeScript یک superset از JavaScript است که type checking ایستا را به زبان اضافه می‌کند. این ویژگی به توسعه‌دهندگان کمک می‌کند خطاها را زودتر تشخیص دهند و کد قابل نگهداری‌تری بنویسند.</p>
      
      <h2>نصب و راه‌اندازی TypeScript در پروژه React</h2>
      <p>برای افزودن TypeScript به یک پروژه React، می‌توانید از دستور زیر استفاده کنید:</p>
      
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <p>یا اگر پروژه React شما از قبل وجود دارد، می‌توانید TypeScript را با نصب packages لازم اضافه کنید:</p>
      
      <pre><code>npm install --save typescript @types/node @types/react @types/react-dom @types/jest</code></pre>
      
      <h2>تعریف انواع برای Props کامپوننت‌ها</h2>
      <p>یکی از رایج‌ترین استفاده‌های TypeScript در React، تعریف انواع برای props کامپوننت‌ها است. این کار به شما کمک می‌کند از ارسال props نادرست به کامپوننت‌ها جلوگیری کنید.</p>
      
      <pre><code>interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC&lt;ButtonProps&gt; = ({ label, onClick, disabled = false, variant = 'primary' }) => {
  return (
    &lt;button onClick={onClick} disabled={disabled} className={\`btn btn-\${variant}\`}&gt;
      {label}
    &lt;/button&gt;
  );
};</code></pre>
      
      <h2>Typing هوک‌های React</h2>
      <p>TypeScript با هوک‌های React نیز به خوبی کار می‌کند. در مثال زیر، نحوه typing useState و useEffect را مشاهده می‌کنید:</p>
      
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState&lt;User | null&gt;(null);
  const [loading, setLoading] = useState&lt;boolean&gt;(true);
  
  useEffect(() => {
    fetchUser().then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, []);
  
  if (loading) return &lt;div>Loading...&lt;/div&gt;;
  if (!user) return &lt;div>User not found&lt;/div&gt;;
  
  return (
    &lt;div&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
    &lt;/div&gt;
  );
};</code></pre>
      
      <h2>نتیجه‌گیری</h2>
      <p>استفاده از TypeScript در پروژه‌های React نه تنها به کاهش خطاها کمک می‌کند، بلکه documentation داخلی ایجاد کرده و collaboration بین توسعه‌دهندگان را بهبود می‌بخشد. با یادگیری نحوه صحیح typing کامپوننت‌ها، هوک‌ها و داده‌ها، می‌توانید از مزایای کامل TypeScript در توسعه برنامه‌های React بهره‌مند شوید.</p>
    `,
  },
  {
    id: 12,
    title: "چگونه یک Portfolio شخصی حرفه ای با Next.js بسازیم؟",
    excerpt:
      "یک portfolio impactful می‌تواند درب‌های فرصت‌های شغلی را به روی شما باز کند. در این راهنمای گام‌به‌گام، یاد می‌گیرید چگونه با Next.js یک portfolio مدرن، سریع و SEO-friendly بسازید. از طراحی و development گرفته تا deployment و optimization برای showcase کردن projects، skills و experience شما به بهترین شکل ممکن.",
    image: "/article/3.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "15 دقیقه",
    tags: ["Portfolio", "Next.js", "شخصی", "Career"],
    views: 2876,
    category: "فرانت‌اند",
    slug: "build-portfolio-with-nextjs",
    content: `
      <p>یک portfolio آنلاین حرفه‌ای یکی از مؤثرترین ابزارها برای نمایش مهارت‌ها و تجربیات شما به عنوان توسعه‌دهنده است. Next.js با ویژگی‌هایی مانند Server-Side Rendering (SSR)، Static Site Generation (SSG) و بهینه‌سازی خودکار، انتخاب ایده‌آلی برای ساخت portfolio است.</p>
      
      <h2>راه‌اندازی پروژه Next.js</h2>
      <p>برای شروع، یک پروژه Next.js جدید ایجاد کنید:</p>
      
      <pre><code>npx create-next-app@latest my-portfolio
cd my-portfolio
npm run dev</code></pre>
      
      <p>این دستورات یک پروژه Next.js جدید ایجاد کرده و سرور توسعه را راه‌اندازی می‌کنند.</p>
      
      <h2>ساختار پروژه Portfolio</h2>
      <p>یک ساختار منطقی برای پروژه portfolio خود ایجاد کنید:</p>
      
      <pre><code>src/
  components/
    Header/
    Footer/
    ProjectCard/
    SkillSection/
  pages/
    index.js
    about.js
    projects.js
    contact.js
  styles/
    globals.css
  data/
    projects.js
    skills.js</code></pre>
      
      <h2>ایجاد صفحات اصلی</h2>
      <p>صفحه اصلی portfolio باید شامل معرفی کوتاه، هایلایت پروژه‌ها و call-to-action باشد:</p>
      
      <pre><code>const HomePage = () => {
  return (
    &lt;&gt;
      &lt;HeroSection /&gt;
      &lt;FeaturedProjects /&gt;
      &lt;SkillsOverview /&gt;
      &lt;ContactCTA /&gt;
    &lt;/&gt;
  );
};</code></pre>
      
      <h2>بهینه‌سازی برای سئو</h2>
      <p>Next.js به صورت پیش‌فرض ویژگی‌های سئو مناسبی دارد، اما می‌توانید با استفاده از کامپوننت Head، meta tagهای اختصاصی اضافه کنید:</p>
      
      <pre><code>import Head from 'next/head';

const ProjectPage = ({ project }) => {
  return (
    &lt;&gt;
      &lt;Head&gt;
        &lt;title&gt;{project.title} - My Portfolio&lt;/title&gt;
        &lt;meta name="description" content={project.excerpt} /&gt;
        &lt;meta property="og:title" content={project.title} /&gt;
        &lt;meta property="og:description" content={project.excerpt} /&gt;
        &lt;meta property="og:image" content={project.image} /&gt;
      &lt;/Head&gt;
      {/* محتوای صفحه */}
    &lt;/&gt;
  );
};</code></pre>
      
      <h2>Deployment</h2>
      <p>Next.js را می‌توان روی پلتفرم‌های مختلفی deploy کرد. Vercel (سازنده Next.js) بهترین گزینه است:</p>
      
      <pre><code>npm i -g vercel
vercel</code></pre>
      
      <p>یا می‌توانید از GitHub Actions برای deploy خودکار استفاده کنید.</p>
      
      <h2>نتیجه‌گیری</h2>
      <p>با استفاده از Next.js، می‌توانید یک portfolio سریع، مدرن و SEO-friendly ایجاد کنید که مهارت‌های شما را به بهترین شکل نمایش دهد. ویژگی‌هایی مانند SSG و SSR به portfolio شما کمک می‌کنند تا در موتورهای جستجو رتبه بهتری داشته باشد و تجربه کاربری بهتری ارائه دهد.</p>
    `,
  },
  {
    id: 25,
    title: "مفاهیم پایه‌ای DevOps و CI/CD: هر توسعه‌دهنده‌ای باید بداند",
    excerpt: "...",
    image: "/article/14.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "20 دقیقه",
    tags: ["DevOps", "CI/CD", "Automation", "Deployment", "GitHub Actions"],
    views: 3900,
    category: "DevOps",
    slug: "devops-ci-cd-basics-for-developers",
    detail: [
      "DevOps یک فرهنگ، حرکت یا روشی است که بر همکاری و ارتباط بین توسعه‌دهندگان نرم‌افزار (Dev) و متخصصان عملیات IT (Ops) تأکید دارد.",
      "هدف اصلی DevOps، کوتاه کردن چرخه عمر توسعه سیستم‌ها و ارائه continuous delivery با کیفیت بالا است.",
      "این فرهنگ با automation فرآیندها، اندازه‌گیری عملکرد و sharing tooling به این اهداف دست می‌یابد.",
      "CI/CD یا Continuous Integration/Continuous Deployment، ستون فقرات practices DevOps است.",
      "Continuous Integration (CI) به توسعه‌دهندگان این امکان را می‌دهد که کدهای خود را به طور مکرر در یک repository مشترک merge کنند.",
      "هر commit به صورت خودکار build شده و تست‌های مختلف روی آن اجرا می‌شود تا خطاها در اسرع وقت شناسایی شوند.",
      "Continuous Delivery/Deployment (CD) گام بعدی است: deploy خودکار هر تغییری که از مرحله CI عبور کرده است به محیط staging یا production.",
      "ابزارهای محبوب CI/CD شامل Jenkins، GitLab CI/CD، CircleCI، Travis CI و GitHub Actions هستند.",
      "GitHub Actions یک پلتفرم بسیار قدرتمند و integrated با GitHub است که امکان خودکارسازی گردش کارهای نرم‌افزار را مستقیماً در repository شما فراهم می‌کند.",
      "یک pipeline CI/CD معمولاً مراحل زیر را دارد: Build -> Test (Unit, Integration) -> Lint -> Security Scan -> Deploy to Staging -> Deploy to Production.",
      "Infrastructure as Code (IaC) با استفاده از ابزارهایی مانند Terraform یا Ansible، مدیریت و provision کردن infrastructure را به صورت کد و خودکار درمی‌آورد.",
      "کنترل نسخه (Version Control) به ویژه Git، پایه و اساس همه این فرآیندها است. همه چیز باید در Git وجود داشته باشد.",
      "مونیتورینگ و لاگینگ (با ابزارهایی مانند Prometheus, Grafana, ELK Stack) پس از deploy برای اطمینان از سلامت برنامه ضروری است.",
      "دانستن این مفاهیم به توسعه‌دهندگان کمک می‌کند تا کد بهتری بنویسند (مثلاً با در نظر گرفتن deploy و scalability) و در تحویل ارزش به کاربران سریع‌تر عمل کنند.",
    ],
  },
  {
    id: 11,
    title: "راهنمای کامل استفاده از ChatGPT API در پروژه‌های Next.js",
    excerpt: "...",
    image: "/article/26.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "12 دقیقه",
    tags: ["ChatGPT", "هوش مصنوعی", "Next.js", "API Integration"],
    views: 4987,
    category: "هوش مصنوعی",
    slug: "chatgpt-api-nextjs",
    detail: [
      "ChatGPT API امکان دسترسی به مدل‌های پیشرفته هوش مصنوعی OpenAI را در برنامه‌های Next.js فراهم می‌کند.",
      "ابتدا باید در پلتفرم OpenAI حساب ایجاد کرده و API key خود را دریافت کنید.",
      "ایجاد route API در Next.js برای برقراری ارتباط امن با سرورهای OpenAI بدون exposing API key در client.",
      "استفاده از محیط سرور (server-side) برای محافظت از کلیدهای API و جلوگیری از سوء استفاده.",
      "پیاده سازی chat history برای حفظ context مکالمه و ارائه پاسخ‌های مرتبط تر.",
      "مدیریت streaming responses برای نمایش تدریجی پاسخ‌ها و بهبود تجربه کاربری.",
      "تنظیم parameters مهم مانند temperature (برای creativity پاسخ) و max_tokens (برای محدودیت طول پاسخ).",
      "پیاده سازی rate limiting برای کنترل هزینه‌ها و جلوگیری از استفاده بیش از حد.",
      "اضافه کردن system prompts برای تعیین personality و behavior مدل در تعاملات.",
      "ایجاد fallback mechanisms برای زمانی که API در دسترس نیست یا errors برمی‌گرداند.",
      "ذخیره سازی مکالمات در database برای قابلیت ادامه مکالمه در sessions مختلف.",
      "پیاده سازی authentication برای محدود کردن دسترسی به قابلیت chat به کاربران خاص.",
      "بهینه سازی هزینه‌ها با monitoring usage و انتخاب مدل مناسب برای هر use case.",
      "تست گسترده برای اطمینان از کیفیت پاسخ‌ها و رفع مشکلات احتمالی.",
      "رعایت اصول اخلاقی و حریم خصوصی در پردازش داده‌های کاربران و ذخیره سازی مکالمات.",
    ],
  },

  {
    id: 15,
    title: "چگونه یک وبلاگ سئو شده با Next.js و MDX راه‌اندازی کنیم؟",
    excerpt:
      "یک وبلاگ technical می‌تواند powerfulترین tool برای personal branding و lead generation باشد. در این راهنمای جامع، یاد می‌گیرید چگونه با Next.js و MDX یک وبلاگ ultra-fast، SEO-optimized و full-featured راه‌اندازی کنید. از setup اولیه و structuring content گرفته تا implementing RSS feeds، comment systems، analytics، و advanced optimization techniques برای maximum visibility.",
    image: "/article/5qclysghffrn.webp",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "18 دقیقه",
    tags: ["Next.js", "MDX", "وبلاگ", "Content Marketing"],
    views: 3310,
    category: "سئو",
    slug: "nextjs-mdx-blog-seo",
  },
  {
    id: 16,
    title: "آموزش جامع Django REST Framework برای ساخت API های حرفه‌ای",
    excerpt:
      "در این راهنمای جامع، شما قدم به قدم یاد خواهید گرفت که چگونه با استفاده از Django REST Framework، APIهای RESTful قدرتمند، امن و قابل اعتمادی بسازید. از serializers پیشرفته و viewset ها گرفته تا permission های سفارشی و بهینه‌سازی performance، همه‌ی آنچه برای تبدیل شدن به یک توسعه‌دهنده حرفه‌ای DRF نیاز دارید را پوشش می‌دهیم. این مقاله شامل بهترین practicesها و نمونه کدهای عملی است.",
    image: "/article/29.,png.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "20 دقیقه",
    tags: ["Django", "Python", "API", "بک‌اند", "REST"],
    views: 2890,
    category: "بک‌اند",
    slug: "django-rest-framework-guide",
  },
  {
    id: 17,
    title:
      "10 مورد از خطرناک‌ترین آسیب‌پذیری‌های امنیتی وب (بر اساس OWASP Top 10 2024)",
    excerpt:
      "آگاهی اولین قدم برای محافظت است. در این مقاله، ما به عمق 10 مورد از крити‌ترین خطرات امنیتی برای برنامه‌های وب امروزی، بر اساس آخرین گزارش OWASP در سال 2024، می‌رویم. برای هر مورد، توضیح می‌دهیم که حمله چگونه انجام می‌شود، چه تاثیراتی می‌تواند داشته باشد، و مهم‌تر از همه، با ارائه مثال‌های کد و راهکارهای عملی، نشان می‌دهیم که چگونه می‌توانید از برنامه خود در برابر آن محافظت کنید.",
    image: "/article/images.jfif",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "25 دقیقه",
    tags: ["امنیت", "OWASP", "آسیب‌پذیری", "وب", "هک"],
    views: 4250,
    category: "امنیت",
    slug: "top-10-owasp-vulnerabilities-2024",
  },
  {
    id: 18,
    title: "بهینه‌سازی Query در PostgreSQL: راهنمای عملی برای توسعه‌دهندگان",
    excerpt:
      "هیچ چیز به اندازه کوئری‌های کند نمی‌تواند یک برنامه پرترافیک را از پا درآورد. این مقاله یک راهنمای عملی و دقیق برای شناسایی، عیب‌یابی و بهینه‌سازی کوئری‌های PostgreSQL است. شما یاد خواهید گرفت که چگونه از ابزارهایی مثل EXPLAIN ANALYZE استفاده کنید، ایندکس‌های موثر ایجاد کنید، از اشتباهات رایج اجتناب کنید و در نهایت، عملکرد دیتابیس خود را به طور چشمگیری بهبود ببخشید. تمامی مثال‌ها بر اساس سناریوهای واقعی هستند.",
    image: "/article/30.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "22 دقیقه",
    tags: ["PostgreSQL", "Database", "بهینه‌سازی", "کوئری", "عملکرد"],
    views: 2450,
    category: "بک‌اند",
    slug: "postgresql-query-optimization-guide",
  },
  {
    id: 19,
    title:
      "پیاده‌سازی احراز هویت امن با JWT در Node.js و Express: از پایه تا پیشرفته",
    excerpt:
      "احراز هویت ستون فقرات امنیت большинاز برنامه‌ها است. در این مقاله، ما به طور کامل نحوه پیاده‌سازی یک سیستم احراز هویت توکن‌محور و امن را با استفاده از JSON Web Tokens (JWT) در چارچوب Node.js و Express بررسی می‌کنیم. این راهنما همه چیز را پوشش می‌دهد: از ساختار پایه و ثبت کاربر گرفته تا مدیریت توکن‌ها، رفرش توکن، افزودن نقش‌ها و permissions، و بهترین روش‌های امنیتی برای محافظت از حملات رایج. کد نهایی آماده برای استفاده در پروژه‌های واقعی ارائه شده است.",
    image: "/article/31.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "30 دقیقه",
    tags: ["Node.js", "JWT", "Authentication", "Express.js", "امنیت"],
    views: 3780,
    category: "بک‌اند",
    slug: "jwt-authentication-nodejs-advanced",
  },
  {
    id: 20,
    title: "مقایسه جامع 5 فریمورک برتر Python برای توسعه بک‌اند در سال 1404",
    excerpt:
      "انتخاب فریمورک مناسب می‌تواند مسیر کل یک پروژه را تغییر دهد. در این مقاله، ما به طور عمیق پنج غول دنیای بک‌اند پایتون - Django, FastAPI, Flask, Pyramid, و Tornado - را از جنبه‌های مختلفی مانند عملکرد، مقیاس‌پذیری، سهولت استفاده، جامعه پشتیبان، و مناسب بودن برای انواع مختلف پروژه‌ها (از APIهای سبک تا برنامه‌های enterprise) مقایسه می‌کنیم. به کمک این مقایسه جامع، می‌توانید با اطمینان کامل بهترین ابزار را برای نیاز بعدی خود انتخاب کنید.",
    image: "/article/32.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "18 دقیقه",
    tags: ["Python", "Django", "Flask", "FastAPI", "مقایسه"],
    views: 3120,
    category: "بک‌اند",
    slug: "top-5-python-backend-frameworks-2024",
  },
  {
    id: 21,
    title: "راهنمای نهایی Docker برای توسعه‌دهندگان: از مبتدی تا حرفه‌ای",
    excerpt:
      "Docker به یکی از essential skillsهای هر توسعه‌دهنده‌ای تبدیل شده است. این راهنمای جامع، شما را از مفاهیم اولیه و نصب Docker گرفته تا نوشتن Dockerfile های بهینه، کار با Docker Compose برای orchestration برنامه‌های چندکانتینری، و مدیریت volumes و networks به صورت حرفه‌ایی همراهی می‌کند. با انجام مثال‌های عملی این مقاله، بر containerization مسلط خواهید شد و قادر خواهید بود محیط توسعه خود را استاندارد و deploy برنامه‌ها را ساده‌تر کنید.",
    image: "/article/33.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "28 دقیقه",
    tags: ["Docker", "DevOps", "Container", "Deployment", "CI/CD"],
    views: 4200,
    category: "DevOps",
    slug: "ultimate-docker-guide-developers",
  },
  {
    id: 22,
    title: "آموزش GraphQL در عمل: جایگزین مدرن برای REST API",
    excerpt:
      "اگر از محدودیت‌های REST API خسته شده‌اید، زمان GraphQL فرا رسیده است. این مقاله به شما نشان می‌دهد که چگونه GraphQL می‌تواند مشکلات over-fetching و under-fetching داده را حل کند و انعطاف‌پذیری بی‌نظیری به clientها بدهد. ما با Apollo Server و Client، نحوه راه‌اندازی یک سرور GraphQL، تعریف schema، پیاده‌سازی resolvers، و انجام queries و mutations را به صورت عملی آموزش می‌دهیم. همچنین بهترین روش‌ها برای امنیت و authentication در GraphQL را پوشش می‌دهیم.",
    image: "/article/34.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "26 دقیقه",
    tags: ["GraphQL", "API", "Apollo", "Node.js", "مدرن"],
    views: 2950,
    category: "بک‌اند",
    slug: "graphql-in-action-tutorial",
  },

  {
    id: 26,
    title: "آموزش کار با Redis: پایگاه داده کلید-مقدار برای برنامه‌های پرسرعت",
    excerpt:
      "Redis یک پایگاه داده در حافظه (in-memory) است که به دلیل سرعت فوق‌العاده بالا، برای use caseهایی مانند caching، session management، صف‌های پیام (message brokering) و leaderboards ایده‌آل است. این مقاله شما را با داده‌ساختارهای مختلف Redis (رشته‌ها، لیست‌ها، مجموعه‌ها، هش‌ها)، دستورات ضروری، و نحوه integrate کردن آن در یک برنامه Node.js یا Python برای بهبود چشمگیر performance آشنا می‌کند. همچنین best practicesهای مدیریت حافظه و persistence داده‌ها نیز پوشش داده می‌شود.",
    image: "/article/35.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "22 دقیقه",
    tags: ["Redis", "Cache", "Database", "Performance", "Node.js"],
    views: 2250,
    category: "بک‌اند",
    slug: "redis-in-memory-database-tutorial",
  },
  {
    id: 27,
    title:
      "اصول تست نویسی (Unit Test, Integration Test) در Python و JavaScript",
    excerpt:
      "نوشتن تست خودکار، سرمایه‌گذاری برای آینده پروژه شماست. این مقاله به شما می‌آموزد که چرا تست نویسی مهم است و چگونه می‌توانید با frameworksی مانند pytest برای Python و Jest برای JavaScript، unit tests و integration tests موثر بنویسید. ما coverage گزارش تست، mocking وسیله‌های جانبی، نوشتن تست‌های خوانا و maintainable، و integrate کردن تست‌ها در خط لوله CI/CD را پوشش می‌دهیم. با این مهارت، با اطمینان بیشتری کد بزنید و از regressions جلوگیری کنید.",
    image: "/article/images (1).jfif",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "28 دقیقه",
    tags: ["Testing", "Unit Test", "Integration Test", "Python", "JavaScript"],
    views: 1980,
    category: "برنامه‌نویسی",
    slug: "unit-integration-testing-principles",
  },
  {
    id: 28,
    title: "مقدمه‌ای بر سیستم‌های Message Queue: RabbitMQ و Apache Kafka",
    excerpt:
      "برای ساخت برنامه‌های truly scalable و resilient، باید سرویس‌های مختلف بتوانند به صورت loosely coupled با یکدیگر ارتباط برقرار کنند. Message Queueها این امکان را فراهم می‌کنند. در این مقاله، ما به مقایسه دو غول این حوزه - RabbitMQ (یک broker سنتی) و Apache Kafka (یک platform streaming) - می‌پردازیم. مفاهیم پایه، architecture، و سناریوهای معمول استفاده هر کدام را بررسی کرده و به شما کمک می‌کنیم تا ابزار مناسب برای نیاز خود را انتخاب کنید.",
    image: "/article/fvrmq0102-png.webp",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "30 دقیقه",
    tags: [
      "Message Queue",
      "RabbitMQ",
      "Kafka",
      "Microservices",
      "Scalability",
    ],
    views: 2750,
    category: "بک‌اند",
    slug: "introduction-message-queues-rabbitmq-kafka",
  },
  {
    id: 29,
    title: "بررسی معماری Microservices: مزایا، چالش‌ها و بهترین روش‌ها",
    excerpt:
      "Microservices یک سبک معماری است که یک برنامه را به مجموعه‌ای از سرویس‌های کوچک، مستقل و loosely coupled تقسیم می‌کند. این مقاله به طور عمیق به بررسی این می‌پردازد که معماری Microservices چیست، چه مزایایی (مانند مقیاس‌پذیری独立 و deployability独立) و چه چالش‌های پیچیده‌ای (مانند distributed data management و inter-service communication) به همراه می‌آورد. همچنین best practicesهای طراحی، implement کردن، و monitor کردن یک سیستم microservices را نیز پوشش می‌دهیم.",
    image: "/article/36.png",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "32 دقیقه",
    tags: ["Microservices", "Architecture", "Scalability", "Docker", "DevOps"],
    views: 3350,
    category: "بک‌اند",
    slug: "microservices-architecture-deep-dive",
  },
  {
    id: 30,
    title: "آموزش کار با MongoDB: پایگاه داده NoSQL برای برنامه‌های مدرن",
    excerpt:
      "MongoDB به عنوان یک پایگاه داده سند-محور (document-oriented) و NoSQL، انعطاف‌پذیری schema-less را برای توسعه سریع برنامه‌ها ارائه می‌دهد. این مقاله از نصب و تنظیمات اولیه شروع می‌شود و به شما می‌آموزد که چگونه با استفاده از MongoDB Shell و driverهای رسمی (مانند Mongoose در Node.js)، عملیات CRUD را انجام دهید، queryهای پیشرفته بنویسید، aggregation pipelines ایجاد کنید، و از indexing برای بهینه‌سازی عملکرد استفاده نمایید. همچنین نکات مهم مربوط به طراحی schema و امنیت نیز آموزش داده می‌شود.",
    image: "/article/images (2).jfif",
    author: "سعید رضایی",
    date: "1404/09/01",
    readTime: "26 دقیقه",
    tags: ["MongoDB", "NoSQL", "Database", "Mongoose", "Node.js"],
    views: 3100,
    category: "بک‌اند",
    slug: "mongodb-nosql-database-tutorial",
  },
];
