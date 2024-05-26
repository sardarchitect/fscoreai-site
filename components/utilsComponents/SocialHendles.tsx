import React from 'react'

const SocialHendles = () => {
  return (
    <div>
       {/* {social media links} */}
       <div className="flex justify-center ">
      <div className="flex items-center space-x-4">
      {/* Instagram */}
      <a href="#" target="_blank" className=" rounded-full  transform hover:scale-110">
        <img src='/social/icons-instagram.png' alt="Facebook Icon" className="w-12 h-12 text-white" />
      </a>
      {/* linkedIn */}
      <a href="#" target="_blank" className=" rounded-full  transform hover:scale-110">
        <img src='/social/icons-linkedin.png' alt="Facebook Icon" className="w-12 h-12 text-white" />
      </a>
      {/* Facebook */}
      <a href="#"  target="_blank" className=" rounded-full  transform hover:scale-110">
        <img src='/social/icons-facebook.png' alt="Facebook Icon" className="w-12 h-12 text-white" />
      </a>
      {/* X */}
      <a href="#" target="_blank" className=" rounded-full  transform hover:scale-110">
        <img src='/social/icons-twitter.png' alt="Facebook Icon" className="w-12 h-12 text-white" />
      </a>
    </div>
</div>
    </div>
  )
}

export default SocialHendles;