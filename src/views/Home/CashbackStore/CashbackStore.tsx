/* src/views/Home/CashbackStore/CashbackStore.tsx */
import { Container, Row, Col } from "react-grid-system";
import Image from "@components/Image";
import PageTitle from "@components/PageTitle";
import styles from "./CashbackStore.module.scss";

const CashbackStore: React.FC = () => {
  return (
    <section className={styles.cashbackStore}>
      <Container>
        <PageTitle align="center" font="primary">
          Earn Cashback for a Friend on Your Everyday Shopping.
        </PageTitle>
        <div className={styles.logosRow}>
          <Image src="/assets/extras/macys.png" alt="Home Depot" className={styles.storeLogo} />
          <Image src="/assets/extras/macys.png" alt="Walmart" className={styles.storeLogo} />
          <Image src="/assets/extras/macys.png" alt="Expedia" className={styles.storeLogo} />
          <Image src="/assets/extras/macys.png" alt="Uber Eats" className={styles.storeLogo} />
          <Image src="/assets/extras/macys.png" alt="Macy's" className={styles.storeLogo} />
        </div>
      </Container>
    </section>
  );
};

export default CashbackStore;
