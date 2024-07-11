import React from "react";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import styles from "./MissionSection.module.scss";
import Button from "@components/Button";
import { Container } from "@mui/material";

const MissionSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className="flex justify-center">
          <div className={styles.contentBox}>
            <PageTitle color="radical-plum">
              Our Mission is to Empower Family Caregivers through Financial Support, Everyday Savings, & a Community of
              kindness.
            </PageTitle>
            <div className="flex justify-center">
              <Button>Join The Waitlist</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
