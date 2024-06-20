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
import { useCallback, useEffect, useState } from "react";
import { useJoinWaitList } from "@api/home";
import { toast } from "react-toastify";
import useBreakpoint from "@hooks/useBreakpoint";
import TextButton from "@components/TextButton";
import { analytics } from "@utils/analytics";

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = useCallback((data: any) => {
    toast.success("Welcome to the Caregiver community!");
    setIsSubmitted(true);
  }, []);

  const joinWaitListMutation = useJoinWaitList(handleSuccess);

  const validateEmail = useCallback((email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }
    return "";
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validationError = validateEmail(email);
      if (validationError) {
        setError(validationError);
        return;
      }
      setError("");
      joinWaitListMutation.mutate({ email });
    },
    [email, joinWaitListMutation, validateEmail]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (error) {
        setError("");
      }
    },
    [error]
  );

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
            {!isSubmitted ? (
              <form className={styles.heroForm} onSubmit={handleSubmit}>
                <InputText
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  className={styles.heroInput}
                  error={error}
                />
                <Button type="submit" className={styles.heroButton}>
                  Reserve Your Spot Today
                </Button>
              </form>
            ) : (
              <Text color="light">Thank you for joining the waitlist!</Text>
            )}
          </div>
        </Col>
        <Col xs={12} md={7} className={styles.colRight}></Col>
      </Row>
    </section>
  );
};

const StoreSection: React.FC = () => {
  return (
    <section className={styles.storeSection}>
      <Container>
        <Text className={styles.title} variant="h1">
          Get paid by stores that want to support caregivers.
        </Text>
        <div className={styles.storeLogos}>
          <Image src="/assets/home/caregiver.svg" alt="Target" className={styles.storeLogo} />
          <Image src="/assets/home/caregiver.svg" alt="Walmart" className={styles.storeLogo} />
          <Image src="/assets/home/caregiver.svg" alt="Amazon" className={styles.storeLogo} />
          <Image src="/assets/home/caregiver.svg" alt="Carewell" className={styles.storeLogo} />
          <Image src="/assets/home/caregiver.svg" alt="Walgreens" className={styles.storeLogo} />
          <Image src="/assets/home/caregiver.svg" alt="CostPlus" className={styles.storeLogo} />
          <Image src="/assets/home/caregiver.svg" alt="CVS" className={styles.storeLogo} />
        </div>
        <Row align="center">
          <Col className={styles.savingsSection} xs={12} md={6} lg={5}>
            <Text className={styles.savingsTitle} variant="h2">
              Savings on essential needs
            </Text>
            <Text size="sm">
              Unlock exclusive cashback on a diverse range of products, from vital caregiving equipment to daily
              essentials.
            </Text>
            <Text size="sm">
              Carecove is dedicated to easing the financial load, enriching caregivers lives with savings that matter.
            </Text>
          </Col>
          <Col className={styles.products} xs={12} md={6} lg={7}>
            <div>
              <div className={styles.product}>
                <Image src="/assets/home/caregiver.svg" alt="Product 1" className={styles.productImage} />
                <Text className={styles.discount}>40% off</Text>
                <Text className={styles.productDescription}>Limited time deal</Text>
              </div>
              <TextButton className={styles.moreSavings}>See more savings at Amazon.com</TextButton>
            </div>
            <div>
              <div className={styles.product}>
                <Image src="/assets/home/caregiver.svg" alt="Product 1" className={styles.productImage} />
                <Text className={styles.discount}>40% off</Text>
                <Text className={styles.productDescription}>Limited time deal</Text>
              </div>
              <TextButton className={styles.moreSavings}>See more savings at Amazon.com</TextButton>
            </div>
            <div>
              <div className={styles.product}>
                <Image src="/assets/home/caregiver.svg" alt="Product 1" className={styles.productImage} />
                <Text className={styles.discount}>40% off</Text>
                <Text className={styles.productDescription}>Limited time deal</Text>
              </div>
              <TextButton className={styles.moreSavings}>See more savings at Amazon.com</TextButton>
            </div>
          </Col>
        </Row>
      </Container>
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
  const isMobile = useBreakpoint({ max: "sm" });
  return (
    <section className={styles.ourWhy}>
      <Title className={styles.sectionTitle}>Our Why</Title>
      <div className={styles.timelineContainer}>
        {!isMobile ? <Image src={"/assets/home/curve.svg"} alt="Curve" className={styles.curveVector} /> : null}
        <Container fluid className={styles.container}>
          <Row nogutter className={styles.row}>
            <Col xs={12} className={styles.timelineEvent}>
              <div className={styles.timelineCircle}>
                <Image src={"/assets/coreteam/steve.png"} alt="Steve" className={styles.timelineImage} />
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
                <Image
                  src={"/assets/coreteam/george.png"}
                  alt="Bruno"
                  className={styles.timelineImage}
                  objectFit="cover"
                />
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
                <Image src={"/assets/coreteam/steve_and_alice.png"} alt="Alice" className={styles.timelineImage} />
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

const JoinDonateSection: React.FC = () => {
  return (
    <section className={styles.joinDonateSection}>
      <Container>
        <Row align="center">
          <Col className={styles.content} xs={12} lg={7}>
            <div className={styles.imageContainer}>
              <Title className="mb15" variant="h5">
                Help support my mom, Margaret who’s battling Stage 3 kidney failure
              </Title>
              <Image
                src="/assets/coreteam/steve_and_alice.png"
                alt="Support Mom Margaret"
                className={styles.mainImage}
              />
            </div>
            <div className={styles.details}>
              <Text className={styles.cashBack}>$732.48 cash back savings</Text>
              <Button className={styles.shareButton}>Share</Button>
              <Button className={styles.donateButton}>Donate Now</Button>
              <div className={styles.donors}>
                <div className={styles.donorBox}>
                  <Image
                    src="/assets/coreteam/steve_and_alice.png"
                    alt="Support Mom Margaret"
                    className={styles.donorImage}
                  />
                  <Text size="xxs">Fredrik P | $45 | 2 d</Text>
                </div>
                <div className={styles.donorBox}>
                  <Image
                    src="/assets/coreteam/steve_and_alice.png"
                    alt="Support Mom Margaret"
                    className={styles.donorImage}
                  />
                  <Text size="xxs">Fredrik P | $45 | 2 d</Text>
                </div>
                <div className={styles.donorBox}>
                  <Image
                    src="/assets/coreteam/steve_and_alice.png"
                    alt="Support Mom Margaret"
                    className={styles.donorImage}
                  />
                  <Text size="xxs">Fredrik P | $45 | 2 d</Text>
                </div>
              </div>
              <Button className={styles.seeAllButton}>See all</Button>
            </div>
          </Col>
          <Col className={styles.inviteSection} xs={12} lg={5}>
            <Title className={styles.inviteTitle} variant="h1">
              Invite a friend. Earn together.
            </Title>
            <Image src="/path/to/invite-line.svg" alt="Line" className={styles.inviteLine} />
            <Text className={styles.inviteDescription}>
              When someone joins the community with a referral code, you both snag cash back.
            </Text>
          </Col>
        </Row>

        <div className="flex column align-center">
          <Title className={styles.joinTitle} variant="h1">
            Join our community today
          </Title>
          <Button className={styles.startEarningButton}>Start Earning</Button>
        </div>
      </Container>
    </section>
  );
};

const Home: NextPage = () => {
  useEffect(() => {
    if (!analytics) return;
    analytics.track("Home Page Viewed", { page: "Home" });
  }, []);

  return (
    <Layout>
      <Hero />
      {/* <StoreSection /> */}
      <HowItWorks />
      <OurWhy />
      {/* <JoinDonateSection /> */}
    </Layout>
  );
};

export default Home;
