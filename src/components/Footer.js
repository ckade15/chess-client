import React from "react";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";

function Footer(props) {
    
    if (props.type === 'mobile'){
        return (
            <footer className="bottom-0 fixed w-full bg-transparent bg-blue-100 p-3 flex flex-col place-items-center"> 
                <div className="flex place-content-evenly mt-1 w-full">
                    <a href="https://www.linkedin.com/in/christopher-kade-b9b2151a5/" className="soc-link text-blue-400 not-italic font-bold text-2xl rounded-full h-10 w-10 text-center leading-8"><img src={linkedin}/></a>
                    <a href="https://twitter.com/Christhedev__" className="soc-link h-10 w-10 rounded-full flex justify-center"><img src={twitter} className="w-full" alt="twitter icon" /></a>
                    <a href="https://www.github.com/ckade15" className="git-link h-10 w-10 bg-blue-400 rounded-full flex justify-center"><img src={github} alt="github icon" className="w-full h-full"/></a>
                </div>
                <p className="text-md font-bold text-blue-800 font-mono p-1 mt-4">&copy; Kade Web Solutions  {(new Date().getFullYear())}</p>
                <p className="font-mono text-sm font-bold  mb-1">Made by Chris Kade</p>
            </footer>
      );
    }else{
        return (
            <footer className="bottom-0 fixed w-full bg-transparent bg-blue-100 p-10 flex justify-evenly text-xl">
                <div className="flex flex-col w-1/2 text-xl text-center">
                    <p className="text-xl text-blue-800 font-bold font-mono p-1 mt-2">&copy; Kade Web Solutions  {(new Date().getFullYear())}</p>
                    <p className="font-mono text-lg font-bold  mb-1">Made by Chris Kade</p>
                </div> 
                <div className="flex place-content-evenly mt-1 w-1/3 ">
                    <a href="https://www.linkedin.com/in/christopher-kade-b9b2151a5/" className="soc-link text-blue-400 not-italic font-bold text-2xl rounded-full h-12 w-12 text-center leading-8"><img src={linkedin}/></a>
                    <a href="https://twitter.com/Christhedev__" className="soc-link h-12 w-12 flex justify-center"><img src={twitter} className="w-full" alt="twitter icon" /></a>
                    <a href="https://www.github.com/ckade15" className="git-link h-12 w-12 flex justify-center"><img src={github} alt="github icon" className="w-full h-full"/></a>
                </div>
            </footer>
      );
    }

}

export default Footer;