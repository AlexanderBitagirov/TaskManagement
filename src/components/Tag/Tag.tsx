import { TagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css"

export const Tag = (props: TagProps): JSX.Element => {
  const { appearance, children, className, ...other } = props;

  return <div className={cn(styles.tag, className, {
    [styles.blue] : appearance === 'blue',
    [styles.orange] : appearance === 'orange',
    [styles.purple] : appearance === 'purple',

  })} {...other}>{children}</div>;
};
