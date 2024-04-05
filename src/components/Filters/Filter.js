import React from 'react';
import FilterCategorie from './FilterCategorie';
import FilterType from './FilterType';
import FilterVille from './FilterVille';

export default function Filter() {
  return (
    <div className='px-6 py-6 max-w-5xl mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-md bg-white'>
      <FilterCategorie />
      <FilterType />
      <FilterVille />
    </div>
  );
}
