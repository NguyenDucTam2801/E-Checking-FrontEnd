import React from 'react';

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bg2 bg-cover bg-no-repeat">
      
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md flex flex-col items-center">
        <svg
          className="text-blue-500 w-8 h-8 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <h1 className="text-3xl mb-8">Successfully</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
