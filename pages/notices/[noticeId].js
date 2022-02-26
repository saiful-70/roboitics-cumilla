import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const NoticeId = () => {
  const router = useRouter();
  const { noticeId } = router.query;

  const { isLoading, data } = useQuery(
    "notices",
    async () => {
      const response = await fetch(
        "https://json.extendsclass.com/bin/3c3f3c08b23d"
      );

      const data = await response.json();
      return data;
    },
    { cacheTime: 100 }
  );

  if (isLoading) {
    return (
      <h1 className="height-screen flex items-center justify-center text-3xl text-blue-600">
        Loading....
      </h1>
    );
  }

  let notice;

  if (data) {
    notice = data.find((item) => parseInt(item.id) === parseInt(noticeId));
  }

  return (
    <>
      <Nav />
      <main className="container mx-auto py-10 lg:w-2/3">
        <h3 className="mx-5 border-b-2 py-3 text-center text-3xl text-gray-600">
          {notice.heading}
        </h3>
        <p className="mb-3 text-center  text-gray-600">
          {notice.date.day} {notice.date.month}, {notice.date.year}
        </p>
        <p className="px-5 text-center">{notice.details}</p>
      </main>
      <Footer />
    </>
  );
};

export default NoticeId;

// export const getServerSideProps = async () => {

//   const response = await fetch(
//     "https://json.extendsclass.com/bin/3c3f3c08b23d"
//   );

//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
