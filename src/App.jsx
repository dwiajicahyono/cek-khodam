import React, { useState } from 'react';
import { getRandomItem } from './utils/utils';

const App = () => {
  const [name, setName] = useState('');
  const [randomItem, setRandomItem] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    const item = getRandomItem();
    setRandomItem(item);
  };

  return (
    <div className="h-screen bg-[#14213d] flex flex-col justify-center items-center text-center">
      <div className=' p-10 m-10
  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
'>
        <h1 className=' text-2xl text-white font-medium mb-5'>Silahkan Cek Khodam kamu disini</h1>
        <div className='flex flex-col gap-5'>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Masukkan Namamu"
            className='rounded-3xl border-none bg-[#e5e5e5]  px-6 py-2 text-center text-inherit placeholder-[#4a72c7] shadow-lg outline-none backdrop-blur-md'
          />
          <button onClick={handleButtonClick} className='bg-blue-500 py-2 shadow-lg rounded-3xl text-white font-semibold'>Cek</button>
        </div>

        {randomItem && (
          <div className='text-center text-[#e5e5e5] my-10'>

            <p> Hallo, {name}! Khodam kamu Adalah: <br /> <span className='text-5xl uppercase'>{randomItem}</span> </p>
          </div>
        )}
      </div>

    </div>
  )
}

export default App