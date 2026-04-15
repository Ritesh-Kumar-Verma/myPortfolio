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
      <FaReact className="p-2 w-15 h-15 text-gray-500 hover:bg-gradient-to-br hover:from-[#0483d3] hover:to-[#202d33] hover:shadow-[#5EB5EB] hover:shadow-2xl rounded-2xl hover:text-sky-500 hover:scale-120 transition" />,
      <FaHtml5 className="p-2 w-15 h-15 text-gray-500 hover:bg-gradient-to-br hover:from-[#aa6f23] hover:to-[#202d33] hover:shadow-[#d3bb36] hover:shadow-2xl rounded-2xl hover:text-orange-500 hover:scale-120 transition" />,
      <FaCss3Alt className="p-2 w-15 h-15 text-gray-500  hover:bg-gradient-to-br hover:from-[#0483d3] hover:to-[#202d33] hover:shadow-[#5EB5EB] hover:shadow-2xl rounded-2xl hover:text-blue-500 hover:scale-120 transition" />,
      <FaGitAlt className="p-2 w-15 h-15 text-gray-500  hover:bg-gradient-to-br hover:from-[#ec7e17] hover:to-[#202d33] hover:shadow-[#b97237] hover:shadow-2xl rounded-2xl hover:text-orange-600 hover:scale-120 transition" />,
      <FaJs className="p-2 w-15 h-15 text-gray-500  hover:bg-gradient-to-br hover:from-[#bbb933] hover:to-[#202d33] hover:shadow-[#bdd342] hover:shadow-2xl rounded-2xl hover:text-yellow-400 hover:scale-120 transition" />,
      <FaJava className="p-2 w-15 h-15 text-gray-500  hover:bg-gradient-to-br hover:from-[#b1402c] hover:to-[#202d33] hover:shadow-[#a02c2c] hover:shadow-2xl rounded-2xl hover:text-red-800 hover:scale-120 transition" />,
      <SiSpring className="p-2 w-15 h-15 text-gray-500  hover:bg-gradient-to-br hover:from-[#0483d3] hover:to-[#202d33] hover:shadow-[#5EB5EB] hover:shadow-2xl rounded-2xl hover:text-green-500 hover:scale-120 transition" />,
      <SiIntellijidea className="p-2 w-15 h-15 text-gray-500 hover:bg-gradient-to-br hover:from-[#db37aa] hover:to-[#202d33] hover:shadow-[#5EB5EB] hover:shadow-2xl rounded-2xl  hover:text-pink-500 hover:scale-120 transition" />,
    ]


  return (
    <div className={`overflow-hidden w-full p-4`}
    onMouseEnter={()=>control.stop()}
    onMouseLeave={startAnimation}
    >
        <motion.div
  className="flex gap-10 py-4 w-max"
  animate={control}
>

        {icons.map((icon,index)=><div key={index} className="hover:shadow " > 
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