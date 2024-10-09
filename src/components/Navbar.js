// src/Navbar.js

import React from 'react';
import './styling/Navbar.css'; // Optional: for custom styling
// import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { Link } from 'react-scroll';
import About from './About';

const Navbar = (props) => {
    const headerStyle = {
      
        backgroundColor: '#F2F5EA',
        // padding: '10px 0',
        height:'60px',
        borderBottom: '3px solid #fca311',
        
      };



  return (
   <header className='sticky-top'> <nav className="navbar  navbar-expand-lg  nav2 my-0 sticky-top navbar-dark h-90" >
   <div className="container-fluid  d-flex justify-content-between navcon h-60">
     <a className="navbar-brand bgicon" href="#">{props.companyName}</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#">{props.firstHeading}</a>
         </li>
         <li className="nav-item">
         <Link to="About" smooth={true} duration={200}><a className="nav-link active" aria-current="page" href="#">{props.secondHeading}</a>
          </Link>
         </li>
         
         
         <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Dropdown
           </a>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Action</a></li>
             <li><a className="dropdown-item" href="#">Another action</a></li>
             <li><hr className="dropdown-divider" /></li>
             <li><a className="dropdown-item" href="#">Something else here</a></li>
           </ul>
         </li>
         <li className="nav-item">
         <Link to="Contact" smooth={true} duration={100}><a className="nav-link active" aria-current="page" href="#">Contact</a>
         </Link>
         </li>
         
         
         
       </ul>

       
       
    

   </div> 
   </div>

 </nav>
 
 
   
 </header>
  );
};

export default Navbar;
Navbar.propTypes= {
  firstHeading: PropTypes.string.isRequired,
  secondHeading: PropTypes.string.isRequired
};

Navbar.defaultProps= {
  firstHeading: "Default Heading",
  secondHeading: "Default Heading"
}
