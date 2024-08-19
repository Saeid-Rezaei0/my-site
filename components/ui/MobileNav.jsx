"use client"
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { FaHome, FaInstagram, FaTelegram, FaUser } from 'react-icons/fa';
import { FaBoxArchive } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import Image from "next/image";
import Socials from "./Socials";

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {
            name: "خانه",
            path: "/",
            icon: <FaHome />
        },
        {
            name: "رزومه",
            path: "/Resume",
            icon: <FaUser />
        },
        {
            name: "خدمات",
            path: "/Services",
            icon: <FaBoxArchive />
        },
        {
            name: "نمونه کارها",
            path: "/work",
            icon: <FaBoxArchive />
        },
    ];
    
    const pathname = usePathname();
    
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <TiThMenuOutline className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col overflow-hidden text-accent">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <nav className="flex flex-col justify-start items-center gap-5">
                        {/* پروفایل */}
                        <div className="relative top-[-10rem] w-64 h-48 bggreen text-black"></div>
                        <Image src="/moblienav.png" alt="profill" width={100} height={100} className="rounded-lg-custom border-4 border-white z-40 mt-[-16.5rem]" />
                        <h5 className="mt-[-1rem] text-[15px] text-white">سعید رضایی</h5>
                        {/* آیتم‌های منو */}
                        <div className="w-full flex flex-col items-end gap-4 mt-14 text-right">
                            {links.map(menu => (
                                <div key={menu.name} className="flex flex-row-reverse gap-4 items-center justify-end w-full">
                                    <Link href={menu.path} onClick={() => setIsOpen(false)} className={`${menu.path === pathname && "text-green-500"} capitalize text-white hover:text-accent transition-all text-[15px]`}>
                                        {menu.name}
                                    </Link>
                                    <span className={`${menu.path === pathname && "text-green-500"} text-[17px] text-white`}>{menu.icon}</span>
                                    <hr  className="bg-[#0000]"/>
                                </div>
                            ))}
                        </div>
                    </nav>
                    <div className="social-media flex justify-center relative bottom-0 mt-28 gap-2 items-center">
                    <Socials containerStyles="flex gap-4" iconsStyles="w-7 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
