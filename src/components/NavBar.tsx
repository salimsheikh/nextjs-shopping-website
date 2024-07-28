import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link href="#" className='navbar_link relative'>HOME</Link>
                <Link href="#" className='navbar_link relative'>CATEGORIES</Link>
                <Link href="#" className='navbar_link relative'>MEN'S</Link>
                <Link href="#" className='navbar_link relative'>WOMEN'S</Link>
                <Link href="#" className='navbar_link relative'>JEWELRY</Link>
                <Link href="#" className='navbar_link relative'>PERFUME</Link>
                <Link href="#" className='navbar_link relative'>BLOG</Link>
                <Link href="#" className='navbar_link relative'>HOT OFFERS</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar