import gsap from 'gsap';
import { useRef } from 'react';
import Gsap from '../../Utils/Gsap';
const CenterText = () => {

  const register = useRef(null);

  const timeline = Gsap();

  const handleAnimation = () => {
    timeline.from('.t', {
      opacity:0,
      duration: 1,
      stagger:0.1,
      ease:"bounce.in",
    });
  }

  const handleAnimation2 = ()=>{
    timeline.to('.t', {
      opacity:100
    });
  }



  return (
    <div  onMouseOver={handleAnimation} onMouseLeave={handleAnimation2} className="font-black text-[11vw]">
        <p ref={register}  ><span className='t' >A</span><span className='t'>N</span><span className='t' >U</span><span className='t'>R</span><span className='t' >A</span><span className='t' >G</span></p>

    </div>
  )
}

export default CenterText
