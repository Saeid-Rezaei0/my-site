import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCod,
  FaCode,
} from "react-icons/fa";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { ScrollArea } from "../../components/ui/scroll-area";
import Link from "next/link";
import {
  education,
  experience,
  skills,
  aboutme,
} from "@/components/DataArrays/AllData";
import Socials from "@/components/ui/Socials";
import { TbPhotoShare } from "react-icons/tb";

// کامپوننت جایگزین برای motion.div
const MotionDiv = ({ children, className, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className=" mx-auto px-3 lg:px-20 w-full">
        <MotionDiv className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-6 lg:p-8 shadow-2xl shadow-cyan-500/10">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="flex lg:flex-nowrap flex-wrap flex-row justify-center gap-3 mb-8 p-1 bg-slate-700/50 rounded-xl">
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
                  className="flex items-center px-4 py-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/30 data-[state=active]:to-blue-500/30 data-[state=active]:text-cyan-300 data-[state=active]:border data-[state=active]:border-cyan-400/50 data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/20 transition-all duration-300 relative group"
                >
                  {tab.icon}
                  {tab.label}

                  {/* افکت زیر تب فعال */}
                  <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-cyan-400 rounded-full opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300"></span>

                  {/* افکت هاور برای تب‌های غیرفعال */}
                  <span className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
                    <div
                      key={index}
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
                    </div>
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
                    <div
                      key={index}
                      className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl p-6 mb-6 border border-slate-600/50"
                    >
                      <div className="flex-wrap lg:flex justify-start lg:justify-between items-start mb-4">
                        <div className="">
                          <h3 className="text-xl text-right font-bold text-white">
                            {item.position}
                          </h3>
                          <p className="text-cyan-400 text-center">{item.company}</p>
                        </div>
                        <span className="text-slate-400 bg-slate-700/50 lg:px-3  px-3 py-1 rounded-full text-sm">
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
                              href="/Examplework"
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
                    </div>
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-5 gap-4">
                  {skills.skillsitem.map((skill, index) => (
                    <div
                      key={index}
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
                    </div>
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

                <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl p-8 border border-slate-600/50">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {education.degree}
                      </h3>
                      <p className="text-cyan-400 text-lg">
                        {education.university}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-slate-400 mb-3">دستاوردهای برجسته:</h4>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 mx-2 bg-cyan-400 rounded-full mt-2 mr-3"></div>
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
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </MotionDiv>
      </div>
    </div>
  );
}

export default Resume;
