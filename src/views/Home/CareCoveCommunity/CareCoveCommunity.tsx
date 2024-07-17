/* src/views/Home/CareCoveCommunity/CareCoveCommunity.tsx */
import { Container } from "react-grid-system";
import Image from "@components/Image";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Carousel from "@components/Carousel";
import styles from "./CareCoveCommunity.module.scss";
import useBreakpoint from "@hooks/useBreakpoint";

const TESTINOMIALS = [
  {
    image: "./assets/coreteam/steve-home.png",
    quote:
      "The support of friends and family was invaluable for my wife, who had to become a caregiver overnight after I was severely injured by a drunk driver. That’s why Carecove exists – to make it incredibly easy to support caregivers.",
    name: "Stephen Lane",
    position: "Co-Founder",
  },
  {
    image: "./assets/coreteam/alice.png",
    quote:
      "Caring for someone you love, is both rewarding and thankless. Friends and family around you raising you up, as you care for someone special, it gives you the strength to push through the hard days. ",
    name: "Alice Lewis",
    position: "CEO, Co-Founder",
  },
  {
    image: "./assets/coreteam/matt-home.jpg",
    quote:
      "We all have moments in life when we need to rely on others and others need to rely on us. In those moments, BOTH people need support.",
    name: "Matt Hasten",
    position: "Chief Product Officer",
  },
];

type TestinomialType = {
  image: string;
  quote: string;
  name: string;
  position: string;
};

const Testimonial: React.FC<TestinomialType & { key: number }> = ({ key, image, quote, name, position }) => {
  const isMobile = useBreakpoint({ max: "sm" });
  return (
    <div className={styles.testimonial} key={key}>
      <Image src={image} alt="Testimonial" className={styles.image} />

      <Text align="center" weight="medium" color="light" className={styles.quote} style="italic">
        {quote}
      </Text>
      <Text align="center" weight="bold" color="light" size={isMobile ? "md" : "lg"}>
        {name}
      </Text>
      <Text align="center" weight="bold" color="light" size={isMobile ? "md" : "lg"}>
        {position}
      </Text>
    </div>
  );
};

const CareCoveCommunity: React.FC = () => {
  const slides = TESTINOMIALS.map((testinomial, index) => <Testimonial key={1} {...testinomial} />);

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
