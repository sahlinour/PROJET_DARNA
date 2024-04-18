// import React from 'react';
// import { Slide , Fade} from 'react-awesome-reveal';

// export default function AnnonceCard({ annonce }) {
//   const { id, titre, description, prix, image , surface, etage, statut, categorie, typeAnnonce, datepublication, adresse } = annonce;

//   return (

//       <div className='flex min-h-screen flex-col justify-center ml-7'>
//       {/* <div className='group h-96 w-96 [perspective:1000px] '>
//       <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
//       <div className='absolute inset-0'>
//       <img src="/images/télécharger (7).jpeg" alt="Logo" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" />
//       </div>

//       <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] '>
//          <div className='flex min-h-full flex-col items-center justify-center '>
//          <h2 className='text-3xl font-bold '>{titre}</h2>
//          <p className="text-sm text-gray-500 mb-2">{description}</p>
//         <p className="text-sm text-gray-500 mb-2">Prix: {prix}</p>
//         <p className="text-sm text-gray-500 mb-2">Surface: {surface}</p>
//         <p className="text-sm text-gray-500 mb-2">Categorie: {categorie}</p>
//         </div>
//        </div>
//        </div>
//       </div> */}

//       <div className='text-white shadow-md rounded-lg overflow-hidden relative group   '>
//         <img src={image} alt="Logo" className="w-full rounded-lg max-w-[380px] h-[350px]" />
//         <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 bg-black/60 w-full h-full  group-hover:backdrop-blur-sm duration-500'>
//         <div className='space-y-4'>
//           <Slide cascade>
//           <h2 className='text-3xl font-bold '>{titre}</h2> 
//           </Slide>
//           <Fade cascade damping={0.05}>
//             {description}
//           </Fade>
//           <div>
//           <button className='border border-white px-4 py-2 rounded-lg hover:bg-black hover:text-white duration-300'>Voir Plus</button>
//         </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { Link } from 'react-router-dom';

export default function AnnonceCard({ annonce }) {
  const { id, titre, description, prix, image, surface, categorie, adresse, ville } = annonce;

  return (
    <div className=" bg-slate-50 shadow-lg rounded-lg  pb-5 ml-20
    rounded-tl-[98px] w-full mx-auto my-7 max-w-[298px] max-h-[530px] cursor-pointer hover:shadow-3xl transition
     relative  transform hover:scale-105  hover:bg-gradient-to-r from-slate-200 to-blue-50   overflow-visible hover:shadow-blue-300">
      <img src={image} alt={titre} className="w-full rounded-ss-lg rounded-t-lg h-44 object-cover" />
      <div className="px-6 pt-4">
        <div className="flex items-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{categorie}</span>
          <div className="flex items-center bg-gray-200 rounded-full pl-3">
            <img src='/images/surface_12702004.png' alt="logo" className="w-6" />
            <span className="inline-block px-2 py-1 text-xs font-medium text-gray-700 mr-2 bg-gray-200 rounded-full">{surface}</span>
          </div>
        </div>
        <div className="flex items-center ">
            <img src='/images/placeholder_684908.png' alt="logo" className="w-4 mr-2" />
            <span className="inline-block font-medium text-blue-700  mb-2 mt-3">{adresse}</span>
          </div>
        <p className="text-gray-700 text-sm ">{description}</p>
      </div>
      <div className="px-6 pt-2">
        <div className="flex items-center">
          <span className="inline-block py-1 text-sm font-semibold text-orange-500 mr-1">{prix}</span>
          <span className="inline-block px-2 py-1 text-sm font-semibold text-orange-500">DH</span>
          <div className="flex items-center">
            <Link to={`/details/${id}`}>
              <img src='/images/arrow_5948629.png' alt="logo" className="w-6 ml-36" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

