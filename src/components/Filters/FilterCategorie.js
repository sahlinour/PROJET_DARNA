import React from 'react'
import { useSelector } from 'react-redux'

export default function FilterCategorie() {
    const categories = useSelector(state => state.categorie.categories);
  return (
    <div>
      <select>
         {
            categories.map((categorie,index)=>{
              return( <option key={index} value={categorie.id}>{categorie.nom}</option>)
              
            })
         }
      </select>
    </div>
  )
}
