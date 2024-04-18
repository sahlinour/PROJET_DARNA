import React from 'react'
import { useSelector } from 'react-redux'
export default function FilterType() {
  const types = useSelector(state => state.type.types);
  console.log(types)
  return (

    <div className="flex items-center border  bg-white  lg:backdrop-blur rounded-lg border-gray-300 shadow-lg px-5 py-2 ">
      <div className="mr-2 flex items-center">
        <img src="/images/real-estate_951787.png" alt="Logo" className="h-11 w-11 mr-2" />
        <div>
          <h2 className="text-lg font-semibold">Type</h2>

          <select className=" py-2 outline-none text-gray-600">
            <option disabled selected hidden>Choisir un Type</option>
            {
              types.map((type, index) => {
                return (<option key={index} value={type.id}>{type.nom}</option>)
              })
            }
          </select>


        </div>
      </div>

    </div>
  )
}
