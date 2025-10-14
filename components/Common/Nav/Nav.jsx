import { ImCross } from 'react-icons/im'
import { FaHandshake } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'
import DrawerLayout from '../DrawerLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Nav = ({ setIsOpen, isOpen }) => {
    const router = useRouter();

    const linkBase = "px-3 py-1.5 text-xs tracking-widest uppercase transition rounded-md";
    const getActive = (path) => router.asPath === path ? "text-ElectricBlue" : "text-SilverGray hover:text-Snow";

    return (
        <>
            {/* Top navbar (desktop) */}
            <div className="hidden lg:block fixed top-0 left-0 right-0 z-50">
                <nav className="h-14 bg-DeepNightBlack border-b border-DarkGray flex items-center justify-center gap-4">
                    <Link href="/" className={`${linkBase} text-SilverGray hover:text-Snow`}>Online Portfolio</Link>
                    <Link href="/background" className={`${linkBase} ${getActive('/background')}`}>About Me</Link>
                    <Link href="/background" className={`${linkBase} ${getActive('/background')}`}>Education</Link>
                    <Link href="/background" className={`${linkBase} ${getActive('/background')}`}>Experience</Link>
                    <Link href="/portfolio" className={`${linkBase} ${getActive('/portfolio')}`}>Project</Link>
                    <Link href="/contact" className={`${linkBase} text-ElectricBlue`}>Contact</Link>
                </nav>
            </div>

            {/* Mobile drawer menu */}
            <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
                <div className="absolute z-50 flex flex-col justify-center lg:inset-y-0  -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] bg-DeepNightBlack shadow-2xl md:rounded-xl md:overflow-hidden">
                    <div onClick={e => setIsOpen(false)} className="flex text-LightGray absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-EveningBlack">
                        <ImCross />
                    </div>
                    <div className="flex flex-col gap-y-2 px-6 w-full transition">
                        <NavItem setIsOpen={setIsOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={'Home'} />
                        <NavItem setIsOpen={setIsOpen} NavRoute={'/contact'} NavIcon={<FaHandshake />} NavText={'Contact'} />
                        <NavItem setIsOpen={setIsOpen} NavRoute={'/background'} NavIcon={<HiIdentification />} NavText={'Background'} />
                        <NavItem setIsOpen={setIsOpen} NavRoute={'/portfolio'} NavIcon={<MdWork />} NavText={'Projects'} />
                    </div>
                </div>
            </DrawerLayout>
        </>

    )
}

export default Nav