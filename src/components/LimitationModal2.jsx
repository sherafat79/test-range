import React from "react";
import Modal from "./Modal";
import Input from "./Input";
import CustomSelect from "./CustomSelect";
import SubmitBtn from "./SubmitBtn";
import * as Yup from "yup"
import CustomForm from "./formik/CustomForm";
import { FaTimes } from "react-icons/fa";
import { areas } from "./LimitationModal";
const validation = Yup.object().shape({
  value: Yup.number().required(" مقدار را وارد نکرده اید"),
  type: Yup.number().required(" نوع محدوده را وارد نکرده اید"),
  area: Yup.number().required(" انتخاب نوع بازه اجباری است")
    
});
const types = [
  {
    value: 1,
    label: "بیشینه",
  },
  {
    value: 0,
    label: "کمینه",
  }
];
const LimitationModal2 = ({ show, closeHandler,submitHandler,ranges=null }) => {
  
  return (
    <Modal showModal={show}>
      <div className="p-4 w-[400px]">
        <div className="w-full   ">
          <p className="text-base text-center  ">تعیین حدود 2</p>
          <button className="text-base " onClick={closeHandler}>
            <FaTimes/>
          </button>
        </div>
        <CustomForm
          initialValues={{
            value: "",
            area: "",
            type: "",
          }}
          validation={validation}
          submitHandler={(values,{setErrors}) => submitHandler(values,setErrors)}
        >
      
          <Input name="value" text="مقدار" type="number" />
          <CustomSelect
            placeholder="انتخاب"
            name="area"
            options={areas}
            label={"نوع محدوده"}
          />
           <CustomSelect
            placeholder="انتخاب"
            name="type"
            options={types}
            label={"نوع بازه"}
          />
          <SubmitBtn />
        </CustomForm>
      </div>
    </Modal>
  );
};

export default LimitationModal2;
