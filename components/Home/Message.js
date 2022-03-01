import Image from "next/image";
import React from "react";

import { HeadingSecondary } from "../Common/Heading";

import sajeeebWazedImage from "../../public/images/homepage/sajeeb-wazed.jpg";
import zunayedAhmed from "../../public/images/homepage/zunayed-ahmed.jpg";
import dcImage from "../../public/images/homepage/dc.jpg";

const homeMessageContent = {
  msg1: {
    image: sajeeebWazedImage,
    personName: "সজীব ওয়াজেদ জয়",
    job: "প্রধানমন্ত্রীর আইসিটি বিষয়ক মাননীয় উপদেষ্টা",
    message:
      "চতুর্থ শিল্প বিপ্লবের পথে বাংলাদেশ এগিয়ে যাচ্ছে। এখানে নেতৃত্ব দেওয়ার মতো সক্ষমতা আমাদের আছে। আর তাই আর্টিফিশিয়াল ইন্টেলিজেন্স, ব্লক চেইন, আইওটি, ন্যানো টেকনোলজি, বায়োটেকনোলজি, রোবটিকস, মাইক্রোপ্রসেসর ডিজাইনের মত ক্ষেত্রগুলোতে জোর দিচ্ছি আমরা। এক সাথে উদ্ভাবনের পথে একযোগে কাজ করতে হবে, তাহলেই আমরা এগিয়ে যাব। দেশে তথ্যপ্রযুক্তিখাতে বিনিয়োগ বাড়ানর জন্য আমরা বিশ্বমানের ৩৯টি হাই টেক পার্ক নির্মাণ করেছি। আমি বিশ্বাস করি বাংলাদেশের আইটি খাত একসময় পোশাক রপ্তানি খাতকে ছাড়িয়ে যাবে। ২০২৫ সালে মধ্যে ৫ বিলিয়ন ডলারের আইটি পণ্য রপ্তানির লক্ষ্যমাত্রা নিয়ে কাজ করছি আমরা।",
  },
  msg2: {
    image: zunayedAhmed,
    personName: "জুনাইদ আহমেদ পলক",
    job: "এমপি, মাননীয় প্রতিমন্ত্রী, আইসিটি মন্ত্রনালয়",
    message:
      " চতুর্থ শিল্পবিপ্লবে নেতৃত্ব দেওয়াটাই আজ আমাদের সামনে সবচেয়ে বড় চ্যালেঞ্জ। এজন্য সরকার, শিল্প ও শিক্ষা প্রতিষ্ঠানের মধ্যে দূরত্ব কমাতে হবে। অংশীদারিত্ব ও সহযোগিতার সম্পর্ক ছাড়া চতুর্থ শিল্পবিপ্লবে নেতৃত্ব দেওয়া সম্ভব হবে না। তিনি বলেন, এসব ছাড়াও শ্রম থেকে প্রযুক্তিনির্ভর অর্থনীতিতে রূপান্তরের অংশ হিসেবে দেশের ডেমোগ্রাফিক ডিভিডেন্ট কাজে লাগাতে চাই সরকার। এজন্য মাধ্যমিক ও উচ্চ মাধ্যমিকের পর আগামী বছর থেকেই প্রাথমিক পর্যায়ের শিক্ষার্থীদেরকে কম্পিউটারের ভাষা শেখানোর উদ্যোগ নেওয়া হয়েছে। জাতীয় পাঠ্যক্রমে সংযুক্ত করা হচ্ছে কোডিং, প্রোগ্রামিং এবং প্রবলেম সলভিং দক্ষতা।",
  },
  msg3: {
    image: dcImage,
    personName: "মোহাম্মদ কামরুল হাসান",
    job: "জেলাপ্রশাসক ও বিজ্ঞ জেলা ম্যাজিস্ট্রেট, কুমিল্লা",
    message:
      "প্রিয় শিক্ষার্থীরা, বিশ্বব্যাপী তথ্য ও যোগাযোগ প্রযুক্তির ব্যবহার এবং এর প্রয়োগ জ্যামিতিক হারে বেড়ে চলেছে। উন্নত বাংলাদেশ বিনির্মাণে ২০৪১ সালের মধ্যে তথ্যপ্রযুক্তিনির্ভর দক্ষ মানবসম্পদ সৃষ্টির গুরুত্ব অনস্বীকার্য। এ  উদ্দেশ্যে ইতোমধ্যে জেলা প্রশাসকের কার্যালয়ে অবস্থিত লাইব্রেরিতে জেলার মাধ্যমিক পর্যায়ের তোমাদের মধ্য থেকে সাত শতাধিক শিক্ষার্থীকে প্রথম ধাপে তিন দিনব্যাপী প্রোগ্রামিংয়ের ওপর ধারণা প্রদান করার উদ্যোগ আমরা হাতে নিয়েছি। এ প্রশিক্ষণের মাধ্যমে তোমরা বেসিক প্রোগ্রামিং, অরড্যুইনো প্রোগ্রামিং, ফান উইথ প্রোগ্রামিং, ইলেক্টনিক্সসহ নানামুখি শিক্ষা অর্জন করতে পারবে। তাছাড়া প্রশিক্ষণলব্ধ জ্ঞান ব্যবহারিক ক্ষেত্রে প্রয়োগ করার সুযোগ প্রদানের লক্ষ্যে জেলা প্রশাসকের কার্যালয়ে স্থাপন করা হচ্ছে কালেক্টরেট ফ্যাবল্যাব। অটোমেশন, কম্পিউটারায়ন ও ডিজিটালাইজেশনের কারণে আমাদের দেশেও প্রযুক্তিবিদ তথা কম্পিউটার প্রোগ্রামারদের চাহিদা বেড়েই চলেছে। আমাদের খুদে শিক্ষার্থীদের জন্য যে প্ল্যাটফর্ম আমরা তৈরি করছি তা একদিন ডিজিটাল বাংলাদেশ গড়ার ভিত্তি আরও সুদৃঢ় করবে।",
  },
};

const Message = () => {
  return (
    <div className="mx-auto mt-20 w-5/6">
      <HeadingSecondary text="বার্তা" />
      <div className="md:flex md:flex-wrap md:justify-center">
        {Object.keys(homeMessageContent).map((item) => (
          <div
            key={item}
            className="mt-8 mb-8 flex h-max flex-col items-center justify-center border-2 bg-gray-100 py-5 shadow-md shadow-blue-500 md:mx-auto md:w-2/3 lg:mx-5 lg:w-1/3"
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

export default Message;
