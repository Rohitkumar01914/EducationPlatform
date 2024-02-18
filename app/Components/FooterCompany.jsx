import React from "react";

const bottoms = [
  "About Us",
  "Terms & Conditions",
  "Privacy Policy",
  "Return Policy",
  "Job Guarantee Policy",
  "Careers",
  "Media & Blog",
  "Contact Us",
  "FAQs",
];
export default function FooterCompany() {
  return (
    <div>
      <h1 className="text-2xl text-black  font-semibold pb-4">Company</h1>
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
