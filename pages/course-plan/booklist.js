import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Sidebar from "../../components/Common/CourseMenu/Sidebar";
import Card from "../../components/Home/Card";

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
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Session;
