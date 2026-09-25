// import { WorkOutContext } from "@/contexts/WorkOutContexts";
// import { Clock, Droplet, Star, Check, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useContext, useState } from 'react';
// import { toast } from "react-toastify";

// const ListedCard = ({ workout, activeTab }) => {

//     const { id, name, image, equipment, duration, caloriesBurned, rating } = workout;

//     const { setTodaysWorkout, setSavedWorkout } = useContext(WorkOutContext);

//     const handleMarkAsDone = (id) => {
//         setTodaysWorkout((prev) => prev.filter((workout) => workout.id !== id));
//         toast.success("Workout marked as done");
//     }

//     const handleRemoveWorkout = (activeTab, id) => {
//         if (activeTab === "today") {
//             setTodaysWorkout((prev) => prev.filter((workout) => workout.id !== id));
//             toast.error("Removed from today's plan");
//         } else if (activeTab === "saved") {
//             setSavedWorkout((prev) => prev.filter((workout) => workout.id !== id));
//             toast.error("Removed from saved");
//         }
//     }

//     return (
//         <div className="flex items-center gap-4 bg-neutral border border-white/5 rounded-2xl p-4">
//             <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
//                 <Image
//                     src={image}
//                     alt="name"
//                     width={100}
//                     height={100}
//                     className="w-full h-full object-cover"
//                 />
//             </div>

//             <div className="flex-1 min-w-0 space-y-1">
//                 <h4 className="font-bold text-base uppercase tracking-wide truncate">
//                     {name}
//                 </h4>
//                 <p className="text-sm text-neutral-content/50 mt-0.5">{equipment}</p>
//                 <div className="flex items-center gap-4 mt-2 text-xs text-neutral-content/70">
//                     <span className="flex items-center gap-1">
//                         <Clock className="w-3.5 h-3.5 text-lime-400" />
//                         {duration} min
//                     </span>
//                     <span className="flex items-center gap-1">
//                         <Droplet className="w-3.5 h-3.5 text-lime-400" />
//                         {caloriesBurned} kcal
//                     </span>
//                     <span className="flex items-center gap-1">
//                         <Star className="w-3.5 h-3.5 text-lime-400" />
//                         {rating}
//                     </span>
//                 </div>
//             </div>

//             <div className="flex items-center gap-2 shrink-0">
//                 <Link href={`/workouts/${workout.id}`}>
//                     <button className="btn btn-sm text-sm p-4 rounded-full border-white/15 bg-transparent text-neutral-content hover:bg-white/5 font-medium">
//                         View Details
//                     </button>
//                 </Link>

//                 {
//                     activeTab === "today" && (
//                         <button onClick={() => handleMarkAsDone(id)} className="btn btn-sm text-sm p-3 rounded-full bg-lime-400 hover:bg-lime-300 border-none text-neutral-900 text-[12px] font-bold">
//                             <Check className="w-5 h-5" />
//                             Mark as Done
//                         </button>
//                     )
//                 }

//                 <button onClick={() => handleRemoveWorkout(activeTab, id)} className="btn btn-sm btn-circle btn-ghost text-neutral-content/40 hover:text-neutral-content">
//                     <X className="w-4 h-4" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ListedCard;