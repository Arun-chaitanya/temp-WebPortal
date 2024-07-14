/* src/views/Home/CareCoveCommunity/CareCoveCommunity.tsx */
import { Container } from "react-grid-system";
import Image from "@components/Image";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Carousel from "@components/Carousel";
import styles from "./CareCoveCommunity.module.scss";
import useBreakpoint from "@hooks/useBreakpoint";

const Testimonial: React.FC<{ key: number }> = ({ key }) => {
  const isMobile = useBreakpoint({ max: "sm" });
  return (
    <div className={styles.testimonial} key={key}>
      <Image src={"./assets/coreteam/steve.png"} alt="Testimonial" className={styles.image} />

      <Text align="center" weight="medium" color="light" size="lg" className={styles.quote}>
        “I wouldn’t be in the position I am today if it wasn’t for the support I received from Jackie. I started
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Carecove because it sucks to be a “Jackie” but it's SO important and I think little bits of support from friends
        can go a long way!”.
      </Text>
      <Text align="center" weight="bold" color="light" size={isMobile ? "lg" : "xl"}>
        Stephen Lane
      </Text>
      <Text align="center" weight="bold" color="light" size={isMobile ? "lg" : "xl"}>
        Executive Chairman & Co -Founder
      </Text>
    </div>
  );
};

const CareCoveCommunity: React.FC = () => {
  const slides = [<Testimonial key={1} />, <Testimonial key={2} />, <Testimonial key={3} />];

  return (
    <section className={styles.careCoveCommunity}>
      <Container>
        <PageTitle align="center" color="radical-plum" className="mb60">
          Hear From Our Carecove Team
        </PageTitle>
        <div className={styles.carouselContainer}>
          <Carousel
            components={slides}
            className={styles.carousel}
            classes={{ leftNav: styles.leftNav, rightNav: styles.rightNav }}
          />
        </div>
      </Container>
    </section>
  );
};

export default CareCoveCommunity;
