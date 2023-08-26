import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-5 py-2.5'>Sign Up</button>
                </div>
                <div className='md:hidden' onClick={handleNav}>
                    {!nav ? <MenuIcon className='w-5'/>:<XIcon className='w-5'/>}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 [&>*]:border-b-2 [&>*]:border-zinc-300'}>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platforms</li>
                <li>Pricing</li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-6 py-3 mb-4'>Sign In</button>
                    <button className='px-6 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar