import * as React from "react";
import { useField } from "formik";
import Switch from "react-switch";

const SwitchField: React.FC<{ name: string }> = ({ name }) => {
  const [field, meta, helpers] = useField({ name });

  const handleChange = (checked: boolean) => {
    helpers.setValue(checked);
  };

  return (
    <Switch checked={field.value} onChange={handleChange} className="mr-2" />
  );
};

export default SwitchField;
