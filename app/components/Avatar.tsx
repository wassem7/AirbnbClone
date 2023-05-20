'use client';
import React from 'react';
import Image from 'next/image';
const Avatar = () => {
  return (
    <Image
      src='/images/placeholder.jpg'
      className='rounded-full'
      alt='Avatar'
      height='30'
      width='30'
    />
  );
};

export default Avatar;
