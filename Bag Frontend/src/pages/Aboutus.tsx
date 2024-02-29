import React from 'react';
import "../assets/css/Aboutus.css";
import {Link} from "react-router-dom";

const Aboutus: React.FC = () => {
    return (
        <div className={"au-container"}>
            <div className={"au-header"}>

                <div className={"au-logo"}>
                    <a href="/dashboard">
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"au-btn_before"}>
                    <Link to="/dashboard" className="link-button"><button><i className="fa-solid fa-home home-icon"></i> Home</button></Link>                  
                    <Link to="/Aboutus"><button><i className="fa-solid fa-info-circle about-icon"></i>About Us</button></Link>
                </div>
                <div className={"au-btn-wrapper"}>
                    <Link to={"/cart"}><button><i className="fa-solid fa-cart-shopping cart-icon"></i> Cart</button></Link>
                    <Link to="/myaccount" className="link-button"><button><i className="fa-solid fa-user-circle profile-icon"></i>Profile</button></Link>                    
                    <Link to="/"><button> <i className="fa-solid fa-sign-out"></i>Log Out</button></Link>


                </div>

            </div>
            <div className={"au-body"}>
                <h1>About Us</h1>
               
                <h2>Welcome to Bag House</h2>
                <p>At Bag House, we're passionate about bringing you the finest selection of bags to suit your style and needs. Established with a commitment to quality and convenience, we strive to offer a seamless shopping experience for bag enthusiasts nationwide.</p>
                <h2>Cash on Delivery</h2>
                <p>We understand the importance of flexibility when it comes to payment methods. That's why we offer the convenience of Cash on Delivery (COD) for your peace of mind. With COD, you can shop with confidence, knowing that you only pay when your order reaches your doorstep.</p>
            </div>




            <div className={"au-footer"}>
                <div className={"au-get-help"}>
                    <h1>Contact Us</h1>
                    <div className="contact-info">
                        <p>Email: baghouse@gmail.com</p>
                        <p>Phone No: 9818619735</p>

                    </div>
                    <span>@2024 BagHouse Pvt. Ltd. All Rights Reserved</span>
                </div>
                <div className={"au-about-us"}>
                    <h1>Bag House</h1>
                </div>
                <div className={"au-logos"}>
                    <span>Follow Us:</span>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img width={43} src={"images/fb.png"} alt="Facebook" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img width={43} src={"images/insta.png"} alt="Instagram" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Aboutus;
