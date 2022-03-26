import React from 'react'
import Icon from "../images/LOGO.svg"
// import search from "../images/search.png"
import { Link } from "react-router-dom";
import logoutIcon from "../images/util/logout.png"

function Navbar() {
  return (
    <nav className='bg-[#C094D1] flex h-16 justify-center items-center'>
      <div className='w-1/6 px-4'>
        <Link to="/">
          <img src={Icon} alt="Logo" className='h-5/6 text-left' />
        </Link>
      </div>
      <div className='w-5/6 relative'>
        <form action="">
          <input placeholder='Search Founders, Mentors and Investors' type="text" className='h-8 w-4/6 rounded-lg focus:border-none p-2' />
          {/* <span className='h-6 absolute m-1 inset-y-0'>
            <button type="submit">
              <img src={search} alt="search" />
            </button>
          </span> */}
        </form>
      </div>
      <div>
        <img src={logoutIcon} alt="signoff" />
      </div>
    </nav>
  )
}

export default Navbar