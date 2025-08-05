import illustration from "../images/illustration.png";
import styles from "../scss/headContent.module.scss";

const HeadContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Плотинка лесная отборная со вкусом подземного ручейка
        </h1>
        <div className={styles.description}>
          Заводская плотина в Екатеринбурге была построена в 1723 году
          из уральской лиственницы, которая не гниет в воде, а со временем лишь
          каменеет и становится крепче. В создании плотинки принял деятельное
          участие российский военный инженер В. И. де Геннин.
          <br /> <br /> С этого места началось всё строительство города.
          Одновременно стали возводить крепость, защищающую будущий завод
          от набегов башкир, на чьих землях он и строился.
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={illustration} alt="img" className={styles.image} />
      </div>
    </div>
  );
};
export default HeadContent;
