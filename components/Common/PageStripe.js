import Image from "next/image";
import Link from "next/link";

const PageStripe = () => {
  return (
    <div className="hidden bg-indigo-900 lg:mx-auto lg:block lg:w-2/3 xl:w-1/2">
      <h4 className="py-1 text-center text-xs font-bold text-white">
        CUMILLA ROBOTICS AND PROGRAMMING CLUB
      </h4>
    </div>
  );
};

export default PageStripe;

export const PageStripeMobile = () => {
  return (
    <div className="flex w-full items-center bg-indigo-900 py-1 pl-5 lg:hidden">
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
      <div className="ml-3 py-3 font-bold text-white">
        <h3 className="text-sm leading-5">CUMILLA</h3>
        <h2 className="text-xl leading-5">ROBOTICS &</h2>
        <h2 className="text-xl leading-5">PROGRAMMING</h2>
        <h3 className="text-sm leading-5">CLUB</h3>
        {/* <h2 className="text-xl leading-6"></h2> */}
        <p className="text-xs font-normal">District Administration, Cumilla</p>
      </div>
    </div>
  );
};
