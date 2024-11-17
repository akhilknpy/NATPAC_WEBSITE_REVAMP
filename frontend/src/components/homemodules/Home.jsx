import React from 'react'
import Header from './Header'
import UserNav from './UserNav'
import Footer from './Footer'
import TopCarousel from './TopCarousel'
import HorScroll from './HorScroll'
import LatestNewsScroll from './LatestNewsScroll'
import LeadPeoples from './LeadPeoples'
import AboutUs from './AboutUs'
import ResearchProjSlide from './ResearchProjSlide'
import './css/Container-mid.css'



const Home = () => {
  return (
    <>
        <Header />
        <UserNav />
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

export default Home