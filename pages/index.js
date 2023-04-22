import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import swooshy from '../styles/images/cleanSwoosh.svg';
import curveTop from '../styles/images/big.svg';
import curveBottom from '../styles/images/curveBottom.svg';
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
        //dsfjkasdfa kda fldj
        //asdfasd 
  <div className="w-screen h-screen flex flex-col lg:flex-col bg-stone-900">      
    <div className="mx-auto z-20 ">
      <div className="max-w-screen mx-auto flex flex-col z-20 items-center">
        <h2 className="lg:text-8xlw-screen text-center md:text-8xl sm:text-8xl text-stone-600 hover:text-blue-400 duration-500 pt-32 z-20">Zac Palmer</h2>
        <p className="lg:text-3xl md:text-3xl sm:text-3xl text-stone-600 hover:text-orange-400 duration-500 p-5  z-20">Software Engineer</p>
        <p className="lg:text-3xl md:text-3xl sm:text-3xl text-stone-600 hover:text-green-400 duration-500 pt-48 pb-3 z-20 ">Projects</p>
      </div>
    </div>
      <div className="max-w-screen md:flex-row mx-auto flex flex-row z-20 items-center">
        <Nav.Link
          href="/profile"
          >
          <div className=" bg-stone-600 hover:text-blue-400 text-stone-900 duration-300 shadow-[0_25px_50px_-3px_rgba(0,0,0,0.4)] hover:shadow-lg text-center w-40 h-18 m-4 rounded-[8px] z-20">
            <div className="p-1">
          <p className="m-3 text-xs">Interloop </p>
          </div>
          </div>
          </Nav.Link>
          <Nav.Link
          href="/dashboard"
          >
          <div className="bg-stone-600 shadow-[0_25px_50px_-3px_rgba(0,0,0,0.4)] hover:text-red-400 text-stone-900 duration-300 hover:shadow-lg text-center w-40 h-18 m-4 rounded-[8px] z-20">
            <div className=" p-1">
                <p className="m-3  text-xs">Health</p>
            </div>
          </div>
          </Nav.Link>
          <div className="max-w-screen md:flex-row mx-auto flex flex-row z-20 items-center">
        <Nav.Link
          href="/profile"
          >
          <div className=" bg-stone-600 shadow-[0_25px_50px_-3px_rgba(0,0,0,0.4)] hover:text-orange-400 text-stone-900  duration-300 hover:shadow-lg text-center w-40 h-18 m-4 rounded-[8px] z-20">
            <div className="p-1">
          <p className="m-3  text-xs">Golden</p>
          </div>
          </div>
          </Nav.Link>
          </div>
          <div className="max-w-screen md:flex-row mx-auto flex flex-row z-20 items-center">
        <Nav.Link
          href="/profile"
          >
          <div className=" bg-stone-600 shadow-[0_25px_50px_-3px_rgba(0,0,0,0.4)] hover:text-green-400 text-stone-900  duration-300 hover:shadow-lg text-center w-40 h-18 m-4 rounded-[8px] z-20">
            <div className="p-1">
          <p className="m-3  text-xs">Android</p>
          </div>
          </div>
          </Nav.Link>
          </div>
        </div>
  
        </div>
 
  );
}
