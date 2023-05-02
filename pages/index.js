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
    
  <div className="w-screen h-screen flex flex-col lg:flex-col bg-black">      
    <div className="h-screen w-screen">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
    
      <div className="max-w-screen h-screen mx-auto flex flex-col items-center">
        <h1 className="lg:text-8x lw-screen text-center md:text-8xl sm:text-8xl text-stone-100 pt-48 pb-3">Zac Palmer</h1>
        <p className="text-2xl  text-stone-100 bottom-0 ">Software Engineer</p>
        <Nav.Link
          href="/resume"
          >
        <h1 className="text-lg text-blue-400 bottom-0 pt-2  hover:text-blue-300 duration-500">Resume </h1>
        </Nav.Link>
        <div className="relative m-16">
              <Image 
                src={memoji} 
                alt="SVG Image" 
                width={450}
                height={300}
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
        <div className="flex flex-row md:flex-col sm:flex-col">
            <div className="w-96 m-10 pb-24">
              <h1 className="text-black pt-2 text-2xl text-center pb-8">Experience</h1>
              <p className="text-black text-md">As a software engineer with a passion for problem-solving, I graduated from the College of Charleston with a Bachelors degree in Computer Science. Throughout my academic journey, I gained experience in a range of programming languages and frameworks, including Java, Kotlin, Javascript, and Swift. <br></br><br></br> I am always eager to learn new skills and take on new challenges. I am well-versed in Agile development and documentation, and I possess excellent interpersonal skills, enabling me to communicate effectively with colleagues and stakeholders. </p>
            </div>
            <div className="w-96 m-10 pb-16">
              <h1 className="text-black pt-2 text-2xl text-center pb-8">Interests</h1>
              <p className="text-black text-md ">I have always been fascinated by the creative aspect of software development. My passion for mobile application development, both for IOS and Android, has led me to explore the possibilities of creating engaging and visually appealing applications that offer seamless user experiences. I enjoy using tools like Figma to create mockups and bring my design ideas to life. <br></br> <br></br> In addition to coding, I love exploring the world of animation and 3D rendering using Blender. It allows me to express my creativity in a unique way and provides an opportunity to experiment with various designs and styles.</p>
            </div>
          </div>
        </div>
        <div className="bg-black w-screen h-screen flex flex-col items-center pb-8">
          <h1 className="text-4xl text-white pt-12 ">Projects</h1>
            <Nav.Link
              href="https://github.com/zacpalmer1"
              target="_blank"
            >
              <h1 className="text-lg text-blue-400 pt-2 hover:text-green-400 duration-500">Github</h1>
            </Nav.Link>
          <div className="flex flex-row md:flex-col m-8">
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
              <div className="w-96 pb-20 m-10 ">
                <h1 className="text-white pt-4 text-2xl">Interloop Scoreboard</h1>
                  <div className="flex flex-row items-center">
                  <Nav.Link
                        href="/interloop_demo"
                >
                    <h1 className="text-blue-400  text-md pr-10 hover:text-blue-300 duration-500">Demo </h1>
                    </Nav.Link>
                      <Nav.Link
                        href="https://github.com/TrentVarnes/interloop"
                        target="_blank"
                >
                <h1 className="text-blue-400 text-md pr-10 hover:text-green-400 duration-500">Code </h1>
                </Nav.Link>
                <div className="h-auto flex justify-center items-center">
                <Nav.Link
                  href="https://nextjs.org/"
                  target="_blank"
                >
                  <i class="devicon-nextjs-original pr-10 fontNext text-slate-100 hover:text-blue-400 duration-500" ></i>
                  </Nav.Link>
                  <Nav.Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  <i class="devicon-tailwindcss-original-wordmark pr-10 fontTail text-slate-100 hover:text-blue-400 duration-500"></i>
                  </Nav.Link>
                  </div>
                </div>
                <p className="text-white text-md ">As part of a development team, we had the opportunity to collaborate with Interloop to build a dashboard web application that allows users to view company and individual data with ease. To achieve this, we utilized Next.js and TailwindCSS to create an intuitive and visually appealing front-end design. Additionally, we integrated PowerBI, a powerful data analytics tool, to enable real-time data visualization and analysis. </p>
              </div>
              

            </div>
          </div>
          <div className="bg-white w-screen max-w-screen flex flex-col items-center">
        <h1 className="text-4xl text-black pt-12 ">Thank you for visiting! </h1>
        <Nav.Link
          href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
          target="_blank"
          >
        <h1 className="text-lg text-blue-400 pt-2 hover:text-blue-600 duration-500">Contact</h1>
        </Nav.Link>
        <div className="relative mt-5 mb-0bottom-0">
              <Image 
                src={bye} 
                alt="SVG Image" 
                width={350}
                height={250}
                objectFit="contain"
                class="opacity-300 bottom-0"
              />
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
