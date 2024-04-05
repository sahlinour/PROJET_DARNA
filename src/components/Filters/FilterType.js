import React from 'react'
import { useSelector } from 'react-redux'
export default function FilterType() {
    const types = useSelector(state => state.type.types);
    console.log(types)
  return (
    <div>
        <select>
         {
            types.map((type,index)=>{
             return( <option key={index} value={type.id}>{type.nom}</option>) 
            })
         }
      </select>
    </div>
  )
}
