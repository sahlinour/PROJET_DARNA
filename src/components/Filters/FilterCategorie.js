import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FilterCategorie() {
  const categories = useSelector(state => state.categorie.categories);
  const [showOptions, setShowOptions] = useState(false);

  const handleLogoClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="flex items-center border  bg-white  lg:backdrop-blur rounded-lg border-gray-300 shadow-lg px-5 py-2 ">
      <div className="mr-2 flex items-center" onClick={handleLogoClick}>
        <img src="/images/world-map_951821.png" alt="Logo" className="h-11 w-11 mr-2" />
        <div>
          <h2 className="text-lg font-semibold">Catégorie</h2>
          <select className=" py-2 outline-none text-gray-600">
  <option disabled selected hidden>Choisir une Catégorie</option>
  {categories.map((categorie, index) => (
    <option key={index} value={categorie.id}>{categorie.nom}</option>
  ))}
</select>


       
        </div>
      </div>
    
    </div>
  );
}

