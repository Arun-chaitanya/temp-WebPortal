import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import styles from "./HeroSection.module.scss";
import Hero from "@components/Hero";
import useBreakpoint from "@hooks/useBreakpoint";

const HeroSection: React.FC = () => {
  const isMobile = useBreakpoint({ max: "sm" });
  return (
    <Hero classes={{ left: styles.heroContentBox, right: styles.heroImageBox }}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <PageTitle color="light" className="mb20" variant="medium">
            Boosting Caregivers.
          </PageTitle>
          <PageTitle color="light" className="mb30">
            Bridging Gaps.
          </PageTitle>
          <Text color="light" weight="bold" size={isMobile ? "lg" : "xl"}>
            We elevate routine spendings into meaningful support for caregivers - crucial money to care for those we
            cherish.
          </Text>
        </div>
      </div>
    </Hero>
  );
};

export default HeroSection;
