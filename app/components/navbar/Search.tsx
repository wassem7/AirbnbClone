'use client';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
const Search = () => {
  return (
    <div className='border-[1px] w-full md:w-auto py-2  rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className='flex flex-row justify-between items-center'>
        <div className='text-sm font-semibold px-6'>
          Anywhere
        </div>

        <div className=' text-center flex-1 hidden sm:block border-x-[1px] text-sm font-semibold px-6'>
          Any Week
        </div>

        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
          <div className='hidden sm:block'>Add Guests</div>
          <div className='p-2 bg-rose-500 rounded-full text-white'>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
