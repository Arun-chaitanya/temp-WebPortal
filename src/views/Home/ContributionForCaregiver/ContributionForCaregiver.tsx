/* src/views/Home/ContributionForCaregiver/ContributionForCaregiver.tsx */
import { Container } from "react-grid-system";
import Image from "@components/Image";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import styles from "./ContributionForCaregiver.module.scss";

const ContributionForCaregiver: React.FC = () => {
  return (
    <section className={styles.contributionForCaregiver}>
      <Container>
        <PageTitle align="center" color="midnight-lagoon" className="mb50">
          Empowering Caregivers Together
        </PageTitle>
        <Text align="center" weight="bold" color="midnight-lagoon" size="lg">
          Pooling cashback from friends & family gives caregivers a{" "}
          <Text variant="span" color="neon-blaze" weight="bold" size="lg">
            boost
          </Text>
          {<br />}
          by receiving regular financial support through collective effort.
        </Text>
      </Container>
    </section>
  );
};

export default ContributionForCaregiver;
