import About from './components/About';
import Footer from './components/Footer';
import Research from './components/Research';
import Mentors from './components/Mentors';
import Team from './components/Team';
import LandingPageNav from './components/LandingPageNav';
import Image from 'next/image';
import Background from '../public/images/bg.jpg'


import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';



export default function Home() {

  return (
    <>
      
        
        <div className='absolute right-0 left-0 z-10'>
          <LandingPageNav section1Id="section1" section2Id="section2" section3Id="section3" section4Id="section4" section5Id="section5" />
        </div>

        <div className='h-screen w-full'>
           <Image src={Background} alt='bg' className='h-[500px] w-full object-cover' />
           </div>
        {/* Background Overlay with Image */}
        <div className='absolute top-0 left-0 w-full h-screen bg-black opacity-50'></div>
        
        <div className='text-white absolute top-[60vh] left-[10vw] z-10'>
          <h1 className='text-4xl font-extrabold tracking-[1px]'>Introducing GPT Nepal: Your Personal <br /> Guide To Visit Nepal</h1>
        </div>

        <div className='absolute bottom-[12vh] left-[10vw] z-10'>
        <button className='flex border cursor-pointer border-white text-white rounded-md px-8 py-2 font-bold hover:text-black hover:bg-white'>
          <Link href="/auth">
                    <span className="flex items-center">
                      Try GPTNepal
                    <span className="text-2xl pl-1"><MdArrowOutward /></span>
                    </span>
          </Link>
        </button>
        </div>
       
       
      <div id="section1">
        <About />
      </div>

      <div id="section2">
        <Research />
      </div>

      <div id="section3">
        <Mentors />
      </div>

      <div id="section4">
        <Team />
      </div>

      <div id="section5">
        <Footer />
      </div>

    </>
  )
}
