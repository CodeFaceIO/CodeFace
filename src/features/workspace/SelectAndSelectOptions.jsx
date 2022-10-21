import React from "react";
import { Divider, Select } from "@chakra-ui/react";

const SelectAndSelectOptions = ({ paramsArray, placeholder, setLanguage }) => {
  const renderedOptions = paramsArray.map((param) => {
    return (
      <option key={param.value} value={param.value}>
        {param.label}
      </option>
    );
  });
  return (
    <>
      <Select
        placeholder={placeholder}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        {renderedOptions}
      </Select>
      <Divider margin="15px 0" />
    </>
  );
};

export default SelectAndSelectOptions;
