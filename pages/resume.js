import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import resume from '../styles/images/resume.svg';

export default function Profile() {
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
      <div className="max-w-screen h-screen flex flex-col items-center">
        <h1 className="lg:text-8x lw-screen text-center md:text-8xl sm:text-8xl text-stone-100 pt-48 pb-3">Resume</h1>
        
        <h1 className="text-lg text-blue-400 bottom-0 pt-2  hover:text-blue-300 duration-500">Download</h1>
        <div className="relative m-8">
              <Image 
                src={resume} 
                alt="SVG Image" 
                width={350}
                height={300}
                class="opacity-300"
              />
            </div>
      </div>
      
    </div>
    <div className="bg-zinc-200 max-w-screen  flex flex-row  pb-8">
          <div className="text-black  bg-zinc-200 mt-4 ml-28 pr-5 text-xs ">
            
              <h1 class="mb-1 ">Home</h1>
              <div class="border-b border-gray-400 mb-1"></div>
              <Nav.Link
                href="/resume"
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
                  <Nav.Link
                        href="/interloop_demo"
                        target="_blank"
                >
              <p class="mb-1">Demo</p>
              </Nav.Link>
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
