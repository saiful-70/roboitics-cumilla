import { useState, useEffect } from "react";
import { ImRadioUnchecked } from "react-icons/im";

import SubTopics from "./SubTopics";

const Topics = ({ dataUrl }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch(`${dataUrl}`);
      const data = await response.json();
      setData(data);
    };
    fetchTopic();
  }, [dataUrl]);

  return (
    <div>
      {data &&
        Object.keys(data).map((item) => (
          <div
            key={item}
            className="mx-auto mb-5 w-full px-5 sm:px-10 md:w-2/3 xl:w-1/2"
          >
            <div className="flex w-max items-center justify-center rounded-full border-2 bg-indigo-900 py-1 pl-1 pr-5">
              <ImRadioUnchecked className="mr-1 text-xl text-white" />
              <p className="text-white md:text-2xl">{item}</p>
            </div>
            <div>
              <SubTopics data={data[item][0]} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Topics;
