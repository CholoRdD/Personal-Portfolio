import React from "react";

const buttons = [
  {
    title: "About Me",
    link: "#",
  },
  {
    title: "Experiences",
    link: "#",
  },
  {
    title: "Personal Projects",
    link: "#",
  },
];

function NavBar() {
  return (
    <div className="flex flex-row w-full h-16 items-center px-10 opacity-55 text-gray-500">
      <button className="text-2xl font-bold w-1/5">CHOLO'S PORTFOLIO</button>
      <div className="flex flex-row justify-end gap-6 text-2xl font-bold w-4/5 h-full">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className="h-full px-4  flex items-center justify-center hover:opacity-50 hover:text-blue-500 transition-all duration-200"
          >
            {btn.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
