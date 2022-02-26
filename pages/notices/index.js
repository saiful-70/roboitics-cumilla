import React from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import NoticeList from "../../components/Notice/NoticeList";

const Index = () => {
  return (
    <>
      <Nav />
      <main className="container mx-auto py-10">
        {/* <h1 className="text-3xl font-bold text-gray-400">Comming Soon....</h1> */}
        <h3 className="mx-auto mb-5 w-max border-b-4 px-10 py-1 text-center text-3xl text-gray-700">
          Notice Board(DEMO)
        </h3>
        <div>
          <NoticeList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;

// export const getServerSideProps = async () => {
//   const response = await fetch(
//     "https://json.extendsclass.com/bin/3c3f3c08b23d"
//   );

//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
