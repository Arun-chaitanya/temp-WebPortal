/* src/views/Home/CareCoveCommunity/CareCoveCommunity.tsx */
import { Container } from "react-grid-system";
import Image from "@components/Image";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Carousel from "@components/Carousel";
import styles from "./CareCoveCommunity.module.scss";

const CareCoveCommunity: React.FC = () => {
  const Testimonial: React.FC<{ key: number }> = ({ key }) => {
    return (
      <div className={styles.testimonial} key={key}>
        <Image src={"./assets/image-placeholder-testimonial.svg"} alt="Testimonial" className={styles.image} />
        <Text align="center" weight="medium" color="light" font="primary" size="lg" className={styles.receipt}>
          Jane received $142.51 from 62 boosts, thanks to her Carecove Community!
        </Text>
        <Text align="center" weight="medium" color="light" font="primary" size="lg" className={styles.quote}>
          “Carecove was exactly the community and platform I needed when I became a caregiver for my sister after a
          tragic accident. It provided cashback when I needed it most and enabled my family and friends to support us
          effectively. Carecove has been a lifeline during this challenging time”.
        </Text>
        <Text align="center" weight="bold" color="light" font="primary" size="lg" className={styles.author}>
          Jane Davis: Carecove Member
        </Text>
      </div>
    );
  };

  const slides = [<Testimonial key={1} />, <Testimonial key={2} />, <Testimonial key={3} />];

  return (
    <section className={styles.careCoveCommunity}>
      <Container>
        <PageTitle align="center" color="radical-plum" className="mb60">
          Hear From Our Carecove Community
        </PageTitle>
        <div className={styles.carouselContainer}>
          <Carousel components={slides} className={styles.carousel} />
        </div>
      </Container>
    </section>
  );
};

export default CareCoveCommunity;
