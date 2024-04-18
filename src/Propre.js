import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Propre = () => {
  return (
    <div className='container mx-auto lg:flex px-28 mb-28  mt-12 lg:pt-0 pt-8'>
      <div className='lg:w-2/5 ml-'>
        <h1 className="text-3xl font-bold mb-4 text-blue-700">À Propos de Nous</h1>
        <p className="text-lbase mb-4">Nous sommes une équipe passionnée dédiée à fournir les meilleures solutions immobilières.</p>
        <p className='text-base text-gray-700'>Nous nous engageons à offrir des services de haute qualité qui répondent aux besoins de nos clients.</p>
        {/* Carte 1 */}
        <div className='lg:block hidden'>
          <div className='bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3  mt-6'>
            <FontAwesomeIcon icon={faHome} className='text-4xl text-blue-950 w-1/3' />
            <div>
              <h1 className="text-lg font-semibold pb-2">Expertise Immobilière</h1>
              <p className='text-gray-700 text-sm'>Nous avons une expertise approfondie dans le marché immobilier local et international.</p>
            </div>
          </div>
        </div>
        {/* Carte 2 */}
        <div className='lg:block hidden'>
          <div className='bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3  mt-6'>
            <FontAwesomeIcon icon={faHome} className='text-4xl text-blue-950 w-1/3' />
            <div>
              <h1 className="text-lg font-semibold pb-2">Service Clientèle Exceptionnel</h1>
              <p className='text-gray-700 text-sm'>Notre équipe est dédiée à offrir un service clientèle exceptionnel à chaque étape du processus.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 flex items-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem] ml-32'>
        <img src='/images/b4b16e9d-731e-49c7-a1b0-618aada0083d.jpeg' className='rounded-3xl w-1/2 h-4/5 shadow-md object-cover'/>
        <div className='w-1/2 h-4/5 flex flex-col gap-4 relative -top-20 '>
        <img src='/images/Features of Modern Luxury Living room Interior Design _ FH.jpeg' className=' w-full h-3/5 rounded-3xl shadow-md object-cover'/>
        <img src='/images/télécharger (10).jpeg' className=' w-full h-2/5 rounded-3xl shadow-md object-cover'/>
        <button className='bg-gradient-to-r from-blue-300 to-blue-200 rounded-full h-12 w-12 cursor-auto absolute -bottom-8 left-10'></button>
        </div>
        </div>
        <div className='lg:hidden block pt-4 py-16'>
         <div className='bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3  mt-6'>
         <FontAwesomeIcon icon={faHome} className='text-4xl text-blue-950 w-1/3' />
         <span>
              <h1 className="text-lg font-semibold pb-2">Service Clientèle Exceptionnel</h1>
              <p className='text-gray-700 text-sm'>Notre équipe est dédiée à offrir un service clientèle exceptionnel à chaque étape du processus.</p>
            </span>
         </div>
         <div className='lg:hidden block pt-4 py-16'>
         <div className='bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3  mt-6'>
         <FontAwesomeIcon icon={faHome} className='text-4xl text-blue-950 w-1/3' />
         <span>
              <h1 className="text-lg font-semibold pb-2">Service Clientèle Exceptionnel</h1>
              <p className='text-gray-700 text-sm'>Notre équipe est dédiée à offrir un service clientèle exceptionnel à chaque étape du processus.</p>
            </span>
         </div>
         </div>
        
        </div>
    </div>
  );
}

export default Propre;
