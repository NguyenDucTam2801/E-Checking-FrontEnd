import React from 'react';
import Checkattendance from '../assets/Checkattendance icon.jpg';
import Setting from '../assets/Setting icon.jpg';
import BackgroundImage from '../assets/BGROUND.jpg'; // Import the background image

const DashboardStudent = () => {
    return (
        <>
            <div>DashboardStudent</div>
            <div className='text-black' style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom'
            }}>
                <div className="bg-white py-2 sm:py-10 text-black text-center absolute top-0 left-0 w-full h-10 sm:h-35 "></div>
                <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center h-screen">
                    <button className="border-2 border-gray-400 relative w-144 h-100 sm:w-96 sm:h-64 bg-white shadow-lg p-8 mr-32 sm:mr-16 mt-10 sm:mt-50 rounded-2xl hover:scale-105 transition duration-300 ">
                        <img src={Checkattendance} alt="Check Attendance" className="pl-2 absolute top-14 left-32 w-28 h-26" />
                        <h1 className="text-2xl font-montserrat font-semibold mt-32 ml-10 mr-10 text-gray-700"> Check attendance</h1>
                    </button>
                    <button className="border-2 border-gray-400 relative w-144 h-100 sm:w-96 sm:h-64 bg-white shadow-lg p-8 mt-10 sm:mt-50 rounded-2xl hover:scale-105 transition duration-300 ml-32 sm:ml-16">
                        <img src={Setting} alt="Setting" className="pl-2 absolute top-14 left-32 w-28 h-226" />
                        <h1 className="text-2xl font-montserrat font-semibold mt-32 ml-10 mr-10 text-gray-700"> Setting</h1>
                    </button>
                </div>
                <div className="absolute top-5 left-5 sm:top-24 sm:left-5 text-4xl font-palanquin font-bold">Dashboard</div>
            </div>
        </>
    )
}

export default DashboardStudent;
