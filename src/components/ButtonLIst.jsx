import React from "react";
import { buttonListData } from "../../constant";

const ButtonLIst = () => {
  return (
    <div className=" mt-1 ml-4 [&>*]:border [&>*]:border-black [&>*]:m-2 [&>*]:px-2 [&>*]:py-0.5 [&>*]:rounded-md flex h-18  overflow-x-scroll w-screen [&>*]:text-center bg-fixed overflow-y-hidden ">
      {buttonListData?.map((item) => (
        <button key={item} className=" whitespace-nowrap inline-block">
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonLIst;
