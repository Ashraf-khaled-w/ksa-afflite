import React from 'react'
import styles from './Footer.module.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const H3= styled.h3`
    font-size:15px;
    font-weight:400
`

function Footer() {

   

    return <>
    <div className='flex flex-wrap flex-row lg:flex-row md:flex-col sm:flex-col gap-5 justify-center items-center  bg-[#1B262C] text-white p-5'>
        <H3>
            <Link to={'/تواصل-معنا'}>
                للتواصل معنا
            </Link>
        </H3>
        <H3>
            <Link>
            Pest control services
            </Link>
        </H3>
        <H3>
            <Link>
            Getting rid of cockroaches and reptiles
            </Link>
        </H3>
        <H3>
            <Link>
            Spraying pesticides
            </Link>
        </H3>
        <H3>
            <Link>
            Control of rodents and bugs
            </Link>
        </H3>
        <H3>
            <Link to={'/خدماتنا'}>
            Our Services
            </Link>
        </H3>
        <H3>
            <Link>
            Termite control
            </Link>
        </H3>
        <H3>
            <Link to={'/تعرف-علينا'}>
            تعرف علينا
            </Link>
        </H3>
        <H3>
            <Link>
            الرئيسية
            </Link>
        </H3>
        <H3>
            حقوق النشر © 2025 جميع الحقوق محفوظة - تاج كلين لمكافحة الحشرات ورش المبيدات
        </H3>

    </div>
    
    </>
}

export default Footer
