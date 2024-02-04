import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// import Comments from '../../components/Comments';
// import CommentsForm from '../../components/CommentsForm';

import { getPostDetails, getPosts } from '../../services';

import PostDetail from '../../components/PostDetail';




const PostDetails = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    console.log(post);



    return (
        <>
            <Navbar />
            <PostDetail post={post} />
            {/* <Comments /> */}
            {/* <CommentsForm /> */}
            <Footer />
        </>
    )




}

export default PostDetails





// Fetch data at build time
export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        },
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}