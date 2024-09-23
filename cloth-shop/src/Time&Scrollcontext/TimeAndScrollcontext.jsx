import React, { createContext, useEffect } from 'react';

const TimerContext = createContext();

const TimeAndScrollcontext = ({ children }) => {
 
  const body = document.body;
  const upicon = document.createElement('img');

 //***********************scrollhandler****************** */
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 30) {
      upicon.src = "../src/assets/arrow-up.svg"
      upicon.className = "btnup ";
      upicon.style.border = "1px solid black"
      upicon.style.borderRadius = "50%"
      body.appendChild(upicon);
    }
    else if (window.scrollY < 100) {
      body.removeChild(upicon);
    }
    upicon.addEventListener("click", () => {
      scrollTo(0, 0);
    })
  });
  //*********************8*sale baner Timer */
  useEffect(() => {
   
    const upicon = document.createElement('img');
    const img = upicon;

    const timer1 = setTimeout(() => {
      img.src = "../src/assets/salebaner/sale.jpg";
      upicon.className = "img";
      if (img) {
        body.appendChild(upicon);
        img.style.display = "block";
        img.style.transition = "opacity 10s ease-in-out";
        img.style.opacity = 1;
      }
    }, 10000);

    const timer2 = setTimeout(() => {
      if (img) {
        img.style.transition = "opacity 2s ease-out";
        img.style.opacity = 0;
        setTimeout(() => {
          img.style.display = "none";
        }, 4000);
      }
    }, 16000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <TimerContext.Provider value={{}}>
      {children}
    </TimerContext.Provider>
  );
};


export default TimeAndScrollcontext