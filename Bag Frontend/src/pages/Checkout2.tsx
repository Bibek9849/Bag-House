import React, {useState} from 'react';
import "../assets/css/Checkout2.css";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";

const Checkout2: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset  // Add the reset function from react-hook-form
    } = useForm();

    const apiCall = useMutation({
        mutationKey: ["POST_Customer_details"],
        mutationFn: (payload: any) => {
            console.log(payload);
            return axios.post("http://localhost:8082/customer/save", payload, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        },
        onSuccess: () => {
            // Clear the form fields after successful submission
            reset();
        }
    });

    const onSubmit = (values: any) => {
        setShowOrderDetails(true);
        apiCall.mutate(values);
    }
    const [showOrderDetails, setShowOrderDetails] = useState(false);

    return (
        <div className={"c2-container"}>
            <div className={"c2-header"}>

                <div className={"c2-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"../images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"c2-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"c2-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"c2-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"c2-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>


            </div>
            <div className={"c2-body"}>
                <div className={"c2-adddelivery"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={"c2-addressform"}>
                        <div className={"c2-firstrow"}>
                            <label>Full Name</label>
                            <input type={"text"} placeholder={"Full Name"}  {...register("customerName")} />
                            <label>Mobile Number</label>
                            <input type={"number"} placeholder={"Mobile Number"}  {...register("customerNumber")} />
                            <label>Province</label>
                            <input type={"text"} placeholder={"Province"}   {...register("customerProvince")}/>
                            <label>City</label>
                            <input type={"text"} placeholder={"City"}  {...register("customerCity")} />
                        </div>
                        <div className={"c2-secondrow"}>
                            <label>Area</label>
                            <input type={"text"} placeholder={"Area"}  {...register("customerArea")} />
                            <label>Address</label>
                            <input type={"text"} placeholder={"House no/building/street/area"}  {...register("customerAddress")} />
                            <label>Landmark</label>
                            <input type={"text"} placeholder={"Landmark"}  {...register("customerLandmark")}/>
                        </div>
                    </div>
                    </form>
                    <div className={"order_details"}>
                        <div className={"summary"}>
                            <h3>Order Summary</h3>
                        </div>
                        <div className={"title"}>
                            <div className={"total"}>
                                <label>Items Total</label>
                                <p>Rs.9000</p>
                            </div>
                            <div className={"delivery"}>
                                <label>Delivery Charge</label>
                                <p>Rs.200</p>
                            </div>
                            <div className={"g-total"}>
                                <label>Grand Total</label>
                                <p>Rs.9200</p>
                            </div>
                        </div>
                        <div className={"place-order"}>
                            <button>Place Order</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className={"c2-footer"}>
                <div className={"c2-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"c2-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>




                </div>
                <div className={"c2-logos"}>
                    <span>Connect with us:</span>
                    <a href="https://www.facebook.com/profile.php?id=61555012223662&is_tour_dismissed=true"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"../images/fb.png"}
                            alt="Facebook"
                        />
                    </a>

                    <a href="https://www.instagram.com/luga.hub69/"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"../images/insta.png"}
                            alt="Facebook"
                        />
                    </a>
                    <a href="https://www.threads.net/@luga.hub69"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"../images/thread.png"}
                            alt="X"
                        />
                    </a>


                </div>

            </div>
        </div>

    );
};

export default Checkout2;
