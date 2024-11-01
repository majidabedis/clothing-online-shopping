import React from 'react'
import img1 from '../../assets/brands pic/BrandBeauty/img1.jpg'
import img2 from '../../assets/brands pic/BrandBeauty/img2.jpg'
import img3 from '../../assets/brands pic/BrandBeauty/img3.jpg'

function BrandBeauty() {
  return (
    <div>
      <div className="flex justify-start">
        <p className="w-445px h-61px ml-[40px] mb-2 text-4xl text-left text-black">Beauty Brands at Next </p>
      </div>
      <div className="flex justify-evenly mb-7">
        <img className="w-[450px] h-[592.5] rounded-3xl shadow-ms" src={img1} alt="img1" />
        <img className="w-[450px] h-[592.5] rounded-3xl shadow-ms" src={img2} alt="img2" />
        <img className="w-[450px] h-[592.5] rounded-3xl shadow-ms" src={img3} alt="img3" />
      </div>
    </div>
  )
}

export default BrandBeauty