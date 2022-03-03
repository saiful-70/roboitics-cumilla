import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

export default function Example() {
  return (
    <>
      <Nav />
      <main>
        <div className="w-full px-4  ">
          <h3 className="mx-auto mb-5 w-max border-b-4 px-10 py-1 text-center text-3xl text-gray-700">
            সাধারণ জিজ্ঞাসা
          </h3>
          <div className="mx-auto w-full rounded-2xl bg-white p-2 md:max-w-lg lg:max-w-xl xl:max-w-3xl">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Robotics কি?</span>
                    <IoIosArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    রোবটিক্স শব্দের উৎপত্তি হয়েছে মূলত রোবট শব্দ থেকেই।
                    প্রযুক্তির যে শাখায় রোবটের নকশা, নির্মাণ, কার্যক্রম ও
                    মানোন্নয়ন নিয়ে কাজ করা হয় তাকে রোবটিক্স বলে। সহজ ভাষায় বলতে
                    গেলে, রোবট ডিজাইন করা, গঠন তৈরি করা, বাস্তবে এর প্রয়োগ ঘটানো
                    এবং এর মান উন্নয়ন বিষয় কাজ বিজ্ঞানের যে শাখায় করা হয় তাকে
                    রোবটিক্স ইঞ্জিনিয়ারিং বলে।
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>IC4IR কি?</span>
                    <IoIosArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
