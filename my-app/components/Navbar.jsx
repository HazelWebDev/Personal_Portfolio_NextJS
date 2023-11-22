"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const navLinks = [
    // {
    //     title: "About",
    //     path: "#about",
    // },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Resume",
        path: "/resume",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-l1 bg-opacity-90 border-b-4 border-primary'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-3 py-3'>
        <Image className="" src="/FlowerLogo3.png" alt="FlowerLogo" width={75} height={75}/>

            <Link href="/" className="text-dark font-bold "><h3 className='font-bold text-2xl items-center'>Kristen&apos;s Portfolio</h3></Link>
           <div className=' mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-l1 text text-primary'><Bars3Icon className='h-5 w-5'/></button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-l1 text text-primary'><XMarkIcon className='h-5 w-5'/></button>
                )
            }
           </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-dark">
                    {navLinks.map((link, index) => (
                    <li className="text-dark" key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar