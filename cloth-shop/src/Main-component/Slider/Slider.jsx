import styled from 'styled-components'
import img from '../../assets/mainpage/slide.jpg'

// ********************sttyled component***********//
const Div = styled.div`
background: url(${img});
background-repeat: no-repeat;
background-size: cover;
width: 95%;
height: 700px! important;
margin: auto;
margin-top: 50px;
justify-items: center;
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
position: relative;
`
const P = styled.p`
position: absolute;
top:220px ;
left:700px;
text-shadow: 0 4px 4px rgba(110, 110, 110, 0.17);
font-family: IstokWeb;
font-size: 50px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #000;
`
const A = styled.a`
  position: absolute;
  top:300px ;
  left:700px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  font-family: IstokWeb;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: 3px;
  text-align: left;
  color: #000;
  text-decoration:none;
`
function Slider() {
    return (
        <>
            <Div>
                <P>A MATCH MADE IN HEAVEN</P>
                <A href="">Shop Now</A>
            </Div>
        </>
    )
}

export default Slider