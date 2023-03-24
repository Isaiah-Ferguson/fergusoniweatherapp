import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';


export default function TodayWeatherComponent(props) {

    
  return (
    <div className='container'>
        <Col lg={6} md={6}><div className='cardBG'>
            <Card.Body>
                <h1 className='headerText text-center'> Current Location</h1>
                <h3 className='headerText text-center'>{props.city}</h3>
                <Row>
                    <Col lg={12} className="text-center tempTextHeroImg">
                      <Row>
                        <Col lg={12}>
                        {props.currentTemp}
                        </Col>
                        <Col lg={6}>
                        <div>High: {props.TodayTemp}</div>
                        </Col>
                        <Col lg={6}>
                        <div>Low: {props.TodayTempLow}</div>
                        </Col>
                      </Row>
                            <div className="conditionTextHeroImg"><p>{props.currentCondition}</p></div>
                    </Col>
                    <Col lg={7} sm={12} className="iconPlasment">
                    <div ><img src={props.CurrentDayImage}/></div>
                    </Col>
                </Row>
            </Card.Body>
        </div></Col>
    </div>
  )
}
