import React, { useState } from "react";

const Nav2 = () => {
  const [open, setOpen] = useState(false);
  const nav = ["About Us", "Contact", "Premium"];

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Desktop Nav */}
      <div className="hidden sm:flex items-center justify-between px-4 py-2 bg-transparent text-white fixed w-full z-50">
        <div className="flex items-center space-x-10">
        <h1 className="text-4xl font-semibold text-red-500">Refrain</h1>

          <input
            type="text"
            placeholder="Search For Music, Artist, ..."
            className="p-2  bg-gray-900 text-white w-[20vw] rounded-full"
          />
        </div>

        <div className="flex gap-4">
          {nav.map((item) => (
            <span key={item} className="cursor-pointer hover:underline">
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700">
            Login
          </button>
          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700">
            Sign Up
          </button>
        </div>
      </div>

      <div className="sm:hidden fixed top-0 left-0 w-full bg-black text-white z-50">
        <div className="flex justify-between items-center px-4 py-3">
          {!open && (
            <p className="text-sm text-gray-400 px-5">🔍 Search</p>
          )}
           {!open && (
            <p className="text-sm text-gray-400 px-5">Current</p>
          )}

          <button
            onClick={toggleMenu}
            className="text-white text-xl font-bold"
          >
            {open ? "╳" : "☰Menu"}
          </button>
        </div>

        {open && (
          <div className="flex flex-col items-center gap-6 py-6 bg-black h-screen transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center gap-4 text-lg">
              {nav.map((item) => (
                <span key={item} className="cursor-pointer hover:underline">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <button className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700">
                Login
              </button>
              <button className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav2;
