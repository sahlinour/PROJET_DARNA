// import React from 'react';
// import { useSelector } from 'react-redux';
// import AnnonceCard from './AnnonceCard';

// export default function ListAnnonce() {
//   const annonces = useSelector(state => state.annonce.annonces);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  place-items-center gap-6">
//       {annonces && annonces.map(annonce => (
//         <AnnonceCard key={annonce.id} annonces={annonce} />
//       ))}
//     </div>
//   );
// }


// ListAnnonce.js
import React from 'react';
import { useSelector } from 'react-redux';
import AnnonceCard from './AnnonceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function ListAnnonce() {
  const annonces = useSelector(state => state.annonce.annonces);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-1">
    
        {annonces && annonces.map(annonce => (
          <SwiperSlide key={annonce.id}>
            <AnnonceCard  annonce={annonce} /> 
          </SwiperSlide>
        ))}
     
    </div>
  );
}
