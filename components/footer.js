import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import interloop from '../styles/images/interloop1.svg';
import health from '../styles/images/health.svg';
import memoji from '../styles/images/comp.svg';
import bye from '../styles/images/bye.svg';
import light from '../styles/images/light.svg';
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
    <div>
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
