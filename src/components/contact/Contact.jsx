import cl from "./contact.module.css";
import Heading from "./../ui/heading/Heading";
import Button from "../ui/button/Button";
import phone from "../../../public/images/contact/phone.png";
import email from "../../../public/images/contact/email.png";
import map from "../../../public/images/contact/map.png";
import Input from "../input/Input";
const Contact = () => {
  return (
    <>
      <div className={cl.contact}>
        <div className={cl.contact__left}>
          <img src="icon3" alt="" />
          <Heading text={"Contact"} />
          <h2>
            My Creative Works Latest{" "}
            <span
              style={{
                color: "#0DB760",
                fontFamily: "Poppins, sans-serif",
                fontSize: "48px",
              }}
            >
              {" "}
              Project
            </span>
          </h2>
          <span className={cl.contact__desc}>
            I have selected and mentioned here some of <br /> my latest projects
            to share with you.
          </span>
        </div>
      </div>
      <div className={cl.contact__form}>
        <div className={cl.contact__form_left}>
          <div className={cl.contact__form_group}>
            <img src={phone} alt="" />
            <div className={cl.contact__form_content}>
              <span>Call me</span>
              <p>+8801613968687</p>
            </div>
          </div>
          <div className={cl.contact__form_group}>
            <img src={email} alt="" />
            <div className={cl.contact__form_content}>
              <span>Email me</span>
              <p>ahmedtanvir8687@gmail.com</p>
            </div>
          </div>
          <div className={cl.contact__form_group}>
            <img src={map} alt="" />
            <div className={cl.contact__form_content}>
              <span>Address</span>
              <p>Zakigonj, Sylhet, Bangladesh.</p>
            </div>
          </div>
        </div>
        <div className={cl.contact__form_right}>
          <form action="" className={cl.form}>
            
              <Input placeholder="Full name"  className={cl.form__left_name} />
              <Input placeholder="Your email" className={cl.form__left_email}/>
             
            
              <Input placeholder="Phone number" className={cl.form__right_number} />
              <Input placeholder="Budget" className={cl.form__right_Budget} />
            
             <textarea type="text " placeholder="Message" className={cl.form_msg} />
              <Button width={"176px"} height={"56px"} text={"отправить"} />
        
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;