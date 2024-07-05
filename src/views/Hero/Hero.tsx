import styles from "./Hero.module.scss";
import { Col, Row } from "react-grid-system";

const Hero: React.FC<HeroProps> = ({children}) => {
  return (
    <section className={styles.hero}>
      <Row className={styles.row}>
        <Col xs={12} md={5} className={styles.colLeft}>
          {children}
        </Col>
        <Col xs={12} md={7} className={styles.colRight}></Col>
      </Row>
    </section>
  );
};

export type HeroProps = React.PropsWithChildren;

export default Hero;
