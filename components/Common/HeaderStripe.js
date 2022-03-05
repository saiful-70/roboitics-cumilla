import Link from "next/link";
import Image from "next/image";

const HeaderStripe = () => {
  return (
    <h2 className="hidden bg-indigo-900 py-1 text-center text-xs font-bold text-white lg:mx-auto lg:block lg:w-2/3 xl:w-1/2">
      CUMILLA ROBOTICS AND PROGRAMMING CLUB
    </h2>
  );
};

export default HeaderStripe;

export const HeaderStripeMobile = () => {
  return (
    <div className="flex items-center bg-indigo-900 px-5 py-3 font-bold text-white lg:hidden">
      <Link href="/" passHref>
        <div className="relative h-14 w-14 cursor-pointer">
          <Image
            alt="logo"
            src="/images/homepage/logo.jpg"
            layout="fill"
            className="rounded-full"
          />
        </div>
      </Link>
      <div className="ml-3">
        <h3 className="text-md leading-5 text-gray-100">CUMILLA</h3>
        <h2 className="text-xl leading-5">ROBOTICS &</h2>
        <h2 className="text-xl leading-5">PROGRAMMING</h2>
        <h3 className="text-md leading-5 text-gray-100">CLUB</h3>
        <p className="text-sm font-normal">District Administration, Cumilla</p>
      </div>
    </div>
  );
};
