// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';

// const Header = () => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrolling(scrollTop > 50); // Change la valeur selon votre besoin
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`fixed w-full z-50 transition duration-500 ${scrolling ? 'bg-slate-300' : 'bg-transparent'} ${scrolling ? 'shadow-lg' : ''}`}>
//       <div className="container mx-auto flex justify-between items-center px-4 ">
//         <div>
//           {/* <img src="/logo.png" alt="Logo" className="w-16 h-16" /> */}
//           <h1 className={`text-xl font-bold ${scrolling ? 'text-white' : 'text-gray-100'}`}><img src="/images/Blue_Modern_Luxury_Real_Estate_Logo__1_-removebg-preview.png" alt="Logo" className="w-28 h-28" /> </h1>
//         </div>
//         <div className="text-lg flex items-center">
//           <Link to="/" className={`mx-2 border border-white ${scrolling ? 'text-white' : 'text-gray-100'} text-base py-1 px-4 rounded-full hover:bg-blue-600 transition duration-300`}>Se connecter</Link>
//           <Link to="/inscrire" className={`bg-blue-500 ${scrolling ? 'text-white' : 'text-gray-100'} text-base py-1 px-4 rounded-full hover:bg-blue-600 transition duration-300`}>S'inscrire</Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React from 'react';
import { FaBars, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-slate-200 shadow-lg ">
      <div className="container mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-gray-900 font-normal tracking-widest text-xl uppercase sm:text-2xl">
          REAL ESTATE
        </a>
        {/* Menu Toggle pour les petits écrans */}
        <div className="lg:hidden">
          <FaBars className="text-gray-700 text-3xl cursor-pointer" />
        </div>
        {/* Liens de navigation sur les grands écrans */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="inline-block px-4 font-semibold text-gray-500 hover:text-black duration-200">Acceuil</a>
            </li>
            <li>
              <a href="#" className="inline-block px-4 font-semibold text-gray-500 hover:text-black duration-200">Proprietes</a>
            </li>
            <li>
              <a href="#" className="inline-block px-4 font-semibold text-gray-500 hover:text-black duration-200">Contact</a>
            </li>
            <li>
              <a href="#" className="inline-block px-4 font-semibold text-gray-500 hover:text-black duration-200">A propre</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <a href="#" className="hidden lg:inline-block  py-2 text-slate-800 font-semibold rounded-md hover:bg-blue-600">
            
            Se Connecter
          </a>
          <a href="#" className="hidden lg:inline-block px-4 py-2 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-500">
            S'inscrire
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
