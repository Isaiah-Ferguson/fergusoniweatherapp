import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  Favorites  from './FavoritesComponent'

export default function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p  onClick={handleShow} className={`${'favoritesTextNight'}`}>
        Favorites List
      </p>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Favorite Locations</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Favorites/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

