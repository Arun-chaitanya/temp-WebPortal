import React from 'react'
import { Col, Container, Row } from 'react-grid-system';
import styles from './CarouselSlides.module.scss';
import Text from '@components/Text';
import Image from '@components/Image';
import Button from '@components/Button';

type Props = {}

const CarouselSlides = (props: Props) => {
  return (
    <Container className={styles.slideContainer}>
        <Row align='center' >
          <Col  md={8}>
          <div className={styles.column}>
            <Text size='xl' weight='medium' color='midnight-lagoon'>Warby Parker</Text>
            <Text className={styles.slidesTitle}>Get 15% off two (or more!) prescription pairs.</Text>
            <Text size='xl' weight='medium' className={styles.slidesDescription}>Earn $30 cashback for friends and family.</Text>
            <Button size='small' className={styles.slidesButton}>Shop Now</Button>
          </div>
            
          </Col>
          <Col md={4}>
            <Image src='assets/advocates/carouselImages/CarouselImage.png' alt='carousel image' className={styles.slideImage}/>
          </Col>
        </Row>
    </Container>
  )
}

export default CarouselSlides;