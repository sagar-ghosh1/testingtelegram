import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div>
        <h2 className='text-[#cfa63e] text-3xl md:text-9xl font-extrabold  mb-5'>404</h2>
        <Link to="/" className="capitalize py-2 bg-[#FFCC4C] hover:bg-[#e9ba44] duration-300 flex justify-center">Back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;