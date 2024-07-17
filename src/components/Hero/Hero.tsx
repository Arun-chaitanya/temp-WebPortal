import clsx from "clsx";
import { Col, Row } from "react-grid-system";
import styles from "./Hero.module.scss";
import FullContainer from "@components/FullContainer";

const Hero: React.FC<HeroProps> = ({ className, children, classes }) => {
  return (
    <section className={clsx(styles.hero, className)}>
      <FullContainer>
        <Row className={styles.row}>
          <Col xs={12} md={4.8} className={clsx(styles.colLeft, classes?.left)}>
            {children}
          </Col>
          <Col xs={12} md={7.2} className={clsx(styles.colRight, classes?.right)}></Col>
        </Row>
      </FullContainer>
    </section>
  );
};

export type HeroProps = React.PropsWithChildren<{
  className?: string;
  classes?: { left?: string; right?: string };
}>;

export default Hero;
