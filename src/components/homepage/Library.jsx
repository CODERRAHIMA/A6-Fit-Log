import React from 'react';
import WorkoutCard from '../shared/WorkOutCard';
import Link from 'next/link';

const getWorkOuts = async () => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
        return await res.json();
    } catch (error) {
        return [];
    }
}

const Library = async () => {

    const workouts = await getWorkOuts();

    return (
        <div id="library" className='max-w-7xl mx-auto scroll-mt-24 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 my-12 lg:my-6 space-y-2'>
            <h2 className='text-4xl font-oswald font-semibold'>THE LIBRARY</h2>
            <p className='text-gray-400'>Twelve lifts covering every major muscle group.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-6 sm:mt-8">
                {workouts.map((workout) => (
                    <Link key={workout.id} href={`/workouts/${workout.id}`}>
                        <WorkoutCard workout={workout} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Library;