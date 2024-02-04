"use client"
import { useState, useEffect } from 'react';

import Image from 'next/image'

import { getPosts } from '../services'
import Link from 'next/link';



function SubmitedBlog() {
    const [posts, setPosts] = useState([]);
    const [displayCount, setDisplayCount] = useState(4);

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


    const handleShowMore = () => {
        setDisplayCount(displayCount + 4); // Increment the displayed post count by 4
    };



    return (
        <div className='max-w-screen-xl  mx-auto p-2'>
            <div className='flex flex-row justify-between p-3'>
                <span className='title-sub'>Submited Articles</span>
                <div className='text-right'>
                    <Image className='inline ' src="/icon/up-right-arrow 1.svg" width={50} height={50} />
                </div>
            </div>

            <div>

                <div className='grid grid-cols-1  md:grid-cols-4 gap-6 mt-5 p-5'>
                    {
                        posts.slice(0, displayCount).map((item) => (
                            <Link href={`/post/${item.node.slug}`} >
                                <div key={item.cursor} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img class="rounded-t-lg w-full h-full  object-cover image-cover-post " src={item.node.featuredImgae.url} width={300} height={200} alt="image post" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 title-post-sub">{item.node.title}</h5>
                                        </a>
                                        <p class="mb-3 paragraph-post-sub">{item.node.excerpt}</p>
                                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm  text-center button-post-sub">
                                            Read more
                                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </div>
                <div className='grid grid-rows-3'>
                    <button onClick={handleShowMore}>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm  text-center button-post-sub ">
                            Show More Post
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </button>
                </div>



            </div>
        </div >
    )
}

export default SubmitedBlog