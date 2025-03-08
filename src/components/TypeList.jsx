import React from 'react';

const TypeList = ({ types }) => {
  return (
    <div className='text-center capitalize text-2xl mt-5 font-poppins'>
      {types.map((t, index) => (
        <>
          {t.type.name}
          {index !== types.length - 1 && ' / '}
        </>
      ))}
    </div>
  );
};

export default TypeList;
