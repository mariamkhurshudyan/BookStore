import styles from "./Button.module.css";
const Button = ({ name }) => {
  return (
    <div>
      <button className={styles.button}>{name}</button>
    </div>
  );
};

export default Button;
