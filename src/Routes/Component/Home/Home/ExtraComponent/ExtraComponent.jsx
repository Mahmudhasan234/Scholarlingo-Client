import React, { useState, useEffect } from 'react';
import Container from '../../../Container/Container';
import { Link } from 'react-router-dom';

const ExtraComponent = () => {
    const [countdownValues, setCountdownValues] = useState({
        days: 15,
        hours: 10,
        minutes: 24,
        seconds: 57,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdownValues((prevValues) => {
                const { days, hours, minutes, seconds } = prevValues;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return prevValues;
                }

                const updatedSeconds = seconds > 0 ? seconds - 1 : 59;
                const updatedMinutes = seconds === 0 ? minutes - 1 : minutes;
                const updatedHours = minutes === 0 && seconds === 0 ? hours - 1 : hours;
                const updatedDays = hours === 0 && minutes === 0 && seconds === 0 ? days - 1 : days;

                return {
                    days: updatedDays,
                    hours: updatedHours,
                    minutes: updatedMinutes,
                    seconds: updatedSeconds,
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    return (
        <Container>
            <div className='' >
                <div className='h-96 min-w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-12 rounded-lg '>
                    <div className="relative lg:left-[700px] top-[80px] left-5 card w-80 lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-500">Student Summer Sales 🔥</h2>
                            <div className="grid grid-flow-col gap-5 text-center">
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ '--value': formatTime(countdownValues.days) }}></span>
                                    </span>
                                    days
                                </div>
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ '--value': formatTime(countdownValues.hours) }}></span>
                                    </span>
                                    hours
                                </div>
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ '--value': formatTime(countdownValues.minutes) }}></span>
                                    </span>
                                    min
                                </div>
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ '--value': formatTime(countdownValues.seconds) }}></span>
                                    </span>
                                    sec
                                </div>
                            </div>

                            <div className="card-actions justify-center mt-5">
                                <button className="btn hover:bg-amber-600 bg-amber-500 text-white"><Link to='/languages'>check all Courses</Link></button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Container>
    );
};

export default ExtraComponent;