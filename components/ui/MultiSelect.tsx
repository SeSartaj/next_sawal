import React from "react";
import Select from "react-select";
import { useField } from "formik";

export interface MultiSelectProps {
  isLoading?: boolean;
  options: {
    value: string;
    label: string;
  }[]; // Updated the type of options
  name: string;
  placeHolder: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  isLoading,
  options,
  name,
  placeHolder,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (selectedOptions: any) => {
    // const selectedValues = selectedOptions.map((option: any) => option.value);
    // field.onChange({
    //   target: {
    //     name: field.name,
    //     value: selectedValues,
    //   },
    // });
    helpers.setValue(selectedOptions);
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: "none",
      borderBottom: "2px solid #ccc",
      borderRadius: 0,
      boxShadow: "none",
      "&:hover": {
        borderBottomColor: "#999",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      padding: "8px 10px",
    }),
  };

  return (
    <Select
      isMulti
      name={field.name}
      options={options}
      styles={customStyles}
      classNamePrefix="select"
      placeholder={placeHolder}
      // value={options.filter((option) => field.value.includes(option.value))}
      value={field.value}
      onChange={handleChange}
    />
  );
};

export default MultiSelect;
