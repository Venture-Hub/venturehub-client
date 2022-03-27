import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import ProfilePic from "../images/util/user1.png"
import EditIcon from "../images/util/edit.png"
import rightIcon from "../images/util/right.png"

function Profile() {

  const tags = [
    "Founder",
    "Mentor",
    "Investor"
  ]

  return (
    <div>
      <Navbar />
      <div className='flex flex-row'>
        <SideBar />

        <div className="p-2 w-full">
          {/* <div className='p-2 mx-auto' style={{ backgroundColor: "rgba(196, 196, 196, 0.13)" }}> */}
          <div className='p-2 mx-auto'>


            {/* Description Section */}
            <div className="m-2 flex flex-row">
              <div className='w-1/6'>
                <img className='h-44' src={ProfilePic} alt="profile pic" />
              </div>
              <div className='flex-col justify-between w-full px-10'>

                <div className='m-3 flex items-center justify-between'>
                  <div className="text-4xl">John Taylor</div>
                  <div className='flex justify-start w-3/6'>
                    {tags.map((tag, index) => (
                      <p className='p-2 m-2 rounded-lg bg-[#c094d1] text-black'>{tag}</p>
                    ))}
                  </div>
                  <div>
                    <img src={EditIcon} alt="edit" />
                  </div>
                </div>

                <div className='m-3 my-4 flex justify-between'>
                  <p className='text-gray-600 text-lg'>Age: 45</p>
                  <p className='text-gray-600 text-lg'>Mumbai, India</p>
                  <p className='text-gray-600 text-lg'>sample@gmail.com</p>
                </div>
                <div className='m-3'>
                  I'm John 21 years old Computer Engineering student at Modern Academy for Engineering, Beta Microsoft Learn Student Ambassador, Google Developer Groups Cloud Egypt Co-organizer, Full-Stack Developer Nanodegree Graduate.
                  Recently, I developed an interest in Machine Learning and Google Apps Script.
                </div>
              </div>
            </div>

            <hr />

            <div className=' my-12 '>
              <div className="flex justify-between my-12 items-center">
                <h1 className='text-2xl text-black'>Companies</h1>
                <img className='h-12' src={rightIcon} alt="right" />
              </div>

              <div className='flex flex-wrap justify-between'>
                <div className="bg-[#C4C4C4] h-52 w-1/4 rounded-xl"></div>
                <div className="bg-[#C4C4C4] h-52 w-1/4 rounded-xl"></div>
                <div className="bg-[#C4C4C4] h-52 w-1/4 rounded-xl"></div>
              </div>
            </div>

            <div className=' my-12 '>
              <div className="flex justify-between my-12 items-center">
                <h1 className='text-2xl text-black'>Investments</h1>
                <img className='h-12' src={rightIcon} alt="right" />
              </div>

              <div className='flex flex-wrap justify-between'>
                <div className="bg-[#C4C4C4] h-52 w-1/4 rounded-xl"></div>
                <div className="bg-[#C4C4C4] h-52 w-1/4 rounded-xl"></div>
                <div className="bg-[#C4C4C4] h-52 w-1/4 rounded-xl"></div>
              </div>
            </div>

            <div className=' my-12 '>
              <div className="flex justify-between my-12 items-center">
                <h1 className='text-2xl text-black'>Mentored to</h1>
                <img className='h-12' src={rightIcon} alt="right" />
              </div>

              <div className='flex flex-wrap justify-between'>
                <div className="bg-[#C4C4C4] h-52 w-1/4 rounded-xl"></div>
                <div className="bg-[#C4C4C4] h-52 w-1/4 rounded-xl"></div>
                <div className="bg-[#C4C4C4] h-52 w-1/4 rounded-xl"></div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile