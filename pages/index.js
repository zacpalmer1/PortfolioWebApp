import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import swooshy from '../styles/images/cleanSwoosh.svg';
import curveTop from '../styles/images/big.svg';
import interloop from '../styles/images/interloop1.svg';
import health from '../styles/images/health.svg';
import interloopmain from '../styles/images/interloop.svg';
import Image from 'next/legacy/image';
import Nav from 'react-bootstrap/Nav';


export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    document.documentElement.style.height = `${height}px`;
    document.body.style.height = `${height}px`;
    if (status === 'authenticated') {
    } else if (status === 'unauthenticated') {
      void router.push('/login');
    }
  },[height, router, status]);

  return (
  <div className="w-screen h-screen flex flex-col lg:flex-col bg-black">      
    <div className="mx-auto">
      <div className="max-w-screen mx-auto flex flex-col items-center">
        <h2 className="lg:text-8xlw-screen text-center md:text-8xl sm:text-8xl text-stone-100 pt-48 pb-3">Zac Palmer</h2>
        <p className="text-2xl  text-stone-100 bottom-0 ">Software Engineer</p>
        <p className="text-md text-blue-400 bottom-0 pt-3 pb-1">Resume</p>
        <div className="relative flex flex-row bottom-0">
              <Image 
                src={interloopmain} 
                alt="SVG Image" 
                width={720}
                height={390}
                objectFit="contain"
                class="opacity-300"
              />
              <Image 
                src={health} 
                alt="SVG Image" 
                width={300}
                height={200}
                objectFit="contain"
                class="opacity-300"
              />
            </div>
            
      </div>
    </div>
      <div className="bg-white max-w-screen flex flex-col items-center">
        <p className="text-4xl text-black pt-12 ">About</p>
        <div className="flex flex-row ">
              <div className="w-96 m-10 pb-16">
                <p className="text-black pt-4 text-2xl text-center pb-8">Experience</p>
                <p className="text-black text-md">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis.</p>
              </div>
              <div className="w-96 m-10">
                <p className="text-black pt-4 text-2xl text-center pb-8">Interests</p>
                <p className="text-black text-md">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis.</p>
              </div>
              </div>
          </div>
          <div className="bg-black max-w-screen flex flex-col  items-center pb-8">
        <p className="lg:text-4xl md:text-3xl sm:text-3xl text-white hover:text-green-400 duration-500 pt-12 ">Projects</p>
        <div className="flex flex-row m-10">
            <div className="relative bottom-0 left-0 m-10">
              <Image 
                src={interloop} 
                alt="SVG Image" 
                width={520}
                height={380}
                objectFit="contain"
                class="opacity-300"
              />
            </div>
              <div className="w-96 pb-20 m-10">
                <p className="text-white pt-4 text-2xl">Interloop Scoreboard</p>
                <div className="flex flex-row mt-3 mb-2">
                <p className="text-blue-400  text-md pr-10">Demo</p>
                <p className="text-blue-400 text-md pb-2">Code</p>
                </div>
                <p className="text-white text-md">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. The end result was a highly-functional web application.</p>
              </div>
            
            </div>
          </div>
        </div>
        
  );
}
