import cl from "./header.module.css"
import logo from "./../../../public/images/main/logo.png"
const Header = () => {


    return (
        <>
       <header className={cl.header}>
        <img src={logo} alt="" />
        <nav className={cl.header__nav}>
            <a href="">
            About
            </a>
             <a href="">
             Skills   
            </a>
             <a href="">
               Portfolio 
            </a>
             <a href="">
                Testimonial
            </a>

        </nav>

        <button className={cl.header__btn}>
            скачать CV
        </button>
       </header>
        </>
    )
}

export default Header 