import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#292D35] bg-black px-5 py-6 text-center sm:px-8 sm:py-7 lg:flex-row lg:gap-6 lg:px-10 lg:text-left">
    {/* Logo */}
    <div className="flex items-center gap-1.5 font-oswald text-md font-semibold sm:gap-2 sm:text-xl">
        <Image
            src={logo}
            alt="FitLog logo"
            width={30}
            height={20}
            className="h-auto w-6 object-contain -rotate-45 sm:w-7.5"
        />
        FITLOG
    </div>

    {/* Copyright */}
    <p className="max-w-xl text-[8px] leading-relaxed text-gray-400 sm:text-sm lg:max-w-none">
        © 2026 FitLog — Workout Library. Train hard, log honest.
    </p>
</div>
    );
};

export default Footer;