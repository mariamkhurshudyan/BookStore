import styles from "./Button.module.css";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

const style = classNames.bind(styles)
const Button = ({ name, type, color, size, onClick}) => {
  const className = style('button',color,size)
  return (
      <button type={type} className={className} onClick={onClick} >
        {name}
      </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
};
Button.defaultProps = {
  type: "button",
  color: "primary",
};
export default Button;
