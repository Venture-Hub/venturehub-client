import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import FILTER from "../images/filter.png"

function Feed() {
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
                <h3 className='text-4xl'>Feed</h3>
                <img src={FILTER} alt="lets filter" className="h-8" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Feed