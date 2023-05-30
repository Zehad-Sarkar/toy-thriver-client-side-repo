import React from 'react';
import bannar from '../../../assets/bannar.jpg'

const Bannar = () => {
  return (
    <div className='p-4'>
      <img className='w-full rounded h-80' src={bannar} alt="" />
    </div>
  );
};

export default Bannar;