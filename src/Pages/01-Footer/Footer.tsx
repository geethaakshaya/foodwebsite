import { Link } from "react-router-dom";
import logo from "../../assets/foodlogo.jpg";
import { FaInstagram, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white w-full px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

        {/* Column 1 - Logo and Description */}
        <div>
          <img src={logo} alt="Company Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-300 leading-relaxed">
            Elevating your digital experience through clean designs and innovative tech.
          </p>
          <div className="flex gap-4 mt-4 text-[#FFA377]">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FFA377]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/home#home" className="hover:text-[#FFA377]">Home</Link></li>
            <li><Link to="/home#about" className="hover:text-[#FFA377]">About Us</Link></li>
            <li><Link to="/home#contact" className="hover:text-[#FFA377]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FFA377]">Get In Touch</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2 items-start">
              <FaMapMarkerAlt className="mt-1 text-[#FFA377]" />
              <span>12, Park Avenue, Suite 501, Bengaluru, India - 560001</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#FFA377]" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#FFA377]" />
              support@maxisite.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-sm text-gray-400">
        © 2025 Maxisite Technologies. All rights reserved.
      </p>
    </footer>
  );
}
