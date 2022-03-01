import React from "react";

const CardContent = {
  card1: {
    heading: "রোবটিক্স ও প্রোগ্রামিং কোর্স",
    content: [
      "মুজিব শতবর্ষ ও বাংলাদেশের সূবর্ণ জয়ন্তী উপলক্ষে কুমিল্লা জেলাপ্রশাসন কর্তৃক আয়োজিত রোবটিক্স ও প্রোগ্রামিং কোর্স।",
    ],
  },
  card2: {
    heading: "কোর্সটি কেনো করবো?",
    content: [
      "চতুর্থ শিল্প বিপ্লবের এ যুগে আমাদের ছেলেমেয়েদের রোবটিক্স, আইওটি, প্রোগ্রামিং প্রভৃতি বিষয়ে বিশেষ দক্ষতা অর্জন প্রয়োজন। বিশেষ করে স্কুল পর্যায়ে প্রোগ্রামিং, রোবটিক্স এ হাতেখড়ি দেয়া হলে তা শিশুদের চিন্তাশক্তি বিকাশে বিশেষ ভূমিকা রাখে – গড়ে তোলে তাদের যৌক্তিক মানুষ হিসেবে।",
      "চীন, কোরিয়া, সিঙ্গাপুর, মালয়েশিয়া, ইন্দোনেশিয়া সহ বিশ্বের বিভিন্ন দেশে স্কুল পর্যায়ে রোবটিক্স ক্লাব স্থাপনের মাধ্যমে বাচ্চাদের হাতে-কলমে কাজ শেখানো হয়। ব্যবহার করা হয় লেগোর মতো ব্লক-বেজড রোবটিক্স কিট যাকে কন্ট্রোল করা যায় স্ক্র্যাচ এর মতো ভিজুয়াল প্রোগামিং-এর মাধ্যমে। ",
      "ছোটবেলা থেকেই এধরণের সমস্যা সমাধান্যের মাধ্যমে ঘটে তাদের চিন্তাশক্তির বিকাশ – তাদের সামনে উন্মোচিত হয় এক নতুন দিগন্ত। অনেকের ধারণা শুধু কম্পিউটার বিজ্ঞান পড়তে হলেই প্রোগ্রামিং জানা দরকার বা রোবটিক্স নিয়ে উচ্চশিক্ষা নিতে গেলেই রোবটিক্সে শিক্ষা নিতে হয়। ব্যাপারটা কিন্তু মোটেই তা নয়। ",
      "চতুর্থ শিল্প-বিপ্লবের এ যুগে আমরা যে বিষয়েই প্রাতিষ্ঠানিক শিক্ষা নেই না কেন প্রোগ্রামিং এবং রোবটিক্সের বেসিক ধারণা আমাদের থাকতে হবে। বাংলা আমাদের নিজের প্রাণের ভাষা – তাকে তো ভালোভাবে রপ্ত করতেই হবে, সেই সাথে ইংরেজিটাও জানতে হবে – আর তৃতীয় যে ভাষাটি জানতে হবে সেটি হলো প্রোগ্রামিং এর ভাষা। অন্ততপক্ষে একটি প্রোগ্রামিং ভাষায় আমাদের দক্ষ হতে হবে। ",
    ],
  },
  card3: {
    heading: "কোর্সটিতে আমরা যা যা শিখবো",
    content: [
      "১। প্রথমে আমরা গণিত অলিম্পিয়াড, রোবটিক্স ও প্রোগ্রামিং জগতের হাতেখড়ি করবো।",
      "২। ব্যাসিক সি প্রোগ্রামিং",
      "৩। আরডুইনো পরিচিতি",
      "৪। সেন্সর সম্পর্কে জানবো, সেন্সর সম্পর্কে জানবো",
      "৫। সার্কিট ডিজাইন করা শিখবো",
      "৬। শিখবো লাইন ফলোয়ার রোবট তৈরি করা",
      "৭। মোবাইন কন্ট্রোল রোবট তৈরি করা",
      "৮। হোম অটোমেশন সিস্টেম",
      "৯। প্রোগ্রামিং এর মজার জগত সম্পর্কে জানবো",
      "১০। প্রোগ্রামিং এর মাধ্যমে বিভিন্ন ধরনের ছোট ছোট গেইম তৈরি করতে পারবো",
      "১১। জাতীয় ও আন্তর্জাতিক বিভিন্ন প্রতিযোগিতার জন্য নিজেদের প্রস্তত করবো",
      "১১। বিভিন্ন ধরনের সমস্যা তথ্য ও প্রযুক্তির সাহায্যে সমাধান করা শিখবো",
    ],
  },
};

const Card = () => {
  return Object.keys(CardContent).map((item) => (
    <div key={item} className="mx-auto w-5/6 rounded-md py-5 lg:w-2/3">
      <h3 className=" bg-blue-900 py-2 text-center text-xl font-bold text-white">
        {CardContent[item].heading}
      </h3>
      <p className="text-md bg-gray-100 py-5 px-2 text-center shadow-md shadow-blue-500">
        {CardContent[item].content.map((item) => (
          <li className="my-1 list-none" key={item}>
            {item}
          </li>
        ))}
      </p>
    </div>
  ));
};

export default Card;
