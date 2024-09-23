import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/mainpage/off-banner1.webp'
import img2 from '../../assets/mainpage/off-baner2.webp'

const IMG = styled.img`
width: 740px;
height: 420.6px;
box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.5);
`
function Sale() {
  return (
   <>
   <div className='d-flex justify-content-evenly w-100'>
    <IMG src={img1} alt="sale" />
    <IMG src={img2} alt="sale" />
   </div>
   </>
  )
}

export default Sale