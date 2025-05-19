import React from 'react'
import styles from './Button.module.css'


function Button({className,children, ...rest}) {
    const tras = `transition-all duration-300 ease`;
    return (
      <button
        className={`
            p-4 bg-[rgb(255,202,0)] text-gray-700
            rounded-full m-4 cursor-pointer
            hover:bg-transparent hover:text-[rgb(255,202,0)]
            hover:ring-2
            hover:ring-[rgb(255,202,0)]
            hover:scale-105 
            transform 
            ${tras} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
}

export default Button
