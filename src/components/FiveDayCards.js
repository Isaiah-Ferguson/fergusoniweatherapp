import React from 'react'
import { Row, Col, } from 'react-bootstrap'

export default function FiveDayCards(props) {
  const { isDarkMode } = props;

  return (
    <Col lg={2} md={6} xs={12} className={`cardPadding ${isDarkMode ? 'fiveDayForecastRowNight darkText' : 'fiveDayForecastRow dayText'}`}>
      <h2>{props.Day}</h2>
      <Row>
        <Col lg={12} className="d-flex justify-content-center tempMargin">
          <p>High:</p>
          <p className="tempText">{props.Tempeture}</p>
        </Col>
        <Col lg={12} className=" d-flex justify-content-center"><div className='vl'></div></Col>
        <Col lg={12} className="d-flex justify-content-center tempMargin2">
          <p>Low:</p>
          <p className="tempText">{props.TempetureLow}</p>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-end' lg={12} md={7}><img className='fiveDayImg' src={props.WeatherImg} /></Col>
        <Col lg={5} md={5} className='conditionTextHeroImg'>{props.Conditions}</Col>
        <br />
        <p className='conditionTextHeroImg'>{props.Date}</p>
      </Row>
    </Col>
  )
}
