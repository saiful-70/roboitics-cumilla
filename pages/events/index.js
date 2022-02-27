import React from "react";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Common/Slider";
import Marquee from "../../components/Common/Merquee";

const slideImage = [
  "/images/homepage/slide/0.jpg",
  "/images/homepage/slide/1.jpg",
  "/images/homepage/slide/2.jpg",
  "/images/homepage/slide/3.jpg",
  "/images/homepage/slide/4.jpg",
];

const index = () => {
  return (
    <>
      <Nav />
      <Marquee />
      <main className="container mx-auto py-10">
        {/* <h1 className="text-3xl font-bold text-gray-400">Comming Soon....</h1> */}
        <h3 className="mx-auto mb-5 w-max border-b-4 px-10 py-1 text-center text-3xl text-gray-700">
          Our Events and Activities
        </h3>
        <div className="px-5 pt-10 text-xl font-bold">
          <h3 className="mx-auto mb-5 w-max border-b-2 border-dotted border-gray-500 text-gray-600">
            জেলা প্রসাশকের কার্যালয়ে রোবোটিক্স ক্লাস
          </h3>
          <Slider slideImage={slideImage} />
        </div>

        <div className="px-5 pt-10 text-xl font-bold">
          <h3 className="mx-auto mb-5 w-max border-b-2 border-dotted border-gray-500 text-gray-600">
            ফ্যাবল্যাব এক্টিভিটিজ
          </h3>
          <Slider slideImage={slideImage} />
        </div>

        <div className="px-5 pt-10 text-xl font-bold">
          <h3 className="mx-auto mb-5 w-max border-b-2 border-dotted border-gray-500 text-gray-600">
            ফ্যাবল্যাবে কাজ করছে শিক্ষার্থী এবং ট্রেইনার
          </h3>
          <Slider slideImage={slideImage} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
