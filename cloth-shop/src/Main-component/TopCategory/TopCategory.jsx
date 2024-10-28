
function TopCategory() {
    return (
        <>
            <div className='d-flex justify-content-start m-4'>
                <p className='w-[347px] h-[43px] text-4xl font-bold text-left text-black'>Top Categories</p>
            </div>

            <div className="d-flex justify-content-around mt-4 w-100">
                <div>
                    <div className='bg-[url(../../../src/assets/mainpage/men-categori.jpg)] bg-cover w-[480px] h-[562.5px] shadow-md mt-2'></div>
                    <p className='w-[132px] h-[29px] mx-auto my-4 text-3xl font-bold text-left text-black'>Mens</p>
                </div>
                <div >
                    <div className='bg-[url(../../../src/assets/mainpage/kids-categori.jpg)] bg-cover w-[480px] h-[562.5px] shadow-md mt-2'></div>
                    <p className='w-[132px] h-[29px] mx-auto my-4 text-3xl font-bold text-left text-black'>childrens</p>
                </div>
                <div>
                    <div className='bg-[url(../../../src/assets/mainpage/Woman-categori.jpg)] bg-cover w-[480px] h-[562.5px] shadow-2xl mt-2'></div>
                    <p className='w-[132px] h-[29px] mx-auto my-4 text-3xl font-bold text-left text-black'>Womens</p>
                </div>
            </div>
        </>
    )
}

export default TopCategory