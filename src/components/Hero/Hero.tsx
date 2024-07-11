import clsx from "clsx";
import { Col, Row } from "react-grid-system";
import styles from "./Hero.module.scss";

const Hero: React.FC<HeroProps> = ({ className, children, classes }) => {
  return (
    <section className={clsx(styles.hero, className)}>
      <Row className={styles.row}>
        <Col xs={12} md={4.5} className={clsx(styles.colLeft, classes?.left)}>
          {children}
        </Col>
        <Col xs={12} md={7.5} className={clsx(styles.colRight, classes?.right)}></Col>
      </Row>
    </section>
  );
};

export type HeroProps = React.PropsWithChildren<{
  className?: string;
  classes?: { left?: string; right?: string };
}>;

export default Hero;
