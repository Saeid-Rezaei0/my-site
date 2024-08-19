"use client"

import Image from "next/image"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { MdCancel } from "react-icons/md"

function Imgmodal({ showModal, setShowModal, image }) {
    if (!showModal) return null; // اگر مودال نمایش داده نشود، این بخش از کد اجرا نمی‌شود.

    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]'>
            <div className='h-[75vh] w-[320px] md:w-[700px] relative'>
                <Image
                    src={image}
                    alt="Selected Image"
                    fill
                    className='object-cover rounded-lg'
                />
                <div className='flex justify-between items-center py-3 absolute bottom-2 left-2 right-2'>
                    <div className='flex space-x-2 items-center text-white'>
                        <FaArrowLeft
                            className='cursor-pointer'
                            // onClick={handlePrevious}
                        />
                        <FaArrowRight
                            className='cursor-pointer'
                            // onClick={handleNext}
                        />
                    </div>
                    <button
                        className='text-white text-lg'
                        onClick={() => setShowModal(false)}
                    >
                        <MdCancel className='font-medium text-2xl text-tertiary-dark' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Imgmodal;
