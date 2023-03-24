import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function FiveDayComponent(props) {
  const { isDarkMode } = props;

  return (
    <Container>
        <Row>
            <Col lg={12} className={`${isDarkMode ? 'fiveDayForecastRowNight' : 'fiveDayForecastRow'}`}>
                <div className={` fiveDayForecastText ${isDarkMode ? ' darkText' : ' dayText'}`}>
                {props.weekforecast}
                </div>
            </Col>
        </Row>
        <br></br>
    </Container>
  )
}
