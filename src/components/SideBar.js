import React from 'react'
import { Link } from "react-router-dom";

// Import Icons
import companyIcon from "../images/nav/nav-company.svg"
import homeIcon from "../images/nav/nav-home.svg"
import investorsIcon from "../images/nav/nav-investors.svg"
import mentorIcon from "../images/nav/nav-mentor.svg"
import probIcon from "../images/nav/nav-prob.svg"
import profileIcon from "../images/nav/nav-profile.svg"

function SideBar() {
  return (
    <div className='w-28 flex flex-col items-center'>
      <Link to="/feed"> 
        <img className='h-14 my-3 p-1' src={homeIcon} alt="nav icon" />
      </Link>
      <Link to="/problem-statements"> 
        <img className='h-14 my-3 p-1' src={probIcon} alt="nav icon" />
      </Link>
      <Link to="/investors"> 
        <img className='h-14 my-3 p-1' src={investorsIcon} alt="nav icon" />
      </Link>
      <Link to="/companies"> 
        <img className='h-14 my-3 p-1' src={companyIcon} alt="nav icon" />
      </Link>
      <Link to="/profile"> 
        <img className='h-14 my-3 p-1' src={profileIcon} alt="nav icon" />
      </Link>
      <Link to="/mentors"> 
        <img className='h-14 my-3 p-1' src={mentorIcon} alt="nav icon" />
      </Link>
    </div>
  )
}

export default SideBar