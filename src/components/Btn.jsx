import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const Btn = ({ text, onClick }) => {
  return (
    <button
      className=" text-green-600 flex text-sm mb-2"
      onClick={onClick}
    >
      <FaPlusCircle className="ml-2 align-middle"/>
      {text}
    </button>
  );
};

export default Btn;
