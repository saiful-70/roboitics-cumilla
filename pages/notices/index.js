import { useState, useEffect } from "react";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import NoticeList from "../../components/Notice/NoticeList";

const Index = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch("/data/jsonData/notice.json");
      const data = await response.json();
      setData(data);
    };
    fetchTopic();
  }, []);

  return (
    <>
      <Nav />
      <main className="container mx-auto pt-16">
        {/* <h1 className="text-3xl font-bold text-gray-400">Comming Soon....</h1> */}
        <h3 className="mx-auto mb-5 w-max border-b-4 px-10 py-1 text-center text-3xl text-gray-700">
          Notice Board
        </h3>
        <div>{data && <NoticeList data={data} />}</div>
      </main>
      <Footer />
    </>
  );
};

export default Index;

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
