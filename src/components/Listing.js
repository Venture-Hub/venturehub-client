import React from 'react'
import FILTER from "../images/filter.png"
// import company from "../images/company.jpeg"

function Listing({ data, title }) {
  return (
    <div className="p-2" >
      <div className='p-2 mx-auto' style={{ backgroundColor: "rgba(196, 196, 196, 0.13)" }}>
        {/* Navbar */}
        <div className="m-2">
          <div className="p-2 bg-white border flex flex-row justify-between items-center">
            <h3 className='text-4xl'>{title}</h3>
            <img src={FILTER} alt="lets filter" className="h-8" />
          </div>

          {/* Card Box */}
          <div className="mt-16">
            {data.map(element => (
              <div className=" my-3 flex flex-row gap-2 bg-[#C4C4C4] rounded-md">
                <div className='flex items-center m-2'>
                  <img src={element.icon} alt="company" className='h-24 rounded-full border' />
                </div>
                <div className="flex flex-col p-2 rounded-lg">
                  <h3 className='text-lg font-semibold'>{element.name}</h3>
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