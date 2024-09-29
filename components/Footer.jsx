"use client"
// components/Footer.js
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHeart, FaHome, FaLaptopCode, FaPhone, FaPhoneAlt, FaUser } from 'react-icons/fa';
import Socials from './ui/Socials';
import { FaBoxArchive } from 'react-icons/fa6';
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
        path: "/work",
        icon: <FaLaptopCode  />
    },
   
  
];
const Footer = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <footer className="bg-[#212529] text-white py-8">
            <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between   space-y-4">
                <p className="text-center max-w-lg">
                جهت سفارش پروژه و یا پشتیبانی سایت  <a href="tel:+989388449181" className="text-blue-500 px-1" title="تماس"> تماس </a>  بگیرید
                </p>
                <div className="flex  flex-row gap-3  items-center space-y-2" dir='rtl'>
                    {links.map((item , index)=> {
                        return <>
                        <span className="transition-all duration-300 transform  group-hover:text-accent group-hover:rotate-45">
                            {item.icon}
                        </span>
                        <Link href={item.path} className="hover:text-gray-400">{item.name}</Link>
                        </>
                    })}
                </div>

            </div>
            <p className="text-sm mt-5 text-center flex  justify-center items-center mx-auto text-gray-500"> ساخته شده با <span className='text-red-800 mx-2'><FaHeart /></span> سعید رضایی © 2024</p>
        </footer>
    );
};

export default Footer;
