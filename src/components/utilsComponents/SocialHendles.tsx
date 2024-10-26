"use client"
import { useThemeContext } from '@/src/context/theme'
import React, { useContext } from 'react'
import { SocialIcon } from 'react-social-icons'


const SocialHendles = () => {
  const [theme] = useThemeContext()
  const color = theme==="dark" ? "white" : "rgb(2 6 23)";
  return (
    <div>
       {/* {social media links} */}
       <div className="flex justify-center ">
      <div className="flex flex-col  items-start space-x-0 m-0 p-0 ">
      <div className='h4'><SocialIcon url="https://www.instagram.com/fscoreai?igsh=ejJvOXM4emFhampu" label='Instagram'  className='rounded-md transform hover:scale-110  ' bgColor="none" fgColor={`${color}`}  />Instagram</div>
      <div className='h4'><SocialIcon url="https://www.linkedin.com/company/fscore/" className='  transform hover:scale-110' bgColor="none" fgColor={`${color}`} />LinkdIn</div>
      <div className='h4'><SocialIcon url="https://facebook.com" className='rounded-md transform hover:scale-110' bgColor="none" fgColor={`${color}`} />Facebook</div>
     


        
     
    </div>
</div>
    </div>
  )
}

export default SocialHendles;

