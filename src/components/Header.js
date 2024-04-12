import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../const';
import { useContext } from 'react';
import useOnline from '../utils/useOnline';
import userContext from '../utils/userContext';
import { useSelector } from "react-redux";

const Title = () => {
  return(
    <a href='/'>
      <img className='h-28 p-2' src={LOGO} alt='logo'/>
    </a>
  )
}

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const {user} = useContext(userContext); 

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <>
      <div className="flex justify-between bg-pink-50 shadow-lg ">
       <Title />
        <div className="nav-items">
          <ul className='flex py-10'>
            <li className='px-2'>
              <Link to="/">Home</Link>
            </li>
            <li className='px-2'>
              <Link to="/about">About</Link>
            </li>
            <li className='px-2'>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='px-2'>
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className='px-2'>
              <Link to="/cart">Cart - {cartItems.length} Items</Link>
            </li>
          </ul>
        </div>
        <h1>{isOnline ? "🟢" : "🛑"}</h1>
        <span className='font-bold p-10 text-red-500'>{user.name}</span>
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
