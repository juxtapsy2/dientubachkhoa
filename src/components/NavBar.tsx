'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/logos/logo.png';
import { NAVLINKS } from '@/lib/constants';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-8 z-50 bg-white backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Logo"
            className="object-contain aspect-auto w-[40px] transition-transform duration-200 hover:scale-150"
          />
          <span className="md:text-lg font-semibold text-blue-950 transition-transform duration-200 hover:scale-110">Trung Tâm Điện Tử Bách Khoa</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base text-blue-900 font-medium">
          {NAVLINKS.map((navlink) => (
            <li key={navlink.to}>
              <a href={navlink.to} className="transition-transform duration-200 hover:scale-110 hover:text-blue-600">{navlink.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-900" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-md shadow-none px-4 py-2 space-y-2 text-center text-blue-900 font-semibold">
          {NAVLINKS.map((navlink) => (
            <a 
              href={navlink.to} 
              key={navlink.to} 
              className="block hover:text-blue-600 transition-transform duration-200 hover:-translate-y-0.5"
              onClick={() => setMenuOpen(false)}
            >
              {navlink.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
