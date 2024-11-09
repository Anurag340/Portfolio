
import { motion,useScroll } from "framer-motion"
import LocomotiveScroll from 'locomotive-scroll';
import Tiles from "./Tiles"
import MiniCards from "./MiniCards"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Projects = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const [pos,setpos] = useState(0);
  const [projects,setprojects] = useState([]);
  const [images,setimages] = useState([
    {
      id:1,
      url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/04/62691e3f5b03b475709242.png",
      top:'14vh',
      left:'30vw',
      isActive:false 
    },
    {
      id:2,
      url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/03/622c82f8a80bf768794737.png",
      top:'24vh',
      left:'45vw',
      isActive:false 
    },
    {
      id:3,
      url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/10/63450e17d43c9156312604.png",
      top:'30vh',
      left:'35vw',
      isActive:false 
    },
    {
      id:4,
      url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/10/6357d93c253ca036595692.png",
      top:'39vh',
      left:'50vw',
      isActive:false 
    },
    {
      id:5,
      url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/09/632d9d79ccb3e938410704.png",
      top:'49vh',
      left:'40vw',
      isActive:false 
    }])

  const mover = (val)=>{
    setpos(val*15);
  }

  useEffect(()=>{
      getprojects();
  },[]);

  const getprojects = () =>{
      axios.get('http://localhost/api/admin/').then((response)=>{
          setprojects(response.data);
      });
  };

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change",(latest)=>{
      function imagesShow(arr){
        setimages((prev)=>(
          prev.map((item,index)=>(
            arr.indexOf(index)=== -1 ? ({...item , isActive:false}) : ({...item ,isActive:true})
          ))
        ))
      }
  
      switch(Math.floor(latest*100)){
        case 0:
          imagesShow([])
          break;
        case 7:
          imagesShow([0])
          break;
        case 15:
          imagesShow([0,1])
          break;
        case 22:
          imagesShow([0,1,2])
          break;
        case 30:
          imagesShow([0,1,2,3])
          break;
        case 40:
          imagesShow([0,1,2,3,4])
          break;
      }
    })
    
    const navigate = useNavigate();

  

    const data = [{ description:"Brainwave is an AI Chatbot Integration service landing page . Equiped with modern UI and UX elevating customer experience. Built with React , Node , Tailwind.", title:"Brainwave",siteLink:"https://brainwave3.onrender.com",video:'public\\Videos\\weglotlikemagic-43.webm'},
      { description:"Obys Agency clone from awards.com . It’s a landingpage for providing digital web experience service. Tech used - HTML , CSS , JS , GSAP , Locomotive.js , Scroll Trigger", title:"Gypsy",siteLink:"https://gypsy.onrender.com",video:"public\\Videos\\ttr-43.webm"},
      {description:"A portfolio website showcasing candidate’s intro , work , projects. Tech used - React , Tailwind-CSS , Locomotive.js , Framer Motion", title:"Zeni",siteLink:"https://zeni2.onrender.com/",video:"public\\Videos\\botify-43.webm"}]




  return (
    <div className="bg-zinc-950 h-screen w-screen ">
          <div onClick={()=>navigate(-1)} className="z-50 text-zinc-400 absolute top-[5vh] left-[5vh] flex items-center gap-[0.5vw] hover:scale-[1.1] hover:cursor-pointer hover:text-white duration-300">
            <IoIosArrowBack/>
            <p>Back</p>
          </div>
        <div className="h-full w-full relative object-cover object-center ">
          {images.map((item)=>(
              <MiniCards key={item.id} obj={item}/>
          ))}
            <img className="h-full w-full" src="https://images.prismic.io/arock-website-2023/ZiB1vPPdc1huKl4s_AROCK_Look_12.jpg?fm=webp&q=100&fit=crop" alt="" />

        </div>
        <div className=" w-full flex  flex-col bg-zinc-950 relative">
          {data.map((item , index)=>(
            <Tiles data={item} mover={mover} count={index} key={index} />
          ))}

          <div className=" pointer-events-none w-full h-full absolute">
              <motion.div initial={{y:pos}} animate={{y:pos + `rem`}} transition={{ease:[0.76,0,0.24,1] , duration:.6}} className=" h-[15rem] w-[24vw] absolute left-[30%] overflow-hidden">
                  {data.map((item,index )=>{
                    return(<motion.div key={index} transition={{ease:[0.76,0,0.24,1] , duration:.5}} animate={{y:-pos + `rem`}} className=" h-full w-full">
                            <video autoPlay muted loop src={item.video}></video>
                           </motion.div>)
                  })}
              </motion.div>
          </div>
        </div>
      
    </div>
  )
}

export default Projects


