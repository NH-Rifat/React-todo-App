import React from 'react';
import { FcDocument } from 'react-icons/fc';
import { FaWpforms } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className=''>
      <div class='card w-full bg-blue-300 text-primary-content p-16'>
        <div class='flex justify-around items-center'>
          <div className='font-semibold'>
            <h2 class='text-4xl p-4'>Manage Your Time Well with listing</h2>
            <h2 class='text-4xl p-4'>your daily task using todo</h2>
          </div>
          <div class='card-actions justify-end text-9xl text-slate-100'>
            <FaWpforms></FaWpforms>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
