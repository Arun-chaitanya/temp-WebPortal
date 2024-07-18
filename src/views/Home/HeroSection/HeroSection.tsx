import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { useJoinWaitList } from "@api/home";
import useBreakpoint from "@hooks/useBreakpoint";

import Button from "@components/Button";
import Hero from "@components/Hero";
import InputText from "@components/InputText";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";

import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const isMobile = useBreakpoint({ max: "sm" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = useCallback((data: any) => {
    toast.success("Welcome to the Caregiver community!");
    setIsSubmitted(true);
  }, []);

  const joinWaitListMutation = useJoinWaitList(handleSuccess);

  const validateEmail = useCallback((email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }
    return "";
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validationError = validateEmail(email);
      if (validationError) {
        setError(validationError);
        return;
      }
      setError("");
      joinWaitListMutation.mutate({ email });
    },
    [email, joinWaitListMutation, validateEmail]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (error) {
        setError("");
      }
    },
    [error]
  );

  return (
    <Hero className={styles.hero} classes={{ right: styles.heroImageBox }}>
      <div className={styles.heroContent} id="home_section">
        <PageTitle color="light" className="mb10" variant="medium">
          Every Purchase Counts
        </PageTitle>
        <Text color="light" weight="bold" size={isMobile ? "lg" : "xl"} className="mb30">
          Cashback on everyday purchases can be a lifeline of support for caregivers.
        </Text>
        <div>
          {!isSubmitted ? (
            <form className={styles.heroForm} onSubmit={handleSubmit}>
              <InputText
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                className={styles.heroInput}
                error={error}
              />
              <Button type="submit" fullWidth>
                Join The Waitlist
              </Button>
            </form>
          ) : (
            <Text color="light">Thank you for joining the waitlist!</Text>
          )}
        </div>
      </div>
    </Hero>
  );
};

export default HeroSection;
