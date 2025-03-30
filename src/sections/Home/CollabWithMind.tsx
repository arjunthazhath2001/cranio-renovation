import carnio from '@/assets/cranio-logo.png';
import mind from '@/assets/mindathomelogo.png';
import Image from 'next/image';
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300","500","900"],
  subsets: ["latin"],
});

function CollabWithMind() {
    return (
      <section className="bg-[linear-gradient(to_top,#ffe566,white,white,white)] flex flex-col items-center justify-center pb-20 px-8">
  
        <div className="container px-4">
          <div className='flex gap-3 justify-center items-center'>
            <Image src={carnio} className='rounded-xl' alt="carn-logo"/>
            <h1 className={`${inter.className} text-2xl text-shadow font-bold`}>X</h1>
            <Image src={mind} className='rounded-xl' alt="mat-logo"/>
          </div>

          <div className='overflow-hidden mx-auto md:px-12 rounded-lg'>
          <video
              src="/PatientDoctor.mp4"
              loop autoPlay
              className="w-full h-auto rounded-2xl mt-6"
            />
            
          </div>
          <p className={`${inter.className} text-sm mt-4 tracking-tight leading-[30px]`}>In partnership with<span className='font-semibold'> the Johns Hopkins MIND</span> at Home program, we provide<span className='font-semibold'> free care navigation for dementia patients</span>, funded by Medicare’s GUIDE Model. Doctors maintain clinical control, while we offer 24/7 support between visits—improving patient outcomes and unlocking substantial<span className='font-semibold'> new revenue for each doctor.</span> </p>
        
        </div>
  
      </section>
      
    )
  }
  
  export default CollabWithMind