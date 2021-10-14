import React from "react";

type Props = {
  currentValue: string;
  handleChange(event: React.SyntheticEvent<HTMLInputElement>): void;
};

const InputField: React.FC<Props> = ({ currentValue, handleChange }) => {
  return (
    <input
      type="text"
      value={currentValue}
      onChange={handleChange}
      id="new-task"
    />
  );
};

export default InputField;
