import styled from 'styled-components'

//************styled components */
const  Img=styled. img`
border-radius: 50%;
width: 120px;
height: 120px;
display: block;
`
const SPAN =styled.span`
margin: 17px 42px 7px 21px;
font-family: IstokWeb;
font-size: 16px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #000;
`
function Circlemenu() {
  return (
   <>
      <div className="d-flex justify-content-around w-100 mt-5 ">
                <div className='d-flex flex-column'>
                    < Img src="../../src/assets/mainpage/circle1.jpg" alt="circle1" />
                    <SPAN>Lady Style</SPAN>
                </div>
                <div className='d-flex flex-column'>
                    < Img src="../../src/assets/mainpage/circle2.jpg" alt="circle2" />
                    <SPAN>Story Time</SPAN>
                </div>
                <div className='d-flex flex-column'>
                    < Img src="../../src/assets/mainpage/circle3.jpg" alt="circle2" />
                    <SPAN>wedding</SPAN>
                </div>
                <div className='d-flex flex-column'>
                    < Img src="../../src/assets/mainpage/circle4.jpg" alt="circle4" />
                    <SPAN>Footwear</SPAN>
                </div>
                <div className='d-flex flex-column'>
                    < Img src="../../src/assets/mainpage/circle5.jpg" alt="circle5" />
                    <SPAN>Easter</SPAN>
                </div>
                <div className='d-flex flex-column'>
                    < Img src="../../src/assets/mainpage/circle6.jpg" alt="circle6" />
                    <SPAN>HolyDay</SPAN>
                </div>
                <div className='d-flex flex-column'>
                    < Img src="../../src/assets/mainpage/circle7.jpg" alt="circle7" />
                    <SPAN>X Lipsy</SPAN>
                </div>
                <div className='d-flex flex-column'>
                    < Img src="../../src/assets/mainpage/circle8.jpg" alt="circle8" />
                    <SPAN>Outdoor</SPAN>
                </div>
            </div>
   </>
  )
}

export default Circlemenu