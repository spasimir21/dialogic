import React from 'react';

export default function Trending() {
  return (
    <div>
      <div className='w-[220px] h-usable-screen bg-[#E7E4E4] [box-shadow:_3px_0_3px_rgba(0,0,0,0.4)] flex flex-col items-center pl-2'>
        <div className='w-[180px] h-[30px] bg-[white]  rounded-[5px] [box-shadow:_2px_2px_2px_rgba(0,0,0,0.3)] mt-3'></div>
        <div className='w-[180px] mt-3 mb-3  flex flex-row flex-wrap gap-2'>
          {/* Selected categories */}
          <div className='w-[130px] h-[30px] bg-[#E87331]  rounded-[5px] [box-shadow:_2px_2px_2px_rgba(0,0,0,0.3)]'></div>
          <div className='w-[100px] h-[30px] bg-[#E87331]  rounded-[5px] [box-shadow:_2px_2px_2px_rgba(0,0,0,0.3)]'></div>
        </div>
        {/* Divider */}
        <div className='w-[85%] h-[4px] bg-[#a0a0a0]  rounded-[4px]'></div>

        <div className='w-[180px] mt-3 mb-3 flex flex-row flex-wrap gap-2'>
          {/* Avaible categories */}
          <div className='w-[130px] h-[30px] bg-[white]  rounded-[5px] [box-shadow:_2px_2px_2px_rgba(0,0,0,0.3)] inline-block'></div>
          <div className='w-[70px] h-[30px] bg-[white]  rounded-[5px] [box-shadow:_2px_2px_2px_rgba(0,0,0,0.3)] inline-block'></div>
          <div className='w-[70px] h-[30px] bg-[white]  rounded-[5px] [box-shadow:_2px_2px_2px_rgba(0,0,0,0.3)] inline-block'></div>
        </div>
      </div>
    </div>
  );
}
