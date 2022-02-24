import Image from "next/image";
import React from "react";

import { HeadingSecondary } from "../Common/Heading";

import dcImage from "../../public/images/homepage/dc.png";
import vcImage from "../../public/images/homepage/cou_vc.jpg";

const homeMessageContent = {
  msg1: {
    image: dcImage,
    personName: "মোহাম্মদ কামরুল হাসান",
    job: "জেলাপ্রশাসক ও বিজ্ঞ জেলা ম্যাজিস্ট্রেট, কুমিল্লা",
    message:
      "প্রিয় শিক্ষার্থীরা, বিশ্বব্যাপী তথ্য ও যোগাযোগ প্রযুক্তির ব্যবহার এবংএর প্রয়োগ জ্যামিতিক হারে বেড়ে চলেছে। আমাদের দেশও এর ব্যতিক্রম নয়। আইসিটির ব্যবহার একদিকে আমাদের জীবনকে করেছে স্বাচ্ছন্দ্যময় ও গতিময় এবং অন্যদিকে বিশ্বব্যাপী জ্ঞানের বিকাশ ঘটছে এবং এক নতুন অর্থনীতিও বিকশিত হয়ে উঠছে। অটোমেশন, কম্পিউটারায়ন ও ডিজিটালাইজেশনের কারণে আমাদের দেশেও প্রযুক্তিবিদ তথা কম্পিউটার প্রোগ্রামারদের চাহিদা বেড়েই চলেছে। আমি জানি, আমাদের খুদে শিক্ষার্থীদের জন্য যে প্ল্যাটফর্ম আমরা তৈরি করছি তা একদিন ডিজিটাল বাংলাদেশ গড়ার ভিত্তিতে আরও সুদৃঢ় করবে।",
  },
  msg2: {
    image: vcImage,
    personName: "প্রফেসর ডঃ এমরান কবির চৌধুরী",
    job: "সাবেক উপাচার্য, কুমিল্লা বিশ্ববিদ্যালয়",
    message:
      "আমাদের তরুনরা আজকাল মুঠোফোনের দিকেই বেশি ঝুকে পড়ছে। এই প্রোগ্রামিইং বিষয়টার সবথেকে মজার ব্যাপার হচ্ছে একটা স্মার্ট ফোন দিয়েও যেকেউ চাইলেই প্রোগ্রামিং করতে পারবে। ছোটদের এই মুঠোফোনের প্রতি আকর্ষণকেই আমরা কাজে লাগাতে পারি তাদের প্রোগ্রামিং চর্চার হাতেখড়ি হিসেবে। আমার মনে হয় দেশের প্রায় সকল জেলার শিক্ষার্থীদের মাঝে কোন কিছু শেখার প্রতিযগিতামূলক একটা আগ্রহ ছড়িয়ে দিতে পাড়াটাই আসলে অনেক বড় অর্জন। ২০৪১ সালের মধ্যে উন্নত জ্ঞ্যান ভিত্তিক সমাজে উন্নীত হওয়ার বাংলাদেশের একটি লক্ষ্য রয়েছে। এসব আয়োজনের মাধ্যমে আগ্রগতির এই ধারা এভাবেই বজায় থাকলে খুব শীগ্রহী সেই লক্ষ্য পূরন করা সম্ভব।",
  },
};

const keys = Object.keys(homeMessageContent);

const HomeMessages = () => {
  return (
    <div className="mx-auto mt-20 w-5/6">
      <HeadingSecondary text="বার্তা" />
      <div className="lg:flex">
        {Object.keys(homeMessageContent).map((item) => (
          <div
            key={item}
            className="justify-centerbg-gray-100 mt-8 mb-8 flex h-max flex-col items-center border-2 bg-gray-100 py-5 shadow-md shadow-blue-500 md:mx-auto md:w-2/3 lg:mx-5"
          >
            <div className="flex flex-col items-center justify-center border-b-2 border-gray-500">
              <div className="relative h-48 w-48">
                <Image
                  src={homeMessageContent[item].image}
                  alt={homeMessageContent[item].personName}
                  layout="fill"
                  // objectFit="cover"
                  className={`rounded-full`}
                />
              </div>
              <h5 className="text-md mt-2 font-bold">
                {homeMessageContent[item].personName}
              </h5>
              <p className="text-sm italic">{homeMessageContent[item].job}</p>
            </div>
            <p className="mt-5 px-5 py-2">{homeMessageContent[item].message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMessages;
