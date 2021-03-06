import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-white-800 text-4xl font-bold cursive tracking-widest"
          >
            Bryan
          </NavLink>

          <NavLink
            to="/post"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-white-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-blue-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-blue-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/bryan-feliciano-velez-a381b7201/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/bryanfeliciano"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
