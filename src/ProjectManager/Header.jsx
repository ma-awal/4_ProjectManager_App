import React, { useState } from 'react';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <>
      <header className="bg-indigo-950   py-4  ">
        <div className="container flex items-center justify-between">
          <a className="text-3xl font-bold  text-orange-300 uppercase">
            Projectify
          </a>
          <div className="basis-1/3">
            <input
              type="search"
              name="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="text-gray-400 py-2 px-3 rounded-full  w-full  border-2 border-orange-700"
              placeholder="Search Task By Name"
            />
          </div>
          <div className="flex gap-4 items-center justify-end text-white  ">
            <a href="#" className="text-orange-400 font-base capitalize">
              Home
            </a>
            <a className="text-orange-400 font-base capitalize relative ">
              About
            </a>
            <a className="text-orange-400 font-base capitalize relative ">
              Contact
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
