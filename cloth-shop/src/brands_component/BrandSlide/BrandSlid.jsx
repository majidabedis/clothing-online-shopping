import { XMarkIcon } from '@heroicons/react/20/solid'
import banner from '../../assets/brands pic/Brandslider/banner.jpg'
import img1 from '../../assets/brands pic/Brandslider/img1.jpg'
import img2 from '../../assets/brands pic/Brandslider/img2.jpg'


function BrandSlid() {
  return (
    <>
      <div className="relative isolate flex mt-14 items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#b3e2e9] to-[#07afe2] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#b3e2e9] to-[#07afe2] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">GeneriCon 2024</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next.
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-blue-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Shop Now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
        
        </div>
      </div>
      
        <div className="flex w-11/12 h-[555px] mx-auto mt-12 p-6 bg-[#9eacb9] shadow-md shadow-gray-600">
          <div className='w-6/12 mx-auto'>
            <img className='w-[700px] h-[500px] grow-0 rounded-md' src={banner} alt="banner" />
          </div>
          <div className='w-61/12 mx-auto'>
            <div >
              <p className='w-[130px] h-[28px] grow-0 ml-[20px] text-2xl text-left text-black'>IN FOCUS:</p>
              <p className="w-[307px] h-[27px] grow-0 mt-2 ml-5 text-2xl text-left text-black">HUGO Blue Collection</p>
              <p className='w-[150px] h-24px] grow-0 mt-7 ml-5 text-xl font-bold text-left text-black'>Shop The Edit</p>
            </div>
            <div className='flex justify-around'>
              <img className="w-[300px] h-[360px] grow-0 mt-3 ml-6" src={img1} alt="img1" />
              <img className="w-[300px] h-[360px] grow-0 mt-3 ml-6" src={img2} alt="img2" />
            </div>
          </div>
        </div>
     
    </>
  )
}

export default BrandSlid