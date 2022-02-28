import React from "react";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Sidebar from "../../../components/Common/CourseMenu/Sidebar";

import {MdPlace} from "react-icons/md";

const Session = () => {
  return (
    <>
      <Nav />
      <main className="relative">
        {/* <h1 className="py-20 text-3xl font-bold text-gray-400">
          Comming Soon....
        </h1> */}

        <div className={`flex`}>
          <Sidebar />

          <div className=" w-full bg-gray-200 md:w-2/3 mx-3">
            {/* you will work from here */}
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-4 text-center text-3xl text-gray-700">
              Upazila List
            </h3>

            <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2 py-4">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Comilla Sadar South Upazila
                </p> 
              </div>
              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2 py-4">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Comilla Adarsa Sadar Upazila
                </p> 
              </div>
              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Barura Upazila
                </p> 
              </div>
              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3"  style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Chandina Upazila 
                </p> 
              </div>
              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Chauddagram Upazila
                </p> 
              </div>
              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Daudkandi Upazila
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Brahmanpara Upazila
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Homna Upazila
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Monohorgonj Upazila
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2 py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Laksam Upazila 
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Debidwar Upazila
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Meghna Upazila
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Muradnagar Upazila
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Nangalkot Upazila
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Burichong Upazila 
                </p> 
              </div>

              <div className="flex  justify-center items-center border-2 rounded bg-white shadow-lg shadow-indigo-500/50 mx-9 my-2  py-5">
            <MdPlace className="pr-3" style={{ color: "black", fontSize: "30px" }} /> 
                <p className=" text-lg font-bold text-black  ">
                Titas Upazila
                </p> 
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Session;
