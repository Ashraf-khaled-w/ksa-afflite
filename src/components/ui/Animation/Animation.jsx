import React, { useEffect } from 'react'
// import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";


function Animation({className="",children, ...rest}) {
    useEffect(() => {
        AOS.init({ duration: 800 });
      }, []);
    return <>
        {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay}}
            viewport={{  once, amount }}
            className={className}
            {...rest}
        >
        {children}
      </motion.div> */}
      <div data-aos="fade-up"
       className={className}
       {...rest}>
        {children}
      </div>
    </>
}

export default Animation
