import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useSelector } from 'react-redux';

export default function ImageStyle() {
  const annonces = useSelector(state => state.annonce.annonces);

  return (
    <div className='r-wrapper'>
     <div className='padding innerWidth r-container'>  
     <div className='r-head flexColStart'>  
        <span> Best choices</span>
     </div>
     <Swiper>
        {
        annonces.map((card,index)=>{
          <SwiperSlide key={index}> 
               <div className='r-card'>
               <img src={card.image} alt={card.titre} className="w-full h-56 object-cover" />
               <span className='secondaryText r-price'> 
                  <span>$</span> <span>{card.prix}</span>
               </span>
               </div>
          </SwiperSlide>
        })
        }
     </Swiper>
     </div>
    </div>
  )
}
