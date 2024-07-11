/* src/views/HowItWorks/HowItWorks.tsx */
import { Container, Row, Col } from "react-grid-system";
import Image from "@components/Image";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Button from "@components/Button";
import styles from "./HowItWorks.module.scss";

const HowItWorks: React.FC = () => {
  return (
    <section className={styles.howItWorks}>
      <Container>
        <PageTitle align="center" color="radical-plum" className="mb25">
          How it Works
        </PageTitle>
        <Text align="center" weight="bold" color="radical-plum" size="xl" className="mb90">
          Shop at your favorite stores & earn cashback for someone you care about.
        </Text>
        <Row className={styles.stepsRow}>
          <Col md={4} className={styles.stepCol}>
            <Image src={"/assets/home/join-icon.svg"} alt="Join" className={styles.stepImage} />
            <Text align="center" weight="bold" color="radical-plum" size="lg" className="mb20">
              1. Join
            </Text>
            <Text align="center" weight="medium" size="lg" color="radical-plum">
              Identify a caregiver you want to support.
            </Text>
          </Col>
          <Col md={4} className={styles.stepCol}>
            <Image src={"/assets/home/shop-icon.svg"} alt="Shop" className={styles.stepImage} />
            <Text align="center" weight="bold" color="radical-plum" size="lg" className="mb20">
              2. Shop
            </Text>
            <Text align="center" weight="medium" color="radical-plum" size="lg">
              Download our extension & start earning cashback.
            </Text>
          </Col>
          <Col md={4} className={styles.stepCol}>
            <Image src={"/assets/home/support-icon.svg"} alt="Support" className={styles.stepImage} />
            <Text align="center" weight="bold" color="radical-plum" size="lg" className="mb20">
              3. Support
            </Text>
            <Text align="center" weight="medium" color="radical-plum" size="lg">
              Cashback is automatically given to the caregiver for every purchase.
            </Text>
          </Col>
        </Row>
        <div className={styles.buttonContainer}>
          <Button size="small">Join The Waitlist</Button>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
