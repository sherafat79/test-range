import React, { useState } from "react";
import Btn from "./Btn";
import Range from "./Range";
import LimitationModal2 from "./LimitationModal2";

const Type2 = () => {
  const [modal, setModal] = useState(false);
  const [green, setGreen] = useState([0, 0]);
  const [yellow, setYellow] = useState([0, 0]);
  const [red, setRed] = useState([0, 0]);
  const [orange, setOrange] = useState([0, 0]);
  const submitHandler = (values) => {
    const { value, type, area } = values;

    switch (area) {
      case 1:
        setRed((prev) => {
          const newArea = [...prev];
          newArea[type] = value;
          return newArea;
        });
        break;
      case 2:
        setYellow((prev) => {
          const newArea = [...prev];
          newArea[type] = value;
          return newArea;
        });
        break;
      case 3:
        setOrange((prev) => {
          const newArea = [...prev];
          newArea[type] = value;
          return newArea;
        });
        break;
      case 4:
        setGreen((prev) => {
          const newArea = [...prev];
          newArea[type] = value;
          return newArea;
        });
        break;
    }
    setModal(false);
  };
  return (
    <>
      <div className=" bg-white w-[700px] h-60 shadow-md rounded-md p-4">
        <p>روش اول</p>
        <Btn text="افزودن محدوده" onClick={() => setModal(true)} />
        <Range
          count={20}
          green={green}
          yellow={yellow}
          red={red}
          orange={orange}
        />
      </div>
      <LimitationModal2
        show={modal}
        closeHandler={() => setModal(!modal)}
        submitHandler={submitHandler}
        ranges={{
          red,
          yellow,
          green,
          orange,
        }}
      />
    </>
  );
};

export default Type2;
