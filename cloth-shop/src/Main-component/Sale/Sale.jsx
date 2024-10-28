import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/mainpage/off-banner1.webp'
import img2 from '../../assets/mainpage/off-baner2.webp'

function Sale() {
  return (
   <>
   <div className='d-flex justify-content-evenly w-100'>
    <img className='w-[760px] h-[420px] shadow-md ' src={img1} alt="sale" />
    <img className='w-[760px] h-[420px] shadow-md ' src={img2} alt="sale" />
   </div>
   </>
  )
}

export default Sale