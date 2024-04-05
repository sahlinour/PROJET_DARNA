import React from 'react'
import Cards from './Cards'
import { useSelector } from 'react-redux'

export default function ListCard() {
    const cards = useSelector(state => state.annonce.annonces)
    console.log(cards)
  return (
    <div>
        {
            cards.map((data,index)=>{
                <Cards  key={index} data={data}/>
            })
        }
     

    </div>
  )
}
