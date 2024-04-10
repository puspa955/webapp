import About from './components/About';
import Footer from './components/Footer';
import Research from './components/Research';
import Mentors from './components/Mentors';
import Team from './components/Team';
import LandingPageNav from './components/LandingPageNav';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <main>
        <div className='absolute right-0 z-50'>
          <LandingPageNav
            section1Id="section1"
            section2Id="section2"
            section3Id="section3"
            section4Id="section4"
            section5Id="section5"
          />
        </div>
        <div
          className='flex h-screen w-full relative z-[0]'
          style={{
            backgroundImage: 'url("/images/bg.jpg")', // Replace with the path to your background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>

        </div>
        <div className='absolute inset-0 bg-black opacity-50 z-[0] '></div>
        
       
        <div className='text-white absolute top-[60vh] left-[10vw]'>
          <h1 className='text-4xl font-extrabold tracking-[1px]'>
            Introducing GPT Nepal: Your Personal <br /> Guide To Visit Nepal
          </h1>
        </div>
        <div className='absolute bottom-[12vh] left-[10vw]'>
          <button className='flex border cursor-pointer border-white text-white rounded-md px-8 py-2 font-bold hover:text-black hover:bg-white'>
            <Link href="/auth">
              <span className="flex items-center">
                Try GPTNepal
                <span className="text-2xl pl-1"><MdArrowForward /></span>
              </span>
            </Link>
          </button>
        </div>
      </main>
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
  );
}
