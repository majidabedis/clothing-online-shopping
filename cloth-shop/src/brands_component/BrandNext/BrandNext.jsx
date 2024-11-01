import React from 'react'
import banner from '../../assets/brands pic/BrandNext/brand_banner.jpg'
import img1 from '../../assets/brands pic/BrandNext/img1.jpg'
import img2 from '../../assets/brands pic/BrandNext/img2.jpg'
import img3 from '../../assets/brands pic/BrandNext/img3.jpg'
import logo1 from '../../assets/brands pic/BrandNext/logo1.png'
import logo2 from '../../assets/brands pic/BrandNext/logo3.png'
import logo3 from '../../assets/brands pic/BrandNext/logo4.png'
import logo4 from '../../assets/brands pic/BrandNext/logo5.png'
import logo5 from '../../assets/brands pic/BrandNext/logo6.png'
import logo6 from '../../assets/brands pic/BrandNext/logo7.png'

function BrandNext() {
  return (
  <>
      <div className="flex justify-start mt-12">
        <p className='w-[242] h-[32px] ml-[94px] mb-[34px] mr-[30px] text-3xl text-left text-black'>Brand at Next</p>
      </div>
      <div className='flex justify-center'>
        <img className='w-[95%] h-[578px] mx-auto' src={banner} alt="" />
      </div>
      <div className='w-[95%] flex m-auto justify-around'>
        <img className='w-[475px] h-[556.3px] mt-2 shadow-md shadow-gray-400' src={img1} alt="img1" />
        <img className='w-[475px] h-[556.3px] mt-2 shadow-md shadow-gray-400' src={img2} alt="img2" />
        <img className='w-[475px] h-[556.3px] mt-2 shadow-md shadow-gray-400' src={img3} alt="img3" />
      </div>
      <div className="flex justify-around">
        <img className="w-[210px] h-[90.1px] mt-[37.8px] ml-[25px] mb-[22.9px] mr-[20px] shadow-md shadow-gray-400" src={logo1} alt="logo1" />
        <img className="w-[210px] h-[90.1px] mt-[37.8px] ml-[25px] mb-[22.9px] mr-[20px] shadow-md shadow-gray-400" src={logo2} alt="logo2" />
        <img className="w-[210px] h-[90.1px] mt-[37.8px] ml-[25px] mb-[22.9px] mr-[20px] shadow-md shadow-gray-400" src={logo3} alt="logo3" />
        <img className="w-[210px] h-[90.1px] mt-[37.8px] ml-[25px] mb-[22.9px] mr-[20px] shadow-md shadow-gray-400" src={logo4} alt="logo4" />
        <img className="w-[210px] h-[90.1px] mt-[37.8px] ml-[25px] mb-[22.9px] mr-[20px] shadow-md shadow-gray-400" src={logo5} alt="logo5" />
        <img className="w-[210px] h-[90.1px] mt-[37.8px] ml-[25px] mb-[22.9px] mr-[20px] shadow-md shadow-gray-400" src={logo6} alt="logo6" />
      </div>
      <hr />
      </>
  )
}

export default BrandNext