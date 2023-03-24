import { ErrorMessage, Field } from "formik";

export default function Input({ name, text, type = "text" }) {

  return (
    <div className="grid grid-cols-1 my-4  text-xs  ">
      <label >
        {text}
      </label>
      <Field
        name={name}
        className=" p-2 rounded-lg
         border   border-gray-400
          mt-1 focus:outline-none focus:ring-1
           focus:ring-gray-600 focus:border-transparent"
        type={type}
        placeholder="مقدار"
        autoComplete="off"
        autoCorrect="off"
      />
      <ErrorMessage
        name={name}
        component="span"
        className="text-xs text-red-400 font-iranSans mt-2"
      />
      
     
     
    </div>
  );
}
