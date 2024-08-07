import Image from '@components/Image';
import PageTitle from '@components/PageTitle';
import React from 'react'
import { Col, Container, Row } from 'react-grid-system';
import styles from './TrendingCoupons.module.scss';
import Text from '@components/Text';

interface Coupon {
  couponBrandImage: string;
  couponCashbackText: string;
}

interface TrendingCouponsProps {
  title: string;
  cashbackIcon: string;
  couponsList: Coupon[];
}

const TrendingCoupons: React.FC <TrendingCouponsProps> = ({ title, cashbackIcon, couponsList }) => {
  return (
    <Container className='mb40'>
      <PageTitle color='oceanic' className='mb35'>{title}</PageTitle>
      <Row>
        {couponsList.map((item, index)=>(
            <Col xs={12} sm={6} md={4} lg={2.4} key={index} className='mb50'>
            <Image src={item.couponBrandImage} alt='brand logo' className={styles.couponImage}/>
            <div className={styles.cashbackContainer}>
              <Image src={cashbackIcon} alt='cashback logo' className={styles.cashbackLogo}/>
              <Text className={styles.cashbackColor} weight='bold' size='lg'>{item.couponCashbackText}</Text>
            </div>
            
          </Col>
        ))}
        
      </Row>
    </Container>
  )
}

export default TrendingCoupons;