import forestImg from "../images/forest_img.jpg";
import styles from "../scss/whatAwait.module.scss";

import { Element } from "react-scroll";

const WhatAwait = () => {
  return (
    <Element name="whatAwait">
      <div className={styles.container}>
        <h2>Что ждёт за плотинкой</h2>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={forestImg} alt="img" />
        </div>
        <div className={styles.description}>
          Межгалактические порты и бесконечные просторы вселенной
        </div>
      </div>
    </Element>
  );
};

export default WhatAwait;
