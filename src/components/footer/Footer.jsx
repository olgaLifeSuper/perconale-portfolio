import cl from "./footer.module.css";

const Footer=()=>{
    return(
        <footer >

            <div className={cl.footer}>
                <div className={cl.row}>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
             
            

                <div className={cl.row}>
                    <ul>
                        <li><a href="#">contact as</a></li>
                        <li><a href="#">aur servises</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>

                <div className={cl.row}>
                    Portfolio Copyright © 2025 Porfolio - All rights reserved || Designed By: Olga
                </div>
            </div>
        </footer>
    )
}

export default Footer