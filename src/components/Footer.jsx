import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="bg-gray-800 pt-10 pb-2 px-6 md:px-20 lg:px-24 w-full overflow-hidden text-gray-400"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between i">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex items-center bg-white rounded-tr-full rounded-bl-full shadow-md shadow-white px-10">
            <img className="w-24" src={assets.logo} alt="" />
            <p className="text-xl  font-bold ml-[-25px] font-mono text-black">
              CMEstate
            </p>
          </div>
          <p className="text-sm mt-4 ">
            Ready to make a Move? Let's Build your future together
          </p>
          <div className="mt-6">
            <h1 className="font-bold text-white mb-2 text-lg">
              Social Links :{" "}
            </h1>
            <div className="flex gap-4">
              <i className="fa-solid fa-person-walking-arrow-right  mt-1"></i>
              <a className="text-blue-300" href="https://www.facebook.com/" target="_blank"
                 rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="text-pink-500" href="https://www.instagram.com/" target="_blank"
                 rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="text-white" href="https://x.com/" target="_blank"
                 rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a className="text-green-500" href="https://wa.me/917082388524"
                target="_blank"
                 rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="font-bold text-white mb-4 text-lg">CM Estate</h3>
          <ul className="flex flex-col  gap-2">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Projects" className="hover:text-white">
              Projects
            </a>
            <a href="#Testimonials" className="hover:text-white">
              Testimonials
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Buying or Selling Property?
          </h3>
          <p className="mb-6 max-w-80 text-sm text-gray-300">
            Whether you're looking to buy your dream home, invest in property,
            or sell real estate at the best price, we’re here to guide you every
            step of the way. Discover the latest listings and expert tips from
            our experienced team.
          </p>
          <a href="#Contact" className="text-blue-400 underline ">
            Contact Our Experts
          </a>
          {/* <div className="flex gap-2 mt-4 text-blue-500">
            <a href="#Privacy">Privacy Policy</a>
            <p className="text-gray-400">|</p>
            <a href="#TermsCondition">Terms & Conditions</a>
          </div> */}
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center">
        Copyright 2025 © CMEstate . All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
