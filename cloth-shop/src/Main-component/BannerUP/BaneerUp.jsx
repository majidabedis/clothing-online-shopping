import React from 'react'
import styled from 'styled-components'
import url from '../../assets/mainpage/main_img.webp'

//*****************************styled component************
const Div= styled.div`
// margin-top: 50px;
background:url( ${url});
background-size:cover;
width: 100%;
height: 700px;
`

function BaneerUp() {
  return (
  <>
 <Div className='bg-'></Div>
  </>
  )
}

export default BaneerUp