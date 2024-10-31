"use client"
import Phone from "@/components/Phone";
import State from "@/components/State";
import Socials from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";
import Services from "./Services/page";
import Work from "./work/page";
import TypingEffect from "../components/TypeingEffect"; // نام صحیح کامپوننت
import Resume from "./Resume/page";
import Examplework from "./Examplework/page";
export default function Home() {
  return (
    <>
      <section className="h-full lg:mt-[-3rem] lg:pt-4 pt-6">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
            {/* img */}
            <div className=" mb-8 lg:mb-0">
              <Phone />
            </div>
            {/* text */}
            <div className="text-center lg:text-right mt-6 lg:mt-0 lg:order-none">
              <span className="text-accent text-2xl">سعید رضایی</span>
              <h2 className="h1 my-3">
                <TypingEffect /> {/* استفاده صحیح از کامپوننت */}
              </h2>
              <p className="max-w-[500px] mb-9 mt-6 text-white/80">
              توسعه‌دهنده Frontend با استفاده از تکنولوژی‌های روز دنیا که به ایجاد رابط‌های کاربری استثنایی برای یک تجربه وب              </p>
              {/* دکمه و شبکه‌های اجتماعی */}
              <div className="flex flex-col lg:flex-row items-center gap-4" dir="rtl">
                <a href="/Resume.pdf" download className="uppercase flex border p-2 rounded-xl bg-hover-custom border-accent items-center gap-2">
                  <span className="hover:text-white">دانلود رزومه</span>
                  <FiDownload className="text-xl" />
                </a>

                <div className="mb-8 lg:mb-0 ">
                  <Socials containerStyles="flex gap-6" box-shadow iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <State />
      </section>
      <Resume />
      <Examplework />
      {/* <Work /> */}
      <Services />
      </>
  );
}
