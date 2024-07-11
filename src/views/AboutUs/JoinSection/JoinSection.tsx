import React from "react";
import { Container } from "react-grid-system";
import Text from "@components/Text";
import Button from "@components/Button";
import styles from "./JoinSection.module.scss";
import { useRouter } from "next/router";

const JoinSection: React.FC = () => {
  const router = useRouter();

  const toWaitlist = () => {
    router.push("/waitlist"); // Assuming there's a waitlist page at /waitlist
  };

  return (
    <section className={styles.joinSection}>
      <Container>
        <Text weight="bold" color="radical-plum" size="xl" className="mb30">
          Join our community today
        </Text>
        <div className="flex justify-center">
          <Button size="small" onClick={toWaitlist}>
            Join The Waitlist
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default JoinSection;
