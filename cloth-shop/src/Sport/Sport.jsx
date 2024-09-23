import React from 'react'

const Sport = () => {
    return (
        <>
            <div className='position-relative'>
                <img className='w-full h-[180px]' src="../../src/assets/sport/banerup.jpg" alt="" />
                <p className='position-absolute top-[35%]  left-[45%] text-white text-3xl z-[90] '>FOOTWEAR FINDER</p>
                <p className='text-justify w-fit position-absolute top-[55%] left-[48.5%] text-white text-lg  z-[90]'>Find your perfect shoe</p>
                <button className='position-absolute text-white w-32 h-11 top-[35%] left-[85%] border-2 border-white'>GET STARTED</button>
            </div>
            <div className='w-full h-[200] flex justify-evenly mt-16'>
                <div className='position-relative w-fit h-fit'>
                    <img className='w-[150px] h-[150px] rounded-full' src="../../src/assets/sport/circle1.jpg" alt="Train" />
                    <p className='position-absolute top-[40%] left-[40%] text-white text-xl shadow-md  font-bold'>Train</p>
                </div>
                <div className='position-relative w-fit h-fit'>
                    <img className='w-[150px] h-[150px] rounded-full' src="../../src/assets/sport/circle2.jpg" alt="Train" />
                    <p className='position-absolute top-[40%] left-[30%] text-white text-xl shadow-md  font-bold'>Football</p>
                </div>
                <div className='position-relative w-fit h-fit'>
                    <img className='w-[150px] h-[150px] rounded-full' src="../../src/assets/sport/circle3.jpg" alt="Train" />
                    <p className='position-absolute top-[40%] left-[40%] text-white text-xl shadow-md  font-bold'>Swim</p>
                </div>
                <div className='position-relative w-fit h-fit '>
                    <img className='w-[150px] h-[150px] rounded-full' src="../../src/assets/sport/circle4.jpg" alt="Train" />
                    <p className='position-absolute top-[40%] left-[40%] text-white text-xl shadow-md  font-bold'>Golf</p>
                </div>
                <div className='position-relative w-fit h-fit '>
                    <img className='w-[150px] h-[150px]] rounded-full' src="../../src/assets/sport/circle5.jpg" alt="Train" />
                    <p className='position-absolute top-[40%] left-[40%] text-white text-xl shadow-md  font-bold'>Run</p>
                </div>
                <div className='position-relative w-fit h-fit '>
                    <img className='w-[150px] h-[150px] rounded-full' src="../../src/assets/sport/circle6.jpg" alt="Train" />
                    <p className='position-absolute top-[40%] left-[40%] text-white text-lg font-bold'>Ski</p>
                </div>
            </div>
            <div className='w-11/12 h-[560] flex justify-evenly mt-16 ml-auto mr-auto drop-shadow-[0_3px_8px_rgba(0,0,0,0.24)]'>
                <img className='w-4/12 h-[560] m-auto ' src="../../src/assets/sport/women.jpg" alt="" />
                <img className='w-4/12 h-[560] m-auto border-2 border-x-slate-100' src="../../src/assets/sport/men.jpg" alt="" />
                <img className='w-4/12 h-[560] m-auto ' src="../../src/assets/sport/child.jpg" alt="" />
            </div>
            <div className='flex w-11/12 mt-3 ml-auto mr-auto justify-around'>
                <p className='text-black text-lg font-bold'>Women</p>
                <p className='text-black text-lg font-bold'>Men</p>
                <p className='text-black text-lg font-bold'>Children</p>
            </div>
            <div className='flex justify-evenly w-11/12 h-[85] mr-auto ml-auto mt-12'>
                <img className='w-2/12 h-[81] border-1 border-y-gray-200 ' src="../../src/assets/sport/logo-berghaus-data.jpg" alt="" />
                <img className='w-2/12 h-[81] border-1 border-y-gray-200' src="../../src/assets/sport/logo-converse-data.png" alt="" />
                <img className='w-2/12 h-[81] border-1 border-y-gray-200' src="../../src/assets/sport/logo-mountain-warehouse-data.png" alt="" />
                <img className='w-2/12 h-[81] border-1 border-y-gray-200' src="../../src/assets/sport/logo-neverfullydressed-data.jpg" alt="" />
                <img className='w-2/12 h-[81] border-1 border-y-gray-200' src="../../src/assets/sport/logo-new-balance-data.png" alt="" />
                <img className='w-2/12 h-[81] border-1 border-y-gray-200 ' src="../../src/assets/sport/logo-reebok-data.png" alt="" />
            </div>
            <div className='p-3 flex w-11/12 h-[618px] bg-[#e1ceaee2] mt-16 mr-auto ml-auto'>

                <img className='w-[800px] h-570 ' src="../../src/assets/sport/banner-tenis.jpg" alt="" />

                <div className='w-6/12 p-2 '>

                    <p className='text-xl w-fit  ml-5 mt-3' >IN FOCUS:</p>
                    <p className='text-2xl font-bold w-fit ml-5 mt-2' >Tennis Core</p>
                    <p className='text-xl w-fit  ml-5 mt-2'  >Shop the edit</p>
                    <div className='flex h-fit w-full justify-center'>
                        <img className='w-[260px] mt-16 border-gray-400 border-2' src="../../src/assets/sport/tenis1.jpg" alt="" />
                        <img className='w-[260px] mt-16  border-gray-400 border-2' src="../../src/assets/sport/tenis2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <h2 className='w-fit ml-14 mt-14 mb-12 text-3xl font-bold'>Featured:</h2>
            <div className='w-11/12 flex justify-center m-auto'>
                <img className='w-4/12 p-1 ' src="../../src/assets/sport/Featured1.jpg " alt="Featured1" />
                <img className='w-4/12 p-1 ' src="../../src/assets/sport/Featured2.jpg " alt="Featured2" />
                <img className='w-4/12 p-1 ' src="../../src/assets/sport/Featured3.jpg " alt="Featured3" />
            </div>
            <div className='flex justify-around'>
                <div>
                    <p className=' text-xl font-medium mt-1'>Myleene Klass for Skechers</p>
                    <a className='text-lg font-thin' href="">Shop the edit</a>
                </div>
                <div>
                    <p className=' text-xl font-medium mt-1'>Calvin Klein Golf</p>
                    <a className='text-lg font-thin' href="">Shop the edit</a>
                </div>
                <div>
                    <p className=' text-xl font-medium mt-1'>Sweaty Betty: Wardrobe Refresh</p>
                    <a className='text-lg font-thin' href="">Shop the edit</a>
                </div>
            </div>
            <div className='ml-auto mr-auto mt-16 w-11/12 '>
                <img src="../../src/assets/sport/womenNike.jpg" alt="womenNike" />
            </div>
            <div className=' bg-[#797777] w-11/12  mr-auto ml-auto mt-16 '>
                <p className='text-white text-2xl text-left p-3'>Brands we Love </p>
                <div className='flex w-full p-2'>
                    <img className='w-[24%] m-auto' src="../../src/assets/sport/brandLove1.jpg" alt="" />
                    <img className='w-[24%] m-auto' src="../../src/assets/sport/brandLove2.jpg" alt="" />
                    <img className='w-[24%] m-auto' src="../../src/assets/sport/brandLove3.jpg" alt="" />
                    <img className='w-[24%] m-auto' src="../../src/assets/sport/brandLove4.jpg" alt="" />
                </div>
                <div className='w-full flex justify-around '>
                    <p className='text-white text-lg font-medium p-2'>Nike</p>
                    <p className='text-white text-lg font-medium p-2'>The North Face</p>
                    <p className='text-white text-lg font-medium p-2'>adidas</p>
                    <p className='text-white text-lg font-medium p-2'>Berghaus</p>
                </div>
            </div>
            <div className='w-11/12 mt-12 mr-auto ml-auto mb-10 '>
                <img className='w-full' src="../../src/assets/sport/salebanner.png" alt="salebanner" />
            </div>
        </>
    )
}

export default Sport