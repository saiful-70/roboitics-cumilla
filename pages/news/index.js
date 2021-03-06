import React from "react";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

const index = () => {
  return (
    <>
      <Nav />
      <main className="flex h-96 w-screen items-center justify-center py-20">
        <h1 className="text-3xl font-bold text-gray-400">Comming Soon....</h1>
      </main>
      <Footer />
    </>
  );
};

export default index;
