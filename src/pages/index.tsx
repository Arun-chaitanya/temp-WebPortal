// src/pages/index.tsx
import type { NextPage } from "next";
import Layout from "@components/Layout";
import Text from "@components/Text";
import Image from "@components/ImageNew";
import styles from "@styles/Home.module.scss";
import { Container, Row, Col } from "react-grid-system";
import Title from "@components/Title";
import PageTitle from "@components/PageTitle";
import InputText from "@components/InputText";
import Button from "@components/Button";
import { useState } from "react";
import { useMutation } from "react-query";
const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <section className={styles.hero}>
      <Row className={styles.row}>
        <Col xs={12} md={5} className={styles.colLeft}>
          <div className={styles.heroContent}>
            <PageTitle className={styles.heroTitle} color="light">
              Every Purchase Counts
            </PageTitle>
            <div className="flex justify-center">
              <div className={styles.line} />
            </div>
            <Text color="light" className={styles.heroSubtitle}>
              Cashback on everyday purchases can be a lifeline of support for caregivers.
            </Text>
            <form className={styles.heroForm}>
              <InputText type="text" placeholder="Name" className={styles.heroInput} />
              <InputText type="email" placeholder="Email" className={styles.heroInput} />
              <Button type="submit" className={styles.heroButton}>
                Reserve Your Spot Today
              </Button>
            </form>
          </div>
        </Col>
        <Col xs={12} md={7} className={styles.colRight}></Col>
      </Row>
    </section>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className={styles.howItWorks}>
      <Title className={styles.sectionTitle}>How it works</Title>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={"/assets/home/caregiver.svg"} alt="Shop as usual" className={styles.icon} />
          <Title className={styles.subtitle}>1. Identify A Caregiver</Title>
          <div className={styles.line}></div>
          <Text size="sm" className={styles.description}>
            Tell us about the caregiver you want to support.
          </Text>
        </div>
        <div className={styles.item}>
          <Image src={"/assets/home/shoppingcart.svg"} alt="Earn cash back" className={styles.icon} />
          <Title className={styles.subtitle}>2. Shop As Usual</Title>
          <div className={styles.line}></div>
          <Text size="sm" className={styles.description}>
            Download our extension. Earn cash-back on everyday purchases.
          </Text>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={"/assets/home/cashback.svg"} alt="Invite friends" className={styles.icon} />
          <Title className={styles.subtitle}>3. Earn Shared Cashback</Title>
          <div className={styles.line}></div>
          <Text size="sm" className={styles.description}>
            Cashback is automatically given to the caregiver you selected. No extra steps, it’s automatic!
          </Text>
        </div>
        <div className={styles.item}>
          <Image src={"/assets/home/phonenotification.svg"} alt="Invite friends" className={styles.icon} />
          <Title className={styles.subtitle}>4. Spread The Word</Title>
          <div className={styles.line}></div>
          <Text size="sm" className={styles.description}>
            Share with friends, family & neighbors so they can help support the caregiver too.
          </Text>
        </div>
      </div>
    </section>
  );
};

const OurWhy: React.FC = () => {
  return (
    <section className={styles.ourWhy}>
      <Title className={styles.sectionTitle}>Our Why</Title>
      <div className={styles.timelineContainer}>
        <Image src={"/assets/home/curve.svg"} alt="Curve" className={styles.curveVector} />
        <Container fluid className={styles.container}>
          <Row nogutter className={styles.row}>
            <Col xs={12} className={styles.timelineEvent}>
              <div className={styles.timelineCircle}>
                <Image src={"/assets/coreteam/steph.jpg"} alt="Steve" className={styles.timelineImage} />
              </div>
              <Text variant="h3" size="md" weight="bold" className={styles.timelineYear}>
                2019
              </Text>
              <Text size="sm" className={styles.timelineDescription}>
                {`Steve's life changed in an instant due to a tragic accident. Overnight, his wife became his caregiver.
                Friends and family rallied around her, highlighting the power of collective care.`}
              </Text>
            </Col>
          </Row>
          <Row nogutter className={styles.row}>
            <Col xs={12} className={styles.timelineEvent}>
              <div className={styles.timelineCircle}>
                <Image src={"/assets/coreteam/bruno.jpg"} alt="Bruno" className={styles.timelineImage} />
              </div>
              <Text variant="h3" size="md" weight="bold" className={styles.timelineYear}>
                2022
              </Text>
              <Text size="sm" className={styles.timelineDescription}>
                {`Alice’s unexpected journey into caregiving, because of her husband's severe work injury, was met with
                her community’s unwavering support, easing the burden of her new, challenging reality.`}
              </Text>
            </Col>
          </Row>
          <Row nogutter className={styles.row}>
            <Col xs={12} className={styles.timelineEvent}>
              <div className={styles.timelineCircle}>
                <Image src={"/assets/coreteam/bruno.jpg"} alt="Alice" className={styles.timelineImage} />
              </div>
              <Text variant="h3" size="md" weight="bold" className={styles.timelineYear}>
                2024
              </Text>
              <Text size="sm" className={styles.timelineDescription}>
                {`Brought together by their experiences and inspired by the support they received, Alice & Steve aim to
                extend that same lifeline to caregivers everywhere.`}
              </Text>
            </Col>
          </Row>
        </Container>
      </div>
      <Title className={styles.important}>
        {`Nobody expects to be a caregiver, but it's one of the most important, challenging, & loving roles we will ever
        have.`}
      </Title>
      <div className="flex justify-center">
        <Button className={styles.learnMoreButton}>Learn More</Button>
      </div>
    </section>
  );
};

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <Hero />
        <HowItWorks />
        <OurWhy />
      </main>
    </Layout>
  );
};

export default Home;
