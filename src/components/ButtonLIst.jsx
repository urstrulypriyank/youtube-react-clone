import React from "react";
import { buttonListData } from "../../constant";
import { useNavigate } from "react-router-dom";

const ButtonLIst = () => {
  const navigate = useNavigate();
  return (
    <div className=" mt-1 ml-4 [&>*]:border [&>*]:border-black [&>*]:m-2 [&>*]:px-2 [&>*]:py-0.5 [&>*]:rounded-md flex h-18  overflow-x-scroll w-screen [&>*]:text-center bg-fixed overflow-y-hidden ">
      {buttonListData?.map((item) => (
        <button
          key={item}
          className=" whitespace-nowrap inline-block"
          onClick={() => navigate("/results?search_query=" + item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonLIst;
