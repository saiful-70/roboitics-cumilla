import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 bg-gradient-to-br from-blue-500 to-blue-900 py-16 text-white">
      <div className="flex">
        <div className="ml-10 w-1/3">
          Contact:
          <p></p>
        </div>
        <div className="ml-10 w-1/3">শিখবো মোরা বিশ্ব জয়ের তরে</div>
      </div>
      <p className="mt-5 text-center">
        Copyright &copy;
        <a
          href="https://github.com/ICT-CoU"
          className="text-blue font-bold underline"
        >
          Robotics Team,
        </a>
        &nbsp;Cumilla
      </p>
    </div>
  );
};

export default Footer;
