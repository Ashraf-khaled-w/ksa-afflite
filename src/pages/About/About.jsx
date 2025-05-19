import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import img from "../../assets/phone.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import Animation from "../../components/ui/Animation/Animation";

const P = styled.p`
  font-size: 25px;
  font-weight: 400;
  // text-align: right;
  padding-bottom: 15px;
  word-spacing: 2px;
  opacity: 0.8;
`;
const H4 = styled.span`
  font-size: 21px;
  font-weight: bold;
  // text-align: right;
  opacity: 0.8;
`;

function About() {
  // const ref = useRef(null);
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //         observer.unobserve(entry.target); // لتشغيل التأثير مرة واحدة فقط
  //       }
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) observer.unobserve(ref.current);
  //   };
  // }, []);

  return (
    <>
      <div className="bg-[#911938] py-6 px-6 lg:py-10 lg:px-10 md:py-10 md:px-10">
        <Animation>
          <div className=" flex flex-col lg:flex-row md:flex-row sm:flex-col-reverse justify-end items-start px-5 text-center py-10">
            <div className="flex items-center justify-center my-auto">
              <img
                src={img}
                alt="mobileTag"
                width={"45%"}
                height={"65%"}
                className="flex items-center justify-center"
              />
            </div>
            <div
              // ref={ref}
              dir="rtl"
              className={` text-white text-center items-center md:text-start flex flex-col justify-center md:items-start md-items-end my-auto`}
            >
              <h2 className="text-5xl   font-bold py-5">المصطفى كلين</h2>
              <P>
                <H4>نحن </H4>
                من أعرق وأكبر شركات تقدم خدمات التنظيف العام و مكافحة الحشرات ونسعى دائمًا
                للتميز والإتقان والإحترافية ,
              </P>
              <P>
                <H4>نتخصص </H4>
                في مكافحة الحشرات والتخلص من القوارض والنمل الأبيض والبق والتخلص من الآفات
                الضارة{" "}
              </P>
              <P>
                <H4>أسعارنا </H4>
                مميزة للغاية مقارنة بجودة خدماتنا بالإضافة نحن مؤسسة رسمية تعمل تحت طائلة
                القانون{" "}
              </P>
              <P>
                فروعنا
                <H4>
                  ( الدمام - الخبر - القطيف - الظهران - تاروت - عنك - سيهات - صفوي - رأس تنورة
                  - الخفجي - غزلان ​){" "}
                </H4>
              </P>
            </div>
          </div>
        </Animation>
      </div>
    </>
  );
}

export default About;

// const P = styled.p
//     font-size : 21px;
//     fonnt-weight:400;
//     text-align:right;

// const H4 = styled.span
//     font-size : 21px;
//     fonnt-weight : bold;
//     text-align : right;

// <div className='text-white flex flex-col justify-center items-end my-auto'>
//                 <h2 className='text-5xl font-bold py-5'>تاج</h2>
//                 <P>
//                     <H4>نحن </H4>
//                      من أعرق وأكبر شركات تقدم خدمات التنظيف العام ومكافحة الحشرات ونسعى دائمًا للتميز والإتقان والإحترافية ,
//                 </P>
//             </div>

//data-bg="https://files.cdn-files-a.com/uploads/8453396/800_6808a007e31ca.png"
//style="background-image:url(https://files.cdn-files-a.com/uploads/8453396/800_6808a007e31ca.png); background-position:center center;"
