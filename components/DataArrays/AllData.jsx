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
      level: "متوسط",
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
      level: "متوسط",
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
  ],
};

export const education = {
  title: "تحصیلات",
  description:
    "دانشجوی مهندسی نرم‌افزار با تمرکز بر توسعه وب و فناوری‌های مدرن",
  degree: "کارشناس مهندسی نرم‌افزار",
  university: "دانشگاه ملی شهید مدنی",
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
    name: "01",
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
    name: "02",
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
    name: "03",
    category: "انلاین شاپ کالا چی",
    description:
      "تجربه‌ای نوین از خرید آنلاین با  وب‌سایت فروشگاهی کالا چی با طراحی تعاملی و امکانات پیشرفته، تجربه خرید آنلاین شما را به سطح جدیدی ارتقا می‌دهد. با قابلیت جستجوی پیشرفته، به راحتی محصولات مورد نظر خود را پیدا کنید و با چت آنلاین، از پشتیبانی فوری و مؤثر بهره‌مند شوید. طراحی کاربرپسند ما، خریدی سریع و راحت را برای شما به ارمغان می‌آورد.",
    stack: [
      { name: "javascript" },
      { name: "React.js" },
      { name: "Sass" },
      { name: "Redux" },
      { name: "Next.js" },
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
  },
  {
    name: "04",
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
    category: " وب سایت شخصی خودم",
    description:
      "وب سایت شخصی خودم که برای ارائه خدمات و ثبت سفارش های کاربران ساخته شده که از تکنولوژی های روز استفاده شده",
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
];
