import React from "react";
import { Col, Container, Row } from "react-grid-system";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Image from "@components/Image";
import styles from "./OurTeamSection.module.scss";

const teamMembers = [
  {
    name: "Alice Lewis",
    role: (
      <>
        CEO <br />
        Co-Founder
      </>
    ),
    image: "/assets/coreteam/alice.png",
  },
  {
    name: "Stephen Lane",
    role: (
      <>
        Executive Chairman <br />
        Co-Founder
      </>
    ),
    image: "/assets/coreteam/steve.png",
  },
  {
    name: "Matt Hasten",
    role: "Chief Product Officer",
    image: "/assets/coreteam/matt.png",
  },
  {
    name: "Bruno Botvinik",
    role: "Technical Advisor",
    image: "/assets/coreteam/bruno.png",
  },
  {
    name: "Stephanie Euzebio",
    role: <>Head of Design</>,
    image: "/assets/coreteam/steph.png",
  },
  {
    name: "Preet Singh",
    role: "Design",
    image: "/assets/coreteam/preet.png",
  },
  {
    name: "Arun Chaitanya",
    role: "Engineer",
    image: "/assets/coreteam/arun.png",
  },
];

const OurTeamSection: React.FC = () => {
  return (
    <section className={styles.ourTeamSection}>
      <Container>
        <PageTitle className="mb60" align="center" color="radical-plum">
          Our Team
        </PageTitle>

        <Row>
          {teamMembers.map(({ name, role, image }) => (
            <Col xs={6} md={4} key={name} className={styles.teamMember}>
              <Image src={image} alt={name} className={styles.avatar} />
              <Text weight="bold" className="mb15" size="lg" color="midnight-lagoon">
                {name}
              </Text>
              <Text size="lg" color="midnight-lagoon">
                {role}
              </Text>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurTeamSection;
