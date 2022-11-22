import React from 'react';
import Select from 'react-select';
import { customStyles } from './constants/customStyles';
import { languageOptions } from './constants/languageOptions';

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      style={{
        width: '100%',
        borderRadius:"0px"
      }}
      placeholder={`Select Language`}
      options={languageOptions}
      styles={customStyles}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
