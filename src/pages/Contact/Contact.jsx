import React, { useRef, useState } from 'react'
import styles from './Contact.module.css'
import whatsImg from '../../assets/whatsapp.png'
import styled from 'styled-components'
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import * as Yup from 'yup'


const A= styled.a`
font-size:17px;
font-weight:400;
color:#FFCA00;
padding-bottom:5px;
display:block;

`
function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);


    

    let validationSchema = Yup.object({
        userName: Yup.string().required('name is required'),
        email: Yup.string().required('email is required').email('enter valid email'),  //check on email
        phoneNumber: Yup.string().required('phone is required').matches(/^01[1250][0-9]{8}$/ , 'phone is not valid'),
        details: Yup.string().required('order is required'),
    
      })
    
   const formik= useFormik({
    initialValues:{
    userName:'',
    email:'',
    details:'',
    phoneNumber:''
    }, 
    validationSchema: validationSchema ,
    onSubmit:handleSendOrder
   })

   async function handleSendOrder(formsData, { resetForm }){
    await axios.post('http://localhost:3000/api/order/api/order', formsData)
    .then((response)=>{
        console.log(response);
        toast.success('تم إرسال طلبك بنجاح')
        resetForm()

    }).catch((error)=>{
        console.error('خطأ أثناء الإرسال:', error)
        toast.error('حدث خطأ أثناء الإرسال')
    }
    )
   }

    return (
      <>
        <div className="bg-[#911938] min-h-screen justify-end items-start px-5 text-center py-5 pt-24">
          <h1
            className={`${styles.serviveHead} text-[40px] font-medium py-7 text-white text-center`}
          >
            للتواصل معنا
          </h1>
          <div className="py-10">
            <p className="text-white text-lg font-medium">Al Khobar Saudi Arabia</p>
            <A
              href="https://wa.me/966571004734"
              target="_blank"
              rel="noreferrer"
              className=" hover:underline "
            >
              +966-597272923 <i className="fa-solid fa-phone"></i>
            </A>
            <A
              href="https://wa.me/966571004734"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              +966-597272923 <img src={whatsImg} alt="whatsImg" className="w-5 inline" />
            </A>
            <p className="text-white text-lg font-medium">
              خدماتنا على مدار الـ 24 ساعة طوال 7 أيام الأسبوع{" "}
              <i className="fa-solid fa-clock text-[#FFCA00]"></i>
            </p>
          </div>

          <div>
            <form onSubmit={formik.handleSubmit} className="mx-auto text-center w-[100%]">
            <input
                type="text"
                placeholder="الاسم الكامل "
                dir="rtl"
                name="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                className="p-2 bg-white rounded-lg w-[90%]  md:w-[55%] block my-5 mx-auto"
              />

              {formik.touched.userName && formik.errors.userName && (
                <p className="text-red-500 text-sm">{formik.errors.userName}</p>
              )}
              <input
                type="email"
                placeholder="البريد الالكتروني"
                dir="rtl"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="p-2 bg-white rounded-lg w-[90%]  md:w-[55%] block my-5 mx-auto"
              />

              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}

              <input
                type="tel"
                placeholder="رقم الهاتف"
                dir="rtl"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className="p-2 bg-white rounded-lg w-[90%]  md:w-[55%]  block my-5 mx-auto"
              />

              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p>
              )}

              <textarea
                id="details"
                placeholder="إترك طلبك"
                dir="rtl"
                rows={"6"}
                name="details"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.details}
                className="p-2 bg-white rounded-lg w-[90%]  md:w-[55%] block mx-auto my-5"
              ></textarea>

              {formik.touched.details && formik.errors.details && (
                <p className="text-red-500 text-sm">{formik.errors.details}</p>
              )}


              <button
                type="submit"
                className="bg-[#FFCA00] w-[90%]  md:w-[55%] py-3 rounded-lg hover:cursor-pointer"
                 disabled={isSubmitting} onClick={() => setIsSubmitting(true)} >
              {isSubmitting ? 'جاري الإرسال…' : 
              '  - وإترك رقم الهاتف والخدمة المراد تنظيفها وسوف نقوم بالتواصل معك مباشرةإضغط هنا…'}
            </button>
            </form>
          </div>
        </div>
      </>
    );
}

export default Contact

//aria-label="إضغط هنا - وإترك رقم الهاتف والخدمة المراد تنظيفها وسوف نقوم بالتواصل معك مباشرة"
//aria-label="إضغط هنا - وإترك رقم الهاتف والخدمة المراد تنظيفها وسوف نقوم بالتواصل معك مباشرة"