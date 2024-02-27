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
                    <button>Bags</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"au-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"au-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"au-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>


            </div>
            <div className={"au-body"}>
                <h1>About Us</h1>
                <p>If you are looking for a website that offers the very best online shopping in Nepal, choose LUGA HUB. We are a trusted and easy to use shopping site that offers a surprising, and exciting, range of top quality products, at affordable prices.
                    LUGA HUB is easy to use and we provide a level of customer service that we believe is second to none. Our aim is to make LUGA HUB people’s first choice when they are looking for top quality and affordable online shopping in Nepal.</p>
                <h2>LUGA HUB-your best choice for online shopping in Nepal</h2>
                <p>We have designed each and every aspect of our service with you, our customer, in mind:</p>
                <h2>Products:</h2>
                <p>We offer the widest range of products, in a variety of categories including electronics, fashion, children's wear, home ware, furnishings, fitness, outdoors and much, more. Whether you are buying for yourself or wish to send a gift to someone in Nepal, we have a vast selection of suitable items available (we also offer a gift wrapping service, on request);</p>
                <h2>Customer Satisfaction:</h2>
                <p>As one of the largest websites offering online shopping in Nepal, we combine an extensive range of products with a commitment to 100% customer satisfaction. So,  if you have a problem with any aspect of the service you receive from us, simply get in touch and you can be confident that we will do everything we can to help;</p>
                <h2>Delivery:</h2>
                <p>We will provide you with a fast, trustworthy and reliable delivery service regardless of where you live in Nepal. Our charges are reasonable and our order tracking service allows you to see when your order will be delivered. In addition, we offer free delivery to our customers in Kathmandu. If you would prefer to collect your purchases in person from our store, simply contact us now on 9860929065 to find out more about our free Scheduled Collection Service;</p>
                <h2>Website:</h2>
                <p>Our website makes it easy for you to find the products you require and can be accessed using a PC, laptop, tablet or smartphone, 24 hours a day, 365 days a year;</p>
                <h2>Pricing:</h2>
                <p>LUGA HUB makes online shopping in Nepal the ideal way to find quality products at low prices. We source quality products carefully, buy in bulk and pass on our savings to you, in the form of lower prices and great discounts;</p>
                <h2>Returns:</h2>
                <p>Our 'refund or replace' returns policy allows you to buy in complete confidence;</p>
                <h2>Payments:</h2>
                <p>All website payments are security encrypted providing our customers with a safe, secure and trusted online payments system. We also offer cash on delivery options;</p>
                <h2>Discounts:</h2>
                <p>With our daily and  weekly discount deals, you have the opportunity to buy quality products at low, low prices;LUGA HUB offers high quality, great prices and a level of customer service that is second to none. We don't just make online shopping in Nepal affordable, we make it easy and enjoyable, too.</p>
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
