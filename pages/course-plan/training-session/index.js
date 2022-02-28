import React from "react";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Sidebar from "../../../components/Common/CourseMenu/Sidebar";

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

          <div className=" w-full bg-gray-200 lg:w-5/6">
            {/* you will work from here */}
            <h3 className="mx-auto mb-5 w-max border-b-2 border-gray-400 px-10 py-1 text-center text-3xl text-gray-700">
              School Lists
            </h3>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Session;
