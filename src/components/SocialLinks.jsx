import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
//import { BsPersonLinesFill } from 'react-icons/bs';


const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <div className='flex flex-row justify-between w-full items-center pl-3 font-semibold'>
         <div>LinkedIn </div>   <div><FaLinkedin size={30}/> </div> 
        </div>
      ),
      href: "https://www.linkedin.com/in/om-mani/",
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <div className='flex flex-row justify-between w-full items-center pl-3 font-semibold'>
         Github <span><FaGithub size={30}/></span>
         </div>
      ),
      href: "https://github.com/OmMani002"
    },
    {
      id: 3,
      child: (
        <div className='flex flex-row justify-between w-full items-center  pl-3 font-semibold'>
         Mail  <span><HiOutlineMail size={30}/></span>
         </div>
      ),
      href: 'mailto:maniom002@gmail.com',
    },
    {
      id: 4,
      child: (
        <div className='flex flex-row justify-between w-full items-center  pl-3 font-semibold'>
         Resume  <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
      </span>
         </div>
      ),
      href: "public/resume.pdf",
      style: 'rounded-br-md',
      downlaod: true,
    }
  ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li key={link.id} 
          className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 hover:bg-sky-500 hover:animate-pulse hover:transition-transform  hover:delay-500  " +
          " "+ link.style}>
          <a href={link.href} 
          className="flex justify-between items-center w-full text-white"
          download={link.download}
          target="_blank"
          rel="noreferrer"
          >
            {link.child}
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;



