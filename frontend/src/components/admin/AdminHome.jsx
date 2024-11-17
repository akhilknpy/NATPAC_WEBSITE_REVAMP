import React from 'react'
import Header from '../homemodules/Header'
import AdminNav from './AdminNav'
import Footer from '../homemodules/Footer'
import TopCarousel from '../homemodules/TopCarousel'
import HorScroll from '../homemodules/HorScroll'
import LatestNewsScroll from '../homemodules/LatestNewsScroll'
import LeadPeoples from '../homemodules/LeadPeoples'
import AboutUs from '../homemodules/AboutUs'
import ResearchProjSlide from '../homemodules/ResearchProjSlide'
import '../homemodules/css/Container-mid.css'



const AdminHome = () => {
  return (
    <>
        <Header />
        <AdminNav />
        <TopCarousel />
        <HorScroll />
        <div className='home-container-mid'>
            <LeadPeoples />
            <AboutUs />
            <LatestNewsScroll />      
        </div>
        <ResearchProjSlide />
        <Footer />
    </>
  )
}

export default AdminHome