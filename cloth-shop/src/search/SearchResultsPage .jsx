import React from 'react';
import { useSearch } from './Searchcontext';
import { Link} from "react-router-dom";

function SearchResultsPage() {
  const { searchResult } = useSearch();
  return (
    <>
      {searchResult.length > 0 ? (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {searchResult.map((product, index) => (

                // <div >
                <Link key={`${product.id}-${index}`} to={`/${product.category}show1/${product.id}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75 shadow-slate-500"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                  <div className='d-flex justify-content-evenly w-62'>
                    <div style={{ backgroundColor: product.color }} className='mt-2 w-5 h-5 rounded-full'> </div>
                    <div style={{ backgroundColor: product.color2 }} className='mt-2 w-5 h-5 rounded-full'> </div>
                    <div style={{ backgroundColor: product.color3 }} className='mt-2 w-5 h-5 rounded-full'> </div>
                    <div style={{ backgroundColor: product.color4 }} className='mt-2 w-5 h-5 rounded-full'> </div>
                  </div>

                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='h-auto w-full position-relative'>
          <img className='w-8/12 h-8/12 m-auto opacity-80' src="../../src/assets/not found/_1681007d-0824-4929-b5a0-6b87b3506dcd.jpg" alt="" />
          <p className=' position-absolute  left-[40%] top-[65%] text-white font-extrabold text-3xl shadow-sm shadow-black'>No results found!!!!</p>
        </div>
      )}
    </>
  );
}

export default SearchResultsPage;
