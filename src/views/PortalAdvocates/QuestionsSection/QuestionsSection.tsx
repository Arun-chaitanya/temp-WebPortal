import React from 'react'

import styles from './QuestionsSection.module.scss';
import FullContainer from '@components/FullContainer';
import { Col, Row } from 'react-grid-system';
import Image from '@components/Image';
import Text from '@components/Text';
import InputText from '@components/InputText';
import Button from '@components/Button';

type Props = {}

const QuestionsSection = (props: Props) => {
  const questionText = "Have questions, can't find a retailer, or looking for a discount on a specific product? Let us know! Submit a request, and we'll do what we can to help you out."
  return (
    <FullContainer className={styles.fullContainer}>
      <Row align='center' gutterWidth={100}>
        <Col>
          <div className={styles.flexAlignCenter}>
            <Image src="assets/advocates/questions/Isolation_Mode.png" alt='question logo' className={styles.questionLogo}/>
            <Text className={styles.questionTitle}>Questions?</Text>
          </div>
          <Text className={styles.questionText} size='lg'>{questionText}</Text>
        </Col>
        <Col>
        <Row>
          <Text className='pl15 mb5' size='lg' weight='bold'>Questions</Text>
        </Row>
        <Row>
          <Col>
            <InputText type="text" placeholder='Type your question here...'></InputText>
          </Col>
          <Col>
            <Button type='submit' className={styles.submitButton} style={{backgroundColor: "#036974"}}>Submit</Button>
          </Col>
          </Row>
        </Col>
        
      </Row>
    </FullContainer>
  )
}

export default QuestionsSection;