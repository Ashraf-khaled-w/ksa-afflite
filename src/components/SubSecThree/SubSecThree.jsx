import React from 'react'
import styles from './SubSecThree.module.css'
import Img from "../../assets/imgs/secimg/sec1photo.jpg";
import Animation from '../ui/Animation/Animation';


function SubSecThree() {
    const textDecoratorH = `text-5xl font-bold [text-shadow:2px_2px_10px_rgba(0,0,0,0.8)]`;
    const textDecoratorP = `text-xl font-light  opacity-80`;
    return (
      <>
      <div className='bg-[rgb(255,202,0)]'>
        <Animation>
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-1 items-center text-Black pt-12 pb-12 px-4 ">
          <div className="flex justify-center items-center p-4">
            <div
              className={`w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-center bg-cover overflow-hidden  bg-opacity-50 flex justify-center items-center`}
              style={{ backgroundImage: `url(${Img})` }}
            ></div>
          </div>

          <div
            dir="rtl"
            className="text-right flex flex-col justify-center items-start p-4 ps-12"
          >
            <h2
              className={`after:content-[''] after:block after:w-24 after:h-1 
                  after:bg-[black] 
                  after:absolute after:-bottom-4 after:right-0
                  ${textDecoratorH} mb-12 relative `}
            >
              رش مبيدات ​في الحدائق العامة والمنتزهات ​{" "}
            </h2>
            <p className={`${textDecoratorP}`}>لدينا مبيدات أوروبية</p>
          </div>
        </div>
        </Animation>
      </div>
        
      </>
    );
}

export default SubSecThree
