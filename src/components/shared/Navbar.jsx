'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import logo from "@/assets/logo.png";
import { WorkOutContext } from '@/contexts/WorkOutContexts';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const {todaysWorkout, savedWorkout} = useContext(WorkOutContext);
    const pathname = usePathname();

    const links = <>
        <li>
            <Link href="/workouts" className={`rounded-2xl ${pathname === "/workouts" ? "bg-[#1A2312] text-[#C2F800]" : "text-gray-300"}`}>
                Workouts
            </Link>
        </li>
        <li>
            <Link href="/my-plan" className={`rounded-2xl ${pathname === "/my-plan" ? "bg-[#1A2312] text-[#C2F800]" : "text-gray-300"}`}>
                My Plan
            </Link>
        </li>
    </>
    return (
        <div className='sticky top-0 z-50 bg-black border-b border-[#292D35] py-2'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href="/workouts">
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 font-bold text-lg sm:text-xl font-oswald">
                            <Image
                                src={logo}
                                alt="logo"
                                width={30}
                                height={20}
                                className="w-6 sm:w-7.5 h-auto object-contain"
                            />
                            FITLOG
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-3 lg:gap-6">
                    <Link href="/my-plan"
                        className="flex items-center gap-2 text-sm font-medium text-gray-200 transition-colors hover:text-white">
                        Plan <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-2 text-xs font-bold text-black shadow-[0_0_10px_rgba(194,248,0,0.2)]">
                            {todaysWorkout.length}
                        </span>
                    </Link>

                    <Link href="/my-plan"
                        className="flex items-center gap-2 text-sm font-medium text-gray-200 transition-colors hover:text-white">
                        Saved
                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-600 bg-white/5 px-2 text-xs font-bold text-gray-300">
                            {savedWorkout.length}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;