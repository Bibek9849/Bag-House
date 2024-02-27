import React from 'react';
import "../assets/css/Mycancellation.css";
import {Link} from "react-router-dom";
const Mycancellation: React.FC = () => {
    return (
        <div className={"mc-container"}>
            <div className={"mc-header"}>

                <div className={"mc-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"mc-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"mc-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"mc-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"mc-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/Myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>



                </div>


            </div>
            <div className={"mc-body"}>
                <div className={"mc-profile-first"}>
                    <div className={"mc-manage-my-account"}>
                        <h1>Manage My Account</h1>
                        <Link to="/MyAccount"><button>My profile</button></Link>
                    </div>
                    <div className={"mc-my-orders"}>
                        <h1>My Orders</h1>
                        <Link to="/Myorders"><button>My Orders</button></Link>
                        <Link to="/Myreturns"><button>My Returns</button></Link>
                        <Link to="/Mycancellation"><button>My Cancellations</button></Link>

                    </div>


                </div>
                <div className={"mc-profile-second"}>
                    <div className={"mc-section1"}>
                        <h3>My Cancellations</h3>

                    </div>
                    <div className={"mc-section2"}>
                        <label>There are no cancellations yet. </label>




                    </div>

                </div>
            </div>




            <div className={"mc-footer"}>
                <div className={"mc-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"mc-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>




                </div>
                <div className={"mc-logos"}>
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

export default Mycancellation;
