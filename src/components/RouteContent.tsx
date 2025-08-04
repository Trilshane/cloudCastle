import styles from "../scss/routeContent.module.scss";
import blocks from "../assets/JSONs/blocks.json";
import blocksContent from "../assets/JSONs/blocksContent.json";

import { useState } from "react";
import { Element } from "react-scroll";

const RouteContent = () => {
  const [activeId, setActiveId] = useState<string | number>("1");

  return (
    <Element name="routeContent">
      <div className={styles.container}>
        <h2>
          В первый день вас ждет <br /> интересный маршрут
        </h2>
        <div className={styles.description}>
          Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург,
          так прилежащие к нему районы Свердловской области.
        </div>
        <div className={styles.blocksContainer}>
          {blocks.map((block) => (
            <div
              className={
                block.id == activeId
                  ? `${styles.blockElem} ${styles.active}`
                  : `${styles.blockElem} ${styles.notActive}`
              }
              key={block.id}
              onClick={() => setActiveId(block.id)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className={styles.blockContent}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={block.img} alt="img" />
                </div>
                <div className={styles.blockDescription}>{block.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.contentContainer}>
          {blocksContent.map(
            (blockContent) =>
              blockContent.id == activeId &&
              blockContent.content.map((contentElem, i) => (
                <div key={i * i} className={styles.blockElem}>
                  <div className={styles.title}>{contentElem.title}</div>
                  <div className={styles.descript}>
                    {contentElem.description}
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </Element>
  );
};

export default RouteContent;
