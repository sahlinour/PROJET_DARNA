import React from 'react'
import { useSelector } from 'react-redux'

export default function FilterVille() {
    const villes = useSelector(state => state.ville.villes);
  return (
    <div>
       <select>
         {
            villes.map((ville,index)=>{
              return(<option key={index} value={ville.id}>{ville.nom}</option>) 
            })
         }
      </select>
    </div>
  )
}
