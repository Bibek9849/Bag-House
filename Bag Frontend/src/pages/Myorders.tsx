import React from 'react';
import "../assets/css/Myorders.css";
import {Link} from "react-router-dom";
const Myorders: React.FC = () => {
    return (
        <div className={"mo-container"}>
            <div className={"mo-header"}>

                <div className={"mo-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"mo-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"mo-searchbar"}>
                <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"mo-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"mo-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/Myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>


            </div>
            <div className={"mo-body"}>
                <div className={"mo-profile-first"}>
                    <div className={"mo-manage-my-account"}>
                        <h1>Manage My Account</h1>
                        <Link to="/MyAccount"><button>My profile</button></Link>
                    </div>
                    <div className={"mo-my-orders"}>
                        <h1>My Orders</h1>
                        <Link to="/Myorders"><button>My Orders</button></Link>
                        <Link to="/Myreturns"><button>My Returns</button></Link>
                        <Link to="/Mycancellation"><button>My Cancellations</button></Link>


                    </div>


                </div>
                <div className={"mo-profile-second"}>
                    <div className={"mo-section1"}>
                        <h3>My orders</h3>

                    </div>
                    <div className={"mo-section2"}>
                        <label>There are no orders yet. </label>




                    </div>

                </div>
            </div>




            <div className={"mo-footer"}>
                <div className={"mo-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>
                </div>
                <div className={"mo-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>





                </div>
                <div className={"mo-logos"}>
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

export default Myorders;
