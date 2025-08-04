import { useState, type FC } from "react";
import styles from "../../scss/bingo.module.scss";

interface BingoItemType {
  name: string;
  background: string;
  content: string;
}

const BingoItem: FC<BingoItemType> = ({ name, background, content }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={
        active ? `${styles.bingoCard} ${styles.active}` : styles.bingoCard
      }
      onClick={() => setActive(!active)}
    >
      <div className={styles.firstScreen}>
        <div className={styles.imgContainer}>
          <img className={styles.backgroundImage} src={background} alt="img" />
        </div>
        <div className={styles.cardTitle}>{name}</div>
      </div>
      <div className={styles.secondScreen}>
        <div className={styles.content}>
          <div className={styles.textContent}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default BingoItem;
