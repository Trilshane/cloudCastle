import { type FC, type MouseEventHandler } from "react";
import styles from "../../scss/routeContent.module.scss";

interface TitleBlockContentType {
  id: string | number;
  activeElemId: string | number;
  img: string;
  title: string;
  click: MouseEventHandler<HTMLDivElement> | undefined;
}

const TitleBlockContent: FC<TitleBlockContentType> = ({
  id,
  activeElemId,
  img,
  title,
  click,
}) => {
  return (
    <div
      className={
        id == activeElemId
          ? `${styles.blockElem} ${styles.active}`
          : `${styles.blockElem} ${styles.notActive}`
      }
      onClick={click}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className={styles.blockContent}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={img} alt="img" />
        </div>
        <div className={styles.blockDescription}>{title}</div>
      </div>
    </div>
  );
};

export default TitleBlockContent;
