import { useState, useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  BsArrowDownCircle,
  BsCircleFill,
  BsShieldFillCheck,
} from "react-icons/bs";
import { ImRadioUnchecked } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";

const Topics = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch("/data/jsonData/syllabusMain.json");
      const data = await response.json();
      setData(data);
    };
    fetchTopic();
  }, []);

  return (
    <div>
      {data &&
        Object.keys(data).map((topic) => (
          <div
            key={topic}
            className="mx-auto mb-5 w-full px-5 sm:px-10 md:w-2/3 xl:w-1/2"
          >
            <div className="flex w-max items-center justify-center rounded-full border-2 bg-indigo-900 py-1 pl-1 pr-5">
              <ImRadioUnchecked className="mr-1 text-xl text-white" />
              <p className="text-white md:text-2xl">{topic}</p>
            </div>
            <div>
              {Object.keys(data[topic][0]).map((task) => (
                <div key={task} className="ml-5">
                  <div className="my-1 flex items-center rounded-full bg-cyan-800 py-1 text-white">
                    <IoMdCheckmarkCircleOutline className="ml-0.5 mr-1 text-xl" />
                    <p className="text-md font-bold md:text-lg ">{task}</p>
                  </div>
                  <div>
                    {Object.keys(data[topic][0][task]).map((subTask) => (
                      <div key={subTask} className="my-2 ml-5 ">
                        <div className="flex items-center rounded-full bg-white shadow-lg">
                          <ImRadioUnchecked className="text-md ml-0.5 mr-1 text-cyan-700" />
                          <p className="text-sm md:text-lg">{subTask}</p>
                        </div>
                        {data[topic][0][task][subTask] !== ""
                          ? data[topic][0][task][subTask].map((item) => (
                              <div
                                key={item}
                                className="my-0.5 ml-5 flex items-center"
                              >
                                <HiCheckCircle className="text-md ml-0.5 mr-1 text-indigo-900" />
                                <p className="text-xs md:text-lg">{item}</p>
                              </div>
                            ))
                          : ""}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Topics;
