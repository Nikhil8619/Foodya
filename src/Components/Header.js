import { LOGO_URL } from "../utils/constant.js";
import { NEW_LOGO_URL } from "../utils/constant.js";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
   <header className="sticky top-0 z-50 bg-blue-200 shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 sm:h-24">
    {/* Logo */}
    <div className="flex-shrink-0 h-full flex items-center">
      <Link to="/" className="inline-block bg-white rounded-lg p-1 shadow-md">
        <img
          className="max-h-[100px] max-w-[150px] sm:max-w-[200px] object-contain"
          src={new URL("../utils/food_logo.jpg", import.meta.url).href}
          alt="Foodya Logo"
        />
      </Link>
    </div>



        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 items-center">
          <span>Check Status: {onlineStatus ? "🟢" : "🔴"}</span>
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/about">About Us</Link>
          <Link className="hover:underline" to="/grocery">Grocery</Link>
          <Link className="hover:underline font-semibold" to="/cart">
            Cart ({cartItems.length})
          </Link>
          <Link className="hover:underline" to="/contact">Contact Us</Link>
          <span>Services</span>
          <button
            onClick={() => setBtn(btn === "Login" ? "Logout" : "Login")}
            className="bg-white border border-gray-400 px-2 py-1 rounded hover:bg-gray-100"
          >
            {btn}
          </button>
          <span className="font-bold">{loggedInUser}</span>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-100">
          <ul className="flex flex-col space-y-2 p-4">
            <li>Check Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/grocery" onClick={() => setIsMenuOpen(false)}>Grocery</Link></li>
            <li>
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                Cart ({cartItems.length})
              </Link>
            </li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            <li>Services</li>
            <li>
              <button
                onClick={() => {
                  setBtn(btn === "Login" ? "Logout" : "Login");
                  setIsMenuOpen(false);
                }}
                className="bg-white border border-gray-400 px-2 py-1 rounded hover:bg-gray-100 w-full"
              >
                {btn}
              </button>
            </li>
            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
