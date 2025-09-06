import Button from "../ui/button/Button";
import cl from "./main.module.css";
import arrow from "./../../../public/images/main/arrow.svg"
import face from "./../../../public/images/main/face.png"
import Heading from "../ui/heading/Heading";
const Main = () => {
  return (
    <>
      <main className={cl.main}>
        <div className={cl.main__left}>
          <Heading text={"welcome"} />
          <h1>
            I have <span className={cl.main__text}> Creative</span>
            <br />
            <span className={cl.main__text}>Design</span> Experience
          </h1>
          <p className={cl.main__desc}>
            I’m Tanvir, a creative Product Designer. I’ve been helping
            businesses <br /> to solve their problems with my design for 2 years.
          </p>
          <div className={cl.main__content}>  
              <Button width={"138px"} height={"56px"} text={"Contact Me"} />
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="" className={cl.main__link}> 
                View Portfolio <img src={arrow} alt="" />
              </a>
          </div>
        </div>
        <div className={cl.main__right}>
          <img src={face} alt="" />
        </div>
      </main>
    </>
  );
};

export default Main;
