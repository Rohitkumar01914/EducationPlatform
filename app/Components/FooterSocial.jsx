import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterSocial() {
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl pt-4">FOLLOW US :</h1>

      <div className="flex justify-center mt-12 gap-4 text-blue-700  ">
        <span className="bg-white rounded-full p-2  cursor-pointer hover:transform hover:scale-105 hover:transition-transform ">
          <FaLinkedin size={35} />
        </span>

        <span className="bg-white rounded-full p-2 cursor-pointer hover:transform hover:scale-105 hover:transition-transform ">
          <FaXTwitter className="bg-white rounded-full" size={35} />
        </span>

        <span className="bg-white rounded-full p-2 cursor-pointer hover:transform hover:scale-105 hover:transition-transform ">
          <FaFacebook size={35} />
        </span>

        <span className="bg-white rounded-full p-2 cursor-pointer hover:transform hover:scale-105 hover:transition-transform ">
          <FaInstagram size={35} />
        </span>
      </div>
    </div>
  );
}
