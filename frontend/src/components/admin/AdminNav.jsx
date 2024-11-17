import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../homemodules/css/Navbar.css'

const AdminNav = () => {
  return (
    <Navbar expand="lg" className="navbar-bg">
      <Navbar.Toggle aria-controls="nav-title" />
      <Navbar.Collapse className="">
        <span><a href="#" className="nav-title">Home</a></span>
        <NavDropdown title="Site Updation" className="nav-title">
          <NavDropdown.Item href={'/CarouselImages'}>Carousel Images</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={'/resProj'}>Research Projects</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Structure" className="nav-title">
          <NavDropdown.Item href="#action/3.1">About US</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Management Committee</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Research Council</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Divisions</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Regional offices</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="P&T Talks" className="nav-title">
          <NavDropdown.Item href="#action/3.1">Road Safety</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Annual Report</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Newsletters</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">TransTeck Talk Series</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">TransPedia research Talk Series</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Project" className="nav-title">
          <NavDropdown.Item href="#action/3.1">Research Projects</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Consultancy Projects</NavDropdown.Item>
        </NavDropdown>
        <span><a href="#" className="nav-title">Staff</a></span>
        <span><a href="#" className="nav-title">Careers</a></span>
        <span><a href="#" className="nav-title">Tenders</a></span>
        <span><a href="#" className="nav-title">RTI</a></span>
        <span><a href="#" className="nav-title">Library</a></span>
        <NavDropdown title="Students Portal" className="nav-title">
          <NavDropdown.Item href="#action/3.1">Internship And Projects</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Training Portal" className="nav-title">
          <NavDropdown.Item href="#action/3.1">Training For Drivers On Sage Transportation Of Hazardous Goods</NavDropdown.Item>
        </NavDropdown>
        <span><a href="#" className="nav-title">Contacts</a></span>
        <span><a href="#" className="nav-title">Latest News</a></span>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default AdminNav