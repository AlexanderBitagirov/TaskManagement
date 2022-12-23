import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = (props: ButtonProps): JSX.Element => {
  const { appearance, children, className, ...other } = props;

  return (
    <button
      className={cn(styles.button, className, {
        [styles.purple]: appearance === "purple",
        [styles.primary]: appearance === "primary"
      })}
      {...other}
    >
      {children}
    </button>
  );
};
