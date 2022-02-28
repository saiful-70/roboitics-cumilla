import React from "react";
import { GiOpenBook } from "react-icons/gi";

const bookList = {
  "১। কম্পিউটার প্রোগ্রামিং - ১ম খন্ড | তামিম শাহরিয়ার সুবিন":
    "https://drive.google.com/file/d/18sY-lxAwfrVnpvwaQRYzbHQt9kJZfXnl/view?usp=sharing",
  "২। পাইথন দিয়ে প্রোগ্রামিং শিখা | তামিম শাহরিয়ার সুবিন": "#",
  "৩। রোবোটিক্স এন্ড মাইক্রোকন্ট্রোলার | রিনি ঈশান খুশবু | এ বি এম রেজাউল ইসলাম":
    "#",
  "৪। সৃষ্টির উল্লাসে রোবটিক্স ১ | মিশাল ইসলাম": "#",
  "৫। গণিত অলিম্পিয়াডে লড়তে হলে - ১ম খন্ড | মোঃ জাকির হোসেন": "#",
  "৬। যারা গণিত অলিম্পিয়াডে যাবে | ড। মোহাম্মদ কায়কোবাদ": "#",
  "৭। ফিজিক্স অলিম্পিয়াড - ১ম খন্ড | অণিরুদ্ধ প্রামাণিক | ফয়েজ আহমেদ": "#",
  "৮। কোয়ান্টাম ফিজিক্স | আব্দুল গাফফার রণি": "#",
  "৯। আরডুইনো হাতেখড়ি | শাহেদ ওয়ালি নূর": "#",
  "১০। বেসিক ইলেক্ট্রনিক্স | ইঞ্জিনিয়ার মোঃ মুমিনল হক": "#",
  "১১। পাওয়ার ইলেক্ট্রনিক্স ও প্রজেক্ট | সৌমেন সাহা": "#",
  "১২। স্ট্রিং থিউরি | হিমাংশু কর": "#",
};

const Booklist = () => {
  return (
    <>
      {Object.keys(bookList).map((item) => (
        <div
          key={item}
          className="mx-auto my-2 flex h-max w-full items-center bg-white px-3 py-2 shadow-lg md:w-2/3"
        >
          <div className="h-full bg-indigo-900 px-2 py-0.5">
            <GiOpenBook className="text-2xl text-white" />
          </div>
          <div className="flex flex-col justify-center pl-3">
            <p className="text-xs">
              {item}
              <a
                href={bookList[item]}
                target="_blank"
                rel="noreferrer"
                className="mr-1 rounded-lg bg-indigo-700 px-2 py-1 text-left text-xs text-white"
              >
                <span className="mr-1 pr-1">Visit »</span>
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Booklist;
