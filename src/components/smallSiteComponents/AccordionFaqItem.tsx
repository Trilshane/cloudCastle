import styles from "../../scss/Faq.module.scss";

import type { FC } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import AccordionButton from "./AccordionButton";

interface AccordionFaqItemType {
  question: string;
  answer: string;
}

const AccordionFaqItem: FC<AccordionFaqItemType> = ({ question, answer }) => {
  return (
    <Accordion
      TransitionProps={{
        timeout: 600,
      }}
      className={styles.accordionItem}
    >
      <AccordionSummary
        style={{ padding: 0, margin: 0, minHeight: "auto" }}
        expandIcon={<AccordionButton />}
        aria-controls="panel1-content"
        id="panel1-header"
        className={styles.btn}
      >
        <Typography
          style={{ padding: 0, margin: 0 }}
          className={styles.question}
          //   component="span"
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.answer}>{answer}</AccordionDetails>
    </Accordion>
  );
};
export default AccordionFaqItem;
