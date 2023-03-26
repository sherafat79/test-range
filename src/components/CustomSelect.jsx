
import React from "react";
import Select from "react-select";
import { ErrorMessage, useFormikContext } from "formik";
const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginLeft: 8,
    height: 10,
    width: 10,
  },
});
const customStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: "8px",
    padding: "2px",
    boxShadow: state.isFocused ? null : null,
    
  }
  ),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  input: (styles) => ({ ...styles, ...dot() }),
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
