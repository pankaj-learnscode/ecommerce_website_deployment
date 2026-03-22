import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center">

          {/* Logo + Copyright */}
          <div className="flex items-center mb-2 md:mb-0">
            <img src="logo.png" alt="Company Logo" className="h-16 mr-1" />

            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Scrach. All rights reserved | Developed by

              <span
                className="text-cyan-500 hover:text-cyan-300 mx-1 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://deepak-web-portfolio.onrender.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                @Developer Deepak
              </span>

              | Deployed by

              <span
                className="text-green-400 hover:text-green-300 mx-1 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://pankajportfoliyo-orp7cbu5t-psrkrks-projects.vercel.app/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Pankaj Suman
              </span>
            </p>
          </div>

          {/* Email */}
          <p className="text-center md:text-left mb-2 md:mb-0">
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:info@Scrach.com">info@Scrach.com</a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;