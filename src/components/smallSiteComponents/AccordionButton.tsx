import styles from "../../scss/Faq.module.scss";
import button from "../../images/buttonIcon.png";

const AccordionButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <img src={button} alt="img" />
    </div>
  );
};
export default AccordionButton;
