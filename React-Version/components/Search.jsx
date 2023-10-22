/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Search({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="md:w-[60%] lg:w-[35%] w-4/5 flex gap-2 items-center justify-center p-2">
      <input
        name="city"
        type="text"
        placeholder="Search for places"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="font-semibold py-2 px-3 w-full rounded-md bg-white text-gray-900 text-lg ease-in-out duration-300 outline outline-2 outline-white/70 backdrop-blur-lg focus:bg-white/20"
      />
      <button type="submit" className="pt-[6px]">
        <ion-icon
          name="search"
          className="text-gray-900 text-2x1 p-3 font-black rounded-full bg-white/50"></ion-icon>
      </button>
    </form>
  );
}
