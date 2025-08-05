import styles from "../scss/Faq.module.scss";
import faqs from "../JSONs/Faq.json";
import AccordionFaqItem from "./smallSiteComponents/AccordionFaqItem";
import { Element } from "react-scroll";

const Faq = () => {
  return (
    <Element name="faq">
      <div className={styles.container}>
        <h2 className="faq">Еще вопросы?</h2>
        <div className={styles.faqContainer}>
          {faqs.map((faqItem, i) => (
            <AccordionFaqItem
              question={faqItem.question}
              answer={faqItem.answer}
              key={i * 3}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};
export default Faq;
