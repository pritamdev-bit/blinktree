"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathname = usePathname();

  const [show, setShow] = useState(true);
  const showNavbar = ["/", "/generate", "/about", "/contact"].includes(pathname);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setShow(false);
      } else {
        // scrolling up → show
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  return (
    <>
      {showNavbar && <nav className={`flex items-center sm:justify-between justify-center fixed top-0 w-[90vw] right-[5vw] bg-white pl-12 pr-4 py-3 rounded-full transition-transform duration-500 ${show ? "translate-y-12" : "-translate-y-[110%]"
        }`}>
        <div className="logo flex items-center sm:gap-12 gap-5">
          <Link href="/">
            <div className="flex items-center">
              <span className="text-2xl font-semibold sm:block hidden">BlinkTree</span>
              <svg fill="none" height="24" width="24" viewBox="0 0 28 28" className="animation_rotate__CpTPZ"><clipPath id="a"><path d="m0 0h28v28h-28z"></path></clipPath><g clipPath="url(#a)"><path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z" fill="black"></path></g></svg>
            </div>
          </Link>
          <ul className="flex gap-1 items-center">
            <Link href="/generate"><li className='hover:bg-[#E9E9E9] px-4 py-2 rounded-lg'>Generate</li>
            </Link>
            <Link href="/about"><li className='hover:bg-[#E9E9E9] px-4 py-2 rounded-lg'>About</li>
            </Link>
            <Link href="/contact"><li className='hover:bg-[#E9E9E9] px-4 py-2 rounded-lg'>Contact</li>
            </Link>
          </ul>
        </div>

        <div className='lg:block hidden'>
          <ul className="flex gap-2 items-center">
            <Link href="https://www.itspritam.space/" target="_blank"><li className='bg-[#e9e9e9bc] hover:bg-[#E9E9E9] text-lg rounded-lg px-6 py-4'>More Apps</li>
            </Link>
            <Link href="https://github.com/pritamdev-bit/blinktree" target="_blank"><li className='bg-black hover:bg-[#000000d5] rounded-full text-lg text-white px-8 py-4'>GitHub</li>
            </Link>
          </ul>
        </div>
      </nav>
      }
    </>
  )
}

export default Navbar
