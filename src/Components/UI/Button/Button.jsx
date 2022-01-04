import styles from "./Button.module.css";
import PropTypes from "prop-types";
const Button = ({ name, type, color, size }) => {
  return (
      <button type={type} className={`${styles[color]} ${styles.button} ${styles[size]}`}>
        {name}
      </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
Button.defaultProps = {
  type: "button",
  color: "primary",
};
export default Button;
