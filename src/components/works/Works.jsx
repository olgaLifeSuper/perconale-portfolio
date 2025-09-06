import cl from "./works.module.css";
import Heading from "./../ui/heading/Heading";
import Button from "../ui/button/Button";
import image from "./../../../public/images/icons/image.png"
const Works = () => {
  return (
    <>
      <div className={cl.works}>
        <div className={cl.works__left}>
          <img src="icon3" alt=""/>
          <Heading text={"Portfolio"} />
          <h2> 
            My Creative Works<br />
Latest &nbsp;  <span style={{color: "#0DB760", fontFamily: "Poppins, sans-serif", fontSize: "48px"}}>  Project
            </span>
          </h2>
          <span className={cl.works__desc}>
           I have selected and mentioned here some of <br /> my latest projects to share with you.
          </span>
          <Button width={"100px"} height={"35px"} text={"Show More"}/>
        </div>
      <img src={image} className={cl.works__image} />
      </div>
    </>
  );
};

export default Works;
