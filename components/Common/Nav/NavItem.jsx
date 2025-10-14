import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'


const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }) => {
    const router = useRouter();
    const isActive = router.pathname === `${NavRoute}`;
    const className = isActive ? "rounded-xl !text-ElectricBlue bg-MidNightBlack/60 border border-DarkGray/60 font-semibold" : '';

    return (
        <Link
            onClick={(e) => setIsOpen(false)}
            href={NavRoute}
            className={`${className} transition flex items-center px-2 hover:bg-MidNightBlack/40 text-SilverGray hover:text-Black rounded-xl  py-1.5 font-semibold space-x-4 text-base`}
        >
            {NavIcon}
            <span>{NavText}</span>
        </Link>
    )
}

export default NavItem