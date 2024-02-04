"use client"

import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../services';
import Loader from '../../components/Loader';
import Categories from '../../components/Categories';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';



const CategoryPost = ({ posts }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }


    return (
        <>
            <Navbar />
            <div className='max-w-screen-xl  mx-auto p-2'>
                <Categories />
                <div className='flex flex-row justify-between p-3'>
                    <div className='grid grid-cols-1  md:grid-cols-4 gap-6 mt-5 p-5'>
                        {
                            posts.map((item) => (
                                <Link href={`/post/${item.node.slug}`}>
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CategoryPost


// Fetch data at build time
export async function getStaticProps({ params }) {
    const posts = await getCategoryPost(params.slug);

    return {
        props: { posts },
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}