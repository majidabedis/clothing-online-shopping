import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { DNA } from 'react-loader-spinner'
import { useParams } from 'react-router-dom';
import { useProduct } from '../../productcontext.jsx/Productcontext.jsx'
import { useBasket } from '../../../src/basket/Basketcontext.jsx'
//****************************************************************************************** */

const reviews = { href: '#', average: 3, totalCount: 124 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Childshow1() {
  const { loading } = useProduct()
  const { childData } = useProduct()
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState([])
  const [selectedSize, setSelectedSize] = useState([])
  useEffect(() => {
    if (childData && childData.length > 0) {
      const selectedItem = childData.find(item =>
        item.id === parseInt(id));
      if (selectedItem) {
        setSelectedColor(selectedItem.colors[2].name);
        setSelectedSize(selectedItem.sizes[1].name);
       

      }
    }
  }, [id])
  // console.log(selectedColor)
  // console.log(selectedSize)
  const content = useBasket()
  const addhandler = () => {
    const selectedProduct = childData.find(item => item.id === parseInt(id));
    content.dispatch({ type: 'ADD', payload: selectedProduct })
    console.log(content.state.cart)
  }
  return (
    <>
      {loading ? (
        <div className='flex justify-center'>
          <DNA
            visible={true}
            height="400"
            width="300"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          <DNA
            visible={true}
            height="400"
            width="300"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          <DNA
            visible={true}
            height="400"
            width="300"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )
        :
        (
          <div className="bg-white mt-20">
            {childData.map((item) => (
              item.id === parseInt(id) ? (
                <div key={item.id} className="pt-6">
                  <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                      {item.breadcrumbs.map((breadcrumb) => (
                        <li key={breadcrumb.id}>
                          <div className="flex items-center">
                            <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                              {breadcrumb.name}
                            </a>
                            <svg
                              width={16}
                              height={20}
                              viewBox="0 0 16 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-5 w-4 text-gray-300"
                            >
                              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                          </div>
                        </li>
                      ))}
                      <li className="text-sm">
                        <a href={item.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                          {item.name}
                        </a>
                      </li>
                    </ol>
                  </nav>

                  {/* Image gallery */}
                  <div className=" d-flex justify-evenly mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="h-fit w-fit hidden overflow-hidden lg:block shadow-2xl">
                      <img
                        src={item.images[0].src}
                        alt={item.images[0].alt}
                        className="h-fit w-fit object-cover object-center "
                      />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                      <div className="h-fit w-fit overflow-hidden shadow-2xl ">
                        <img
                          src={item.images[2].src}
                          alt={item.images[2].alt}
                          className="h-fit w-fit object-cover object-center "
                        />
                      </div>
                    </div>
                    <div className="h-fit w-fit lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden  shadow-2xl">
                      <img
                        src={item.images[3].src}
                        alt={item.images[3].alt}
                        className="h-fit w-fit object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* data info */}
                  <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{item.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                      <h2 className="sr-only">data information</h2>
                      <p className="text-3xl tracking-tight text-gray-900">{item.price}</p>

                      {/* Reviews */}
                      <div className="mt-6">
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{reviews.average} out of 5 stars</p>
                          <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {reviews.totalCount} reviews
                          </a>
                        </div>
                      </div>

                      <form className="mt-10">
                        {/* Colors */}
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 text-start">Color</h3>

                          <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {item.colors.map((color) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      active && checked ? 'ring ring-offset-1 ring-red-500' : '',
                                      !active && checked ? 'ring-2' : '',
                                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="span" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-8 w-8 rounded-full border border-black border-opacity-10'
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Sizes */}
                        <div className="mt-10">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">Size</h3>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              Size guide
                            </a>
                          </div>

                          <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                              {item.sizes.map((size) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      size.inStock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                      active ? 'ring-2 ring-indigo-500' : '',
                                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                      {size.inStock ? (
                                        <span
                                          className={classNames(
                                            active ? 'border' : 'border-2',
                                            checked ? 'border-indigo-500' : 'border-transparent',
                                            'pointer-events-none absolute -inset-px rounded-md'
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <span
                                          aria-hidden="true"
                                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                        >
                                          <svg
                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                          </svg>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <button
                          type="button"
                          onClick={addhandler}
                          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Add to bag
                        </button>
                      </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">

                      <div>
                        <h3 className="sr-only">Description</h3>

                        <div className="space-y-6">
                          <p className="text-base text-gray-900 text-left line-clamp-4">{item.description}</p>
                        </div>
                      </div>

                      <div className="mt-10">
                        <h3 className="text-md font-bold text-gray-900 text-left ">Highlights</h3>

                        <div className="mt-4">
                          <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                            {item.highlights.map((highlight) => (
                              <li key={highlight} className="text-gray-400 text-left list-disc">
                                <span className="text-gray-600 text-left">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-10">
                        <h2 className="text-sm  text-gray-900 text-start font-bold">Details</h2>
                        <div className="mt-4 space-y-6">
                          <p className="text-sm text-gray-600 text-start ">{item.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        )}
    </>
  )
}

export default Childshow1
