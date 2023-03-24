import React, { useState } from 'react';
import {  getLocalStorage, removeFromLocalStorage } from ".././services/services";
import { CityCall } from './FetchComponent';
import {  Row, Col } from 'react-bootstrap'
import x from '../assets/X.png'

function Favorites() {
  const [favorites, setFavorites] = useState(getLocalStorage());

  const handleRemove = (city) => {
    removeFromLocalStorage(city);
    setFavorites(favorites.filter(favCity => favCity !== city));
  }

  const handleCityClick = (city) => {
    CityCall(city);
    
  }

  return (
    <>
      {favorites.map(city => (
        <div key={city}>
            <Row style={{paddingTop: 30}}>
                <Col lg={6} sm={6}>
                <p
              style={{ fontSize: "21px", paddingTop: "3px" }}
              onClick={() => handleCityClick(city)}>
              {city}
            </p>
                </Col>
                <Col lg={6} sm={6}>
                <div className="" onClick={() => handleRemove(city)}>
              <img style={{height: 40}} src={x}/>
            </div>
                </Col>
            </Row>
        </div>
      ))}
    </>
  );
}

export default Favorites;