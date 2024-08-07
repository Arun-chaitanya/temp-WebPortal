import React from 'react'
import styles from './EssentialCoupons.module.scss';
import FullContainer from '@components/FullContainer';
import PageTitle from '@components/PageTitle';
import { Col, Row } from 'react-grid-system';
import Image from '@components/Image';
import Text from '@components/Text';

interface Coupon {
  mainImage: string;
  mainImageAlt: string;
  brandLogo: string;
  branchImageAlt: string;
  text: string;
  cashbackText: string;
}

interface EssentialCouponsProps {
  cashbackIcon: string;
  couponsList: Coupon[];
}

const EssentialCoupons : React.FC <EssentialCouponsProps> = ({ cashbackIcon, couponsList }) => {
  return (
    <FullContainer className={styles.container}>
      <PageTitle color='midnight-lagoon' className={styles.centerAlign}>Save With Cashback <br/> on School Essentials</PageTitle>
      <Row>
        {couponsList.map((item, index)=>(
          <Col xs={12} sm={8} md={6} lg={3} key={index}>
            <Image src={item.mainImage} alt={item.mainImageAlt} className={styles.essentialsMainImage}></Image>
            <Image src={item.brandLogo} alt={item.branchImageAlt} className={styles.essentialsBrandLogo}></Image>
            <Text weight='bold' size='xl'>{item.text}</Text>
            <div className={styles.cashbackContainer}>
              <Image src={cashbackIcon} alt='caskback image' className={styles.cashbackLogo}></Image>
              <Text className={styles.cashbackColor}  weight='bold' size='lg'>{item.cashbackText}</Text>
            </div>
            
        </Col>
        ))}
        </Row>
    </FullContainer>
  )
}

export default EssentialCoupons;