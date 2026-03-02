import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ImHome,
  HiIdentification,
  MdWork,
  MdSchool,
  MdCode,
  FaHandshake,
} from 'react-icons';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { href: '/', label: 'Home', Icon: ImHome },
  { href: '/about', label: 'About', Icon: HiIdentification },
  { href: '/education', label: 'Education', Icon: MdSchool },
  { href: '/experience', label: 'Experience', Icon: MdWork },
  { href: '/projects', label: 'Projects', Icon: MdCode },
  { href: '/contact', label: 'Contact', Icon: FaHandshake },
];

const linkBase =
  'px-3 py-2 text-xs tracking-widest uppercase transition rounded-lg font-medium';

const Nav = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getActive = (path) =>
    router.pathname === path
      ? 'text-Green font-semibold bg-EveningBlack'
      : 'text-SilverGray hover:text-Snow hover:bg-EveningBlack';

  return (
    <>
      {/* Single top navbar – same structure on mobile and desktop */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-DeepNightBlack/95 backdrop-blur-sm border-b border-DarkGray shadow-sm">
        <div className="h-full container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* DT Logo / Home link */}
          <Link
            href="/"
            className="flex items-center gap-0 font-circular-bold text-2xl sm:text-3xl tracking-tight hover:opacity-90 transition-opacity"
            aria-label="Home"
          >
            <span className="text-Green font-bold">
              DT
            </span>
          </Link>

          {/* Desktop: horizontal links (same order as mobile menu) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${linkBase} ${getActive(href)}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile: hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-SilverGray hover:text-Green hover:bg-EveningBlack transition"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu overlay – same links, same order */}
        <div
          className={`md:hidden absolute top-14 left-0 right-0 bg-DeepNightBlack border-b border-DarkGray shadow-xl transition-all duration-300 ease-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col py-4 px-4 gap-1">
            {navLinks.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`${linkBase} ${getActive(href)} flex items-center gap-3 py-3`}
              >
                {Icon && <Icon className="w-5 h-5 shrink-0" />}
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
