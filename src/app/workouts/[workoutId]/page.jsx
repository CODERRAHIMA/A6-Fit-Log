import AddTodaysPlan from "@/components/plandetails/AddTodaysPlan";
import SavedPlan from "@/components/plandetails/SavedPlan";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from 'react';

// if here
const getWorkOuts = async ({ workoutId }) => {
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${workoutId}`);
    return await res.json();
}

const WorkOutDetailsPage = async ({ params }) => {

    const { workoutId } = await params;
    const workout = await getWorkOuts({ workoutId });

    const { name, image, muscleGroups = [], equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions = [] } = workout;

    const details = [
        { label: "Equipment", value: equipment },
        { label: "Difficulty", value: difficulty },
        { label: "Sets", value: sets },
        { label: "Reps", value: reps },
        { label: "Duration", value: `${duration} min` },
        { label: "Calories", value: `${caloriesBurned} kcal` },
        { label: "Rating", value: rating }
    ];

    return (
        <div className="max-w-7xl mx-auto my-8 bg-neutral text-neutral-content rounded-2xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {/* Image */}
                <div className="flex justify-center rounded-xl overflow-hidden aspect-[4/5] md:aspect-auto">
                    <Image
                        src={image}
                        alt={name}
                        width={600}
                        height={500}
                        className="object-cover rounded-2xl"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl uppercase font-bold tracking-tight">
                        {name}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-content/60 leading-relaxed max-w-md">
                        {description}
                    </p>

                    {/* Muscle group badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="badge bg-[#B6FF00] text-black px-3 py-3 font-medium text-xs"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Stats table */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-white/5 bg-[#1E2330]"> 
                        {details.map((detail) => (
                            <div key={detail.label} className="flex items-center justify-between px-4 py-3 text-sm border-b border-white/5" > 
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400"> 
                                    {detail.label} 
                                </span> 
                                <span className="font-medium"> 
                                    {detail.value} 
                                </span> 
                            </div>
                        ))} 
                    </div>

                    {/* Instructions */}
                    <div className="mt-6">
                        <h3 className="font-bold uppercase text-sm mb-3">Instructions</h3>
                        <ol className="space-y-2">
                            {instructions.map((step, i) => (
                                <li key={i} className="flex gap-3 text-sm text-neutral-content/70">
                                    <span className="text-neutral-content/40 shrink-0">
                                        {i + 1}.
                                    </span>
                                    <span className="leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-6">
                        <AddTodaysPlan workout={workout} />
                        <SavedPlan workout={workout} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkOutDetailsPage;
