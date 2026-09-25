// import { WorkOutContext } from '@/contexts/WorkOutContexts';
// import React, { useContext } from 'react';

// const PlanSummaryCard = ({ activeTab }) => {

//     const {todaysWorkout, savedWorkout} = useContext(WorkOutContext);

//     const exercise = () => {
//         if (activeTab === "today") {
//             return todaysWorkout.length;
//         } else if (activeTab === "saved") {
//             return savedWorkout.length;
//         }
//     }

//     const totalMinutes = () => {
//         if (activeTab === "today") {
//             return todaysWorkout.reduce(
//                 (sum, w) => sum + Number(w.duration || 0), 0
//             );
//         } else if (activeTab === "saved") {
//             return savedWorkout.reduce(
//                 (sum, w) => sum + Number(w.duration || 0), 0
//             );
//         }
//     }

//     const totalCalories = () => {
//         if (activeTab === "today") {
//             return todaysWorkout.reduce(
//                 (sum, w) => sum + Number(w.caloriesBurned || 0), 0
//             );
//         } else if (activeTab === "saved") {
//             return savedWorkout.reduce(
//                 (sum, w) => sum + Number(w.caloriesBurned || 0), 0
//             );
//         }
//     }

//     return (
//         <div className="bg-[#13161D] rounded-2xl border border-white/5 px-8 py-6 my-8">
//             <div className="grid grid-cols-3 divide-x divide-white/10">
//                 <div className="pr-6">
//                     <p className="text-xs text-neutral-content/50">Exercises</p>
//                     <p className="text-3xl font-oswald font-extrabold text-lime-400 mt-2">
//                         {exercise()}
//                     </p>
//                 </div>
//                 <div className="px-6">
//                     <p className="text-xs text-neutral-content/50">Minutes</p>
//                     <p className="text-3xl font-oswald font-extrabold text-neutral-content mt-2">
//                         {totalMinutes()}
//                     </p>
//                 </div>
//                 <div className="pl-6">
//                     <p className="text-xs text-neutral-content/50">Calories</p>
//                     <p className="text-3xl font-oswald font-extrabold text-neutral-content mt-2">
//                         {totalCalories()}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlanSummaryCard;