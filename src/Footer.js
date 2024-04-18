// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-cyan-950 to-blue-950 text-white py-8">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* Partie 1: Logo et Coordonnées */}
//         <div className="flex items-center mb-4 md:mb-0">
//           <img src="/images/Blue_Modern_Luxury_Real_Estate_Logo__1_-removebg-preview.png" alt="Logo" className="w-32 h-32 mr-2" />
//           <div className="md:mr-4">
//             <p>Email: example@email.com</p>
//             <p>Numéro: +123456789</p>
//             <p>Localisation: Ville, Pays</p>
//           </div>
//         </div>

//         {/* Partie 2: Liens */}
//         <ul className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-end">
//           <li className="mr-4 mb-2"><a href="#" className="hover:text-blue-500">Accueil</a></li>
//           <li className="mr-4 mb-2"><a href="#" className="hover:text-blue-500">À Propos</a></li>
//           <li className="mr-4 mb-2"><a href="#" className="hover:text-blue-500">Services</a></li>
//           <li className="mr-4 mb-2"><a href="#" className="hover:text-blue-500">Listings</a></li>
//           <li className="mr-4 mb-2"><a href="#" className="hover:text-blue-500">Contact</a></li>
//         </ul>

//         {/* Partie 3: Contact */}
//         <div>
//           <h3 className="text-xl font-bold mb-2">Contact</h3>
//           <p>Email: contact@example.com</p>
//           <p>Téléphone: +123456789</p>
//         </div>
//       </div>
//       {/* Droits d'Auteur */}
//       <div className="mt-4 text-center">lg:mt-0 mt-6 uppercase
//         <p>&copy; {new Date().getFullYear()} Tous droits réservés. DARNA NRM.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { FaFacebook , FaTwitter , FaInstagram , FaArrowRight , FaLinkedin , FaEnvelope , FaPhone  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-slate-200 pt-10">
      <div className="container mx-auto py-8 px-16 lg:flex lg:items-start lg:justify-between">
     
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <p className="xl:text-base text-sm py-3 w-4/5 lg:text-left text-center">2728 Rue de l'Immobilier, Paris, France 75001</p>
          <span className="flex items-center gap-x-2 ">
          <FaPhone className="w-6 h-6 mr-2" />
          <p >+212 687 687 687</p>
          </span>
          <span className='flex items-center gap-x-2 pt-3'>
          <FaEnvelope className="w-6 h-6 mr-2" />
          <p >immobilier2024@gmail.com</p>
          </span>
        </div>
        <div className="lg:flex lg:w-1/4 mb-8 lg:mb-0 pb-5 ">
          <div className="lg:mr-8 pr-10">
            <p className="text-gray font-semibold mb-4 uppercase">Liens Rapides</p>
            <ul className="text-gray text-sm">
              <li className="xl:text-base text-sm mt-2 cursor-pointer">Accueil</li>
              <li className="xl:text-base text-sm mt-2 cursor-pointer">À Propos</li>
              <li className="xl:text-base text-sm mt-2 cursor-pointer">Annonces</li>
              <li className="xl:text-base text-sm mt-2 cursor-pointer">Articles</li>
              <li className="xl:text-base text-sm mt-2 cursor-pointer">Devenir Agent</li>
            </ul>
          </div>
          <div>
            <p className="text-gray font-semibold mb-4 uppercase">Découverte</p>
            <ul className="text-gray text-sm">
              <li className="xl:text-base text-sm mt-2 cursor-pointer">Canada</li>
              <li className="xl:text-base text-sm mt-2 cursor-pointer">États-Unis</li>
              <li className="xl:text-base text-sm mt-2 cursor-pointer">Allemagne</li>
              <li className="xl:text-base text-sm mt-2 cursor-pointer">Afrique</li>
              <li className="xl:text-base text-sm mt-2 cursor-pointer">France</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/4">
  <p className="text-gray-800 font-semibold mb-4 uppercase">Abonnez-vous à notre newsletter !</p>
  <div className="relative">
    <input type="email" placeholder="Adresse Email" className="h-10 w-full rounded-full px-3 py-2 text-gray-800" /> 
    <button className="bg-orange-600 text-gray-800 rounded-full w-10 h-10 flex justify-center items-center text-xl absolute right-1 top-1/2 transform -translate-y-1/2"><FaArrowRight className="w-5 h-5 text-white" /></button>
  </div>
  <p className="text-gray-800 font-semibold mt-6 mb-2 uppercase">Suivez-nous</p>
  <div className="flex">
    <FaFacebook className="w-6 h-6 mr-4 text-sky-950" />
    <FaTwitter className="w-6 h-6 mr-4 text-sky-950" />
    <FaInstagram className="w-6 h-6 mr-4 text-sky-950" />
    <FaLinkedin className="w-6 h-6 mr-4 text-sky-950" />
  </div>
</div>
      </div>
     
      <section className='bg-black text-slate-200 xl:text-base text-sm'>
        <div className='container mx-auto px-3 lg:flex justify-between items-center lg:h-14 lg:text-left text-center'>
        <p >
            @ 2024 Rezilla - Tous droits réservés
            </p>
            <ul className='flex lg:flex-row flex-wrap lg:justify-normal justify-center items-center'>
                <li className='mr-4 cursor-pointer'> Conditions Générales </li>
                <li className='mr-4 cursor-pointer'> Politique de Confidentialité </li>
                <li className='cursor-pointer'> Mentions Légales </li>
            </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

