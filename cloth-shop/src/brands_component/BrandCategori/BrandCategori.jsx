import React from 'react'
import women from '../../assets/brands pic/BrandCategori/women.jpg'
import men from '../../assets/brands pic/BrandCategori/men.jpg'
import children from '../../assets/brands pic/BrandCategori/children.jpg'
import sport from '../../assets/brands pic/BrandCategori/sport.jpg'

function BrandCategori() {
  return (
    <div>
      <div className='flex justify-start'>
        <p className='w-[700px] text-3xl  text-left mb-7 mt-12 ml-5 '>Shop By Category</p>
      </div>
      <div className='flex justify-evenly my-7 w-full '>
        <div>
          <img className="w-[350px] h-[450px] shadow-xl" src={women} alt="women" />
          <p className='w-[115px] h-[25px] text-2xl font-bold text-left text-black mt-3'>Women</p>
        </div>
        <div>
          <img className="w-[350px] h-[450px] shadow-xl" src={men} alt="men" />
          <p className='w-[115px] h-[25px] text-2xl font-bold text-left text-black mt-3'>Men</p>
        </div>
        <div>
          <img className="w-[350px] h-[450px] shadow-xl" src={children} alt="children" />
          <p className='w-[115px] h-[25px] text-2xl font-bold text-left text-black mt-3'>Children</p>
        </div>
        <div>
          <img className="w-[350px] h-[450px] shadow-xl" src={sport} alt="sport" />
          <p className='w-[115px] h-[25px] text-2xl font-bold text-left text-black mt-3'>sport</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default BrandCategori