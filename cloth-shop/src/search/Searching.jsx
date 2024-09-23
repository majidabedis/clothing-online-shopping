
import { useState, useEffect } from 'react';
import { Popover, Transition, PopoverButton, PopoverPanel } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearch } from './Searchcontext';
import { useNavigate,useLocation } from 'react-router-dom';

function Searching() {
  const { searchItem, handleChange } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(location.pathname);


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setPreviousPath(location.pathname); 
    navigate('/search');
  };

 
  useEffect(() => {
    if (searchItem.length === 0) {
      navigate(previousPath); 
    }
  }, [searchItem,previousPath]);

  return (
    <div className="flex lg:ml-6">
      <Popover>
        <PopoverButton
          className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
        <Transition
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            anchor="bottom"
            className="divide-y divide-black/5 rounded-xl bg-white/1 text-sm/6 [--anchor-gap:var(--spacing-5)]"
          >
            <div className="p-3 w-auto h-auto position-relative">
              <form onSubmit={handleSearchSubmit}>
                <input
                  onChange={handleChange}
                  className='m-auto pl-20 w-80 h-10 rounded border-2 border-blue-950/30 bg-white/85'
                  type="text" placeholder=" Search Product & Model"
                  name="search"
                 />
                <button className="h-6 w-6 text-gray-500 position-absolute top-6 left-7 hover:scale-110" aria-hidden="true" type="submit"><MagnifyingGlassIcon className="h-6 w-6 text-gray-500 " /></button>
              </form>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Searching;
