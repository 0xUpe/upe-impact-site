"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import upeIcon from "@public/upe_favicon.png";
import { useActiveAccount } from "thirdweb/react"; 
import DisconnectButton from "@/components/DisconnectButton"; 

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeAccount = useActiveAccount(); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex flex-col items-center mb-10 md:mb-10 p-1 pt-7 w-full">
      <div className="flex justify-between items-center w-full px-4">
        <Link href="/">
          <Image src={upeIcon} alt="Upe Icon" width={45} height={45} />
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/about" className="text-white hover:text-upe-pink">ABOUT</Link>
          <Link href="/dashboard" className="text-white hover:text-upe-pink">DASHBOARD</Link>
          <Link href="/trophy-case" className="text-white hover:text-upe-pink">MY TROPHIES</Link>
          {activeAccount && <DisconnectButton />} 
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4 md:hidden">
          <Link href="/about" className="text-white hover:text-upe-pink" onClick={toggleMobileMenu}>ABOUT</Link>
          <Link href="/dashboard" className="text-white hover:text-upe-pink" onClick={toggleMobileMenu}>DASHBOARD</Link>
          <Link href="/trophy-case" className="text-white hover:text-upe-pink" onClick={toggleMobileMenu}>MY TROPHIES</Link>
          {activeAccount && <DisconnectButton />}
        </div>
      )}
    </nav>
  );
};

export default Nav;
