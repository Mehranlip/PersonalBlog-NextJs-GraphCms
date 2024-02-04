import React from 'react'

import Link from 'next/link'


function Navbar() {
    return (
        <>
            <header>
                <title>Mehranlip Blog</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.css" rel="stylesheet" />
            </header>
            <nav className=" w-full z-20 top-0 left-0 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center Main_logo">
                        Mehranlip Blog
                    </Link>
                    <div className="flex md:order-2">
                        <button className='mr-4'>
                            <Link href="/search/result">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </Link>
                        </button>
                        <button type="button" className="button_navbar hidden md:block focus:ring-4 px-4 py-2 text-center mr-3 md:mr-0"><Link href="https://app.hygraph.com">
                            Get Articler
                        </Link> </button>

                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <Link href="/" className="Navbar_link block py-2 pl-3 pr-4 hover:opacity-70 " >Home page</Link>
                            </li>
                            <li>
                                <Link href="/category/news" className=" Navbar_link block py-2 pl-3 pr-4 hover:opacity-70">News</Link>
                            </li>
                            <li>
                                <Link href="https://mehranlip.ir/" className=" Navbar_link block py-2 pl-3 pr-4 hover:opacity-70">About us</Link>
                            </li>
                            <li>
                                <Link href="#" className=" Navbar_link block py-2 pl-3 pr-4 hover:opacity-70">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>


    )
}

export default Navbar