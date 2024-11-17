import React from 'react'
import './css/LeadPeoples.css'
import img1 from '../images/img10.png'
import img2 from '../images/img11.jpg'
import img3 from '../images/img12.jpg'
import img4 from '../images/img13.jpg'
import img5 from '../images/img14.jpg'

const LeadPeoples = () => {
  return (
    <div className="card-container">
      <div className="card">
        {/* Top Image */}
        <div className="top-image">
          <img src={img1} alt="Top Image" />
          <p className="description">Hon. Chief Minister</p>
        </div>

        {/* Bottom Images */}
        <div className="bottom-images">
          <div className="bottom-image">
            <img src={img2} alt="Bottom Image 1" />
            <p className="description">Hon. Transport Minister</p>
          </div>
          <div className="bottom-image">
            <img src={img3} alt="Bottom Image 2" />
            <p className="description">Bottom Image 2</p>
          </div>
          <div className="bottom-image">
            <img src={img4} alt="Bottom Image 3" />
            <p className="description">Bottom Image 3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadPeoples