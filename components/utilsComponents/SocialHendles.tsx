"use client"
import { useThemeContext } from '@/context/theme'
import React, { useContext } from 'react'
import { SocialIcon } from 'react-social-icons'


const SocialHendles = () => {
  const [theme] = useThemeContext()
  const color = theme==="dark" ? "white" : "rgb(2 6 23)";
  return (
    <div>
       {/* {social media links} */}
       <div className="flex justify-center ">
      <div className="flex items-center space-x-3">
      <SocialIcon url="https://instagram.com" className='rounded-full  transform hover:scale-110' bgColor="none" fgColor={`${color}`} />
      <SocialIcon url="https://linkedin.com/manpreet" className='rounded-full  transform hover:scale-110' bgColor="none" fgColor={`${color}`} />
      <SocialIcon url="https://facebook.com" className='rounded-full  transform hover:scale-110' bgColor="none" fgColor={`${color}`} />
      <SocialIcon url="https://twitter.com" className='rounded-full  transform hover:scale-110' bgColor="none" fgColor={`${color}`} />


        
     
    </div>
</div>
    </div>
  )
}

export default SocialHendles;

