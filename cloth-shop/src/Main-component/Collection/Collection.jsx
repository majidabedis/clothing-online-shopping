
import { Link, Outlet } from "react-router-dom";
function Collection() {
  return (
    <>
      <Link to='/CollectionPage'>
        <div className="w-full h-24 my-4 p-[4vh] shado-lg bg-[#e8d8c9] ">
          <span className=" mt-5 font-bold text-4xl leading-3 text-left mr-6 ">NEW COLLECTION</span>
          <button className=" w-36 h-12 rounded-md  bg-black text-white mb-5  text-lg font-bold ">SHOP NOW </button>
        </div>
      </Link>
      <div className="flex w-full h-fit justify-evenly">
        <div className='bg-[url(../../../src/assets/mainpage/coll11.jpg)] w-[450px] h-[596px] bg-cover  shadow-xl shadow-black/35 relative rounded-md'>
          <p className="w-fit  font-bold text-left absolute top-[450px] left-[40px] bg-black/10 backdrop-blur-md  text-3xl text-white p-2 rounded-md ">A New Season Style</p>
          <a className="w-fit  font-bold text-left absolute top-[520px] left-[40px] bg-black/10 backdrop-blur-md  text-xl text-white p-2 rounded-md " href="#"> Shop Now</a>
        </div>
        <div className='bg-[url(../../../src/assets/mainpage/coll2.jpg)] w-[450px] h-[596px] bg-cover shadow-xl shadow-black/35 relative rounded-md'>
          <p className="w-fit  font-bold text-left absolute top-[450px] left-[40px] bg-black/10 backdrop-blur-md  text-3xl text-white p-2 rounded-md "> What's New for girl </p>
          <a className="w-fit  font-bold text-left absolute top-[520px] left-[40px] bg-black/10 backdrop-blur-md  text-xl text-white p-2 rounded-md " href="#">Shop Now</a>
        </div>
        <div className='bg-[url(../../../src/assets/mainpage/coll3.jpg)] w-[450px] h-[596px] bg-cover shadow-xl shadow-black/35 relative rounded-md'>
          <p className="w-fit  font-bold text-left absolute top-[450px] left-[40px] bg-black/10 backdrop-blur-md  text-3xl text-white p-2 rounded-md ">Blazer & Smart Jackets</p>
          <a className="w-fit  font-bold text-left absolute top-[520px] left-[40px] bg-black/10 backdrop-blur-md  text-xl text-white p-2 rounded-md " href="#">Shop Now</a>
        </div>
      </div>
    </>
  )
}

export default Collection