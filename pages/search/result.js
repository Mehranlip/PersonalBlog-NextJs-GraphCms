import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Categories from './../../components/Categories';


import { getPosts } from '../../services';

function result() {
    const [search, setsearch] = useState("")
    const [posts, setposts] = useState([])


    const handleSearch = async () => {
        try {
            console.log('Search:', search);

            const fetchedPosts = await getPosts(search);
            setposts(fetchedPosts)

            console.log('Fetched Posts:', posts);
        } catch (error) {
            console.log(error);
            setposts([]); // Clear the posts array
        }
    };


    return (
        <>
            <Navbar />
            <Categories />
            <div className='max-w-screen-xl  justify-between mx-auto min-h-screen p-5'>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch()
                }}>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <input onChange={(e) => setsearch(e.target.value)} type="search" id="default-search" class="  block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Search</button>
                    </div>
                </form>

                {/* post cart */}

                <div className='grid grid-cols-1  md:grid-cols-4 gap-6 mt-5 p-5'>

                    {
                        posts.filter((item) => search === "" || item.node.title.toLowerCase().includes(search.toLowerCase())).map((item) => (
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
                {/* end psot cat  */}

            </div>

            <Footer />
        </>
    )
}

export default result