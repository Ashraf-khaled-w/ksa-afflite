import React from 'react'
import { NavLink } from "react-router-dom";



function NavElement({className,children, path='' , ...rest}) {
    return (
      <>
        <li className={`mx-2 text-xl ${className}`} {...rest}>
          <NavLink 
            to={`${path}`}
            className={({ isActive }) => {
              const baseClasses = "block px-3 py-4 transition-all duration-200 ease-in-out border-2 rounded-md";
              if (isActive) {
                return `${baseClasses} text-white opacity-100 border-[rgb(16,131,193)]`;
              } else {
                return `${baseClasses} text-white opacity-80 hover:opacity-100 hover:scale-110 border-transparent`;
              }
            }}
          >
            {children}
            </NavLink>
        </li>
      </>
    );
}

export default NavElement
