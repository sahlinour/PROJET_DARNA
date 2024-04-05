import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-950 to-blue-950 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* <img src="/logo.png" alt="Logo" className="w-16 h-16" /> */}
          <h1 className="text-xl font-bold">Darkom</h1>
        </div>
        <div>
          <a href="#" className="text-lg mr-4">Se connecter</a>
          <a href="#" className="text-lg">S'inscrire</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
