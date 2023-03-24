import React from 'react';
import { Row } from 'react-bootstrap';

export default function MovingWeatherComponent(props) {
  return (
    <div  className={`moving-W `}>
        <Row className='moving'>
            <span>{props.Humidity} {props.Sunrise} {props.Sunset} {props.Wind}&nbsp;&nbsp;&nbsp;</span>
        </Row>
        <Row className='moving moving2'>
            <span>{props.Humidity} {props.Sunrise} {props.Sunset} {props.Wind}&nbsp;&nbsp;&nbsp;</span>
        </Row>
    </div>
  )
}
