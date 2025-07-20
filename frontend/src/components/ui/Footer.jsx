import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-teal-600 to-purple-600 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-20">
        {/* Logo & Tagline */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            HealNow<span className="text-white/70">.care</span>
          </Link>
          <p className="mt-4 text-base text-white/80">
            Empowering minds, healing lives. Book therapy and wellness sessions with trusted professionals.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-base">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/therapists" className="hover:underline">Therapists</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-base">
            <li>Email: support@healnow.care</li>
            <li>Phone: +91 98765 43210</li>
            <li>Mon - Fri: 9am - 6pm</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-5 text-center text-base text-white/80">
        © {new Date().getFullYear()} HealNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
