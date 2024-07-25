/* pages/privacy.tsx */
import React from "react";
import { Col, Row } from "react-grid-system";

import { Container } from "@mui/material";

import useBreakpoint from "@hooks/useBreakpoint";

import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Title from "@components/Title";

import styles from "@styles/TermsOfService.module.scss";

const SECTIONS = [
  {
    title: "1. Amendments of Terms",
    content: (
      <>
        <Text className="mb20">
          1.1 We may modify these Terms at our discretion. Any changes become effective upon notification. We may notify
          you of changes via our website, email, mail, messaging services, or other reasonable means.
        </Text>
        <Text className="mb20">
          1.2 By continuing to use Carecove Properties after such notifications, you accept the modifications. If you
          object to any changes, your sole recourse is to close your account. The latest version of these Terms will be
          available on our website and will replace all previous versions.
        </Text>
      </>
    ),
  },
  {
    title: "2. Program Account",
    content: (
      <>
        <Text className="mb20">
          2.1 Our Programs are intended for residents within the United States. To join, you must be at least 18 years
          old and provide an email address and password to create your account (“Account”). Each individual is limited
          to one Account. Additional information may be required to redeem certain offers. Information submitted may be
          saved for use across our Programs. All collected information is governed by our Privacy Policy.
        </Text>
      </>
    ),
  },
  {
    title: "3. Informal Dispute Resolution",
    content: (
      <>
        <Text className="mb20">
          3.1 We prefer to resolve concerns without formal legal proceedings. Before filing a claim, please attempt to
          settle disputes informally by contacting our legal team at legal@carecove.com. If a dispute persists beyond 30
          days, you or Carecove may initiate formal proceedings.
        </Text>
      </>
    ),
  },

  {
    title: "4. Dispute Resolution by Binding Arbitration; Class Action Waiver",
    content: (
      <>
        <Text className="mb20">
          4.1 You and Carecove agree to resolve disputes through arbitration, which is less formal than court
          proceedings. This includes claims against Carecove’s employees or subsidiaries.
        </Text>

        <Text className="mb20">
          4.2 Disputes about the arbitrability of a claim shall be decided by the arbitrator, who will also determine
          the applicability of arbitration.
        </Text>

        <Text className="mb20">
          <Text variant="span" weight="semi-bold">
            4.3 Class Action Waiver:
          </Text>{" "}
           Both parties waive the right to a jury trial and agree to bring claims only individually, not as part of any
          class or representative action.
        </Text>

        <Text className="mb20">
          4.4 You may reject future changes to the arbitration provision by notifying us within 30 days of the change.
        </Text>

        <Text className="mb20">
          4.5 You may opt out of arbitration by providing written notice within 30 days of becoming a member or first
          accessing Carecove Properties.
        </Text>

        <Text className="mb20">
          <Text variant="span" weight="semi-bold">
            4.6 Arbitration Award:
          </Text>{" "}
          Judgment upon the arbitration award may be entered in any court with jurisdiction, or an application may be
          made to such court for judicial acceptance of the award and an order of enforcement, as appropriate.
        </Text>
      </>
    ),
  },
  {
    title: "5. Program License",
    content: (
      <>
        <Text className={styles.subheading}>Sources of Information Collection</Text>
        <Text className="mb20">
          5.1 Under this Agreement, we grant you a non-exclusive, non-transferable license to access and use Carecove
          Properties for personal use to access the Programs. You acknowledge that no rights are obtained other than
          those expressly granted in this Agreement. Carecove reserves the right to modify, upgrade, or discontinue any
          Program or Carecove Property at any time without notice.
        </Text>
      </>
    ),
  },
  {
    title: "6. Program Restrictions",
    content: (
      <>
        <Text className={styles.subheading}>Sources of Information Collection</Text>
        <Text className="mb20">
          6.1 You agree not to, nor permit others to:
          <ul>
            <li>Damage or overload Carecove Properties;</li>
            <li>Introduce disruptive code;</li>
            <li>Alter or delete any Content;</li>
            <li>Access the Programs via automated means;</li>
            <li>Use scripts for unauthorized financial gain;</li>
            <li>Reverse engineer any Carecove Property;</li>
            <li>Rent, sell, or sublicense Carecove Properties;</li>
            <li>Provide unauthorized access to the Programs;</li>
            <li>Attempt to bypass security measures;</li>
            <li>Distribute spam or malicious software;</li>
            <li>Post unlawful material or infringe on privacy rights;</li>
            <li>Engage in illegal activities through the Programs;</li>
            <li>“Scrape” or index any Content;</li>
            <li>Conduct attacks on Carecove Properties;</li>
            <li>Interfere with the proper functioning of Carecove Properties.</li>
          </ul>
        </Text>
      </>
    ),
  },
  {
    title: "7. Programs",
    content: (
      <>
        <Text className={styles.subheading}>7.1 Cash Back</Text>
        <Text className="mb20">
          <ul>
            <li>
              We offer Members the opportunity to earn Cash Back on qualifying purchases through Carecove Properties.
              Participation is at our discretion and requires compliance with this Agreement.
            </li>
            <li>
              Members must designate a Caregiver for the Cash Back funds as a recipient. Members will not be able to
              access these funds, and instead they will be made available to their designated Caregiver. Access to these
              funds by the Caregiver is at our discretion and requires compliance with this Agreement.
            </li>
          </ul>
          <Text variant="span" weight="semi-bold">
            (a) Online Cash Back -{" "}
          </Text>
          To earn online Cash Back, you must use the shopping links within Carecove Properties and complete your
          purchase in the same session. External site visits or unapproved coupons may invalidate Cash Back. Disabling
          cookies may also prevent earning Cash Back.
        </Text>
        <Text className={styles.subheading}>7.2 Browser Extension</Text>
        <Text className="mb20">
          <ul>
            <li>
              We may provide a browser extension to enhance your shopping experience. Its use is governed by the Privacy
              Notice specific to the extension.
            </li>
          </ul>
        </Text>
        <Text className={styles.subheading}>7.3 Gift Card Shop</Text>
        <Text className="mb20">
          <ul>
            <li>
              We may offer a platform to purchase gift cards from various retailers. We are not the issuer of these gift
              cards and are not liable for their use. All purchases are subject to the Gift Card Issuer’s policies and
              limits set by Carecove.
            </li>
          </ul>
        </Text>
      </>
    ),
  },
  {
    title: "8. Cash Back Exclusions",
    content: (
      <>
        <Text className="mb20">
          8.1 Cash Back is earned on the net purchase amount, which excludes taxes, fees, shipping, gift-wrapping,
          discounts or credits, returns or cancellations, and extended warranties. Except for gift card purchases
          through our Gift Card Shop, which qualify for Cash Back, purchases made with gift cards may not qualify if
          excluded by an Affiliate Store’s offer terms. Cash Back amounts vary by store and product category and may
          include exclusions as detailed in the offer terms and on the applicable store page. Please review these terms
          thoroughly.
        </Text>
      </>
    ),
  },
  {
    title: "9. Store Policies",
    content: (
      <>
        <Text className="mb20">
          9.1 Products purchased from any Affiliate Store are subject to the store’s policies, including exchange and
          shipping policies. We are not agents of Affiliate Stores; they operate independently and are not under our
          control. Your interactions and transactions with Affiliate Stores are solely between you and the store. We are
          not liable for any part of such interactions, offers, or promotions, including any changes or discontinuance
          of an Affiliate Store or its withdrawal from the Program.
        </Text>
      </>
    ),
  },
  {
    title: "10. Bonuses and Other Rewards",
    content: (
      <>
        <Text className="mb20">
          10.1 We periodically offer bonuses or rewards for referring new Members or for specific actions. Eligibility
          for bonuses and rewards requires residency in the 50 United States or Washington D.C. Bonuses cannot be
          combined. The terms accompanying such offers will govern their eligibility and payment. We reserve the right
          to withhold or cancel bonuses and rewards if deemed fraudulent or inconsistent with our terms, this Agreement,
          or applicable laws. Our decisions are final.
        </Text>
      </>
    ),
  },
  {
    title: "11. Payment of Cash Back and Other Rewards",
    content: (
      <>
        <>
          <Text className={styles.subheading}>11.1 Requirements</Text>
          <Text className="mb20">
            <ul>
              <li>
                To receive payment, a Caregiver must maintain an active account, provide a valid email address,
                password, and physical address. You must not be a resident of a sanctioned country or listed as a
                blocked person under OFAC regulations.
              </li>
            </ul>
          </Text>
          <Text className={styles.subheading}>11.2 Cash Back Payments</Text>
          <Text className="mb20">
            The minimum payment amount is $5.01. We pay members via ACH or other methods in U.S. dollars. Payment
            schedules may vary and are subject to change. We are not responsible for incorrect payment deliveries or
            errors by payment partners.
          </Text>
          <Text className={styles.subheading}>11.3 Gift Cards</Text>
          <Text className="mb20">
            Gift cards may be offered as promotions or redemption options. They are subject to the issuer’s and
            Affiliate Store’s terms. We are not responsible for lost or stolen gift cards.
          </Text>
          <Text className={styles.subheading}>11.4 Donations</Text>
          <Text className="mb20">
            You may donate your Cash Back earnings to charity without any fees from us. Such contributions are not
            tax-deductible.
          </Text>
          <Text className={styles.subheading}>11.5 Account Adjustments</Text>
          <Text className="mb20">
            We may adjust your account, and the Caregivers’ associated fund balance, for returns and cancellations. If
            an Affiliate Store fails to report a transaction or make payment, we may cancel the associated Cash Back.
            It’s your responsibility to ensure your account balance is accurate. If you disagree with any adjustments,
            your sole remedy is to close your account.
          </Text>
          <Text className={styles.subheading}>11.6 Taxes</Text>
          <Text className="mb20">
            You may be taxed on your receipt of bonuses and other considerations (such as merchandise or travel) for
            member referrals or promotional activities, depending on the tax laws of federal, state, and local
            jurisdictions. You are solely responsible for any tax liability arising from such considerations.
          </Text>
        </>
      </>
    ),
  },
  {
    title: "12. Account Maintenance",
    content: (
      <>
        <Text className={styles.subheading}>12.1 Updating Your Account</Text>
        <Text className="mb20">
          You agree to keep your account information current and accurate by updating it through Carecove Properties.
          You are responsible for maintaining the confidentiality of your account credentials.
        </Text>
        <Text className={styles.subheading}>12.2 Account Activity</Text>
        <Text className="mb20">
          An active account requires engagement with Carecove Properties at least once every twelve months. Inactive
          accounts may incur a maintenance fee of $5.00 per month until reactivated or the balance reaches zero.
          Accounts inactive for over thirty-six months may be closed permanently.
        </Text>
        <Text className={styles.subheading}>12.3 Fraudulent Activity</Text>
        <Text className="mb20">
          We reserve the right to investigate and take action against any fraudulent activity. This may include
          rescinding Cash Back, barring further rewards, and terminating accounts. We may delay or withhold payment if
          fraud is suspected. Our decisions are final.
        </Text>
      </>
    ),
  },
  {
    title: "13. Receiving Communications",
    content: (
      <>
        <Text className={styles.subheading}>13.1 Electronic Communications</Text>
        <Text className="mb20">
          By becoming a member, you consent to receive electronic communications related to your account and membership.
          You agree to keep your email address updated. You may opt out of certain communications as outlined in our
          Privacy Policy.
        </Text>
      </>
    ),
  },
  {
    title: "14. Carecove Applications",
    content: (
      <>
        <Text className={styles.subheading}>14.1 Software Applications</Text>
        <Text className="mb20">
          Carecove may offer applications to access our Programs without visiting our website. These applications must
          comply with U.S. export control laws and regulations.
        </Text>
      </>
    ),
  },
  {
    title: "15. Third-Party Platforms",
    content: (
      <>
        <Text className={styles.subheading}>15.1 Integration with Third Parties</Text>
        <Text className="mb20">
          Carecove Properties may integrate with third-party services to facilitate account creation and access. Use of
          these services is subject to the third parties’ terms and conditions.
        </Text>
      </>
    ),
  },
  {
    title: "16. Your Feedback",
    content: (
      <>
        <Text className={styles.subheading}>16.1 Contributions</Text>
        <Text className="mb20">
          You may provide feedback or suggestions about our Programs. By doing so, you grant Carecove a nonexclusive,
          royalty-free, perpetual right to use your feedback for any legal purpose, including promotional materials and
          product enhancement.
        </Text>
      </>
    ),
  },
  {
    title: "17. Community Standards",
    content: (
      <>
        <Text className="mb20">
          17.1 As a member of our community, you are expected to uphold a standard of conduct that reflects well on
          Carecove. Members must avoid sharing content that could be considered offensive, harassing, or otherwise
          inappropriate. This includes, but is not limited to, ethnic slurs, sexually explicit material, and derogatory
          comments. Violation of these standards may result in suspension or termination of membership.
        </Text>
      </>
    ),
  },
  {
    title: "18. Ownership",
    content: (
      <>
        <Text className="mb20">
          18.1 Carecove retains all rights to the Programs, Carecove Properties, and all related content. Trademarks and
          logos associated with Carecove are the property of Carecove and cannot be used without our express written
          consent. Misuse of trademarks or any attempt to bid on Carecove-related keywords without permission is
          prohibited.
        </Text>
      </>
    ),
  },
  {
    title: "19. Indemnification",
    content: (
      <>
        <Text className="mb20">
          19.1 You agree to indemnify Carecove against claims arising from your breach of this Agreement or any content
          you provide. You will cooperate in the defense of any claim. Carecove reserves the right to assume control
          over the defense and settlement of any claim.
        </Text>
      </>
    ),
  },
  {
    title: "20. Warranty Disclaimer",
    content: (
      <>
        <Text className="mb20">
          20.1 Carecove provides its Programs and Properties “as-is” without any warranty. We do not guarantee the
          accuracy, reliability, or completeness of any content or information provided. Carecove is not responsible for
          any errors or interruptions in service, nor for the absence of viruses or harmful components.
        </Text>
      </>
    ),
  },
  {
    title: "21. Limitation of Liability",
    content: (
      <>
        <Text className="mb20">
          21.1 Carecove’s liability for any claim arising from this Agreement is limited to the greater of fifty U.S.
          dollars ($50) or the maximum Cash Back amount you received in the last four years. This limitation applies to
          all causes of action in the aggregate.
        </Text>
      </>
    ),
  },
  {
    title: "22. Termination or Suspension",
    content: (
      <>
        <Text className="mb20">
          22.1 This Agreement remains effective until terminated by either you or Carecove. We may terminate your
          account for any reason, including inactivity. Termination may result in the loss of accrued Cash Back and
          rewards. Carecove is not liable for any modification, suspension, or discontinuation of the Programs.
        </Text>
      </>
    ),
  },
  {
    title: "23. General Provisions",
    content: (
      <>
        <Text className={styles.subheading}>23.1 Entire Agreement</Text>
        <Text className="mb20">
          These Terms constitute the entire agreement between you and Carecove, superseding any prior agreements.
        </Text>
        <Text className={styles.subheading}>23.2 Choice of Law and Venue</Text>
        <Text className="mb20">
          The laws of the State of California govern this Agreement. Disputes arising from this Agreement will be
          resolved in San Francisco County, California.
        </Text>
        <Text className={styles.subheading}>23.3 Interpretation</Text>
        <Text className="mb20">
          The headings in this Agreement are for convenience only and do not affect the interpretation of these Terms.
        </Text>
        <Text className={styles.subheading}>23.4 Waiver and Severability of Terms</Text>
        <Text className="mb20">
          A waiver of any provision in one instance is not a waiver of that provision on any other occasion. If any part
          of this Agreement is found to be unenforceable, the remaining provisions will continue in effect, unless
          otherwise stated.
        </Text>
        <Text className={styles.subheading}>23.5 Assignment</Text>
        <Text className="mb20">
          You may not assign or transfer your rights under this Agreement without our written consent. Any unauthorized
          assignment will be void. Carecove reserves the right to transfer or assign these Terms without your consent.
        </Text>
      </>
    ),
  },
];

const PrivacyPolicy: React.FC = () => {
  const isMobile = useBreakpoint({ max: "md" });

  return (
    <Layout>
      <Container className={styles.container}>
        <PageTitle className="mt40 mb30">Carecove Terms of Service</PageTitle>
        <Text className="mb20">
          Carecove (“we” or “us”) provides various support programs (“Programs”) through our website and associated
          mobile and software applications (“Carecove Properties”) under these Terms. Carecove operates independently
          with a mission to support family caregivers.
          <br />
          By enrolling in any Programs or using any Carecove Properties, you acknowledge that you have read, understood,
          and agreed to be legally bound by these Terms.
        </Text>
        <Text className="mb40" weight="bold">
          If you disagree with these Terms, please cease all participation in the Programs and promptly terminate your
          account.
        </Text>
        {SECTIONS.map((section, index) => (
          <div key={index} className="mb40">
            <Title className="mb20">{section.title}</Title>
            <div className={styles.description}>{section.content}</div>
          </div>
        ))}
      </Container>
    </Layout>
  );
};

export default PrivacyPolicy;
