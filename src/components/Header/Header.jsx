import React from "react";
import styles from "./Header.module.css";
import Button from "../ui/Button/Button";
import Animation from "../ui/Animation/Animation";


function Header({ className, ...rest }) {
  const textDecoratorH = `text-5xl font-bold [text-shadow:2px_2px_10px_rgba(0,0,0,0.8)]`;
  const textDecoratorP = `text-xl font-light text-white opacity-80`;
  return (
    <>
      <Animation>
        
      <div
        className={`header min-h-screen w-full flex flex-col justify-center items-center text-center text-white  p-12  ${className}`}
        {...rest}
      >
        <div className="p-4 w-[80%]">
          <h2 className={`${textDecoratorH} mb-12`}>%خصومات الربيع 40</h2>
          <p className={`${textDecoratorP}`}>
            المصطفى كلين تسعى إلى الجودة والإتقان والتميز في مجال{" "}
            <span className="text-[rgb(255,202,0)]">مكافحة الحشرات ومكافحة النمل الأبيض</span>{" "}
            والصراصير والبق والقوارض ورش المبيدات وتعقيم المنازل والمدارس والمساجد
          </p>
        </div>
        <div className="buttons">
          <a href="https://wa.me/966571004734"
           target="_blank"
           rel="noreferrer">
            <Button>05927272923</Button>
          </a>
          <a href="https://wa.me/966571004734"
           target="_blank"
           rel="noreferrer">
            <Button>عقود سنوية لمكافحة الحشرات</Button>
          </a>
          
        </div>
        
      </div>
      </Animation>
    </>
  );
}

export default Header;
