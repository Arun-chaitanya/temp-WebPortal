import Image from '@components/Image';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styles from './CategoriesImageRow.module.scss';
import Text from '@components/Text';

interface CategoryData {
  imageSrc: string;
  text: string;
}

const CategoriesImageRow = () => {
  const gridBreakpoints = {
    xs: 6,
    sm: 6,
    md: 4,
    lg: 2,
  };

  const categoryData: CategoryData[] = [
    { imageSrc: 'assets/advocates/categories/link-logo.png', text: 'See All' },
    { imageSrc: 'assets/advocates/categories/link-logo.png', text: 'Medical Care' },
    { imageSrc: 'assets/advocates/categories/link-logo.png', text: 'Household' },
    { imageSrc: 'assets/advocates/categories/link-logo.png', text: 'Beauty & Wellness' },
    { imageSrc: 'assets/advocates/categories/link-logo.png', text: 'Travel' },
    { imageSrc: 'assets/advocates/categories/link-logo.png', text: 'Food & Drink' },
  ];

  return (
    <Container className='mb90'>
      <Row>
        {categoryData.map((category, index) => (
          <Col key={index} xs={gridBreakpoints.xs} sm={gridBreakpoints.sm} md={gridBreakpoints.md} lg={gridBreakpoints.lg}>
            <Image src={category.imageSrc} alt="category logo" className={styles.CategoryLogoImage} />
            <Text color='oceanic' weight='bold'>{category.text}</Text>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesImageRow;
