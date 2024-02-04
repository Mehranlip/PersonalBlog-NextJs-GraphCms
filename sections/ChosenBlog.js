"use client"
import { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image'
import Link from 'next/link';



import CoverChosen from '../public/static-image/chosen-cover.png'
import account from "../public/icon/account.svg"
import comments from "../public/icon/comment.svg"
import date from "../public/icon/calendar.svg"

import account_dark from "../public/icon/dark-icon/account.svg"
import date_dark from "../public/icon/dark-icon/calendar.svg"

import { getPosts } from '../services'



function ChosenBlog() {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postData = await getPosts();
                setPosts(postData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);





    return (
        <div class=" grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center max-w-screen-xl  mx-auto p-4  ">
            <div class=" order-last md:order-first relative ">
                <div className='grid items-end cover-gradient p-5 '>
                    <div>
                        <div>
                            <h1 className='title-cover'>
                                For the Architecture & Interiors
                            </h1>
                            <p className='paragraph-cover mt-3'>
                                Los Angeles, United States <br />
                                Unknown device. And additional discription here.
                            </p>
                        </div>
                        <div className='mt-3 flex flex-row md:gap-10 gap-4'>
                            <div>
                                <Image src={account} width={20} height={20} className='inline ' />
                                <span className='name-account ml-2'>Mehran Asadi</span>
                            </div>
                            <div>
                                <Image src={comments} width={20} height={20} className='inline ' />
                                <span className='name-account ml-2'>9 Comments</span>
                            </div>
                            <div>
                                <Image src={date} width={20} height={20} className='inline ' />
                                <span className='name-account ml-2'>Apr 8, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={CoverChosen} className='cover-chosen' alt='cover' />
            </div>
            <div class="  p-2 order-first md:order-last ">
                {posts.slice(0, 3).map((item) => (
                    <div key={item.cursor} className='grid md:grid-cols-3 grid-cols-1 p-2 mt-3'>
                        <div className='col-span-1    '>
                            <Image src={item.node.featuredImgae.url} className='rounded-lg w-full h-full shadow-lg object-cover  ' width={300} height={280} alt='image-post' />
                        </div>
                        <div className=' col-span-2 p-3 col-start-1 '>
                            <Link href={`/post/${item.node.slug}`}>
                                <h1 className='title-chosen'>
                                    {item.node.title}
                                </h1>
                            </Link>
                            <p className='summary-shosen mt-3  '>
                                {item.node.excerpt}
                            </p>
                            <div className='mt-3 flex flex-row md:gap-10 gap-4'>
                                <div>
                                    <Image src={account_dark} width={20} height={20} className='inline ' alt="icon" />
                                    <span className=' name-account-chosen ml-2'>{item.node.author.name}</span>
                                </div>
                                <div>
                                    <Image src={date_dark} width={20} height={20} className='inline ' alt="icon" />
                                    <span className='name-account-chosen ml-2'>{moment(item.node.createdAt).format('MMM DD, YYYY')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default ChosenBlog

