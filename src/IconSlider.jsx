import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { motion,useAnimation } from "framer-motion";
import { useEffect } from "react";

const IconSlider = () => {

  const control = useAnimation()

  useEffect(()=>{
    control.start({
      x:"-50%",
      transition:{
        duration : 20,
        repeat: Infinity,
        ease:"linear"
      }

    })
  },[])
  const startAnimation = ()=>{
    control.start({
      x:"-50%",
      transition:{
        duration : 20,
        repeat: Infinity,
        ease:"linear"
      }

    })
  }

    const icons = [
        <FaReact className="w-12 h-12 text-sky-400 hover:scale-120 transition" />,
        <FaHtml5 className="w-12 h-12 text-orange-500 hover:scale-120 transition" />,
        <FaCss3Alt className="w-12 h-12 text-blue-500 hover:scale-120 transition" />,
        <FaJs className="w-12 h-12 text-yellow-400 hover:scale-120 transition" />,
        <FaJava className="w-12 h-12 text-red-500 hover:scale-120 transition" />,
        <FaGitAlt className="w-12 h-12 text-orange-600 hover:scale-120 transition" />,
      <SiIntellijidea className="w-12 h-12 text-pink-500 hover:scale-120 transition" />,
      <SiSpring className="w-12 h-12 text-green-500 hover:scale-120 transition" />,
    ]


  return (
    <div className={`overflow-hidden w-full `}
    onMouseEnter={()=>control.stop()}
    onMouseLeave={startAnimation}
    >
        <motion.div
  className="flex gap-10 py-4 w-max"
  animate={control}
>

        {icons.map((icon,index)=><div key={index}>
            {icon}
        </div>)}
        {
            icons.map((icon,index)=><div key={`dup-${index}`}>
                {icon}
            </div>)
        }
        </motion.div>
    </div>
  )
}

export default IconSlider