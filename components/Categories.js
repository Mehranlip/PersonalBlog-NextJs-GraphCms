"use client"
import { useState, useEffect } from 'react';


import Link from 'next/link'

import { getCategories } from '../services';

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const catData = await getCategories()
                setCategories(catData)
            } catch (error) {
                console.log("Error fetching catedories", error);
            }
        }
        fetchCategories()
    }, [])


    return (
        <div className='max-w-screen-xl  mx-auto p-4 mt-5 mb-5 md:overflow-hidden overflow-y-auto hidden md:block'>
            <div className='flex flex-nowrap gap-10 md:gap-28  md:justify-center '>
                <span className='cat_main'>All Categories</span>
                {categories.map((item, index) => (
                    <div className='cat_title'>
                        <Link key={index} href={`/category/${item.slug}`}>
                            {item.name}
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Categories