import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Marquee from "../../components/Common/Merquee";

const galleryImage = [
  "/images/homepage/slide/1.jpg",
  "/images/homepage/slide/2.jpg",
  "/images/homepage/slide/3.jpg",
  "/images/homepage/slide/4.jpg",
  "/images/homepage/slide/3.jpg",
  "/images/homepage/slide/4.jpg",
  "/images/homepage/slide/4.jpg",
  "/images/homepage/slide/3.jpg",
  "/images/homepage/slide/4.jpg",
];

const index = () => {
  return (
    <>
      <Nav />
      <Marquee />
      <main className="container mx-auto py-10">
        <h3 className="mx-auto mb-5 w-max border-b-4 px-10 py-1 text-center text-3xl text-gray-700">
          Gallery
        </h3>
        <div>
          <h3 className="mx-auto mb-5 w-max border-b-2 border-dotted border-gray-500 text-xl font-bold text-gray-600">
            Event-1
          </h3>
          <div className="mx-auto grid w-max grid-cols-2 grid-rows-3 place-items-center gap-2 rounded-md md:grid-cols-3">
            {galleryImage.map((item) => (
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
      </main>
      <Footer />
    </>
  );
};

export default index;
