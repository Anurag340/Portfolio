import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";


const Tiles = ({data , mover, count}) => {

  return (
    <div className="h-[15rem] w-full flex items-center justify-between pl-[2vw] pr-[2vw] hover:bg-zinc-900 duration-700 ">
        <div onMouseEnter={()=>{mover(count)}} className="w-[40%] h-full pl-[8vw] font-semibold text-2xl flex justify-start items-center hover:cursor-pointer ">{data.title}</div>
        <div className="w-[50%] flex flex-col items-start justify-around pl-[8vw] pr-[8vw] gap-[3vh] ">
            <p>{data.description}</p>
            <a href={data.siteLink} className="p-[0.5vh] pl-[0.9vh] rounded-2xl flex justify-center items-center gap-[0.6vw] hover:bg-zinc-600 scale-[1.1] duration-300">Get Started<IoIosArrowRoundForward className=" text-black text-2xl" /></a >
        </div>
      
    </div>
  )
}

export default Tiles
