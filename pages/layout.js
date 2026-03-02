import Nav from '../components/Common/Nav/Nav';

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col select-none font-circular pt-14 overflow-hidden">
      <Nav />
      {/* Main content – constrained height so it scrolls when content overflows */}
      <main className="main-scroll flex-1 min-h-0 w-full bg-DeepNightBlack relative overflow-y-auto overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
