import React from "react";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Button from "@components/Button";
import styles from "./PartnershipOpportunity.module.scss";
import Image from "@components/Image";
import { Container } from "@mui/material";
import { Col, Row } from "react-grid-system";
import useBreakpoint from "@hooks/useBreakpoint";
import { routes } from "@config/urls";

type PartnershipContentType = {
  title: string;
  description: string;
  partnerBenefitsPoints: JSX.Element;
  icon: string;
};

const PARTNERSHIP_CONTENT: PartnershipContentType[] = [
  {
    title: "Sponsors",
    description:
      "Unite with us in offering caregivers exclusive discounts, nurturing their resilience & your brand’s growth.",
    partnerBenefitsPoints: (
      <>
        √ Market Insights
        <br />
        <br />
        √ Positive Brand Association
        <br />
        <br />
        √ Targeted Outreach
        <br />
        <br />
        √ Prominent Community Placements
        <br />
        <br />√ Collaborative Joint Marketing Efforts
      </>
    ),
    icon: "/assets/partners/sponsor-icon.svg",
  },
  {
    title: "Community Champions",
    description: "Create a dedicated following. Empower caregivers by sharing your expertise & valuable guidance.",
    partnerBenefitsPoints: (
      <>
        √ Personal Brand Growth
        <br />
        <br />
        √ Dedicated Follower Base
        <br />
        <br />
        √ Community Impact
        <br />
        <br />
        √ Engagement Opportunities
        <br />
        <br />√ Content Amplification
      </>
    ),
    icon: "/assets/partners/community-champion-icon.svg",
  },
  {
    title: "Wellness Partners",
    description:
      "Showcase your offerings with Carecove, ensuring that the right caregivers discover the benefits of your product or service.",
    partnerBenefitsPoints: (
      <>
        √ Product Visibility
        <br />
        <br />
        √ Market Insights
        <br />
        <br />
        √ Solution Spotlight
        <br />
        <br />√ Champion Connection √ Care Ally Certification
      </>
    ),
    icon: "/assets/partners/wellness-partner-icon.svg",
  },
];

const PartnershipCard: React.FC<PartnershipContentType> = (props) => {
  const { icon, title, description, partnerBenefitsPoints } = props;
  return (
    <Col xs={12} lg={4} className="mb20">
      <div className={styles.card}>
        <Image src={icon} alt="Sponsors" className={styles.icon} />
        <Text weight="semi-bold" size="xl" color="radical-plum" align="center" className="mb20">
          {title}
        </Text>
        <Text weight="medium" size="lg" color="radical-plum" align="center" className={isMobile ? "mb50" : "mb90"}>
          {description}
        </Text>
        <div className="flex justify-center mb50">
          <Button size="small" style={{ width: "80%" }} variant="dark">
            Learn More
          </Button>
        </div>

        <Text weight="bold" size="lg" color="radical-plum" align="center" className="mb30">
          Partner Benefits
        </Text>
        <Text weight="medium" size="lg" color="radical-plum" align="center">
          {partnerBenefitsPoints}
        </Text>
      </div>
    </Col>
  );
};

const PartnershipOpportunity: React.FC = () => {
  const isMobile = useBreakpoint({ max: "sm" });
  return (
    <section className={styles.partnershipOpportunitiesSection}>
      <PageTitle color="oceanic" align="center" className="mb30">
        Explore our Partnership Opportunities
      </PageTitle>
      <Container>
        <Text size="xl" color="oceanic" align="center" weight="bold" className="mb45">
          Shape a World Where Caregivers Thrive.
        </Text>
        <Row className={styles.cards} gutterWidth={isMobile ? 0 : 30}>
          {PARTNERSHIP_CONTENT.map((content, index) => (
            <PartnershipCard {...content} key={index} />
          ))}
        </Row>
        <div className="flex justify-center">
          <Button size="small" href={routes.home}>
            Join The Waitlist
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PartnershipOpportunity;
