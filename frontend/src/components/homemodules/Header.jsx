import React from 'react'
import natpaclogo from '../logos/NATPAC-logo.png'
import kscstelogo from '../logos/KSCSTE-logo.png'
import './css/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
      <Link to={'/'}>Home</Link>
        <Link to={'/AdminHome'}>Admin</Link>
        <Link to={'/Login'}>Login</Link>
      </div>
      <div className='header-bottom'>
        <div className='natpac-logo'>
          <img src={natpaclogo} alt='natpac-logo' />
        </div>
        <div className='site-name'>
          <div className='head-name'>KSCSTE-NATIONAL TRANSPORTATION PLANNING AND RESEARCH CENTRE</div>
          <div className='head-sub'>An Institution of Kerala State Council for Science,Technology and Environment</div>
        </div>
        <div className='kscste-logo'>
          <img src={kscstelogo} alt='kscste-logo' />
        </div>
      </div>

    </div>
  )
}

export default Header