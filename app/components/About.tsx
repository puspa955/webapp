"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Lumbini from "../../public/images/lumbini.jpg";
import Patan from "../../public/images/patan.jpg";
import map from "../../public/images/nepal-55265453.png";
import Chitwan from "../../public/images/chitwan.jpg";
import annapurna from "../../public/images/annapurna.jpeg";
import Everest from "../../public/images/Everest.jpg";
import Typewriter from './Typewritting';

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='h-[74vh] w-[80vw] gap-8 p-4 m-4 flex justify-center'>
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
                    className='bg-gray-100 rounded-md shadow-md w-[28vw] h-[48vh] p-4 relative mt-12'>
                    <Image src={Lumbini} alt='lumbini' className='h-[380px] w-[500px] object-cover' />
                </motion.div>
            </div>
            {/* About Nepal */}
            <div className="bg-cover bg-center h-[140vh] w-[100vw] relative" style={{ backgroundImage: "url('https://ntb.gov.np/storage/website/landscape2-44237cb6.jpeg')" }}>
                <div className="absolute w-full h-full bg-white opacity-70"></div>
                <div className='absolute right-4 top-[40vh] m-4'>
                    <Image src={map} alt='lumbini' className='h-[400px] w-[45vw] object-fill' />
                </div>
                <div className='absolute w-[32vw] mt-10 lg:ml-16 z-10'>
                    <h1 className='text-2xl font-extrabold py-10 text-blue-950'>Top Destinations in Nepal</h1>
                    <div className="grid grid-cols-2 h-[80vh] gap-6">
                        <div className='group h-96 w-96 [perspective:1000px]'>
                            <div className='bg-gray-200 relative h-[54vh] w-[15vw] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                                <div className='absolute inset-0'>
                                    <Image src={Everest} alt='Everest' className='h-full w-full rounded-xl object-cover shadow-black/40 py-3 px-3' />
                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <div className='absolute top-0 left-0 bg-black h-full opacity-70 rounded-xl text-center pt-28 px-6 z-10'>
                                        <h1 className='text-[#da123c] pb-2 text-lg font-extrabold'>Everest</h1>
                                        <p className='text-sm font-light text-[#fcce1c]'>Climb Everest if you want to stand on top of the world, or do the extremely popular Everest Base Camp Trek to enter a strange world of ice and snow.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group h-96 w-96 gap-2 [perspective:1000px]'>
                            <div className='bg-gray-200 relative h-[54vh] w-[30vw] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                                <div className='absolute inset-0'>
                                    <Image src={Patan} alt='Patan' className='h-full w-full rounded-xl object-cover shadow-black/40 py-3 px-3' />
                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <div className='absolute top-0 left-0 bg-black h-full opacity-70 rounded-xl text-center pt-28 px-6 z-10'>
                                        <h1 className='text-[#da123c] text-lg pb-2 font-extrabold'>Kathmandu</h1>
                                        <p className='text-sm font-light text-[#fcce1c]'>Kathmandu, the largest city of Nepal, is the political as well as cultural capital of the country. Kathmandu is a city where ancient traditions rub shoulders with the latest technological advances.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group h-96 w-96 [perspective:1000px]'>
                            <div className='bg-gray-200 relative h-[48vh] w-[30vw] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                                <div className='absolute inset-0'>
                                    <Image src={Chitwan} alt='Chitwan' className='h-full w-full rounded-xl object-cover shadow-black/40 py-3 px-3' />
                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <div className='absolute top-0 left-0 bg-black h-full opacity-70 rounded-xl text-center pt-28 px-6 font-extrabold z-10'>
                                        <h1 className='text-[#da123c] text-lg font-extrabold pb-2'>Chitwan</h1>
                                        <p className='text-sm font-light text-[#fcce1c]'>Nestled in the foothills of the Himalayas, Chitwan National Park is a treasure trove of biodiversity and a jewel in Nepals crown. Established in 1973, it holds the distinction of being the countrys first national park and was inscribed as a UNESCO World Heritage Site in 1984.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group h-96 w-60 pl-56 [perspective:1000px]'>
                            <div className='bg-gray-200 relative h-[48vh] w-[15vw] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                                <div className='absolute inset-0'>
                                    <Image src={annapurna} alt='Annapurna' className='h-full w-full rounded-xl object-cover shadow-black/40 py-3 px-3' />
                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <div className='absolute top-0 left-0 bg-black h-full opacity-70 rounded-xl text-center pt-16 px-6 font- z-10'>
                                        <h1 className='text-[#da123c] text-lg font-extrabold pb-2'>Annapurna</h1>
                                        <p className='text-sm font-light text-[#fcce1c]'>Nestled amidst the majestic peaks of the Annapurna range in Nepal, Annapurna Base Camp, ABC is a trek that beckons adventure seekers from around the globe. Often referred to as the gateway to the Himalayas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
