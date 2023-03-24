
import React from "react";
import Select from "react-select";
import { ErrorMessage, useFormikContext } from "formik";

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: "8px",
    padding: "2px",
    boxShadow: state.isFocused ? null : null,
  }),

};
const CustomSelect = ({
  options,
  name,
  placeholder,
  label,
  styles = customStyles,
  isClearable = true,
  isSearchable=false,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <label className="text-xs">
        {label}
      </label>
      <Select
        className=" text-sm  mb-1  "
        styles={styles}
        placeholder={placeholder}
        isClearable={isClearable}
        isRtl={true}
        isSearchable={isSearchable}
        name={name}
        options={options}
        onChange={(selected) => setFieldValue(name, selected.value)}
        {...otherProps}
      />
    <ErrorMessage
        name={name}
        component="span"
        className="text-xs text-red-400 font-iranSans mt-2"
      />
    </div>
  );
};

export default CustomSelect;
