import Nav from '../components/Common/Nav/Nav';

export default function Layout({ children }) {
  return (
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular lg:pt-16`}>
      <div className='flex relative h-full gap-x-3'>
        {/* main content */}
        <div className='w-full h-auto shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar pb-16 lg:pb-0'>
          {children}
        </div>
        <Nav />
      </div>
    </div>
  );
}
