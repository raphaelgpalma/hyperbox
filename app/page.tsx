import React from 'react';
import Image from "next/image";
import logoImg from './images/logo.png';
import SearchBar from './components/searchBar';

export default function Home() {
  return (

    <body className='bg-gray-950'>
      <div className='min-h-screen'>
        <SearchBar/>
      </div>
    </body>
      
      

    
  
  );
}