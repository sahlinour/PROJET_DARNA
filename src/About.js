import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-xl font-light mb-3 mt-10">Nos Services</h1>
        <p className="text-2xl font-semibold text- mb-20">Découvrez qui nous sommes et ce que nous faisons</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 : Recherche Immobilière */}
          <div className="bg-white rounded-xl pt-12 shadow-lg  h-72 ">
            <img src='/images/search_14440839.png' alt="Search Icon" className="w-16 h-16 mb-4 mx-auto" />
            <p className="text-lg font-semibold pb-2 ">Recherche Immobilière</p>
            <p className="text-gray-600 px-10">Trouvez la propriété de vos rêves parmi notre large sélection de maisons, appartements et terrains.</p>
          </div>
          {/* Service 2 : Gestion de Patrimoine */}
          <div className="bg-white rounded-xl pt-12 shadow-lg  h-72">
            <img src='/images/home_12953694.png' alt="Search Icon" className="w-16 h-16 mb-4 mx-auto" />
            <p className="text-lg font-semibold">Gestion de Patrimoine</p>
            <p className="text-gray-600 px-10">Optimisez vos investissements immobiliers et gérez efficacement votre portefeuille immobilier.</p>
          </div>
          {/* Service 3 : Assistance Juridique */}
          <div className="bg-white rounded-xl pt-12 shadow-lg  h-72">
          <img src='/images/bookmark_14441992.png' alt="Search Icon" className="w-16 h-16 mb-4 mx-auto" />
            <p className="text-lg font-semibold">Assistance Juridique</p>
            <p className="text-gray-600 px-10">Bénéficiez de conseils juridiques spécialisés pour toutes vos transactions immobilières.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
