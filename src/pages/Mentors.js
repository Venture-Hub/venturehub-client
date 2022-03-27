import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import FILTER from "../images/filter.png"
import ProfilePic from "../images/util/user1.png"

function Mentors() {

  return (
    <>
      <Navbar />
      <div className='flex flex-row'>
        <SideBar />
        <div className="p-2 w-full" >
          <div className='p-2 mx-auto' style={{ backgroundColor: "rgba(196, 196, 196, 0.13)" }}>

            {/* Navbar */}
            <div className="m-2">
              <div className="p-2 bg-white rounded-lg flex flex-row justify-between items-center">
                <h3 className='text-4xl'>Mentors</h3>
                <img src={FILTER} alt="lets filter" className="h-8" />
              </div>
            </div>

            {/* Investors List */}


            <div className='m-2 my-16 flex flex-wrap justify-between'>
              <div className="listingCard h-52 w-1/4 rounded-xl flex items-center p-4">
                <img src={ProfilePic} alt="user" className='h-28' />
                <div className='p-4'>
                  <h1 className='text-xl text-black py-2'>John Brown</h1>
                  <h1 className='text-xs text-black'>Song Entertainments</h1>
                  <h1 className='text-xs text-black'>Finance</h1>
                </div>
              </div>
              <div className="listingCard h-52 w-1/4 rounded-xl flex items-center p-4">
                <img src={ProfilePic} alt="user" className='h-28' />
                <div className='p-4'>
                  <h1 className='text-xl text-black py-2'>John Brown</h1>
                  <h1 className='text-xs text-black'>Song Entertainments</h1>
                  <h1 className='text-xs text-black'>Finance</h1>
                </div>
              </div>
              <div className="listingCard h-52 w-1/4 rounded-xl flex items-center p-4">
                <img src={ProfilePic} alt="user" className='h-28' />
                <div className='p-4'>
                  <h1 className='text-xl text-black py-2'>John Brown</h1>
                  <h1 className='text-xs text-black'>Song Entertainments</h1>
                  <h1 className='text-xs text-black'>Finance</h1>
                </div>
              </div>
            </div>

            <div className='m-2 my-16 flex flex-wrap justify-between'>
              <div className="listingCard h-52 w-1/4 rounded-xl flex items-center p-4">
                <img src={ProfilePic} alt="user" className='h-28' />
                <div className='p-4'>
                  <h1 className='text-xl text-black py-2'>John Brown</h1>
                  <h1 className='text-xs text-black'>Song Entertainments</h1>
                  <h1 className='text-xs text-black'>Finance</h1>
                </div>
              </div>
              <div className="listingCard h-52 w-1/4 rounded-xl flex items-center p-4">
                <img src={ProfilePic} alt="user" className='h-28' />
                <div className='p-4'>
                  <h1 className='text-xl text-black py-2'>John Brown</h1>
                  <h1 className='text-xs text-black'>Song Entertainments</h1>
                  <h1 className='text-xs text-black'>Finance</h1>
                </div>
              </div>
              <div className="listingCard h-52 w-1/4 rounded-xl flex items-center p-4">
                <img src={ProfilePic} alt="user" className='h-28' />
                <div className='p-4'>
                  <h1 className='text-xl text-black py-2'>John Brown</h1>
                  <h1 className='text-xs text-black'>Song Entertainments</h1>
                  <h1 className='text-xs text-black'>Finance</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mentors