import Image from "next/image";
import React from "react";

import styles from "../../styles/Background.module.css";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

// import gallery image
import { fablabMarch01 } from "../../public/data/imageData/gallery";

const Index = () => {
  return (
    <>
      <Nav />
      <main className={`py-10 ${styles.background1} commonWidth `}>
        <h2 className="mx-auto mb-5 w-max border-b-2 border-gray-600 px-10 py-1 text-center text-3xl text-gray-700">
          Gallery
        </h2>
        <div>
          <h3 className="mx-auto mb-5 w-max border-b-2 border-dotted border-gray-500 text-xl font-bold text-gray-700"></h3>
          <div className="mx-auto h-auto w-min bg-white p-10 shadow-lg shadow-gray-500">
            <h3 className="pb-3 text-center font-bold text-gray-600">
              ফ্যাবল্যাবে কাজ করছে একদল মেধাবী তরুণ
            </h3>
            <div className="mx-auto grid w-max grid-cols-2 grid-rows-3 place-items-center gap-2 rounded-md md:grid-cols-3">
              {fablabMarch01.map((item) => (
                <div key={item} className="relative h-32 w-40 lg:h-36 lg:w-48">
                  <Image
                    src={item}
                    alt="gallery image"
                    layout="fill"
                    className="cursor-pointer transition duration-300 hover:scale-125"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
