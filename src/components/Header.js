import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src="https://content.jdmagicbox.com/comp/ujjain/i2/9999px734.x734.220902165921.e9i2/catalogue/food-villa-freeganj-ujjain-ujjain-fast-food-j7m5i7idmz.jpg"
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
}

export default Header;
