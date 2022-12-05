import React from 'react'
import chukwudi from  '../assets/chukwudi.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Slide } from 'react-awesome-reveal'
import { faLink } from '@fortawesome/free-solid-svg-icons'


const About:React.FC = () => {

   

  return (
    <div className="flex flex-col gap-10 md:w-3/5 mx-auto px-5 md:px-0 lg:pt-10 pt-16">
        
    <span className="text-4xl text-white font-semibold font-headers flex gap-1">
    <span className="text-[#F78D26]">{`{`}</span> 
    About Me 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
    
    <div className="flex flex-col lg:flex-row w-full lg:gap-0 gap-14 content-start">
    <Slide damping={0.3} direction="left">
    <div className="flex flex-col gap-5 lg:w-4/5 ">
    <span className="text-gray-300 text-base font-para ">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Nullam sed congue nisl. Proin libero nibh, 
     posuere nec ante non, varius aliquet ipsum. Mauris dignissim neque risus, vitae 
     fermentum tortor consectetur eget. Quisque neque ante, pharetra at varius et, 
     commodo finibus diam. Proin sed blandit turpis
    </span>
    <span className="text-gray-300 text-base font-para ">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Nullam sed congue nisl. Proin libero nibh, 
     posuere nec ante non, varius aliquet ipsum. Mauris dignissim neque risus, vitae 
     fermentum tortor consectetur eget turpis.
    </span>
    <span className="flex items-center gap-3 text-white font-headers hover:scale-75 transition-all delay-100 duration-300 hover:text-[#F78D26] cursor-pointer w-36">
      View Github 
      <FontAwesomeIcon icon={faLink} />
      </span>
    <span className="text-gray-300 flex flex-col gap-3">
    <span className="font-headers">My skills:</span>
    <div className="flex flex-wrap gap-3 font-para lg:w-3/5 items-center">
    <span className="rounded-md bg-[#ffffff2f] text-white p-1 ">JavaScript</span>
    <span  className="rounded-md bg-[#ffffff2f] text-white p-1">React</span>
    <span  className="rounded-md bg-[#ffffff2f] text-white p-1">TypeScript</span>
    <span  className="rounded-md bg-[#ffffff2f] text-white p-1">Git</span>
    <span  className="rounded-md bg-[#ffffff2f] text-white p-1">Github</span>
    <span  className="rounded-md bg-[#ffffff2f] text-white p-1">Firebase</span>
    <span  className="rounded-md bg-[#ffffff2f] text-white p-1">Sass</span>
    <span  className="rounded-md bg-[#ffffff2f] text-white p-1">Html5</span>
    <span className="rounded-md bg-[#ffffff2f] text-white p-1" >Css3</span>
    <span  className="rounded-md bg-[#ffffff2f] text-white p-1">TailwindCss</span>
  </div>
    </span>
    </div>
    </Slide>
    <Slide damping={0.5}  direction="right">
    <div className=" mx-auto flex items-center p-3 bg-[#F78D26] w-64 h-64 lg:w-72 lg:h-72 rounded-md relative">
    <span className= 'hover:bottom-0 hover:right-0  transition-all delay-75 duration-300 ease-in-out flex items-center bg-no-repeat bg-cover w-64 h-64 lg:w-72 lg:h-72 rounded-md absolute bottom-3 right-3' style={{backgroundImage:`url(${chukwudi})`}}></span>
    </div>
    </Slide>
    
    </div>
    </div>
  )
}

export default About