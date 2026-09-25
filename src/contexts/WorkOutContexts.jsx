'use client';

import React, { createContext, useState, useEffect } from 'react';

export const WorkOutContext = createContext({});

const WorkOutProvider = ({ children }) => {

    const [todaysWorkout, setTodaysWorkout] = useState([]);
    const [savedWorkout, setSavedWorkout] = useState([]);

    // const [isLoaded, setIsLoaded] = useState(false);

    // useEffect(() => {
    //     const storedTodaysWorkout = localStorage.getItem('todaysWorkout');
    //     const storedSavedWorkout = localStorage.getItem('savedWorkout');

    //     if (storedTodaysWorkout) {
    //         setTodaysWorkout(JSON.parse(storedTodaysWorkout));
    //     }

    //     if (storedSavedWorkout) {
    //         setSavedWorkout(JSON.parse(storedSavedWorkout));
    //     }

    //     setIsLoaded(true);
    // }, []);

    // useEffect(() => {
    //     if (!isLoaded) return;

    //     localStorage.setItem(
    //         'todaysWorkout',
    //         JSON.stringify(todaysWorkout)
    //     );
    // }, [todaysWorkout, isLoaded]);

    // useEffect(() => {
    //     if (!isLoaded) return;

    //     localStorage.setItem(
    //         'savedWorkout',
    //         JSON.stringify(savedWorkout)
    //     );
    // }, [savedWorkout, isLoaded]);

    const shared = {
        todaysWorkout,
        setTodaysWorkout,
        savedWorkout,
        setSavedWorkout
    }

    return (
        <WorkOutContext.Provider value={shared}>
            {children}
        </WorkOutContext.Provider>
    );
};

export default WorkOutProvider;