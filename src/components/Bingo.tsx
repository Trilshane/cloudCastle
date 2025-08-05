import styles from "../scss/bingo.module.scss";
import bingoCards from "../JSONs/bingoCards.json";
import BingoItem from "./smallSiteComponents/BingoItem";
import { Element } from "react-scroll";

const Bingo = () => {
  return (
    <Element name="bingo">
      <div className={styles.container}>
        <h2>
          Открой все карточки <br />и собери свое бинго
        </h2>
        <div className={styles.bingoCardsContent}>
          {bingoCards.map((bingoCard, index) => (
            <BingoItem
              name={bingoCard.title}
              content={bingoCard.content}
              background={bingoCard.backgroundImage}
              key={index * 2}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Bingo;
