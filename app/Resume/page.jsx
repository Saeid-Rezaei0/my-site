import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaDatabase,
  FaVuejs,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCode,
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";

import Socials from "@/components/ui/Socials";
function Resume() {
  const aboutme = {
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

  const experience = {
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
          { name: "سامانه هاویر کشت   ", link: "https://havirkesht.ir/" },
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

  const skills = {
    title: "مهارت‌های تخصصی",
    description: "تسلط کامل بر طیف وسیعی از تکنولوژی‌های توسعه وب و اپلیکیشن",
    skillsitem: [
      // Frontend

      {
        icon: <SiPwa className="text-blue-500" />,
        name: "PWA ( اپلیکیشن) ",
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
        icon: <SiTypescript className="text-blue-500" />,
        name: "TypeScript",
        level: "پیشرفته",
      },
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript",
        level: "پیشرفته",
      },
      {
        icon: <SiNextdotjs className="text-white" />,
        name: "Next.js",
        level: "پیشرفته",
      },
      {
        icon: <SiMysql className="text-blue-600" />,
        name: "MySQL",
        level: "پیشرفته",
      },
      {
        icon: <SiExpress className="text-gray-300" />,
        name: "Express.js",
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

      // Backend

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

      // CMS & E-commerce

      {
        icon: <SiWoocommerce className="text-purple-600" />,
        name: "WooCommerce",
        level: "پیشرفته",
      },

      // DevOps & Cloud
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

      // Testing & Tools
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
        icon: <SiFigma className="text-purple-400" />,
        name: "Figma",
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

      // Mobile & PWA
    ],
  };

  const education = {
    title: "تحصیلات",
    description:
      "دانشجوی مهندسی نرم‌افزار با تمرکز بر توسعه وب و فناوری‌های مدرن",
    degree: "کارشناس مهندسی نرم‌افزار",
    university: "دانشگاه ملی شهید مدنی ",
    period: "۱۴۰۰ - تاکنون",
    achievements: [
      "کسب رتبه برتر در پروژه‌های برنامه‌نویسی وب",
      "شرکت در کارگاه‌های تخصصی توسعه front-end / back-end",
      "توسعه پروژه‌های عملی با تکنولوژی‌های روز",
      "مدیر پروژه تیم برای مسابقات دانشجویی برنامه نویسی ",
      "توسعه سامانه های در سطح کشور به ترافیک بالا ",
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-6 lg:p-8 shadow-2xl shadow-cyan-500/10"
        >
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="flex  justify-center gap-3 mb-8 p-1 bg-slate-700/50 rounded-xl">
              {[
                {
                  value: "about",
                  label: "معرفی",
                  icon: <FaUser className="ml-2" />,
                },
                {
                  value: "experience",
                  label: "سوابق",
                  icon: <FaBriefcase className="ml-2" />,
                },
                {
                  value: "skills",
                  label: "مهارت‌ها",
                  icon: <FaCode className="ml-2" />,
                },
                {
                  value: "education",
                  label: "تحصیلات",
                  icon: <FaGraduationCap className="ml-2" />,
                },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center px-4 py-2 rounded-lg data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 transition-all"
                >
                  {tab.icon}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="min-h-[500px]" dir="rtl">
              {/* تب معرفی */}
              <TabsContent value="about" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    {aboutme.title}
                  </h2>
                  <p className="text-slate-300 max-w-2xl mx-auto">
                    توسعه‌دهنده فول‌استک با اشتیاق فراوان برای خلق تجربیات
                    دیجیتال استثنایی. متعهد به تولید کدهای تمیز، مقیاس‌پذیر و
                    بهینه با استفاده از تکنولوژی‌های روز دنیا.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {aboutme.info.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 hover:border-cyan-400/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-cyan-400">{item.icon}</div>
                        <div>
                          <div className="text-slate-400 text-sm">
                            {item.fieldname}
                          </div>
                          <div className="text-white font-medium">
                            {item.fieldvalue}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <p className="text-slate-400 mb-4">من را دنبال کنید</p>
                  <Socials
                    containerStyles="flex justify-center gap-4"
                    iconsStyles="w-10 h-10 border border-cyan-500/30 bg-slate-700/50 rounded-lg flex justify-center items-center text-cyan-400 hover:bg-cyan-500/20 hover:text-white transition-all duration-300"
                  />
                </div>
              </TabsContent>

              {/* تب سوابق کاری */}
              <TabsContent value="experience" className="space-y-6">
                <div className="text-right mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    {experience.title}
                  </h2>
                  <p className="text-slate-300">{experience.description}</p>
                </div>

                <ScrollArea className="h-[400px] text-right pr-4">
                  {experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl p-6 mb-6 border border-slate-600/50"
                    >
                      <div className="flex justify-between  items-start mb-4">
                        <div>
                          <h3 className="text-xl text-right  font-bold text-white">
                            {item.position}
                          </h3>
                          <p className="text-cyan-400">{item.company}</p>
                        </div>
                        <span className="text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full text-sm">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-slate-300 mb-4">{item.description}</p>

                      <div>
                        <h4 className="text-slate-400 mb-2">پروژه‌های شاخص:</h4>
                        <div className="grid gap-2">
                          {item.projects.map((project, i) => (
                            <Link
                              key={i}
                              href={project.link}
                              className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                            >
                              <span className="text-white">{project.name}</span>
                              <span className="text-cyan-400 text-sm">
                                مشاهده →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </ScrollArea>
              </TabsContent>

              {/* تب مهارت‌ها */}
              <TabsContent value="skills" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    {skills.title}
                  </h2>
                  <p className="text-slate-300">{skills.description}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {skills.skillsitem.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-700/30 rounded-xl p-4 text-center border border-slate-600/50 hover:border-cyan-400/30 transition-all duration-300 group"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <h4 className="text-white font-medium mb-1">
                        {skill.name}
                      </h4>
                      <span className="text-slate-400 text-sm">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* تب تحصیلات */}
              <TabsContent value="education" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    {education.title}
                  </h2>
                  <p className="text-slate-300">{education.description}</p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl p-8 border border-slate-600/50"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {education.degree}
                      </h3>
                      <p className="text-cyan-400 text-lg">
                        {education.university}
                      </p>
                    </div>
                    <span className="text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                      {education.period}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-slate-400 mb-3">دستاوردهای برجسته:</h4>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-400 mx-2 rounded-full mt-2 mr-3"></div>
                          <span className="text-slate-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h4 className="text-cyan-400 mb-2">گرایش‌های تخصصی:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "توسعه وب پیشرفته",
                        "معماری نرم‌افزار",
                        "پایگاه داده",
                        "DevOps",
                      ].map((item) => (
                        <span
                          key={item}
                          className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
