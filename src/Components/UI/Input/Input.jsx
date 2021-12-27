import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ name, onChange, inputType, placeHolder }) => {
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
Input.defaultProps = {
  inputType: "text",
};
export default Input;
