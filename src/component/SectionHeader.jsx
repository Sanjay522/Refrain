import React from 'react'


const SectionHeader = ({ title, children }) => {
    return (
      <div className="sm:flex sm:flex-col sm:my-4 my-4">
        <div className="flex items-center justify-between">
          <h1 className="text-[26px] font-bold sm:text-3xl sm:font-bold">
            {title}
          </h1>
          <button className="text-red-500 hover:underline text-[20px] sm:hidden">
            View all
          </button>
        </div>
        <div className="flex justify-evenly sm:justify-start sm:items-center">
          {children}
        </div>
      </div>
    );
  };
  
  export default SectionHeader;
  