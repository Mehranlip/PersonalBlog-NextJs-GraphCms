import React from 'react'
import Navbar from '../components/Navbar'

function Landing() {
    return (
        <>
            <div className='Landing '>
                <Navbar />
                <div class=" grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center max-w-screen-xl  mx-auto p-4  ">
                    <div class="p-2 order-last md:order-first">
                        <h1 className='title_landing'>
                            Submit your article
                            and join our network!
                        </h1>
                        <p className='paragraph_landing mt-5 md:mt-11'>
                            Don't waste time and join our community of authors! Share your knowledge
                            and experience with our readers and get the opportunity to become
                            a part of our professional and creative team!
                        </p>
                        <button className='button_landing px-5 py-2 mt-5 md:mt-11 '>
                            Submit Article
                        </button>
                    </div>
                    <div class=" landing_image p-2 order-first md:order-last ">

                    </div>
                </div>


            </div>

        </>
    )
}

export default Landing