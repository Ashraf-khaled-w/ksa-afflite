import React from 'react'
import styles from './SubSecOne.module.css'
import Animation from '../ui/Animation/Animation';

function SubSecOne({ className, ...rest }) {
    const textDecoratorH = `text-5xl font-bold [text-shadow:2px_2px_10px_rgba(0,0,0,0.8)]`;
    const textDecoratorP = `text-xl font-light text-white opacity-80`;
    return (
      <>
      <Animation>
      <div
          dir="rtl"
          className={`w-[100%] text-center  flex flex-col justify-center items-center text-white  pt-12 pb-12 px-12 ${className}`}
          {...rest}
        
        >
          <h2
            className={`after:content-[''] after:block after:w-24 after:h-1 
              after:bg-[rgb(255,202,0)] 
              after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2
              ${textDecoratorH} mb-12 relative `}
          >
            مكافحة النمل الابيض
          </h2>
          <p className={`${textDecoratorP}`}>
            %افضل شركة مكافحة النمل الابيض ​من خلال مواد فعالة 100{" "}
          </p>
        </div>
      </Animation>
        
      </>
    );
}

export default SubSecOne
