import React from 'react'
import './css/Footer.css'
import logo1 from '../logos/CWRDM-logo.png'
import logo2 from '../logos/ICCS-logo.png'
import logo3 from '../logos/JNTBGRI-logo.png'
import logo4 from '../logos/KFRI-logo.png'
import logo5 from '../logos/KSoM-logo.png'
import logo6 from '../logos/MBGIPS-logo.png'
import logo7 from '../logos/SCRIBS-logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-head'>
        <div style={{ color: 'white' }}>R & D CENTRES OF KSCSTE</div>
        <div className='footer-top-logo'>
          <img src={logo1} alt="CWRDM-logo" />
          <img src={logo2} alt="ICCS-logo" />
          <img src={logo3} alt="JNTBGRI-logo" />
          <img src={logo4} alt="KFRI-logo" />
          <img src={logo5} alt="KSoM-logo" />
          <img src={logo6} alt="MBGIPS-logo" />
          <img src={logo7} alt="SCRIBS-logo" />
        </div>
      </div>
      <div className='footer-copyright'>
        <div>
        Copyright © 2024.NATIONAL TRANSPORTATION PLANNING AND RESEARCH CENTRE. All rights reserved. Designed and Maintained by Akhil V
        </div>
      </div>

    </div>
  )
}

export default Footer