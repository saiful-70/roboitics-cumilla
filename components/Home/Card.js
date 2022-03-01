import React from "react";

const CardContent = {
  card1: {
    heading: "উদ্দেশ্য সমূহ",
    content: [
      "০১. কুমিল্লা জেলা শিক্ষার্থীদের বিজ্ঞান বিষয়ক ও মননশীল বুদ্ধিবৃত্তিক চর্চায় আগ্রহী করে তোলা। ",
      "০২. অন্তর্ভুক্তিমূলক উদ্ভাবনী বিকাশে প্রযুক্তিগত জ্ঞানসমৃদ্ধ ও শক্তিশালী প্লাটফর্ম গড়ে তোলা",
      "০৩. স্কুল পর্যায়ের শিক্ষার্থীদের মধ্যে প্রোগ্রামিং, রোবটিক্স ও আইওটি প্রজেক্ট নির্মাণের মানসিকতা তৈরী করা",
      "০৪. চতুর্থ শিল্প বিপ্লবের চ্যালেঞ্জ মোকাবেলায় টেকসই ও দক্ষ মানবসম্পদ গড়ে তোলা",
      "০৫. সরকারের তথ্য-প্রযুক্তির সমৃদ্ধির অভিযাত্রায় অধিকতর উন্নত হার্ডওয়্যার সফটওয়ার নির্মাণসহ বুদ্ধিবৃত্তিক উন্নয়ন কার্যক্রমের সাথে তবুণ প্রজন্মকে সম্পৃক্ত করা।",
      "০৬. উদ্ভাবনী জাতি হিসেবে আর্ন্তজাতিক ফোরামে বাংলাদেশের ব্র্যান্ডিং করার সক্ষমতা গড়ে তোলা। ",
      "০৭. তথ্য প্রযুক্তিনির্ভর ডিজিটাল বাংলাদেশ বিনির্মাণের মহাযাত্রায় গর্বিত অংশীদার হওয়া।",
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
