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
                    <Link to={"/dashboard"}><button>Home</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>
                <div className={"au-btn-wrapper"}>
                    <Link to={"/cart"}><button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button></Link>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Favourite</button></Link>
                    <Link to="/myaccount"><button>Profile</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>

                <div className={"au-searchbar"}>
                    <input type={"text"} placeholder={"Search Bags"} />
                </div>
                <div className={"au-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
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
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"au-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>




                </div>
                <div className={"au-logos"}>
                    <span>Connect with us:</span>
                    <a href="https://www.facebook.com/profile.php?id=61555012223662&is_tour_dismissed=true"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/fb.png"}
                            alt="Facebook"
                        />
                    </a>

                    <a href="https://www.instagram.com/luga.hub69/"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/insta.png"}
                            alt="Facebook"
                        />
                    </a>
                    <a href="https://www.threads.net/@luga.hub69"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/thread.png"}
                            alt="X"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
