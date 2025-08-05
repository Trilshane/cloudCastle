import type { FC } from "react";
import styles from "../../scss/routeContent.module.scss";

interface SmallBlockContentType {
  title: string;
  description: string;
}

const SmallBlockContent: FC<SmallBlockContentType> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.blockElem}>
      <div className={styles.title}>{title}</div>
      <div className={styles.descript}>{description}</div>
    </div>
  );
};

export default SmallBlockContent;
