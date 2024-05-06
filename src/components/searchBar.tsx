import React from 'react';
import logoImg from '../images/logo.png';
import Image from 'next/image';


const SearchBar = () => {

  return (
        
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-black">
    <div className="relative isolate overflow-hidden bg-black px-6 py-20 text-center sm:px-16 sm:shadow-sm mt-32">
        
            <Image src={logoImg} alt="Logo" className='mx-auto w-40 h-40'/>
        
    
        <form action="/search">
            <label
                className="mx-auto mt-8 relative bg-gray-800 min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl border-gray-800"
                htmlFor="search-bar">

                <input id="search-bar" placeholder="Search with HyperCube..." name="q" className=" text-lime-400 px-6 py-2 w-full rounded-md flex-1 outline-none bg-gray-800 placeholder-lime-400"/>
                <button type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-gray-950 border-gray-950 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                    <div className="flex items-center transition-all opacity-1">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto text-lime-400">
                            Search
                        </span>
                    </div>
                </button>
            </label>
        </form>

        <svg viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true">
            <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stop-color="#3b82f6"></stop>
                    <stop offset="1" stop-color="#1d4ed8"></stop>
                </radialGradient>
            </defs>
        </svg>
    </div>
</div>


  );
};

export default SearchBar;