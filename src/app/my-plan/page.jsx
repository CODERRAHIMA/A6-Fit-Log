'use client';

import ListedCard from '@/components/plandetails/ListedCard';
import PlanSummaryCard from '@/components/plandetails/PlanSummaryCard';
import { WorkOutContext } from '@/contexts/WorkOutContexts';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {

    const { todaysWorkout, savedWorkout } = useContext(WorkOutContext);

    const [activeTab, setActiveTab] = useState("today");
    const [sortBy, setSortBy] = useState("duration");

    const sortWorkOut = (workOuts) => {

        const sortedWorkOut = [...workOuts];
        if (sortBy === "duration") {
            sortedWorkOut.sort((a, b) => b.duration - a.duration);
        }
        if (sortBy === "calories") {
            sortedWorkOut.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }
        if (sortBy === "rating") {
            sortedWorkOut.sort((a, b) => b.rating - a.rating);
        }
        return sortedWorkOut;
    }

    const sortedTodaysPlan = sortWorkOut(todaysWorkout);
    const sortedSavedPlan = sortWorkOut(savedWorkout);

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 my-4 lg:my-0 space-y-2'>
            <h2 className="font-oswald text-3xl font-semibold sm:text-4xl">
                MY PLAN
            </h2>
            <p className="text-sm text-gray-400 sm:text-base md:text-lg">
                Cap of five lifts for today. Finish them, then load more.
            </p>

            <PlanSummaryCard activeTab={activeTab} />

            {/* tabs */}
            <div className="flex flex-col gap-5 pt-2 sm:gap-6 md:flex-row md:items-center md:justify-between">

                <div
                    role="tablist"
                    className="tabs tabs-box w-fit rounded-2xl border border-[#292D35] bg-[#111318] p-1"
                >
                    <button
                        type="button"
                        role="tab"
                        onClick={() => setActiveTab("today")}
                        className={`tab rounded-xl px-4 text-sm font-semibold transition-all duration-200 sm:px-5
                            ${activeTab === "today"
                                ? "bg-[#1F242D] text-gray-200 shadow-sm"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        type="button"
                        role="tab"
                        onClick={() => setActiveTab("saved")}
                        className={`tab rounded-xl px-4 text-sm font-semibold transition-all duration-200 sm:px-5
                            ${activeTab === "saved"
                                ? "bg-[#1F242D] text-gray-200 shadow-sm"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Saved
                    </button>
                </div>

                {/* sorting */}
                <div className="flex w-fit items-center gap-2 sm:gap-3">

                    <label
                        htmlFor="sort"
                        className="text-xs font-semibold tracking-wider text-gray-400 sm:text-sm"
                    >
                        Sort By
                    </label>

                    <select
                        id="sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="select h-10 min-h-10 w-32 rounded-lg border border-[#292D35] bg-[#15171D] px-3 text-sm font-medium text-gray-200 outline-none transition-all duration-200 sm:w-36"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>

                </div>

            </div>

            {/* content */}
            <div className="mt-6">
                {activeTab === "today" ? (
                    <div className='grid grid-cols-1 gap-4'>
                        {
                            sortedTodaysPlan.length > 0 ? (
                                sortedTodaysPlan.map((workout, index) => (
                                    <ListedCard key={index} workout={workout} activeTab={activeTab} />
                                ))
                            ) : (
                                <div className='flex flex-col items-center gap-1 border border-dashed border-gray-800 rounded-xl p-14'>
                                    <h2 className='text-xl sm:text-2xl font-oswald font-semibold uppercase'>Nothing here yet</h2>
                                    <p className='text-[10px] sm:text-sm text-gray-400'>Browse the library and add a lift to get today moving.</p>
                                    <Link href="/workouts">
                                        <button className='btn border-none rounded-3xl font-bold px-5 bg-[#CCFF00] text-neutral-900 mt-4'>Go to workouts</button>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div className='grid grid-cols-1 gap-4'>
                        {
                            sortedSavedPlan.length > 0 ? (
                                sortedSavedPlan.map((workout, index) => (
                                    <ListedCard key={index} workout={workout} activeTab={activeTab} />
                                ))
                            ) : (
                                <div className='flex flex-col items-center gap-1 border border-dashed border-gray-800 rounded-xl p-14'>
                                    <h2 className='text-xl sm:text-2xl font-oswald font-semibold uppercase'>Nothing here yet</h2>
                                    <p className='text-[10px] sm:text-sm text-gray-400'>Browse the library and add a lift to get today moving.</p>
                                    <Link href="/workouts">
                                        <button className='btn border-none rounded-3xl font-bold px-5 bg-[#CCFF00] text-neutral-900 mt-4'>Go to workouts</button>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPlanPage;