import styles from "../scss/routeContent.module.scss";
import blocks from "../JSONs/blocks.json";
import blocksContent from "../JSONs/blocksContent.json";

import { useState } from "react";
import { Element } from "react-scroll";
import SmallBlockContent from "./smallSiteComponents/SmallBlockContent";
import TitleBlockContent from "./smallSiteComponents/TiltleBlockContent";

const RouteContent = () => {
  const [activeId, setActiveId] = useState<string | number>("1");

  const changeActiveID = (id: string | number): void => setActiveId(id);

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
            <TitleBlockContent
              key={block.id}
              id={block.id}
              activeElemId={activeId}
              img={block.img}
              title={block.title}
              click={() => changeActiveID(block.id)}
            />
          ))}
        </div>
        <div className={styles.contentContainer}>
          {blocksContent.map(
            (blockContent) =>
              blockContent.id == activeId &&
              blockContent.content.map((contentElem, i) => (
                <SmallBlockContent
                  key={i * i}
                  title={contentElem.title}
                  description={contentElem.description}
                />
              ))
          )}
        </div>
      </div>
    </Element>
  );
};

export default RouteContent;
