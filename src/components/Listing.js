import React from 'react'
import FILTER from "../images/filter.png"
// import company from "../images/company.jpeg"

function Listing({ data, title }) {
  return (
    <div className="p-2" >
      <div className='p-2' style={{ backgroundColor: "rgba(196, 196, 196, 0.13)" }}>
        {/* Navbar */}
        <div className="m-2">
          <div className="p-2 bg-white rounded-lg flex flex-row justify-between items-center">
            <h3 className='text-4xl'>{title}</h3>
            <img src={FILTER} alt="lets filter" className="h-8" />
          </div>

          {/* Card Box */}
          <div className="mt-16">
            {data.map(element => (
              <div className="listingTile my-6 flex flex-row gap-2 rounded-md">
                <div className='flex items-center m-6'>
                  <img src={element.icon} alt="company" className='h-24 rounded-full border' />
                </div>
                <div className="flex flex-col p-6 rounded-lg">
                  <h3 className='text-lg font-semibold my-4'>{element.name}</h3>
                  <p className='text-black text-md'>{element.desctiption}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing