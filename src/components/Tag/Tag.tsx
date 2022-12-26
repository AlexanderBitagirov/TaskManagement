import { TagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = (props: TagProps): JSX.Element => {
  const { appearance, children, size = "large", className, ...other } = props;

  return (
    <div
      className={cn(styles.tag, className, {
        [styles.blue]: appearance === "blue",
        [styles.orange]: appearance === "orange",
        [styles.purple]: appearance === "purple",
        [styles.yellow]: appearance === "yellow",
        [styles.green]: appearance === "green",
        [styles.red]: appearance === "red",
        [styles.small]: size === "small",
        [styles.large]: size === "large"

      })}
      {...other}
    >
      {children}
    </div>
  );
};
