import React from "react";
import discover from "../assets/discover1.svg";
import home1 from "../assets/home.svg";
import album from "../assets/album.svg";
import artist from "../assets/artist.svg";
import recently from "../assets/recently.svg";
import mostplayed from "../assets/mostplayed.svg";
import favorite from "../assets/favorite.svg";
import yourplaylist from "../assets/yourplaylist.svg";
import addplaylist from "../assets/addplaylist.svg";
import setting from "../assets/setting.svg";
import  logout from "../assets/logout.svg";
import  library from "../assets/library.svg";


import Line from "./Line";

const navItems = [
  {
    title: "Menu",
    links: [{ icon: home1, label: "Home" }],
  },
  {
    title: "Discover",
    links: [
      { icon: discover, label: "Discover" },
      { icon: album, label: "Album" },
      { icon: artist, label: "Artist" },
    ],
  },
  {
    title: "Library",
    links: [
      { icon: recently, label: "Recently added" },
      { icon: mostplayed, label: "Most played" },
    ],
  },
  {
    title: "Playlist & Favorite",
    links: [
      { icon: favorite, label: "Your favorite" },
      { icon: yourplaylist, label: "Your playlist" },
      { icon: addplaylist, label: "Add playlist" },
    ],
  },
  {
    title: "General",
    links: [
      { icon: setting, label: "Setting" },
      {
        icon: logout,
        label: "Logout",
        className: "text-red-500 hover:text-white fill ",
      },
    ],
  },
];

const Nav = () => {
  return (
    <>
      <div className="hidden  sm:flex sm:w-[18%] text-white h-full p-6 justify-between relative ">
        <div className="fixed ">
          {/* <h1 className="text-red-500 text-4xl font-bold">Refrain</h1> */}
<div className="">
          {navItems.map((section, index) => (
            <div key={index} className="my-2 ">
              <p className="text-xs uppercase mb-2 text-red-500">
                {section.title}
              </p>
              <div className="space-y-2">
                {section.links.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center p-2 rounded-md hover:bg-red-500 transition cursor-pointer`}
                  >
                    <img src={item.icon} alt="" className="h-5 w-5" />
                    <p className={`ml-3 text-sm ${item.className || ""}`}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
          <Line />
        </div>
      </div>

      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-black text-white p-5 flex justify-around z-50 h-22 ">
        <div className="flex items-center flex-col">
          <img src={home1} alt="" className="h-7 w-7" />
          <p className="text-lg mt-1">Home</p>
        </div>
        <div className="flex items-center flex-col">
          <img src={discover} alt="" className="h-7 w-7" />
          <p className="text-lg mt-1">Discover</p>
        </div>
        <div className="flex items-center flex-col">
          <img src={album} alt="" className="h-7 w-7" />
          <p className="text-lg mt-1">Album</p>
        </div>
        <div className="flex items-center flex-col">
          <img src={library} alt="" className="h-7 w-7" />
          <p className="text-lg mt-1">Library</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
