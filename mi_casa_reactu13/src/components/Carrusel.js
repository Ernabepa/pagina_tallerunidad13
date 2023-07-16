import React from 'react'
import imag1 from '../assets/img1.jpg'
import imag2 from '../assets/img2.jpg'
import imag3 from '../assets/img3.jpg'
import imag4 from '../assets/img4.jpg'

export const carrusel = () => {
  return (
    <div>
        <div className="slider-frame">
        <ul>
          <li><img src={imag1} /></li>
          <li><img src={imag2} /></li>
          <li><img src={imag3} /></li>
          <li><img src={imag4} /></li>
        </ul>
      </div>

    </div>
  );
}
export default carrusel