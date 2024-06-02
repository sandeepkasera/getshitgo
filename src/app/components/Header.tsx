"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Using Font Awesome for hamburger menu icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <nav className='container mx-auto flex justify-between items-center px-4'>
        <Link href="/"><h3 className='text-white text-2xl font-bold'>Get Shit Go</h3></Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-10 md:z-auto transition-all duration-300 ease-in-out`}>
          <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <Link href="/cart">Cart</Link>
          </li>
          {/* <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <Link href="/profile">My Profile</Link>
          </li> */}
          <div className="relative md:flex items-center space-x-1 p-4 md:p-0">
            <form action="#" method="GET" className="flex items-center w-full">
              <input type="text" name="search" placeholder="Search Products" className="px-4 py-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800" />
              <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Search
              </button>
            </form>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
