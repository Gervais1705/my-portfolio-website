import React from 'react';
import Img from '../assets/Willie.png'
import circle from '../assets/circle.png'
import me from '../assets/me.png'

const Home = () => {
    return (
        <div className='md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    {/* image & content */}
                    {/* text */}
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Gervais Yameogo</h1>
                        <p className='md:w-96'> designer, Front end developer, & Network & Cloud specialist. I create seamless web experiences for end-users.</p>
                        <div className='mt-5'>
                            <button className='btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>About me</button> 
                            <a href="https://drive.google.com/file/d/1YDvxoDGK2fBe1x55J1ZWxl2wN85BwHlp/view?usp=drive_link" target="_blank" className='btn outline py-1.5 px-6 rounded border-none ml-5 text-white '>Download Cv</a>

                        </div>
                    </div>
                    {/* img */}
                    <div className='order-first md:order-last relative'>
                        <img src={me} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;
