import React from 'react'

export default function Test() {
  return (
    <div className='flex min-h-screen flex-col justify-center bg-slate-100'>
      <div className='group h-96 w-96 [perspective:1000px]'>
      <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
      <div className='absolute inset-0'>
      <img src="/images/télécharger (7).jpeg" alt="Logo" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" />
      </div>
      
      <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] '>
         <div className='flex min-h-full flex-col items-center justify-center '>
         <h2 className='text-3xl font-bold '>
        Appartement Modern
        </h2>
        
        </div>
       </div>
       </div>
      </div>
    </div>
  )
}
