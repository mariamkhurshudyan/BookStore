import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, onChange, inputType = "text", placeHolder }) => {
  return (
    <input
      name={name}
      type={inputType}
      onChange={(e) => onChange(e)}
      placeholder={placeHolder}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeHolder: PropTypes.string,
};
export default Input;
