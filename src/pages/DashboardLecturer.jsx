import React from 'react'
import Classlist from '../assets/Classlist.jpg';
import Setting from '../assets/Setting icon.jpg';
import Checkattendance from '../assets/Checkattendance.jpg'; // Import the logo image
import BackgroundImage from '../assets/BGROUND.jpg'; // Import the background image

const DashboardLecturer = () => {
    return (
        <>
            <div>DashboardLecturer</div>
            <div className='text-black' style={{ 
                backgroundImage: `url(${BackgroundImage})`, // Use backgroundImage property
                backgroundSize: 'cover',
                backgroundPosition: 'bottom'
            }}>
                <div className="bg-white py-10 text-black text-center absolute top-0 left-0 w-full h-35 "></div>
                <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center h-screen">
                    <div className="relative"> {/* New relative positioned div */}
                        <button className="dashboard-button transform transition duration-300 hover:scale-105 mb-5 sm:mr-5" onClick={() => console.log('Student List button clicked')}>
                            <div className="border-2 border-gray-400 relative w-1444 h-1024 bg-white shadow-lg p-8 mr-8 mt-10 mt-50 rounded-2xl">
                                <img src={Classlist} alt="Class List" className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"/>
                                <h1 className="pl-10 text-2xl font-semibold mt-32 mr-20 ml-10 text-gray-700 font-montserrat">Student List</h1>
                            </div>
                        </button>
                        <button className="dashboard-button transform transition duration-300 hover:scale-105 mb-5 sm:mx-5" onClick={() => console.log('Check Attendance button clicked')}>
                            <div className="border-2 border-gray-400 relative w-1444 h-1024 bg-white shadow-lg p-8 mr-8 mt-10 mt-50 rounded-2xl">
                                <img src={Checkattendance} alt="Check Attendance" className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24"/>
                                <h1 className="text-2xl font-semibold mt-32 ml-11 mr-11 text-gray-700 font-montserrat">Check attendance</h1>
                            </div>
                        </button>
                        <button className="dashboard-button transform transition duration-300 hover:scale-105 sm:ml-5" onClick={() => console.log('Setting button clicked')}>
                            <div className="border-2 border-gray-400 relative w-1444 h-1024 bg-white shadow-lg p-8 mt-10 mt-50 rounded-2xl">
                                <img src={Setting} alt="Setting" className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24"/>
                                <h1 className="text-2xl font-semibold mt-32 ml-24 mr-24 text-gray-700 font-montserrat">Setting</h1>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="absolute top-24 left-5 text-4xl font-bold sm:mx-5 font-palanquin">Dashboard</div> 
            </div>  
        </>
    )
}

export default DashboardLecturer;
