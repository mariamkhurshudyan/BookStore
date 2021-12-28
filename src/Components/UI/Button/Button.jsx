import styles from "./Button.module.css";
import PropTypes from "prop-types";
const Button = ({ name, type, color }) => {
  return (
    <div>
      <button type={type} className={styles[color] + " " + styles.button}>
        {name}
      </button>
    </div>
  );
};

Button.prototype = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
Button.defaultProps = {
  type: "button",
  color: "primary",
};
export default Button;
