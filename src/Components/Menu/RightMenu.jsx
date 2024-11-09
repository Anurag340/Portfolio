import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


import Work from '../Work/Work';
import About from '../About/About';
import Projects from '../Projects/Projects';

const RightMenu = () => {
  const navigate = useNavigate();

  return (
   
    <div className=" text-zinc-400 h-[100%] w-[40%] relative flex flex-col gap-[5vh] justify-center items-center">
        <IoCloseOutline onClick={()=>navigate(-1)} className='text-2xl absolute right-[2vw] hover:cursor-pointer hover:scale-[1.1] duration-300 top-[2vh]'/>

        <div className='flex flex-col gap-[3vh] font-black text-2xl text-center'>
        <Link className='hover:scale-[1.2] duration-200' to="/work">Work</Link>
        <Link className='hover:scale-[1.2] duration-200' to="/about">About</Link>
        <Link className='hover:scale-[1.2] duration-200' to="/projects">Projects</Link>
        </div>



        <div className='flex gap-[3vw] absolute bottom-[15vh]'>
            <Link to={"https://www.linkedin.com/in/anuragsamal/"} ><FaLinkedin/></Link>
            <Link to={"https://github.com/Anurag340?tab=overview&from=2023-12-01&to=2023-12-31"} ><FaGithubSquare/></Link>
            <Link to={"https://www.instagram.com/anuragsamal413/"} ><RiInstagramFill/></Link>
            <a href="mailto:anuragsamal123@gmail.com"><BiLogoGmail/></a>
        </div>



      
    </div>
  )
}

export default RightMenu
