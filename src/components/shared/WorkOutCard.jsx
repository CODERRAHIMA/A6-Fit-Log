// import Image from "next/image";
// import React from "react";
// import { Clock3, Flame, Star } from "lucide-react";

// const WorkoutCard = ({ workout }) => {
//     return (
//         <div className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-[#292D35] bg-[#15171D] transition-all duration-300 ease-out
//             hover:-translate-y-2 hover:border-[#B6FF00]/50 hover:shadow-[0_12px_35px_rgba(182,255,0,0.12)]">

//             {/* Image */}
//             <div className="relative w-full aspect-[16/9]">
//                 <Image
//                     src={workout.image}
//                     alt={workout.name}
//                     fill
//                     className="object-cover"
//                 />
//             </div>

//             {/* Content */}
//             <div className="p-6">

//                 {/* Muscle Groups */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                     {workout.muscleGroups.map((muscle) => (
//                         <span
//                             key={muscle}
//                             className="rounded-full bg-[#B6FF00] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
//                         >
//                             {muscle}
//                         </span>
//                     ))}
//                 </div>

//                 {/* Workout Name */}
//                 <h2 className="font-oswald text-xl font-bold uppercase leading-tight text-white">
//                     {workout.name}
//                 </h2>

//                 {/* Equipment */}
//                 <p className="mt-1 text-sm text-gray-400">
//                     {workout.equipment}
//                 </p>

//                 {/* Divider */}
//                 <div className="my-4 border-t border-[#292D35]" />

//                 {/* Stats */}
//                 <div className="flex items-center gap-5 text-sm text-gray-400">

//                     <div className="flex items-center gap-1.5">
//                         <Clock3 size={16} />
//                         <span>{workout.duration} min</span>
//                     </div>

//                     <div className="flex items-center gap-1.5">
//                         <Flame size={16} />
//                         <span>{workout.caloriesBurned} kcal</span>
//                     </div>

//                     <div className="flex items-center gap-1.5">
//                         <Star size={16} />
//                         <span>{workout.rating}</span>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default WorkoutCard;