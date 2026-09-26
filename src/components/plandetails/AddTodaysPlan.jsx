'use client';

import React, { useContext } from 'react';
import { Calendar } from "lucide-react";
import { WorkOutContext } from '@/contexts/WorkOutContexts';
import { toast } from 'react-toastify';

const AddTodaysPlan = ({ workout }) => {

    const { todaysWorkout, setTodaysWorkout } = useContext(WorkOutContext);
    const isAdded = todaysWorkout.find((item) => item.id === workout.id);

    const handleAddToTodaysPlan = () => {
        if (isAdded) {
            toast.error("Already added in today's plan.");
            return;
        }

        if (todaysWorkout.length < 5) {
            setTodaysWorkout((prev) => [...prev, workout]);
            toast.success("Added to today's plan");
        } else {
            toast.error("You can only add 5 workouts per day.");
        }
    }

    return (
        <button
            onClick={() => handleAddToTodaysPlan()}
            className={`btn border-none rounded-xl font-semibold ${isAdded ? "bg-white/5 text-gray-300" : "bg-[#CCFF00] text-neutral-900 hover:bg-[#b7e015]"}`}
        >
            <Calendar className="w-4 h-4" />
            {isAdded ? "Added to today's plan" : "Add to today's plan"}
        </button>
    );
};

export default AddTodaysPlan;