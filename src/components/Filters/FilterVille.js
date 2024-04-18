import React from 'react'
import { useSelector } from 'react-redux'

export default function FilterVille() {
    const villes = useSelector(state => state.ville.villes);
  return (
   
     <div className="flex items-center border  bg-white  lg:backdrop-blur rounded-lg border-gray-300 shadow-lg px-5 py-2 ">
     <div className="mr-2 flex items-center">
       <img src="/images/location_1483336.png" alt="Logo" className="h-11 w-11 mr-2" />
       <div>
         <h2 className="text-lg font-semibold">Villes</h2>

         <select className=" py-2 outline-none text-gray-600">
         <option disabled selected hidden>Choisir une Ville</option>
         {
            villes.map((ville,index)=>{
              return(
                <option key={index} value={ville.id}>{ville.nom}</option>
              ) 
            })
         }
      </select>

       </div>
     </div>

   </div>
  )
}
