import React from 'react';

import { FaRegDotCircle } from 'react-icons/fa';
import Nav from '../../components/Nav/Nav';

const index = () => {
    return (
        <>
        <Nav />
      <main className="flex w-screen flex-col items-center justify-center py-10">
      <div className="">
      <p className="mt-2 mb-4 px-9 py-3 text-3xl leading-8 font-semibold  tracking-tight border-solid border-2 rounded-full text-white  bg-sky-900 sm:text-4xl">Book List</p>      
    </div>

    <div className='flex' >
        <div className="px-4 py-5  bg-sky-900 border-2 inline-block">
            <FaRegDotCircle style={{color: 'white', fontSize: '30px'}}/>
        </div>
        <div className="px-6 py-5 bg-white border-2 inline-block flex space-x-4">
           <p className="font-bold text-lg text-black inline ">BOOK NAME |</p> <p className="font-bold text-lg text-gray-600 inline ">Writer Name</p>
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 rounded-full"> Visit </button>
        </div> 
    </div>

    <div className='flex' >
        <div className="px-4 py-5  bg-sky-900 border-2 inline-block">
            <FaRegDotCircle style={{color: 'white', fontSize: '30px'}}/>
        </div>
        <div className="px-6 py-5 bg-white border-2 inline-block flex space-x-4">
           <p className="font-bold text-lg text-black inline ">BOOK NAME |</p> <p className="font-bold text-lg text-gray-600 inline ">Writer Name</p>
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 rounded-full"> Visit </button>
        </div> 
    </div>

    <div className='flex' >
        <div className="px-4 py-5  bg-sky-900 border-2 inline-block">
            <FaRegDotCircle style={{color: 'white', fontSize: '30px'}}/>
        </div>
        <div className="px-6 py-5 bg-white border-2 inline-block flex space-x-4">
           <p className="font-bold text-lg text-black inline ">BOOK NAME |</p> <p className="font-bold text-lg text-gray-600 inline ">Writer Name</p>
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 rounded-full"> Visit </button>
        </div> 
    </div>

    <div className='flex' >
        <div className="px-4 py-5  bg-sky-900 border-2 inline-block">
            <FaRegDotCircle style={{color: 'white', fontSize: '30px'}}/>
        </div>
        <div className="px-6 py-5 bg-white border-2 inline-block flex space-x-4">
           <p className="font-bold text-lg text-black inline ">BOOK NAME |</p> <p className="font-bold text-lg text-gray-600 inline ">Writer Name</p>
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 rounded-full"> Visit </button>
        </div> 
    </div>

    <div className='flex' >
        <div className="px-4 py-5  bg-sky-900 border-2 inline-block">
            <FaRegDotCircle style={{color: 'white', fontSize: '30px'}}/>
        </div>
        <div className="px-6 py-5 bg-white border-2 inline-block flex space-x-4">
           <p className="font-bold text-lg text-black inline ">BOOK NAME |</p> <p className="font-bold text-lg text-gray-600 inline ">Writer Name</p>
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 rounded-full"> Visit </button>
        </div> 
    </div>

    <div className='flex' >
        <div className="px-4 py-5  bg-sky-900 border-2 inline-block">
            <FaRegDotCircle style={{color: 'white', fontSize: '30px'}}/>
        </div>
        <div className="px-6 py-5 bg-white border-2 inline-block flex space-x-4">
           <p className="font-bold text-lg text-black inline ">BOOK NAME |</p> <p className="font-bold text-lg text-gray-600 inline ">Writer Name</p>
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 rounded-full"> Visit </button>
        </div> 
    </div>

    <div className='flex' >
        <div className="px-4 py-5  bg-sky-900 border-2 inline-block">
            <FaRegDotCircle style={{color: 'white', fontSize: '30px'}}/>
        </div>
        <div className="px-6 py-5 bg-white border-2 inline-block flex space-x-4">
           <p className="font-bold text-lg text-black inline ">BOOK NAME |</p> <p className="font-bold text-lg text-gray-600 inline ">Writer Name</p>
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 rounded-full"> Visit </button>
        </div> 
    </div>


      </main>
        </>
    );
};

export default index;