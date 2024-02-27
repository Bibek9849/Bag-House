import {Link} from "react-router-dom";
import "../assets/css/AdminAu.css";

// import React from "react";
function AdminAu() {
    return (
        <div className={"aa-container"}>
            <div className={"aa-buttons"}>
                <div className={"aa-top"}>
                    <a href="/admin/products">
                        <img src={"../images/Logo.png"}
                             width={100}
                             alt={"logo"}
                        />

                    </a>
                    <span>LugaHub</span>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={"aa-btn"}>
                    <div className="ap-dropdown">
                        <button className="ap-dropbtn"><i className="fa-solid fa-clipboard"></i>Products<i className="fa-solid fa-caret-down" style={{ marginLeft: '57px' }}></i></button>
                        <div className="ap-dropdown-content">
                            <a href="/admin/products">View Product</a>
                            <a href="/admin/addproduct">Add Product</a>

                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-list"></i>Categories</button>*/}
                    <div className="cgr-dropdown">
                        <button className="cgr-dropbtn"><i className="fa-solid fa-list"></i>Categories<i className="fa-solid fa-caret-down" style={{ marginLeft: '40px' }}></i></button>
                        <div className="cgr-dropdown-content">
                            <a href="/admin/viewcategory">View Category</a>
                            <a href="/admin/addcategory">Add Category</a>
                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-tag"></i>Brands</button>*/}
                    <div className="brd-dropdown">
                        <button className="brd-dropbtn"><i className="fa-solid fa-tag"></i>Brands<i className="fa-solid fa-caret-down" style={{ marginLeft: '69px' }}></i></button>
                        <div className="brd-dropdown-content">
                            <a href="/admin/viewbrand">View Brand</a>
                            <a href="/admin/addbrand">Add Brand</a>
                        </div>
                    </div>
                    <Link to={"/admin/totalorders"}><button className={"products"}><i className="fa-solid fa-cart-shopping"></i>Total Orders</button></Link>
                    <Link to={"/admin/users"}><button className={"products"}><i className="fa-solid fa-users"></i>Users</button></Link>
                    {/*<button className={"products"}><i className="fa-solid fa-user"></i>Profile</button>*/}
                    <div className="pr-dropdown">
                        <button className="pr-dropbtn"><i className="fa-solid fa-user"></i>Profile<i className="fa-solid fa-caret-down" style={{ marginLeft: '70px' }}></i></button>
                        <div className="pr-dropdown-content">
                            <a href="/admin/profile">View Profile</a>
                            <a href="/admin/editprofile">Edit Profile</a>
                            <a href="/admin/changepassword">Change Password</a>
                        </div>
                    </div>
                    <Link to={"/admin/aboutus"}><button className={"products"}><i className="fa-regular fa-address-card"></i>About Us</button></Link>
                    <Link to={"/admin/login"}><button className={"products"}><i className="fa-solid fa-arrow-right"></i>Log Out</button></Link>

                </div>
            </div>
            <div className={"aa-display"}>
                <h2>About Us</h2>
                <p>If you are looking for a website that offers the very best online shopping in Nepal, choose LUGA HUB. We are a trusted and easy to use shopping site that offers a surprising, and exciting, range of top quality products, at affordable prices.
                    LUGA HUB is easy to use and we provide a level of customer service that we believe is second to none. Our aim is to make LUGA HUB people’s first choice when they are looking for top quality and affordable online shopping in Nepal.</p>
                <h3>LUGA HUB-your best choice for online shopping in Nepal</h3>
                <p>We have designed each and every aspect of our service with you, our customer, in mind:</p>
                <h3>Products:</h3>
                <p>We offer the widest range of products, in a variety of categories including electronics, fashion, children's wear, home ware, furnishings, fitness, outdoors and much, more. If you buying for yourself or wish to send a gift to someone in Nepal, we have a vast selection of suitable items available (we also offer a gift wrapping service, on request);</p>
                <h3>Customer Satisfaction:</h3>
                <p>As one of the largest websites offering online shopping in Nepal, we combine an extensive range of products with a commitment to 100% customer satisfaction. So,  if you have a problem with any aspect of the service you receive from us, simply get in touch and you can be confident that we will do everything we can to help;</p>
                <h3>Delivery:</h3>
                <p>We will provide you with a fast, trustworthy and reliable delivery service regardless of where you live in Nepal. Our charges are reasonable and our order tracking service allows you to see when your order will be delivered. In addition, we offer free delivery to our customers in Kathmandu. If you would prefer to collect your purchases in person from our store, simply contact us now on 9860929065 to find out more about our free Scheduled Collection Service;</p>
                <h3>Website:</h3>
                <p>Our website makes it easy for you to find the products you require and can be accessed using a PC, laptop, tablet or smartphone, 24 hours a day, 365 days a year;</p>
                <h3>Pricing:</h3>
                <p>LUGA HUB makes online shopping in Nepal the ideal way to find quality products at low prices. We source quality products carefully, buy in bulk and pass on our savings to you, in the form of lower prices and great discounts;</p>
                <h3>Returns:</h3>
                <p>Our 'refund or replace' returns policy allows you to buy in complete confidence;</p>
            </div>
        </div>
    )
}
export default AdminAu;
