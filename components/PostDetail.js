import React from 'react';
import moment from 'moment';

import { CopyBlock, github } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <div class="flex justify-center items-center mt-5 mb-5">
                        <img
                            key={index}
                            alt={obj.title}
                            height={obj.height}
                            width={obj.width}
                            src={obj.src}
                        />
                    </div>
                );
            case 'code-block':
                return (
                    <div className="overflow-x-auto mb-5 mt-5 rounded-lg">
                        <CopyBlock key={index} text={modifiedText} language="jsx" showLineNumbers={true} theme={github} CodeBlock icon={<FaCopy />} onCopy={() => copy(modifiedText)} />
                    </div>
                )
            default:
                return modifiedText;
        }
    };

    return (
        <>
            <div className=" rounded-lg p-5 pb-12 mb-8">
                <div class=" order-last md:order-first relative ">
                    <div className='grid items-end cover-gradient p-5 '>
                        <div>
                            <div>
                                <h1 className="mb-4  title-post-detail">{post.title}</h1>
                            </div>
                            <div className='mt-3 flex flex-row md:gap-10 gap-4'>
                                <div className="flex items-center mb-0 md:mb-3 w-full">
                                    <div className=" md:flex  justify-center lg:mb-0 lg:w-auto mr-8 ">
                                        <img
                                            alt={post.author.name}
                                            height="30px"
                                            width="30px"
                                            className="align-middle rounded-full inline"
                                            src={post.author.photo.url}
                                        />
                                        <span className="inline align-middle ml-2  text-lg name-account-post-detail">{post.author.name}</span>
                                    </div>
                                    <div className="font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="align-middle text-lg name-account-post-detail">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={post.featuredImgae.url} alt="" className="object-cover  cover-chosen cover-post-details   w-full   shadow-lg" />
                </div>
                <div className="relative  mb-6 p-3">
                </div>
                <div className="px-4 lg:px-0 paragraph-post-details max-w-screen-xl items-center mx-auto ">
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>

        </>
    );
};

export default PostDetail;