
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useBasket } from '../basket/Basketcontext';
import Badge from '@mui/material/Badge';
export default function MyModal() {
    const [isOpen, setIsOpen] = useState(false)
    const { state: { cart, totalprice }, dispatch } = useBasket();
    

    const incrementQty = (itemId) => {
        dispatch({ type: 'INCREASE_QUANTITY', id: itemId });
    };

    const decrementQty = (itemId) => {
        dispatch({ type: 'DECREASE_QUANTITY', id: itemId });
    };

    const itemCount = cart.reduce((count, item) => count + item.quantity, 0);


    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <div className="relative " >
                {itemCount >= 0 && (
                    <Badge className='z-0' badgeContent={itemCount} color="primary">
                        <ShoppingBagIcon onClick={open} className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                    </Badge>

                )}
            </div>

            <Transition appear show={isOpen}>
                <Dialog as="div"  className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true"  onClose={close} __demoMode>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-white/90 border-gray-300 border-2 p-6 ">
                                    <DialogTitle as="h3" className="w-full rounded-full">
                                        <ShoppingBagIcon className="h-10 w-10 m-auto  text-gray-900 group-hover:text-gray-500 " />
                                    </DialogTitle>
                                    <div>
                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {cart.map((item) => (
                                                        <li key={item.id} className="flex py-6">
                                                            <div className="h-auto w-auto flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={item.images[0].src}
                                                                    alt={item.images[0].alt}
                                                                    className="h-32 w-24"
                                                                />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href={item.href}>{item.name}</a>
                                                                        </h3>
                                                                        <p className="ml-4">{item.price}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">{item.colors[2].name}</p>
                                                                </div>
                                                                <div className=" w-full flex flex-1 items-end justify-between text-sm">
                                                                    <div className="w-5/12 flex items-center justify-evenly mb-3">
                                                                        <button
                                                                            type="button"
                                                                            className="text-white text-xl bg-black/50 px-3 rounded-full"
                                                                            onClick={() => decrementQty(item.id)}
                                                                        >
                                                                            -
                                                                        </button>
                                                                        <span className="mx-2 text-lg ">{item.quantity}</span>
                                                                        <button
                                                                            type="button"
                                                                            className="text-white text-xl bg-black/50 px-3 rounded-full"
                                                                            onClick={() => incrementQty(item.id)}
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <button
                                                                            type="button"
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                            onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>??</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">  Shipping and taxes calculated at checkout. </p>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center rounded-md border border-transparent  bg-black/50 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                            >
                                                Check Out
                                            </a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or{' '}
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={close}
                                        >
                                            close
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
