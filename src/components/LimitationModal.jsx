import React from "react";
import Modal from "./Modal";
import Input from "./Input";
import CustomSelect from "./CustomSelect";
import SubmitBtn from "./SubmitBtn";
import * as Yup from "yup"
import CustomForm from "./formik/CustomForm";
import { FaTimes } from "react-icons/fa";
const validation = Yup.object().shape({
  up: Yup.number().required(" حد بالا را وارد نکرده اید"),
  down: Yup.number().required(" حد پایین را وارد نکرده اید"),
  area: Yup.number().required(" انتخاب نوع محدوده اجباری است")
    
});
export const areas = [
  {
    value: 1,
    label: "غیرقابل قبول",
    color:"red"
  },
  {
    value: 2,
    label: "اخطار",
    color:"yellow"
  },
  {
    value: 3,
    label: "هشدار",
    color:"orange"
  },
  {
    value: 4,
    label: "قابل قبول",
    color:"green"
  },
];
const LimitationModal = ({ show, closeHandler,submitHandler }) => {
  return (
    <Modal showModal={show}>
      <div className="p-4 w-[400px]">
        <div className="w-full   ">
          <p className="text-base text-center  ">تعیین حدود</p>
          <button className="text-base " onClick={closeHandler}>
            <FaTimes/>
          </button>
        </div>
        <CustomForm
          initialValues={{
            up: "",
            down: "",
            area: "",
          }}
          validation={validation}
          submitHandler={(values,{setErrors}) => submitHandler(values,setErrors)}
        >
          <Input name="down" text="حد پایین" type="number" />
          <Input name="up" text="حد بالا" type="number" />
          <CustomSelect
            placeholder="انتخاب"
            name="area"
            options={areas}
            label={"نوع محدوده"}
          />
          <SubmitBtn />
        </CustomForm>
      </div>
    </Modal>
  );
};

export default LimitationModal;
