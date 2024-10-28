import { Link, Outlet } from "react-router-dom";

function Brand() {
    return (
        <>
            <Link to='/Brands'> 
              <div className=' w-100 d-flex justify-content-evenly'>
                <div className='relative w-[480px] h-[562.5px] mt-[50px] shadow-md bg-[url(../../src/assets/mainpage/brand-allsaint.jpg)] bg-cover bg-no-repeat '>
                    <p className='absolute top-[420px] left-[50px] mx-1 mb-1 text-4xl font-bold leading-3 text-center text-white'>AllSaints</p>
                    <button className=' absolute top-[460px] left-[50px] w-[130px] h-[60px] mt-40px rounded-[50px] bg-white text-xl '>shop now</button>
                </div>
                <div className=' relative w-[480px] h-[562.5px] mt-[50px] shadow-md bg-[url(../../src/assets/mainpage/brand-angel-rocks.jpg)] bg-cover  '>
                    <p className='absolute top-[390px] left-[50px] mx-1 mb-1 text-4xl font-bold text-left text-white'>Angel & Rocket </p>
                    <button className=' absolute top-[460px] left-[50px] w-[130px] h-[60px] mt-40px rounded-[50px] bg-white text-xl'>shop now</button>
                </div>
                <div className= 'relative w-[480px] h-[562.5px] mt-[50px] shadow-md bg-[url(../../src/assets/mainpage/brand-love-rocks.jpg)] bg-cover bg-no-repeat '>
                    <p className='absolute top-[390px] left-[50px] mx-1 mb-1 text-4xl font-bold text-left text-white'>Love & Roses</p>
                    <button className=' absolute top-[460px] left-[50px] w-[130px] h-[60px] mt-40px rounded-[50px] bg-white text-xl'>shop now</button>
                </div>
            </div>
                <div className='relative bg-[url(../../src/assets/mainpage/barnd-baner.jpg)] bg-cover w-[97.5%] h-[579px] shadow-lg mx-auto mt-5  '>
                    <p className='absolute top-[140px] left-[600px] text-5xl font-bold text-center text-black'>Levi’s & You</p>
                    <button className='absolute top-[220px] left-[600px] w-[200px] h-[67px] rounded-[50px] bg-white/85 text-2xl text-center text-black border-black border-2'>shop now</button>
                </div>
                <div className='d-flex justify-content-start m-5'>
                    <p className='w-[295] h-[63px] text-4xl text-left text-black'>Brands at Next</p>
                </div>
                <div className='d-flex justify-content-around'>
                    <img className="w-[190px] h-[81.5px] shadow-md" src="../../src/assets/mainpage/logo-lipsy-data.png" alt="" />
                    <img className="w-[190px] h-[81.5px] shadow-md" src="../../src/assets/mainpage/logo-loveandroses-data.png" alt="" />
                    <img className="w-[190px] h-[81.5px] shadow-md" src="../../src/assets/mainpage/logo-new-balance-data.png" alt="" />
                    <img className="w-[190px] h-[81.5px] shadow-md" src="../../src/assets/mainpage/logo-nike-data.png" alt="" />
                    <img className="w-[190px] h-[81.5px] shadow-md" src="../../src/assets/mainpage/logo-ralph-lauren-data.png" alt="" />
                    <img className="w-[190px] h-[81.5px] shadow-md" src="../../src/assets/mainpage/logo-tommyhilfiger-data.png" alt="" />
                    <img className="w-[190px] h-[81.5px] shadow-md" src="../../src/assets/mainpage/logo-whitestuff-data.png" alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <div className="bg-[url(../../src/assets/mainpage/sprit1.jpg)] w-[850px] h-[540px] mt-12"></div>
                    <div className=" relative bg-[url(../../src/assets/mainpage/sprit2.jpg)] w-[630px] h-[540px] mt-12">
                        <p className='absolute top-[60px] left-[20px] w-[168px] h-[57px] text-5xl font-bold text-left text-black '>EDITED</p>
                        <p className='absolute top-[120px] left-[20px] w-[380px] h-[55px] text-5xl font-bold text-left text-black '>THE STRIPES EDIT</p>
                        <p className="absolute top-[250px] left-[20px] w-[567px] h-[138px] text-2xl font-bold text-left text-black">It's true, there's nothing more timeless than the humble stripe.
                            From Breton tops to vertical rugs, this classic pattern is a given
                            in any wardrobe and living space.
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Brand