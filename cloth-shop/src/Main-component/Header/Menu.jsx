// import React from 'react'
import styled from 'styled-components'
import { Link, Outlet } from "react-router-dom";

const Ul = styled.ul`
        margin-top: 30px;
        /* width: 90%; */
        display: flex;
        justify-content: space-around;
        LIst-style: none;
        font-family:serif;
        font-weight: bold;
        background-color: rgba(217, 217, 217, 0.628);
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.5);

`
const Red = styled.li`
color :red;
margin:10px;
&:hover,
  &:focus {
    color:blue;
    scale:1.08;
  }
`
const LI= styled.li`
margin:10px;
&:hover,
  &:focus {
    color:blue;
    scale:1.08;
  }
`



function Menu() {
  return (
    <>
      
        <Ul>
          <Link to="/"><LI>HOME</LI></Link>
          <LI>NEW IN</LI>
          <LI>BOTTOMS</LI>
          <Link to="/children"><LI>KIDS</LI></Link>
          <Link to="/Men"><LI>MEN</LI></Link>
          <Link to="/Women"><LI>WOMEN</LI></Link>
          <LI>ACCESSORIES</LI>
          <Red>TOPS</Red>
          <Red>TRENDS</Red>
          <LI>DRESSES</LI>
        </Ul>
     
      <Outlet />
    </>
  )
}

export default Menu