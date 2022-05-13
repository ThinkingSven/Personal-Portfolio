import React from "react";
import Project from "./Project";
import {motion} from "framer-motion"
import { FaHtml5, FaCss3, FaReact, FaGitAlt , FaFigma, FaNpm} from "react-icons/fa";
import { SiJavascript,  SiNextdotjs, SiTailwindcss, SiVisualstudio, SiMysql, SiFramer} from "react-icons/si";

function MainContent() {
  return (
    <div>
      <div className="flex">
      <h1 className="headspace">
        Hey, I'm <a>Sven!</a>
      </h1>
      <motion.h1
        className="grid place-content-center"
           animate={{
      rotate: [0, 20, 0, 20, 0, 20, 0 , 20,0, 20, 0, 20, 0, 20, 0 , 20,0, 20, 0, 20, 0, 20, 0 , 20,0, 20, 0, 20, 0, 20, 0 , 20,0, 20, 0, 20, 0, 20, 0 , 20,0, 20, 0, 20, 0, 20, 0 , 20,0, 20, 0, 20, 0, 20, 0 , 20,0, 20, 0, 20, 0, 20, 0 , 20,0, 20, 0, 20, 0, 20, 0 , 20,0, 20, 0, 20, 0, 20, 0 , 20,],
      transition: { duration: 25 }
    }}
    
      >🚀</motion.h1>
      </div>
      <div></div>
      <p className="pspace">
        I'm a 16 year web old developer and student from <a>Austria</a> who enjoys
        learning languages and frameworks to <a>build Cool Sh*t</a> with them. I
        sometimes post my work publicly on <a>Github</a> & you can contact me at{" "}
        <a>Twitter</a> & <a>Discord</a>
      </p>
      <h2 className="headspace">Technologies</h2>
      <p>
        I use a wide range of tools to tackle each hurdle in the most efficient
        manner possible. I really love working with containersation, especially
        Docker; it's proven to be a reliable bit of kit for both production and
        development environments.
      </p>
      <div className=" pspace flex gap-7 mt-5 mb-5 border px-2 border-gray-700 p-3 rounded-lg place-content-center">
        <FaHtml5 className=" w-6 h-6" />
        <FaCss3 className=" w-6 h-6"/>
        <SiJavascript className=" w-6 h-6"/>
        <FaReact className=" w-6 h-6"/>
        <SiNextdotjs className=" w-6 h-6"/>
        <FaGitAlt className=" w-6 h-6"/>
        <SiTailwindcss className=" w-6 h-6"/>
        <SiVisualstudio className=" w-6 h-6"/>
        <FaFigma className=" w-6 h-6"/>
        <SiMysql className=" w-6 h-6"/>
        <SiFramer className=" w-6 h-6"/>
        <FaNpm className=" w-6 h-6"/>
      </div>
      <h2 className="headspace">Projects</h2>
      <p className=" headspace">Right now, I am working on <a>QuoteLeaf</a> which is a minimal speed typing test which is open source. Here are my most <a> recent projects</a> on github:</p>
      <div className="grid grid-cols-2 gap-2 cursor-pointer">
      <Project title="QuoteLeaf" description="a minimalist Typing test with themes & word settings" color={"bg-yellow-400"} language="JavaScript"/>
      <Project title="TheCodeMag" description="TheCodeMag is a magazine for developers with the newest facts" color="bg-blue-400" language="ReactJS"/>
      <Project title="Personal Portfolio" description="Finally built my personal portfolio, first time using failwind" color="bg-red-400" language="HTML"/>
      <Project title="Sweep" description="Sweep is a single group chat room where everyone is able to type" color="bg-blue-400" language="ReactJS"/>
  
      </div>
    </div>
  );
}

export default MainContent;
