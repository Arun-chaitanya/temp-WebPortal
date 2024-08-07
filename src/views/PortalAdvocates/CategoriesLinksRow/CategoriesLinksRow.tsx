import React from "react";
import FullContainer from "@components/FullContainer";
import Image from "@components/Image";
import Text from "@components/Text";

import styles from "./CategoriesLinkRow.module.scss";

interface CategoryLink {
  image: string;
  imageAlt: string;
  text: string;
}

const CategoriesLinksRow: React.FC = () => {

  const LinkRowList: CategoryLink[] = [
    {
      image: "/assets/advocates/categories/hamburger.png",
      imageAlt: "hamburger logo",
      text: "All",
    },
    {
      image: "",
      imageAlt: "",
      text: "Medical Care",
    },
    {
      image: "",
      imageAlt: "",
      text: "Household",
    },
    {
      image: "",
      imageAlt: "",
      text: "Beauty & Wellness",
    },
    {
      image: "",
      imageAlt: "",
      text: "Travel",
    },
    {
      image: "",
      imageAlt: "",
      text: "Food & Drink",
    },
  ];

  return (
    <FullContainer className={styles.CategoryLinkContainer}>
        {LinkRowList.map((link, index) => (
          <div key={index} className={styles.navLink}>
            {link.image !== "" && <Image src={link.image} alt={link.imageAlt} className={styles.LinkHamburger} />}
            <Text weight="medium" size="xl" className={styles.linkColor}>{link.text}</Text>
          </div>
        ))}
    </FullContainer>
  );
};

export default CategoriesLinksRow;
