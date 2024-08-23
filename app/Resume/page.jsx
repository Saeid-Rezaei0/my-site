import React from 'react';
import { FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithub, FaDatabase, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiJavascript, SiMysql, SiTypescript, SiRedux, SiAdobephotoshop } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Socials from '@/components/ui/Socials';
function Resume() {
  const aboutme = {
    title: "درباره من",
    // description: "سعیذ رضایی طراح سایت و برنامه نویس تحت وب هستم 😉 21 سالمه و دو ساله که بصورت خودآموز تو حوزه برنامه نویسی فرانت اند کار میکنم خیلی به کارم علاقه دارم و به خلاقیت ، ایجاد طرح های مدرن و خاص و  چالش های  که وجود دارع در این حوزه علاقه  دارم 😊 در حال حاضر دانشجوی ترم 5 کارشناسی دانشگاه ملی شهید مدنی در رشته مهندسی نرم افزار هستم",
    info: [
      { fieldname: "رشته تحصلی", fieldvalue: "مهندسی نرم افزار" },
      { fieldname: "شماره تماس", fieldvalue: "09388449181" },
      { fieldname: "نام شرکت", fieldvalue: "فریلنس" },
      { fieldname: "شبکه های اجتماعی :", fieldvalue: <Socials containerStyles="flex gap-2" iconsStyles="w-7 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" /> },

    ]
  };
  const experience = {
    icon: "",
    title: "تجربه های من",
    description: "دو سال تجربه در ساخت وب سایت  ها و پلتفرم های تحت وب و انجام کار به صورت فریلنسری",
    items: [
      { شرکت: "Freelance", جایگاه: "پروژه باغ تالار پالادیوم ", شروع: "1402/12/1 - تاریخ شروع ", لینک: "https://palladium-garden.ir" },
      { شرکت: "Freelance", جایگاه: "انلاین شاپ کالا چی", شروع: "1403/2/1 - تاریخ شروع ", لینک: "#" },
      { شرکت: "Freelance", جایگاه: "سایت فروش انلاین ساعت", شروع: "1402/10/1 - تا الان", لینک: "https://saeid-rezaei0.github.io/watch" },
      { شرکت: "Freelance", جایگاه: "وب سایت شخصی", شروع: "1403/6/1 - تاریخ شروع ", لینک: "#" },
    ]
  };

  const skills = {
    title: "مهارت های من",
    description: "توسعه‌دهنده Frontend با استفاده از تکنولوژی‌های زیر که به ایجاد رابط‌های کاربری استثنایی برای یک تجربه وب لذت‌بخش اختصاص دارد.",
    skillsitem: [
      { icon: <FaReact className="text-cyan-500" />, name: "React" },
      { icon: <SiNextdotjs className="text-gray-200" />, name: "Next.js" },
      { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" }, // جدید
      { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
      { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
      { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
      { icon: <FaSass className="text-pink-400" />, name: "Sass" },
      { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
      { icon: <SiRedux className="text-purple-600" />, name: "Redux" }, // جدید
      { icon: <SiAdobephotoshop className="text-blue-600" />, name: "Photoshop" },
      { icon: <FaDatabase className="text-gray-600" />, name: "SQL" },
      { icon: <SiMysql className="text-blue-600" />, name: "MySQL" }
    ]

  };
  const education = {
    title: "تحصیلات من",
    description: "  دانش آموخته رشته مهندسی نرم‌افزار در دانشگاه ملی شهید مدنی. در طول دوره تحصیلی، دروس مختلفی مانند برنامه‌نویسی، الگوریتم‌ها، مهندسی نرم‌افزار، و طراحی وب را مطالعه کرده‌ام و توانسته‌ام مهارت‌های خود را در این زمینه‌ها تقویت کنم.",
    degree: "کارشناسی",
    fieldOfStudy: "مهندسی نرم‌افزار",
    university: "دانشگاه ملی شهید مدنی",
    currentSemester: "",
    achievements: [
      "کسب رتبه اول در پروژه پایانی درس برنامه‌نویسی وب",
      "شرکت در کنفرانس‌های مرتبط با فناوری‌های وب",
      "شرکت در دوره‌های آموزشی آنلاین مرتبط با طراحی و توسعه وب"
    ],
  }


  return (
    <div className='min-h-[80vh] flex items-center justify-center  pb-2 mb-20  lg:pb-32'>
      <div className="container mx-auto">
        <Tabs defaultValue="skills" className='flex flex-col gap-[60px]'>
          <TabsList className="flex flex-row justify-center w-full mx-auto lg:gap-6 gap-1">
            <TabsTrigger value="experience">تجربه ها</TabsTrigger>
            <TabsTrigger value="education">تحصیلات</TabsTrigger>
            <TabsTrigger value="aboutme" className="lg:text-1xl text-[15px]">درباره من</TabsTrigger>
            <TabsTrigger value="skills" className="lg:text-1xl text-[15px]">مهارت ها</TabsTrigger>
          </TabsList>
          <div className="max-h-[70vh] w-full mt-[-2.7rem]" dir='rtl'>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-right">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className='max-w-[600px] text-white/80 mx-auto lg:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => (
                      <li key={index} className='bg-[#4c4c58]  h-[184px] hover:bg-gray-600 duration-300 transition-all py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-end gap-1'>
                        <span className='text-accent'>{item.شروع}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-right'>{item.جایگاه}</h3>
                        <div className="flex flex-col">
                          <span className=''>پروژه‌های اخیر</span>
                          <Link href={item.لینک}>{item.لینک === "#" ? "https://saeid-rezaei0.github" : item.لینک}</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
          <ScrollArea className="h-[600px] sm:h-[550px] px-3">
              <div className="flex flex-col gap-[30px] text-center lg:text-right">
                <h3 className="lg:text-3xl text-[16px] font-bold text-accent">{education.title}</h3>
                <p className="max-w-[600px] text-white/80  mx-auto lg:mr-0">{education.description}</p>
                <div className="bg-gradient-to-r  from-gray-800 to-gray-700 p-10 rounded-lg shadow-lg ">
                  <div className="flex flex-col gap-[20px]">
                    <h4 className="lg:text-2xl text-xl text-white font-semibold">{education.degree} در {education.fieldOfStudy}</h4>
                    <p className="text-lg text-gray-400">{education.university}</p>
                    <div className="mt-3 pb-20 lg:pb-0">
                      <h5 className="text-xl font-bold text-accent">دستاوردها:</h5>
                      <ul className="list-inside text-white/90 mt-2">
                        {education.achievements.map((achievement, index) => (
                          <li key={index} className='lg:py-0 list-none'>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>

            </TabsContent>
            <TabsContent value="skills" className="w-full h-full container mx-auto">
  <div className="block sm:hidden">
    <ScrollArea className="h-[600px]">
      <div className="flex flex-col gap-[30px] px-3">
        <div className="flex flex-col gap-[30px] text-center lg:text-right">
          <h3 className='text-4xl font-bold'>{skills.title}</h3>
          <p className='max-w-[600px] text-white/80 mx-auto lg:mr-0'>{skills.description}</p>
        </div>
        <ul className='text-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:gap-[30px]'>
          {skills.skillsitem.map((skil, index) => (
            <li key={index} className='text-center'>
              <TooltipProvider delayDuration={10}>
                <Tooltip>
                  <TooltipTrigger
                    className='lg:h-[150px] p-4 sm:p-6 md:p-8 lg:p-10 lg:w-[150px] mx-auto text-center lg:bg-item-box bg-transparent hover:bg-gray-600 transition-all duration-300 rounded-lg flex items-center justify-center'
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-4xl sm:text-5xl lg:text-6xl group-hover:text-accent transition-all duration-300">
                        {skil.icon}
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg capitalize">{skil.name}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skil.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  </div>

  <div className="hidden sm:block">
    <div className="flex flex-col gap-[30px] px-3">
      <div className="flex flex-col gap-[30px] text-center lg:text-right">
        <h3 className='text-4xl font-bold'>{skills.title}</h3>
        <p className='max-w-[600px] text-white/80 mx-auto lg:mr-0'>{skills.description}</p>
      </div>
      <ul className='text-center grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:gap-[30px]'>
        {skills.skillsitem.map((skil, index) => (
          <li key={index} className='text-center'>
            <TooltipProvider delayDuration={10}>
              <Tooltip>
                <TooltipTrigger
                  className='lg:h-[150px] p-4 sm:p-6 md:p-8 lg:p-10 lg:w-[150px] mx-auto text-center lg:bg-item-box bg-transparent hover:bg-gray-600 transition-all duration-300 rounded-lg flex items-center justify-center'
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl group-hover:text-accent transition-all duration-300">
                      {skil.icon}
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg capitalize">{skil.name}</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skil.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  </div>
</TabsContent>
            <TabsContent value="aboutme" className="w-full text-center lg:text-right ">
              <div className="flex flex-col gap-[30px]">
                <h3 className='text-3xl font-bold'>{aboutme.title}</h3>
                <p className='maz-w-[600px] text-white/60 mx-auto lg:mx-0'>
                  <li>من سعید رضایی هستم،  متولد 1382</li>
                  <li>   دو سال است که  در حوزه برنامه‌نویسی فرانت‌اند فعالیت می‌کنم</li>
                  <li>علاقه زیادی به کارم دارم و در شرکت در کار های تیمی و چالش بر انگیز علاقه مندام.</li>
                  {/* <li>در حال حاضر  کارشناسی مهندسی نرم‌افزار در دانشگاه ملی شهید مدنی هستم.</li> */}
                </p>            
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-2 max-w-[620px] mx-auto lg:mx-0'>
                  {aboutme.info.map((item, index) => {
                    return <li key={index} className='flex items-center justify-center lg:justify-start gap-4'>
                      <span className='text-white/80'>{item.fieldname}</span>
                      <span className='text-xl'>{item.fieldvalue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>

  );
}

export default Resume;
