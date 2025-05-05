import React from "react";
import logo from "../assets/logo.png";
import { RiWhatsappFill } from "react-icons/ri";
import { LuHandCoins } from "react-icons/lu";
import esewa from "../assets/esewa_logo.png";
import fonepay from "../assets/logo-fonepay.png";
import khalti from "../assets/khalti-logo.svg";
import imepay from "../assets/ime-main.svg";
import { MdArrowOutward } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";

export default function Footer() {
  return (
    <div className=" bg-purple-700">
      <div className="w-10/12 flex space-x-22 mx-auto pb-10 pt-16 mt-4">
        <div className="flex space-x-3">
          <div className=" text-white pb-10 space-y-3">
            <img
              src={logo}
              alt="this is logo"
              className="h-18 bg-white border-gray-200 rounded-xl px-8 hover:cursor-pointer"
            />
            <p>
              Take full control of your inventory, billing,
              <br /> and POS without the hassle. Our system <br /> helps you
              track stock in real-time, <br /> automate orders, and avoid
              mistakes, <br /> making your business faster, smarter, and <br />{" "}
              more efficient.
            </p>
            <p className=" text-md font-semibold flex items-center gap-2 hover:cursor-pointer">
              <RiWhatsappFill />
              Free Consultation
            </p>
            <p className=" text-lg font-semibold flex items-center gap-2">
              <LuHandCoins />
              We accept
            </p>
            <button className="flex border-1 border-gray-200 bg-white gap-3 p-4 rounded-r rounded-l">
              <img src={esewa} alt="esewa logo" className="h-5 bg-gray-200 " />
              <img
                src={fonepay}
                alt="fonepay logo"
                className="h-5 bg-gray-300"
              />
              <img src={khalti} alt="khalti logo" className="h-5" />
              <img src={imepay} alt="imepay logo" className="h-5" />
            </button>
          </div>
          <div className="space-y-3 text-white">
            <p className="font-bold">Quick Links</p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              Home
              <MdArrowOutward />
            </p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              Features
              <MdArrowOutward />
            </p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              Testimonials
              <MdArrowOutward />
            </p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              {" "}
              Contact
              <MdArrowOutward />
            </p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              Pricing
              <MdArrowOutward />
            </p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              Try Demo
              <MdArrowOutward />
            </p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              Resources
              <MdArrowOutward />
            </p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              Blogs
              <MdArrowOutward />
            </p>
            <p className="flex items-center gap-2 hover:cursor-pointer">
              All Features
              <MdArrowOutward />
            </p>
          </div>
        </div>
       <div className="flex space-x-3">
       <div className="text-white space-y-3">
          <p className="font-bold">Other Products</p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Inventory Management <br />
            Software
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Retail POS Software
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Biling & Invoicing <br /> Software
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Accounting Software
            <MdArrowOutward />
          </p>
        </div>
        <div className="text-white space-y-3">
          <p className="font-bold">Socials</p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            <BiLogoFacebook />
            Facebook
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            <RiInstagramFill />
            Instagram
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            <IoLogoYoutube />
            Youtube
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            <FaTwitter />
            Twitter
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            <LuLinkedin />
            Linkedin
            <MdArrowOutward />
          </p>
        </div>
       </div>
        <div className="text-white space-y-3">
          <p className="font-bold">Legal</p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Privacy Policy
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Terms of Services
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Cookies Policy
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Terms of Use
            <MdArrowOutward />
          </p>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Refund Policy
            <MdArrowOutward />
          </p>
        </div>
      </div>
    </div>
  );
}
