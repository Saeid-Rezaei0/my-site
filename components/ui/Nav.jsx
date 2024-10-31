"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaLaptopCode, FaPhone, FaUser } from 'react-icons/fa';
import { FaBoxArchive } from "react-icons/fa6";
const links = [
    {
        name: "خانه",
        path: "/",
        icon: <FaHome />
    },
    {
        name: "خدمات",
        path: "/Services",
        icon: <FaBoxArchive />
    },
    {
        name: "رزومه",
        path: "/Resume",
        icon: <FaUser />
    },
    {
        name: "نمونه کارها",
        path: "/Examplework",
        icon: <FaLaptopCode  />
    },

  
];

function 
Nav() {
    const pathname = usePathname()
    return (
        <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link 
                    key={index} 
                    href={link.path} 
                    className={`${link.path === pathname && "text-accent border-b-2 border-accent capitalize font-medium hover:text-white transition-all"}`}
                >
                    <div className="flex gap-2 items-center group">
                        <span className="transition-all duration-300 transform  group-hover:text-accent group-hover:rotate-45">
                            {link.icon}
                        </span>
                        {link.name}
                    </div>
                </Link>
            );
        })}
    </nav>
    
    )
}

export default Nav