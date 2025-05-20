import React from "react";
import styles from "./Service.module.css";
import ServiceItem from "../../components/ui/ServiceItem/ServiceItem";
import Img1 from "../../assets/imgs/service/1.jpg";
import Img2 from "../../assets/imgs/service/2.jpg";
import Img3 from "../../assets/imgs/service/3.jpg";
import Img4 from "../../assets/imgs/service/4.jpg";
import Img5 from "../../assets/imgs/service/5.jpg";
import Img6 from "../../assets/imgs/service/6.jpg";
import Animation from "../../components/ui/Animation/Animation";


function Service({ className = "", color = "white", colorAfter = "rgb(255,202,0)", ...rest }) {
  return (
    <div
      className={`pt-[5rem] min-h-screen bg-[rgb(145,25,56)] text-center flex flex-col justify-center items-center text-${color} font-bold ${className}`}
      {...rest}
    >
      <Animation>
        <div className="p-4 w-[80%]">
          <h2
            className={`
              text-5xl font-bold mb-12 relative pb-2
              after:content-[''] after:block after:w-24 after:h-1 
              after:bg-[${colorAfter}] 
              after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2
            `}
          >
            خدماتنا
          </h2>
          <p className={`text-xl font-light opacity-80`}>
            المصطفي لخدمات مكافحة الحشرات و تعقيم المنازل و رش المبيدات
          </p>
          <div className=" service-container mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 items-start justify-start">
            <ServiceItem Img={Img1} Text={`مكافحة البق وحشرات الفراش`}></ServiceItem>
            <ServiceItem Img={Img2} Text={`مكافحة النمل الابيض`}></ServiceItem>
            <ServiceItem Img={Img3} Text={`مكافحة الصراصير`}></ServiceItem>
            <ServiceItem Img={Img4} Text={`تعقيم المنازل و المكاتب و المدارس`}></ServiceItem>
            <ServiceItem
              Img={Img5}
              Text={`مكافحة الحشرات ورش المبيدات وتعقيم المنازل`}
            ></ServiceItem>
            <ServiceItem
              Img={Img6}
              Text={`رش مبيدات في الحدائق العامة و الخاصة و المنتزهات`}
            ></ServiceItem>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <p className={` font-light  mb-4 w-[60%] mt-12 border-t-1 pt-3`}>
              تخلص نهائيًا من الحشرات الضارة والآفات التي تسبب القلق لك في الأماكن العامة
              والحدائق والمنتزهات بالإضافة القضاء نهائيًا على القوارض والزواحف والفئران وبق
              الفراش والنمل الأبيض والصراصير
            </p>
          </div>
        </div>
      </Animation>
    </div>
  );
}

export default Service;
