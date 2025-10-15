import { FaHandshake } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Nav = () => {
    const router = useRouter();

    const linkBase = "px-3 py-1.5 text-xs tracking-widest uppercase transition rounded-md";
    const getActive = (path) => router.pathname === path ? "text-ElectricBlue font-semibold" : "text-SilverGray hover:text-Black";

    return (
        <>
            {/* Top navbar (desktop) */}
            <div className="hidden lg:block fixed top-0 left-0 right-0 z-50">
                <nav className="h-14 bg-DeepNightBlack border-b border-DarkGray flex items-center justify-center gap-4">
                    <Link href="/" className={`${linkBase} ${getActive('/')}`}>Home</Link>
                    <Link href="/about" className={`${linkBase} ${getActive('/about')}`}>About</Link>
                    <Link href="/education" className={`${linkBase} ${getActive('/education')}`}>Education</Link>
                    <Link href="/experience" className={`${linkBase} ${getActive('/experience')}`}>Experience</Link>
                    <Link href="/projects" className={`${linkBase} ${getActive('/projects')}`}>Projects</Link>
                    <Link href="/contact" className={`${linkBase} ${getActive('/contact')}`}>Contact</Link>
                </nav>
            </div>

            {/* Bottom navbar (mobile) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
                <nav className="h-14 bg-DeepNightBlack border-t border-DarkGray flex items-center justify-between px-4">
                    <Link href="/" className={`flex flex-col items-center justify-center text-[10px] ${getActive('/')}`}>
                        <span className="text-base"><ImHome /></span>
                        <span>Home</span>
                    </Link>
                    <Link href="/about" className={`flex flex-col items-center justify-center text-[10px] ${getActive('/about')}`}>
                        <span className="text-base"><HiIdentification /></span>
                        <span>About</span>
                    </Link>
                    <Link href="/education" className={`flex flex-col items-center justify-center text-[10px] ${getActive('/education')}`}>
                        <span className="text-base"><HiIdentification /></span>
                        <span>Education</span>
                    </Link>
                    <Link href="/experience" className={`flex flex-col items-center justify-center text-[10px] ${getActive('/experience')}`}>
                        <span className="text-base"><MdWork /></span>
                        <span>Experience</span>
                    </Link>
                    <Link href="/projects" className={`flex flex-col items-center justify-center text-[10px] ${getActive('/projects')}`}>
                        <span className="text-base"><MdWork /></span>
                        <span>Projects</span>
                    </Link>
                    <Link href="/contact" className={`flex flex-col items-center justify-center text-[10px] ${getActive('/contact')}`}>
                        <span className="text-base"><FaHandshake /></span>
                        <span>Contact</span>
                    </Link>
                </nav>
            </div>
        </>

    )
}

export default Nav