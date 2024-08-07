import React from "react";
import { Container } from "react-grid-system";

import Button from "@components/Button";
import Carousel from "@components/Carousel";
import Layout from "@components/Layout";
import Text from "@components/Text";
import CarouselSlides from "@views/PortalAdvocates/CarouselSlides";
import CategoriesImageRow from "@views/PortalAdvocates/CategoriesImageRow";
import CategoriesLinksRow from "@views/PortalAdvocates/CategoriesLinksRow";
import EssentialCoupons from "@views/PortalAdvocates/EssentialCoupons";
import QuestionsSection from "@views/PortalAdvocates/QuestionsSection";
import TrendingCoupons from "@views/PortalAdvocates/TrendingCoupons";

import styles from "./styles.module.scss";

type Props = {};

const Advocates = (props: Props) => {
  const CouponSectionData = {
    title: "Trending Now",
    cashbackIcon: "assets/advocates/coupons/cashback.png",
    couponsList: [
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 10% cashback",
      },
    ],
  };
  const ExtraCouponSectionData = {
    title: "Earn Additional Cashback",
    cashbackIcon: "assets/advocates/coupons/cashback.png",
    couponsList: [
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
      {
        couponBrandImage: "assets/advocates/coupons/logo.png",
        couponCashbackText: "Up to 5% cashback",
      },
    ],
  };
  const EssentialCouponSectionData = {
    cashbackIcon: "assets/advocates/coupons/cashback.png",
    couponsList: [
      {
        mainImage: "assets/advocates/essentialCoupons/school.png",
        mainImageAlt: "school image",
        brandLogo: "assets/advocates/essentialCoupons/walmart-logo.png",
        branchImageAlt: "walmart logo",
        text: "Backpacks",
        cashbackText: "Up to 10% cashback",
      },
      {
        mainImage: "assets/advocates/essentialCoupons/school.png",
        mainImageAlt: "school image",
        brandLogo: "assets/advocates/essentialCoupons/walmart-logo.png",
        branchImageAlt: "walmart logo",
        text: "Backpacks",
        cashbackText: "Up to 10% cashback",
      },
      {
        mainImage: "assets/advocates/essentialCoupons/school.png",
        mainImageAlt: "school image",
        brandLogo: "assets/advocates/essentialCoupons/walmart-logo.png",
        branchImageAlt: "walmart logo",
        text: "Backpacks",
        cashbackText: "Up to 10% cashback",
      },
      {
        mainImage: "assets/advocates/essentialCoupons/school.png",
        mainImageAlt: "school image",
        brandLogo: "assets/advocates/essentialCoupons/walmart-logo.png",
        branchImageAlt: "walmart logo",
        text: "Backpacks",
        cashbackText: "Up to 10% cashback",
      },
    ],
  };
  return (
    <Layout>
      <CategoriesLinksRow />
      <Container>
        <div className={styles.carouselContainer}>
          <Carousel
            components={[CarouselSlides, CarouselSlides, CarouselSlides]}
            className={styles.carousel}
            classes={{ leftNav: styles.leftNav, rightNav: styles.rightNav }}
          />
        </div>
      </Container>

      <TrendingCoupons {...CouponSectionData} />
      <EssentialCoupons {...EssentialCouponSectionData} />
      <TrendingCoupons {...ExtraCouponSectionData} />
      <CategoriesImageRow />
      <QuestionsSection />
      <Container className={styles.joinContainer}>
        <div className="flex column align-center">
          <Text weight="bold" color="oceanic" size="xl" align="center" className="mb50">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Boost your impact by inviting friends & family to join your Carecove community!
          </Text>
          <Button size="small" href="#home_section">
            Invite Others
          </Button>
        </div>
      </Container>
    </Layout>
  );
};

export default Advocates;
