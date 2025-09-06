import cl from "./skills.module.css";
import Heading from "./../ui/heading/Heading";
import icon from "./../../../public/images/icons/icon.svg"
import Button from "../ui/button/Button";
import icon1 from "./../../../public/images/icons/icon1.svg"
import icon2 from "./../../../public/images/icons/icon2.svg"

const Skills = () => {
  return (
    <>
      <div className={cl.skills}>
        <div className={cl.skills__left}>
          <Heading text={"My Skills"} />
          <h2> 
            Why Hire Me For Your <br /> Next &nbsp;
            <span style={{color: "#0DB760", fontFamily: "Poppins, sans-serif", fontSize: "48px"}}>
            Project?
            </span>
          </h2>
          <span className={cl.skills__desc}>
            I’m specialist in UI/UX Designe. My passion is designing & solving <br /> problems through user experience and research.
          </span>
          <Button width={"100px"} height={"35px"} text={"Hire Me"}/>
        </div>
        <div className={cl.skills__right}>
          <div className={cl.skills__right_1}>
            <img src={icon} alt=""className={cl.skills__right_img} />
            <h1>Visual Design</h1>
            <p>Create user interface design with <br/>
unique & modern ideas</p>
          </div>
          <div className={cl.skills__right_2}>
             <img src={icon1} alt=""className={cl.skills__right_img_1} />
            <h1>UX Research</h1>
            <p>Create digital user products with <br/>
updated ideas</p>
          </div>
        </div>
        <div className={cl.skills__plus}>
          <img src={icon2} alt=""className={cl.skills__right_img_2} />
            <h1>Design Prototype</h1>
            <p>Create advance design prototype <br/> with Figma apps.</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
