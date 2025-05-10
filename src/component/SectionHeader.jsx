import React from 'react'


const SectionHeader = ({ title, children,onClick }) => {
    return (
      <div className="sm:flex 
      sm:flex-col sm:my-4 my-4 p-2">
        <div className="flex items-center justify-between">
          <h1 className="text-[26px] font-bold sm:text-3xl sm:font-bold">
            {title}
          </h1>
          


          {onClick && (
          <button
            className="text-red-500 hover:underline text-[20px] sm:hidden"
            onClick={onClick}
          >
            View All
          </button>
        )}
        </div>
        <div className="flex justify-evenly sm:justify-start sm:items-center">
          {children}
        </div>
      </div>
    );
  };
  
  export default SectionHeader;
  