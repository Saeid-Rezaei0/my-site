"use client"
import { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { FaPhoneAlt } from 'react-icons/fa';
import Socials from "./Socials";

function Header() {
    const [scrolled, setscrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handlerscroll = () => {
            if (window.scrollY >= 150) {
                setscrolled(true)
            } else {
                setscrolled(false)
            }
        }
        window.addEventListener("scroll", handlerscroll)

        return () => {
            window.removeEventListener("scroll", handlerscroll)
        }
    }, [])

    return (
        <header className={`${scrolled ? "sticky bg-glass" : ""}  py-3 text-white lg:mb-10  top-0 left-0 w-full  z-50`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* mobile nav */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
                <div className={`hidden lg:flex order-2 lg:order-1`}>
                    <Nav />
                </div>
                <div className="order-1 lg:order-2 ">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="button-contact bg-black text-white flex items-center p-2 pr-10 rounded">
                        <div className="txt-upload">ارتباط با من</div>
                        {/* <FaPhone/> */}
                    </button>
                </div>
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center z-50" dir="ltr">
                        <div className="modal-contact rounded-lg shadow-lg max-w-sm w-full p-6 relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-4 text-gray-200 text-2xl hover:green-500"
                            >
                                &times;
                            </button>
                            <div className="title-feature overflow-hidden max-w-[80%] mt-[-1.1rem] mx-auto text-center">
                                <div className="line-modal  ml-6"></div>
                                <h4 className="text-white mt-[-0.4rem] gap-4 font-bold py-8 text-xl whitespace-nowrap">ارتباط با من</h4>
                                <div className="line-modal mr-6"></div>
                            </div>
                            {/* <h2 className="text-xl font-semibold mb-4 text-center text-gray-200">
             
            </h2> */}
                            <p className="text-center text-gray-400 mb-4">
                                جهت سفارش پروژه با این شماره تماس بگیرید
                            </p>
                            <div className="flex items-center mb-5">
                                <FaPhoneAlt className="text-accent text-lg mr-2 mt-[-0.4rem]" />
                                <a href="tel:+989388449181" className="text-gray-200">+98 09388449181</a>
                            </div>
                            <Socials
                                containerStyles="flex gap-4 z-50 hover:mt-10"
                                iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-black transition-all duration-500 leading-none p-0"
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
