import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import interloop from '../styles/images/interloop1.svg';
import health from '../styles/images/health.svg';
import memoji from '../styles/images/memoji1.svg';
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
      <div className="max-w-screen h-screen mx-auto flex flex-col items-center">
        <h1 className="lg:text-8x lw-screen text-center md:text-8xl sm:text-8xl text-stone-100 pt-48 pb-3">Zac Palmer</h1>
        <p className="text-2xl  text-stone-100 bottom-0 ">Software Engineer</p>
        <h1 className="text-lg text-blue-400 bottom-0 pt-2  hover:text-blue-300 duration-500">Resume </h1>
        <div className="relative m-10">
              <Image 
                src={memoji} 
                alt="SVG Image" 
                width={520}
                height={380}
                objectFit="contain"
                class="opacity-300"
              />
            </div>
      </div>
    </div>
      <div className="bg-white w-screen max-w-screen flex flex-col items-center">
        <h1 className="text-4xl text-black pt-12 ">About</h1>
        <Nav.Link
          href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
          target="_blank"
          >
        <h1 className="text-lg text-blue-400 pt-2 hover:text-blue-600 duration-500">LinkedIn  </h1>
        </Nav.Link>
        <div className="flex flex-row ">
              <div className="w-96 m-10 pb-16">
                <h1 className="text-black pt-2 text-2xl text-center pb-8">Experience</h1>
                <p className="text-black text-md">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. </p>
              </div>
              <div className="w-96 m-10 pb-16">
                <h1 className="text-black pt-2 text-2xl text-center pb-8">Interests</h1>
                <p className="text-black text-md ">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis.</p>
              </div>
              </div>
          </div>
          <div className="bg-black w-screen h-screen flex flex-col  items-center pb-8">
        <h1 className="text-4xl text-white pt-12 ">Projects</h1>
        <Nav.Link
          href="https://github.com/zacpalmer1"
          target="_blank"
          >
        <h1 className="text-lg text-blue-400 pt-2 hover:text-green-300 duration-500">Github  </h1>
        </Nav.Link>
        <div className="flex flex-row m-8">
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
              <div className="w-96 pb-20 m-10">
                <h1 className="text-white pt-4 text-2xl">Interloop Scoreboard</h1>
                <div className="flex flex-row mt-3 mb-2">
                <h1 className="text-blue-400  text-md pr-10 hover:text-blue-300 duration-500">Demo </h1>
                <Nav.Link
                  href="https://github.com/TrentVarnes/interloop"
                  target="_blank"
                >
                <h1 className="text-blue-400 text-md pb-2 hover:text-blue-300 duration-500">Code </h1>
                </Nav.Link>
                </div>
                <p className="text-white text-md ">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. The end result was a highly-functional web application.</p>
              </div>
            
            </div>
          </div>
          <div className="bg-zinc-200 max-w-screen  flex flex-row  pb-8">
          <div className="text-black  bg-zinc-200 mt-4 ml-28 pr-5 text-xs ">
            
              <h1 class="mb-1 ">Home</h1>
              <div class="border-b border-gray-400 mb-1"></div>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-2">Resume</p>
              </Nav.Link>
              <h1 class="mb-1 ">About</h1>
              <div class="border-b border-gray-400"></div>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-2">LinkedIn</p>
              </Nav.Link>
              </div>
              <div className="text-black mt-4 pl-2  pr-5 text-xs">
              <h1 class="mb-1 ">Projects</h1>
              <div class="border-b border-gray-400 mb-1"></div>
              <p class="mb-1">Interloop </p>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-1">Demo</p>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-1">Code</p>
              </Nav.Link>
              <div class="border-b border-gray-400 mb-1"></div>
              <p class="mb-1">Golden</p>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-1">Code</p>
              </Nav.Link>
              </div>
              <div className="text-black mt-4 pl-2 pr-5 text-xs">
              <p class="mb-1 ">Student Health</p>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-1">Demo</p>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-1">Code</p>
              </Nav.Link>
              <div class="border-b border-gray-400 mb-1"></div>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-1">This Website</p>
              </Nav.Link>
              <p class="mb-1">About</p>
              <p class="mb-1">Code</p>
              </div>
              <div className="text-black mt-4 pl-2 pr-5 text-xs">
              <h1 class="mb-1">Contact</h1>
              <div class="border-b border-gray-400 mb-1"></div>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-1">Email</p>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-1">LinkedIn</p>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
                target="_blank"
                >
              <p class="mb-1">Github</p>
              </Nav.Link>
              </div>
          </div>
            <div class="bg-zinc-200 border-box max-w-screen text-xs flex flex-col pt-2 pl-28 pb-8">
            <div class="bg-zinc-200 border-box border-b w-96 border-gray-400 "></div>
            <div className="pt-2">
              <p>Copyright © 2023 Zac Palmer. All rights reserved.</p>
              </div>
            </div>
            </div>
        
  );
}
