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
    title: "1. Information Collection",
    content: (
      <>
        <Text className={styles.subheading}>Sources of Information Collection</Text>
        <Text className="mb20">
          We acquire, process, and utilize information about you when you:
          <ul>
            <li>Sign up for our Services</li>
            <li>Engage with our Services</li>
            <li>
              Download and/or access our Services via our application(s), including our mobile app and browser add-on
            </li>
            <li>
              Link to our Services through third-party platforms, including social networks, email services, and
              business associates
            </li>
            <li>Reach out to us for assistance</li>
            <li>Participate in a sweepstakes, contest, or promotion, or answer a survey or questionnaire</li>
          </ul>
          We gather specific information directly from you when you provide it to us. Additionally, when you have our
          mobile app or browser add-on installed, or when you interact with our Services online, we automatically
          collect information about your usage of the Services through log files, cookies, location-identifying
          technologies, and other tracking methods. We also receive information about you from third parties, such as
          when you connect via a third-party service or when information is shared by merchants and business partners
          you’ve interacted with.
        </Text>
        <Text className={styles.subheading}>Types of Information Collected</Text>
        <Text className="mb20">
          The information we collect may include, but is not limited to, the following personal data:
          <ul>
            <li>
              {`Identifiers you give us, like your name, address, email, tax details (for winners of sweepstakes or
              contests), and phone number`}
            </li>
            <li>
              Identifiers obtained through your use of the Services, like unique online or device IDs, IP addresses, and
              details about your system setup, network, and connected devices and apps
            </li>
            <li>Customer Record Information, such as payment account details and billing address</li>
            <li>
              Protected Classification Characteristics, like gender, age, income, marital status, or other protected
              classifications under law, only if you provide this as identifiable demographic information in surveys
            </li>
            <li>
              Commercial Information, such as records of your interactions with products, merchants, and services,
              including search history, items viewed or clicked, and transaction data
            </li>
            <li>
              Internet and Network Activity, like your browsing history, interactions with our site and Services, and
              preferences for using the Services
            </li>
            <li>
              Sensory-related information, such as voice recordings if you contact our member services, as allowed by
              law
            </li>
            <li>Account credentials, including username and password</li>
            <li>
              Inferences about your preferences and behaviors from the collected information, excluding “sensitive” data
            </li>
          </ul>
          In some regions, certain collected information may be considered “sensitive” personal data, including
          demographic details and precise geo-location data, which we only use to provide the Services and not for
          inferring characteristics about you. We do not sell, share, or use sensitive data for targeted advertising as
          defined by U.S. state privacy laws.
        </Text>
      </>
    ),
  },
  {
    title: "2. Usage of Collected Information",
    content: (
      <>
        <Text className="mb20">We use the information collected for various business and commercial purposes:</Text>
        <Text className={styles.subheading}>To Provide and Manage Our Service</Text>
        <ul>
          <li>Process your registration, including verifying your email and enrolling you in our programs</li>
          <li>Manage your account and preferences, including tracking your favored stores and transaction history</li>
          <li>Facilitate and oversee your transactions through our platform</li>
          <li>Deliver rewards or payments and identify reward opportunities and offers</li>
          <li>Send updates, security alerts, and administrative messages</li>
          <li>Offer member services and support, and respond to inquiries and requests</li>
        </ul>

        <Text className={styles.subheading}>To Personalize and Enhance Our Services</Text>
        <Text className="mb20">
          <>
            We may use your information to personalize content and tailor Services to your interests. For instance, we
            might use your shopping history to suggest similar offers or present special in-store opportunities.
            <br />
            We also analyze trends and perform statistical analyses to improve our Services, websites, apps, marketing
            strategies, and the offerings of our business partners.
          </>
        </Text>
        <Text className={styles.subheading}>To Provide Marketing Information</Text>
        <Text className="mb20">
          Carecove may use your information to deliver personalized and relevant offers from our network of merchants
          via direct communications and digital advertising. You can manage these communications as outlined in the
          sections below. We may also use your information for online advertising, including on other websites, with
          options to opt-out as detailed in the subsequent sections.
        </Text>
        <Text className={styles.subheading}>To Safeguard You, Others, and Our Business</Text>
        <Text className="mb20">
          We may utilize the information we collect to evaluate risks and to investigate, prevent, and restrict
          fraudulent, spam, and other harmful activities within our Services, as well as to enhance our security
          protocols. Additionally, we may employ collected data to enforce our legal rights or defend against legal
          claims from third parties.
        </Text>
        <Text className={styles.subheading}>To Adhere to Legal Requirements</Text>
        <Text className="mb20">
          We may process information about you to fulfill legal obligations, adhere to regulations, and respond to legal
          and regulatory authorities in each region where Carecove operates.
        </Text>
        <Text className={styles.subheading}>To Manage Contests, Sweepstakes, Surveys, Polls, and Promotions</Text>
        <Text className="mb20">
          Occasionally, Carecove may invite you to participate in contests, sweepstakes, surveys, polls, and promotions.
          If you opt to join, we may use your personal data to manage these events, such as confirming eligibility or
          awarding prizes. For surveys or polls, your input will be collected and anonymized to gain insights into
          business and consumer trends. This data is kept in an anonymized state, and we do not attempt to re-identify
          it.
        </Text>
        <Text className={styles.subheading}>To Oversee Referral Programs</Text>
        <Text className="mb20">
          We offer features that enable you to inform others about our Services. If you use our referral options, we’ll
          request the email address of the person you’re referring to send them an invitation to join Carecove. This
          information is retained solely to dispatch the invitation and monitor the success of our referral initiative.
          By participating in our referral programs, you affirm that you have a personal connection with the individual
          you’re referring and are authorized to share their details with Carecove for the purpose of sending an
          invitation to join our Services. Should you wish to have someone’s personal information removed from our
          database, please reach out to our member services.
        </Text>
      </>
    ),
  },
  {
    title: "3. Information Disclosure",
    content: (
      <>
        <Text className="mb20">
          We may share the following categories of information for our business or commercial purposes:
        </Text>
        <Text className={styles.subheading}>Disclosure to Service Providers</Text>
        <Text className="mb20">
          We may share all categories of your personal information as necessary with our third-party service providers,
          including Carecove affiliates, who conduct various business operations for us or on our behalf, following our
          directives and in line with proper contractual and security measures to safeguard your data. For instance, we
          may collaborate with other companies for member support services, fraud prevention, payment processing,
          promotion management, analytics, database accuracy, direct marketing, and communications, among other
          operations.
        </Text>
        <Text className={styles.subheading}>Disclosure to Business Partners</Text>
        <Text className="mb20">
          Carecove collaborates with a variety of third-party business partners to offer our Services. We may share
          certain types of information with these partners:
        </Text>
        <Text className={styles.subheading}>Affiliate Partners</Text>
        <Text className="mb20">
          When you click a link to a merchant site via our Services, indicating your intent to engage with that
          business, we may share certain information about you (such as the clicked link and a unique ID to track your
          shopping) with an affiliate network to accurately account for your transactions. The Affiliate Partner may
          collect data about your activity to track the shopping trip and may also use this data for performance
          measurement or integrate it with other collected data, which may be used by their other business clients. In
          such cases, our disclosure to these Affiliate Partners could be considered a “sale” or “sharing” of your
          personal information under U.S. privacy laws, and you can opt-out as described in the relevant sections below.
        </Text>
        <Text className={styles.subheading}>Referral Marketing Partners</Text>
        <Text className="mb20">
          To broaden your options for signing up for our Services and initiating your shopping from third-party sites,
          we partner with referral marketing partners, which may necessitate sharing certain data about you with them.
          For instance, if you’re referred to our Services from a partner’s website, we may share information about your
          sign-up to validate the referral and enable your account access from the partner’s site. We may also share
          data regarding your recent purchases and app or extension installations to allow the partner to tailor their
          content to you.
        </Text>
        <Text className={styles.subheading}>Information Disclosure Practices</Text>
        <Text className="mb20">
          The disclosure of your activity within our Services may be considered “selling”, “sharing”, or “targeted
          advertising” as defined by U.S. privacy laws. Therefore, we offer an opt-out option detailed in Section 5.
        </Text>
        <Text className={styles.subheading}>Affiliated Companies</Text>
        <Text className="mb20">
          If you engage with our affiliated services, we may share transaction details to provide a seamless experience
          across platforms. For instance, if you participate in programs through our sister company, we may share
          certain information to display your activity summary on their site. We may also use cookies to facilitate your
          experience without repeated sign-ins. For detailed processing information, please refer to the affiliated
          company’s privacy policy.
        </Text>
        <Text className={styles.subheading}>Financial Partners</Text>
        <Text className="mb20">
          To offer you additional rewards redemption options and to market our co-branded financial products, we may
          share your information, including identifiers, with financial partners. If you choose alternative rewards
          redemption methods, you authorize us to share your personal information as needed with the relevant financial
          entity. If you express interest in receiving information about our co-branded products, you direct us to share
          your details with the respective financial partners.
        </Text>
        <Text className="mb20">
          We may also share your personal information with financial partners for their marketing purposes, which may be
          considered “selling”, “sharing”, or “targeted advertising”. You have the option to opt-out of this sharing for
          marketing purposes in Section 5.
        </Text>
        <Text className={styles.subheading}>Digital Advertising Providers</Text>
        <Text className="mb20">
          We collaborate with third parties for targeted advertising services. These partners may collect data about
          your Service usage, like browsing history and device interactions, to display relevant ads for our Services on
          other websites. Some partners may use this data for their own purposes or collect additional information
          across various websites to predict your preferences. You have the right to opt out of our sharing of your
          information for cross-context behavioral advertising as outlined in Section 5.
        </Text>
        <Text className={styles.subheading}>Legal Disclosures</Text>
        <Text className="mb20">
          We may disclose collected information, including personal information, as permitted by law, for legal
          processes, governmental inquiries, policy enforcement, and to protect the rights and safety of our company or
          others.
        </Text>
        <Text className={styles.subheading}>Business Transfers</Text>
        <Text className="mb20">
          In the event of mergers or business transfers, we may disclose collected information, including personal
          information, to involved parties. The acquiring entity would be bound to respect this Privacy Policy and
          applicable laws or provide notice of new practices.
        </Text>
        <Text className="mb20">
          We may also disclose aggregated or anonymized data that cannot reasonably identify you.
        </Text>
      </>
    ),
  },

  {
    title: "4. Your Choices",
    content: (
      <>
        <Text className={styles.subheading}>Account Information Updates</Text>
        <Text className="mb20">
          You are encouraged to keep your submitted information accurate. You can update your account details by logging
          into your account and adjusting settings.
        </Text>
        <Text className={styles.subheading}> Communication Preferences</Text>
        <Text className={styles.subheading}>Email Marketing</Text>
        <Text className="mb20">
          Upon account creation, you may receive periodic communications. You can opt out of promotional messages at any
          time by following unsubscribe instructions, modifying account settings, or contacting us. We may still send
          non-promotional communications as permitted by law.
        </Text>
        <Text className={styles.subheading}>Mobile Notifications</Text>
        <Text className="mb20">
          For mobile app users, notification preferences can be managed in your device settings.
        </Text>
        <Text className={styles.subheading}> SMS Messaging</Text>
        <Text className="mb20">
          If you consent to SMS messaging, we may contact you for account updates, support ticket information, and
          recovery purposes. You can opt out by changing your preferences or replying STOP to messages.
        </Text>
        <Text className={styles.subheading}> Data Sharing Preferences</Text>
        <Text className="mb20">
          You may decline to provide certain information, but this may affect your access to some services.
        </Text>
        <Text className={styles.subheading}>Mobile App/Browser Extension</Text>
        <Text className="mb20">
          You can halt all data collection by our mobile application and/or browser extension prospectively by
          uninstalling them. Since these tools collect data about your online behavior when installed, uninstallation is
          necessary to withdraw consent for data collection. In some cases, you can opt out of specific data collections
          by adjusting your settings within the browser extension or mobile device.
        </Text>
      </>
    ),
  },
  {
    title: "5. Your Privacy Rights",
    content: (
      <>
        <Text className="mb20">
          You possess certain rights regarding your personal information under applicable laws, with some exceptions.
        </Text>
        <Text className={styles.subheading}> Right to Know and Access</Text>
        <Text className="mb20">
          You have the right to inquire about the personal information we’ve collected, used, disclosed for business
          purposes, and sold or shared for cross-context or targeted advertising. This includes the purposes for which
          we use your information, the sources from which it was acquired, and the third parties to whom it was
          disclosed. You also have the right to access the specific pieces of personal information we hold about you.
        </Text>
        <Text className={styles.subheading}>Right to Request Deletion</Text>
        <Text className="mb20">
          You can request the deletion of your personal information that we’ve collected or maintain, subject to certain
          exceptions. We will comply with your request unless we need the information for a business purpose or are
          legally permitted to retain it.
        </Text>
        <Text className={styles.subheading}>Right to Correct</Text>
        <Text className="mb20">
          You can request corrections to any inaccurate or incomplete personal information we have about you. You can
          make corrections to information you’ve provided in your account settings.
        </Text>
        <Text className={styles.subheading}> Right to Opt-out of Sale or Sharing</Text>
        <Text className="mb20">
          If you wish to opt-out of having your personal information sold or shared, as described in Section 3, you can
          do so through our Privacy Preference Center. Please note that opting out may affect our ability to provide you
          with certain services.
        </Text>
        <Text className={styles.subheading}>Right to Non-Discrimination</Text>
        <Text className="mb20">
          We will not discriminate against you for exercising your privacy rights. We will not deny services, charge
          different prices, provide a different quality of services, or suggest that you may receive different prices or
          quality of services.
        </Text>
        <Text className={styles.subheading}>How To Exercise Your Rights</Text>
        <Text className="mb20">
          To exercise your privacy rights, please visit our Privacy Center. We will verify your identity through your
          account login and a verification code sent to your email. If we cannot verify your identity, we may request
          additional information for verification purposes.
        </Text>
        <Text className={styles.subheading}>Right to Appeal</Text>
        <Text className="mb20">
          You may have the right to appeal our decisions regarding your privacy rights requests, depending on your
          location. You can submit an appeal through our contact page under the “Data Privacy” section.
        </Text>
        <Text className={styles.subheading}>Agents</Text>
        <Text className="mb20">
          Only you or someone legally authorized to act on your behalf may make a request related to your personal
          information. We may require proof of authorization and independent identity verification for agents.
        </Text>
      </>
    ),
  },
  {
    title: "6. Other Notices",
    content: (
      <>
        <Text className={styles.subheading}>Shine the Light.</Text>
        <Text className="mb20">
          California residents can request details about how their information is shared with third parties for direct
          marketing purposes.
        </Text>
        <Text className={styles.subheading}> Notice Regarding Minors.</Text>
        <Text className="mb20">
          Our services are intended for adults 18 and over. We do not knowingly collect or share personal information
          from consumers under 16 without authorization or parental consent for those under 13.
        </Text>
        <Text className={styles.subheading}> Retention of Data.</Text>
        <Text className="mb20">
          We retain your information as long as necessary for the purposes outlined in Section 2. Some information may
          be retained even after you request deletion if required by law or for legitimate business purposes.
        </Text>
        <Text className={styles.subheading}>Information Security.</Text>
        <Text className="mb20">
          We implement measures to secure your personal information appropriate to the risk. These measures aim to
          maintain the integrity and confidentiality of your data. We regularly review these measures to ensure they
          provide adequate security.
        </Text>
      </>
    ),
  },
  {
    title: "7. Changes to This Privacy Policy",
    content: (
      <>
        <Text>
          This Privacy Policy is current as of the effective date noted below. Carecove reserves the right to modify
          this Privacy Policy periodically in line with applicable privacy laws, principles, and our handling of
          personal information. Should there be any changes to this Privacy Policy, we will inform you by updating the
          date of this document. For substantial changes, additional notice will be provided, such as a notification on
          our Service homepages or an email alert.
        </Text>
      </>
    ),
  },
  {
    title: "8. Contact Us",
    content: (
      <>
        <Text>
          Should you have any inquiries about this Privacy Policy, please do not hesitate to reach out to us through our
          support channels or by mail at 48 Summit Ave #3 Brookline, MA 02446 Attention: Carecove Legal Department.
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
        <PageTitle className="mt40 mb30">Carecove Privacy Policy</PageTitle>
        <Text className="mb40">
          This Privacy Policy outlines how Carecove, Inc. dba Carecove (“we,” “us,” “our,” or “Carecove”) gathers,
          utilizes, discloses, and safeguards information in relation to Carecove’s digital platforms, including our
          websites, mobile sites, applications, browser add-ons, and any associated services that reference or link to
          this Privacy Policy (“Services”). Carecove is an independent entity dedicated to supporting family caregivers
          through community contributions.
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
