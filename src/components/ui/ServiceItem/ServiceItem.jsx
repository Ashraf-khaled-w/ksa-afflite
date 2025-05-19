import React from 'react'
import styles from './ServiceItem.module.css'


function ServiceItem({className,Img="" , Text  ,...rest}) {
    return <>
    <div className="service-item mb-4 flex flex-col justify-center items-center">
        <div className={`img-container mt-[5px] mx-[5px] mb-[22px] w-[6rem] h-[6rem] 
        rounded-full  bg-no-repeat bg-center bg-cover overflow-hidden
        ${className}`} style={{backgroundImage: `url(${Img})`}} {...rest}>
        </div>
        <h2 className='text-base leading-normal break-words px-1'>{Text}</h2>
    </div>
    </>
}

export default ServiceItem
