
import img1 from '../../assets/brands pic/BrandFeauter/img1.jpg'
import img2 from '../../assets/brands pic/BrandFeauter/img2.jpg'
import img3 from '../../assets/brands pic/BrandFeauter/img3.jpg'

function BrandFeatured() {
  return (
    <div>
      <div className='flex justify-start'>
        <p className='w-[176px] h-[47px] ml-9 mt-10 text-4xl text-left text-black'>Featured</p>
      </div>
      <div className="flex justify-evenly mb-16">
        <img className="w-[450px] h-[592.5px] shadow-2xl shadow-gray-400 rounded-md" src={img1} alt="img" />
        <img className="w-[450px] h-[592.5px] shadow-2xl shadow-gray-400 rounded-md" src={img2} alt="img" />
        <img className="w-[450px] h-[592.5px] shadow-2xl shadow-gray-400 rounded-md" src={img3} alt="img" />
      </div>
    </div>
  )
}

export default BrandFeatured