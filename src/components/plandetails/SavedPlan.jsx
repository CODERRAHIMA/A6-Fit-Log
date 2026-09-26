'use client';

import React, { useContext } from 'react';
import { Bookmark } from "lucide-react";
import { WorkOutContext } from '@/contexts/WorkOutContexts';
import { toast } from 'react-toastify';

const SavedPlan = ({workout}) => {

    const { savedWorkout, setSavedWorkout } = useContext(WorkOutContext);
    const isSaved = savedWorkout.find((item) => item.id === workout.id);

    const handleSavedPlan = () => {
        if(isSaved) {
            toast.error("Already saved for later.");
            return;
        }

        setSavedWorkout((prev) => [...prev, workout]);
        toast.success("Saved for later");
    }

    return (
        <button
            onClick={() => handleSavedPlan()}
            className={`btn btn-outline rounded-xl hover:bg-white/5 hover:border-white/15 font-semibold ${isSaved ? "bg-white/5 border-white/5 text-gray-300" : "border-white/50 text-neutral-content"}`}
        >
            <Bookmark className="w-4 h-4" />
            {isSaved ? "Saved for later" : "Save for later"}
        </button>
    );
};

export default SavedPlan;