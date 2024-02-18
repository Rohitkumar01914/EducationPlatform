import React from "react";

const bottoms = [
    "Become Instructor"
];
export default function FooterWork() {
  return (
    <div>
      <h1 className="text-2xl text-black  font-semibold pb-4">Work with us</h1>
      <ul>
        {bottoms.map((bottom, index) => (
          <li
            className="hover:text-blue-700 cursor-pointer w-fit text-xs text-gray-800"
            key={index}
          >
            {bottom}
          </li>
        ))}
      </ul>
    </div>
  );
}
