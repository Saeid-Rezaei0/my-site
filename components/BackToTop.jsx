"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

function BackToTop() {
    const [show, setShow] = useState(false)

    const backtotophandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 500) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        window.addEventListener("scroll", scrollHandler)
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    return (
        <div className={`${show ? "lg:flex box-shadow" : "hidden"}       fixed bottom-10 left-5 mx-1`} dir="ltr" onClick={backtotophandler}>
            <div className="relative group">
                <TooltipProvider delayDuration={10}>
                    <Tooltip>
                        <TooltipTrigger>
                        <FaArrowUp className="bg-accent w-7 border border-2 border-white p-1 rounded-lg h-7 backtotopstyle   shadow-md cursor-pointer duration-300 " />
                        </TooltipTrigger>
                        <TooltipContent className="mb-2 text-gray-100 background-custom">
                            <p>رفتن با بالا</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

export default BackToTop
