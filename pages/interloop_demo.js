import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import interloop from '../styles/images/interloop1.svg';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/legacy/image';
import Nav from 'react-bootstrap/Nav';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
    } else if (status === 'unauthenticated') {
      void router.push('/login');
    }
  });
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-col bg-black">      
    <div className="h-screen w-screen">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      <div className="max-w-screen h-screen mx-auto flex flex-col items-center">
        <h1 className="lg:text-8x lw-screen text-center md:text-8xl sm:text-8xl text-stone-100 pt-48 pb-3">Interloop Scoreboard</h1>
        <Nav.Link
          href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
          target="_blank"
          >
        <h1 className="text-lg text-blue-400 bottom-0 pt-2  hover:text-green-400 duration-500">Code</h1>
        </Nav.Link>
        <div className="relative bottom-0  left-0 m-10">
              <Image 
                src={interloop} 
                alt="SVG Image" 
                width={820}
                height={480}
                objectFit="contain"
                class="opacity-300"
              />
            </div>
      </div>
      <div className="bg-white w-screen  flex flex-col items-center pb-8">
          <h1 className="text-4xl text-black pt-12 ">Sign up</h1>
            <Nav.Link
              href="https://github.com/zacpalmer1"
              target="_blank"
            >
              
            </Nav.Link>
          <div className="flex flex-row md:flex-col m-8">
          <div className="w-96 pb-20 mt-16 ">
                <p className="text-black text-md ">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. </p>
              </div>
            <div className="relative m-10">
              <Image 
                src={interloop} 
                alt="SVG Image" 
                width={520}
                height={380}
                objectFit="contain"
                class="opacity-300"
              
              />
            </div>
              
              

            </div>
          </div>
          <div className="bg-black w-screen  flex flex-col items-center ">
          <h1 className="text-4xl text-white pt-12 ">Login</h1>
            <Nav.Link
              href="https://github.com/zacpalmer1"
              target="_blank"
            >
              
            </Nav.Link>
          <div className="flex flex-row md:flex-col  m-8">
            <div className="relative bottom-0  left-0 m-10">
              <Image 
                src={interloop} 
                alt="SVG Image" 
                width={520}
                height={380}
                objectFit="contain"
                class="opacity-300"
              
              />
            </div>
              <div className="w-96 pb-20 mt-16 ">
                <p className="text-white text-md ">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. </p>
              </div>
              

            </div>
          </div>
          <div className="bg-white w-screen  flex flex-col items-center ">
          <h1 className="text-4xl text-black pt-12 ">Home</h1>
            <Nav.Link
              href="https://github.com/zacpalmer1"
              target="_blank"
            >
              
            </Nav.Link>
            
          <div className="flex flex-row md:flex-col  m-8">
          <div className="w-96 pb-20 mt-16 ">
                <p className="text-black text-md ">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. </p>
              </div>
            <div className="relative bottom-0  left-0 m-10">
              <Image 
                src={interloop} 
                alt="SVG Image" 
                width={520}
                height={380}
                objectFit="contain"
                class="opacity-300"
              
              />
            </div>
              
              

            </div>
          </div>
    </div>
    
    </div>
  );
}


