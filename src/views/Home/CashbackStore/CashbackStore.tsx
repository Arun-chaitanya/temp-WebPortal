/* src/views/Home/CashbackStore/CashbackStore.tsx */
import { Container, Row, Col } from "react-grid-system";
import Image from "@components/Image";
import PageTitle from "@components/PageTitle";
import styles from "./CashbackStore.module.scss";
import useBreakpoint from "@hooks/useBreakpoint";
import FullContainer from "@components/FullContainer";

const CashbackStore: React.FC = () => {
  const isMobile = useBreakpoint({ max: "md" });

  return (
    <section className={styles.cashbackStore}>
      <FullContainer>
        <Container>
          {isMobile ? (
            <PageTitle align="center" variant={isMobile ? "x-small" : "small"}>
              Earn Cashback for a Friend on Your Everyday Shopping.
            </PageTitle>
          ) : (
            <PageTitle align="center">
              Earn Cashback for a Friend
              <br />
              on Your Everyday Shopping.
            </PageTitle>
          )}
        </Container>

        <div className={styles.logosRow}>
          <Image src="/assets/home/companies/walmart.png" alt="Walmart" className={styles.storeLogo} />
          <Image src="/assets/home/companies/expedia.png" alt="Expedia" className={styles.storeLogo} />
          {!isMobile && (
            <Image src="/assets/home/companies/thehomedepot.png" alt="Home Depot" className={styles.storeLogo} />
          )}
          <Image src="/assets/home/companies/ubereats.png" alt="Uber Eats" className={styles.storeLogo} />
          <Image src="/assets/home/companies/macys.png" alt="Macy's" className={styles.storeLogo} />
        </div>
      </FullContainer>
    </section>
  );
};

export default CashbackStore;
