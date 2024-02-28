import React, {useState} from 'react';
import "../assets/css/Addaddress.css";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";


const Addaddress: React.FC = () => {
    const calculateSubtotal = () => {
        const subtotal = data?.data.reduce((acc, item) => acc + (item.quantity * item.item.itemPerPrice), 0);
        return subtotal || 0;
    };
    const calculateGrandTotal = () => {
        // Assuming delivery charge is a fixed value of Rs. 200
        const deliveryCharge = 100;
        const grandTotal = calculateSubtotal() + deliveryCharge;
        return grandTotal || 0;
    };
    const {data}=useQuery({
        queryKey:["GET_Cart-ITEM_ALL"],
        queryFn(){
            return axios.get("http://localhost:8082/cart/getAll")
        }
    })
    const {id_p} =useParams();
    console.log(id_p)
    const { data: dataById } = useQuery({
        queryKey: ['GETBYID'],
        queryFn() {
            return axios.get(`http://localhost:8082/cart/getById/${id_p}`);
        },
        enabled: !!id_p,
    });
    const navigate= useNavigate()
    const {register,handleSubmit,reset} = useForm({
        values: id_p ? dataById?.data : {},
    });


    const api_Call = useMutation({
        mutationKey: ["POST_Customer_details"],
        mutationFn: (payload: any) => {
            console.log(payload);
            return axios.post("http://localhost:8082/customer/save", payload)
        },
        onSuccess: () => {
            reset();
        }
    });

    const onSubmit = (values: any) => {
        setShowOrderDetails(true);
        api_Call.mutate(values);
    }
    const [showOrderDetails, setShowOrderDetails] = useState(false);
    return (
        <div className={"address-container"}>
            <div className={"address-header"}>

                <div className={"address-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"../images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"address-btn_before"}>
                    <button>Bags</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"address-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"address-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"address-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>


                </div>


            </div>
            <div className={"address-body"}>
                <div className={"adddelivery"}>
                    <div className={"adddeliveryaddress"}>
                        <h2>Add Delivery Address</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={"addressform"}>
                        <div className={"firstrow"}>
                            <label>Full Name</label>
                            <input type={"text"} placeholder={"Full Name"}  {...register("customerName")} />
                            <label>Mobile Number</label>
                            <input type={"number"} placeholder={"Mobile Number"}  {...register("customerNumber")} />
                            <label>Province</label>
                            <input type={"text"} placeholder={"Province"}   {...register("customerProvince")}/>
                            <label>City</label>
                            <input type={"text"} placeholder={"City"}  {...register("customerCity")} />


                        </div>
                        <div className={"secondrow"}>
                            <label>Area</label>
                            <input type={"text"} placeholder={"Area"}  {...register("customerArea")} />
                            <label>Address</label>
                            <input type={"text"} placeholder={"House no/building/street/area"}  {...register("customerAddress")} />
                            <label>Landmark</label>
                            <input type={"text"} placeholder={"Landmark"}  {...register("customerLandmark")}/>
                            <button type={"submit"}>Save</button>
                        </div>

                    </div>

                    </form>
                    <div className={"continue"}>
                       <button onClick={() => setShowOrderDetails(true)}>Continue<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                {showOrderDetails && (
                    <div className={"order_details"} style={{ backgroundColor: 'white', marginLeft: '550px' }}>
                        <div className={"summary"}>
                            <h3>Order Summary</h3>
                        </div>
                        <div className={"title"}>
                            <div className={"total"}>
                                <label>Items Total</label>
                                <p>Rs.{calculateSubtotal()}</p>
                            </div>
                            <div className={"delivery"}>
                                <label>Delivery Charge</label>
                                <p>Rs.100</p>
                            </div>
                            <div className={"g-total"}>
                                <label>Grand Total</label>
                                <p>Rs. {calculateGrandTotal()}</p>
                            </div>
                        </div>
                        <div className={"place-order"}>
                            <Link to={"/check_out/payment"}><button>Place Order</button></Link>
                        </div>
                    </div>
                )}

            </div>
            <div className={"address-footer"}>
                <div className={"address-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"address-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>




                </div>
                <div className={"address-logos"}>
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
export default Addaddress;
