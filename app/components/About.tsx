"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Lumbini from "../../public/images/lumbini.jpg";

import Typewriter from './Typewritting';


const About = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='h-[74vh] w-[80vw] gap-8 p-4 m-4 flex  bg-black'>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='w-[40vw] p-4'>
                    <h1 className='text-2xl text-[#fcce1c] font-extrabold pt-14 text-center'>GPT Nepal</h1>
                    <p className='pt-2 text-justify text-gray-500 text-sm '>
                        We are excited to introduce GPT Nepal, a pioneering AI companion designed to serve as your personal guide during your journey through Nepal. Our mission is to provide comprehensive assistance to travelers by offering a wealth of knowledge about Nepals attractions and amenities.
                        With the advent of GPT Nepal, tourists can now confidently embark on solo adventures and significantly reduce expenses typically associated with hiring traditional tour guides.
                    </p>
                    <div className='text-[#da123c] font-bold text-opacity-80 text-justify'>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className='text-[#fcce1c] font-extrabold text-xl mt-10 text-center '>Facts About Nepal</motion.h1>
                        <Typewriter />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='bg-gray-100 rounded-md shadow-md w-[28vw] h-[48vh] p-4 relative mt-12 justify-items-end'>
                    <Image src={Lumbini} alt='lumbini' className='h-[380px] w-[500px] object-cover' />
                </motion.div>
            </div>
            
            </div>
        
    )
}

export default About;
