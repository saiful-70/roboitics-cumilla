import { useState, useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsArrowDownCircle, BsCircleFill } from "react-icons/bs";
import { ImRadioUnchecked } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Topics = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchTopic = async () => {
      const response = await fetch("/data/syllabusTopics.json");
      const data = await response.json();
      setData(data);
    };
    fetchTopic();
  }, []);

  return (
    <div>
      {data &&
        Object.keys(data).map((day) => (
          <div key={day} className="mb-5">
            <div className="flex  w-max items-center justify-center rounded-full border-2 bg-indigo-900 py-1 pl-1 pr-3">
              <ImRadioUnchecked className="mr-1 text-xl text-white" />
              <p className="text-white ">{day}</p>
            </div>
            <div>
              {Object.keys(data[day][0]).map((task) => (
                <div key={task} className="ml-5">
                  <div className="my-1 flex items-center rounded-full bg-cyan-800 py-1 text-white">
                    <IoMdCheckmarkCircleOutline className="ml-0.5 mr-1 text-xl" />
                    <p className="text-sm font-bold">{task}</p>
                  </div>
                  <div>
                    {Object.keys(data[day][0][task]).map((subTask) => (
                      <div key={subTask} className="my-2 ml-5 ">
                        <div className="flex items-center rounded-full bg-white shadow-lg">
                          <ImRadioUnchecked className="text-md ml-0.5 mr-1 text-cyan-700" />
                          <p className="text-sm">{subTask}</p>
                        </div>
                        {data[day][0][task][subTask] !== ""
                          ? data[day][0][task][subTask].map((item) => (
                              <div
                                key={item}
                                className="my-0.5 ml-5 flex items-center"
                              >
                                <ImRadioUnchecked className="text-md ml-0.5 mr-1 text-indigo-900" />
                                <p className="text-xs">{item}</p>
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
