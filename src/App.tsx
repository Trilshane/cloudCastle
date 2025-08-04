import styles from "./scss/app.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeadContent from "./components/HeadContent";
import WhatAwait from "./components/WhatAwait";
import RouteContent from "./components/RouteContent";
import Bingo from "./components/Bingo";
import Faq from "./components/Faq";

function App() {
  return (
    <div className={styles.siteWrapper}>
      <Header />
      <div className={styles.siteContent}>
        <HeadContent />
        <WhatAwait />
        <RouteContent />
        <Bingo />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default App;
