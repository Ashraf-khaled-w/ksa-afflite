import React from "react";
import Header from "../../components/Header/Header";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import SubSecOne from "../../components/SubSecOne/SubSecOne";
import SubSecTwo from "../../components/SubSecTwo/SubSecTwo";
import SubSecThree from "../../components/SubSecThree/SubSecThree";
import SubSecFour from "../../components/SubSecFour/SubSecFour";
import SubSecFive from "../../components/SubSecFive/SubSecFive";
import { Parallax } from "react-scroll-parallax";
import ImgH1 from "../../assets/imgs/bg-home/1.jpg";
import ImgH2 from "../../assets/imgs/bg-home/2.jpg";
import ImgH3 from "../../assets/imgs/bg-home/3.jpg";

function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden p-0 m-0">
        <div className="absolute inset-0 z-[-1] h-full w-full">
          <Parallax
            speed={-20}
            translateY={[-50, 50]}
            scale={[0.8, 1]}
            opacity={[0.5, 1]}
            className="w-[130%] h-[130%] bg-center bg-cover translate-x-[-10%]"
            style={{ backgroundImage: `url(${ImgH1})` }}
          ></Parallax>
        </div>

        <div className="relative z-[1] flex items-center justify-center h-full bg-[rgba(0,0,0,0.5)]">
          <Header />
        </div>
      </div>

      <About className={`z-10`} />

      <div className="relative w-full  overflow-hidden p-0 m-0">
        <div className="absolute inset-0 z-[-1] h-full w-full">
          <Parallax
            speed={-20}
            translateY={[-80, 50]}
            scale={[0.8, 1]}
            opacity={[0.5, 1]}
            className="w-[130%] h-[280%] bg-center bg-cover translate-x-[-10%]"
            style={{ backgroundImage: `url(${ImgH2})` }}
          ></Parallax>
        </div>

        <div className="relative z-[1] flex items-center justify-center h-full bg-[rgba(0,0,0,0.5)]">
          <SubSecOne />
        </div>
      </div>

      <Service color="black" colorAfter="black" className={`bg-[rgb(255,202,0)] z-10`} />
      <SubSecTwo className={`z-10`} />
      <SubSecThree className={`z-10`} />
      <SubSecFour className={`z-10`} />
      
      <Contact className={`z-10`} />
    </>
  );
}

export default Home;
