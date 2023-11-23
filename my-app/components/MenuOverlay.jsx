import React from 'react'
import Link from 'next/link'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'> 
      <li key={index}>
        <Link
            href={'/projects'}
            className="block py-2 pl-3 pr-4 text-dark font-semibold sm:text-xl md:p-0 hover:text-primary border-b border-primary">
            Projects

        </Link>
      </li>
      <li>
        <Link
            href={'/resume'}
            className="block py-2 pl-3 pr-4 text-dark font-semibold sm:text-xl md:p-0 hover:text-primary border-b border-primary">
                Resume

            </Link>
      </li>
    </ul>
  )
}

export default MenuOverlay