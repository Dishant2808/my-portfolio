import Nav from '../components/Common/Nav/Nav';
import { FaBars, FaMousePointer } from 'react-icons/fa';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular lg:pt-16`}>
      <div className='lg:hidden'>
        <div className=' bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-end px-2 lg:hidden relative'>
          <div className='icon flex items-center gap-x-2' onClick={(e) => setIsOpen(!isOpen)}>
            <span className='icon border-2 text-Green border-Green p-1 text-sm rounded-lg'>
              {' '}
              <FaBars />
            </span>
          </div>
        </div>
      </div>
      <div className='flex relative h-full gap-x-3'>
        {/* middle of screen */}
        <div className='w-full h-auto shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar'>{children}</div>

        {<Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}
