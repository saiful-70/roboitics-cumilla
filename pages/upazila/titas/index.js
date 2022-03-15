import styles from "../../../styles/Background.module.css";

import Footer from "../../../components/Footer/Footer";
import NavUpazila from "../../../components/Nav/NavUpazila";

import { navItemUpazilaTitas } from "../../../public/data/objectAndArrayData/navItemData";
import { HeaderStripeUpazila } from "../../../components/Common/HeaderStripe";
import { HeadingUpazila } from "../../../components/Common/Heading";

const Index = () => {
  return (
    <>
      <HeaderStripeUpazila upazilaName="Titas Upazila" />
      <NavUpazila navItemUpazila={navItemUpazilaTitas} />
      <main
        className={`commonWidth relative mb-10 shadow-lg shadow-gray-300 lg:shadow-lg ${styles.backgroundCourse}`}
      >
        <div className="flex">
          <div className="mx-auto mt-5 w-full">
            <HeadingUpazila text="Welcome to Titas Upazila" />
            <div className="mx-auto border-2 border-gray-600 py-5 px-5 text-xl lg:w-2/3">
              <p className="py-0.5">
                চতুর্থ শিল্পবিপ্লবে উন্নত বাংলাদেশ বিনির্মাণে ২০৪১ সালের মধ্যে
                তথ্যপ্রযুক্তিনির্ভর দক্ষ মানবসম্পদ সৃষ্টির গুরুত্ব অনস্বীকার্য,
                তারই ধারাবাহিকতায়--
              </p>
              <p className="py-0.5">
                আগামী ১ই এপ্রিল, ২০২২ থেকে মাসব্যাপী তিতাস উপজেলা পরিষদ ও উপজেলা
                প্রশাসনের আয়োজনে ফ্রিল্যান্সিং প্রশিক্ষণ প্রদান করা হবে।
              </p>
              <p className="py-0.5">
                তিতাসের শিক্ষিত বেকার জনগণকে এবং কম্পিউটারে উৎসাহী শিক্ষার্থীদের
                ফ্রিল্যান্সিং এর মাধ্যমে স্বাবলম্বী করার লক্ষ্যে আমাদের এই
                আয়োজন।
              </p>
              <p className="py-0.5">
                সম্পূর্ণ বিনামূল্যের এই প্রশিক্ষণ এর প্রশিক্ষক হিসেবে থাকবেন
                ফ্রিল্যান্সিংয়ে দক্ষ এবং সফল ব্যক্তিগণ।
              </p>
              <p className="py-0.5">
                আপনি যদি ফ্রিল্যান্সিংয়ে আগ্রহী হন তাহলে ১ই মার্চ, ২০২২ হতে ২০ই
                মার্চ, ২০২২ পর্যন্ত নিচের দেয়া লিঙ্ক এর মাধ্যমে রেজিস্ট্রেশন
                করে প্রশিক্ষণে অংশগ্রহণ করার জন্য অনুরোধ করছি।
              </p>
              <p className="py-0.5">
                চতুর্থ শিল্প বিপ্লবে নেতৃত্ব দেবার লক্ষ্যে আমরা তিতাস কে এগিয়ে
                নিতে চাই।{" "}
              </p>
              <h4>ধন্যবাদান্তে:</h4>
              <h4>উপজেলা নির্বাহী অফিসার, তিতাস।</h4>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
