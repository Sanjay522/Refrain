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
import logout from "../assets/logout.svg";
import library from "../assets/library.svg";

import Line from "./Line";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    title: "Menu",
    links: [{ icon: home1, label: "Home", path: "/" }],
  },
  {
    title: "Discover",
    links: [
      { icon: discover, label: "Discover", path: "/discover" },
      { icon: album, label: "Album", path: "/album" },
      { icon: artist, label: "Artist", path: "/artist" },
    ],
  },
  {
    title: "Library",
    links: [
      { icon: recently, label: "Recently added", path: "/recently added" },
      { icon: mostplayed, label: "Most played", path: "/most played" },
    ],
  },
  {
    title: "Playlist & Favorite",
    links: [
      { icon: favorite, label: "Your favorite", path: "/favorite" },
      { icon: yourplaylist, label: "Your playlist", path: "/your playlist" },
      { icon: addplaylist, label: "Add playlist", path: "/add playlist" },
    ],
  },
  {
    title: "General",
    links: [
      {
        icon: logout,
        label: "Logout",
        className: "text-red-500 hover:text-white fill ",
        path: "/logout",
      },
    ],
  },
];

const Nav = () => {
  return (
    <>
      <div className="hidden sm:flex sm:w-[18%] text-white h-full p-6 justify-between relative">
        <div className="fixed">
          {navItems.map((section, index) => (
            <div key={index} className="my-2">
              <p className="text-xs uppercase mb-2 text-red-500">
                {section.title}
              </p>
              <div className="space-y-2">
                {section.links.map((item, i) => (
                  <NavLink
                    to={item.path}
                    key={i} // Move the key to NavLink itself
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-md hover:bg-red-500 bg-red-500 transition cursor-pointer"
                        : "flex items-center p-2 rounded-md hover:bg-red-500 transition cursor-pointer"
                    }
                  >
                    <img src={item.icon} alt="" className="h-5 w-5" />
                    <p className={`ml-3 text-sm ${item.className || ""}`}>
                      {item.label}
                    </p>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Line />
      </div>

      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-black text-white  flex justify-around z-50 h-22">
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "flex items-center flex-col justify-center p-2 w-full bg-red-500 transition cursor-pointer"
        : "flex items-center flex-col justify-center p-2 w-full hover:bg-red-500 transition cursor-pointer"
    }
  >
    <img src={home1} alt="" className="h-7 w-7" />
    <p className="text-lg mt-1">Home</p>
  </NavLink>

  <NavLink
    to="/discover"
    className={({ isActive }) =>
      isActive
        ? "flex items-center flex-col justify-center p-2 w-full bg-red-500 transition cursor-pointer"
        : "flex items-center flex-col justify-center p-2 w-full hover:bg-red-500 transition cursor-pointer"
    }
  >
    <img src={discover} alt="" className="h-7 w-7" />
    <p className="text-lg mt-1">Discover</p>
  </NavLink>

  <NavLink
    to="/album"
    className={({ isActive }) =>
      isActive
        ? "flex items-center flex-col justify-center p-2 w-full bg-red-500 transition cursor-pointer"
        : "flex items-center flex-col justify-center p-2 w-full hover:bg-red-500 transition cursor-pointer"
    }
  >
    <img src={album} alt="" className="h-7 w-7" />
    <p className="text-lg mt-1">Album</p>
  </NavLink>

  <NavLink
    to="/library"
    className={({ isActive }) =>
      isActive
        ? "flex items-center flex-col justify-center p-2 w-full bg-red-500 transition cursor-pointer"
        : "flex items-center flex-col justify-center p-2 w-full hover:bg-red-500 transition cursor-pointer"
    }
  >
    <img src={library} alt="" className="h-7 w-7" />
    <p className="text-lg mt-1">Library</p>
  </NavLink>
</div>

    </>
  );
};

export default Nav;
