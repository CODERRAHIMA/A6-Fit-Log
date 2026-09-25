import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
            <div className="bg-[#15171D] border border-[#292D35] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 
                    px-6 py-10 
                    sm:px-8 sm:py-12 
                    md:px-10 md:py-14 
                    lg:p-12 
                    xl:p-16 
                    min-h-[500px] sm:min-h-[520px] md:min-h-[550px] lg:min-h-[450px]"
                >

                    {/* Left Content */}
                    <div className="col-span-2 flex flex-col justify-center text-center lg:text-left">

                        <p className="text-[#B6FF00] text-xs font-semibold tracking-wider mb-4 sm:mb-5 md:mb-6">
                            WORKOUT LIBRARY
                        </p>

                        <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-[0.95] text-white">
                            TRAIN WITH INTENT. LOG
                            <br />
                            EVERY SET.
                        </h2>

                        <p className="mt-5 sm:mt-6 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-gray-400">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today's plan, and watch the week's work add up.
                        </p>

                        <a href="#library" className="mt-6 sm:mt-7 md:mt-8 w-fit mx-auto lg:mx-0 bg-[#B6FF00] hover:bg-[#c5ff33] cursor-pointer text-black font-bold text-sm px-5 sm:px-6 py-3 rounded-md transition duration-300">
                            BROWSE WORKOUTS
                        </a>
                    </div>

                    {/* Right Image */}
                    <div className="col-span-1 flex items-center justify-center mt-8 sm:mt-10 lg:mt-0">

                        <Image
                            src={bannerImg}
                            alt="Workout"
                            width={400}
                            height={400}
                            priority
                            className="w-[220px] xs:w-[250px] sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[400px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;