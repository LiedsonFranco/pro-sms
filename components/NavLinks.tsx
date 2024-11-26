'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = ({href, name,}:{href:string, name:string}) => {
    const pathname = usePathname()
  return (
    <Link href={href} className={`group flex flex-col ${href == pathname ? 'text-primary' : 'text-secundary'}`}>
        {name}
        <div className={`group-hover:w-full w-0 h-[1px] duration-150 transition-all ease-in-out ${href == pathname ? 'bg-primary' : 'bg-secundary'}`}></div>
    </Link>
  )
}

export default NavLinks