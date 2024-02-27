import KhaltiCheckout from "khalti-checkout-web";
import "../assets/css/Paymentmethod.css";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import React, { useState,useEffect } from 'react';
import {useMutation, useQuery} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Paymentmethod: React.FC = () => {
    useEffect(() => {
        const config = {
            publicKey: "test_public_key_05afe3fd65ff4325aa0d83aca9c4566d",
            productIdentity: '1234567890',
            productName: 'tshirt',
            productUrl: 'http://lugahub.com/buy/tshirt',
            eventHandler: {
                onSuccess: (payload) => {
                    console.log('Payment successful:', payload);
                    toast.success('Payment successful'); // Show toast on success
                },
                onError: (error) => {
                    console.error('Payment error:', error);
                    toast.error('Payment error'); // Show toast on error
                },
                onClose: () => {
                    console.log('Widget is closing');
                },
            },
            paymentPreference: ['KHALTI', 'EBANKING', 'MOBILE_BANKING', 'CONNECT_IPS', 'SCT'],
        };

        const checkout = new KhaltiCheckout(config);
        const btn = document.getElementById('payment-button');

        if (btn) {
            btn.onclick = () => {
                // Minimum transaction amount must be 10, i.e., 1000 in paisa.
                checkout.show({ amount: calculatedGrandTotal() });
            };
        }
    }, []);
    const [isConfirmPurchaseVisible, setConfirmPurchaseVisible] = useState(false);

    // Function to handle the click on the Cash On Delivery container
    const handleCashClick = () => {
        // Toggle the visibility of the Confirm Purchase container
        setConfirmPurchaseVisible(true);
    };
    const calculatedSubtotal = () => {
        // Assuming data is an array of items with a property itemTotalPrice
        const subtotal = data?.data.reduce((acc, item) => acc + (item.quantity * item.item.itemPerPrice), 0);
        return subtotal || 0;
    };

    const calculatedGrandTotal = () => {
        // Assuming delivery charge is a fixed value of Rs. 200
        const deliveryCharge = 100;
        const grandTotal = calculatedSubtotal() + deliveryCharge;
        return grandTotal || 0;
    };
    const {data}=useQuery({
        queryKey:["GET_Cart-ITEM_ALL"],
        queryFn(){
            return axios.get("http://localhost:8082/cart/getAll")
        }
    })
    const userId = localStorage.getItem("userId");

    const {data:cartdata,refetch}=useQuery({
        queryKey:["GET_Cart-ITEM_BY_USERID",userId],
        queryFn(){
            return axios.get(`http://localhost:8082/cart/getByUserId/${userId}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        }
    })
    const apiCall=useMutation({
        mutationKey:["POST_order_ITEM"],
        mutationFn:(payload)=>{
            console.log(payload);
            return axios.post("http://localhost:8082/order/save", payload, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        }
    })
    const handleButtonClick = async () => {
        const payload = {
        };
        await apiCall.mutate(payload);
    }


    return (
        <div className={"payment-container"}>
            <div className={"payment-header"}>

                <div className={"payment-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"../images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"payment-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"payment-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"payment-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"payment-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    <Link to="/myaccount"><button>My Account</button></Link>
                    <Link to="/"><button>Sign Out</button></Link>
                </div>
            </div>
            <div className={"payment-body"}>
                <div className={"payment-main"}>
                    <div className={"payment-method"}>
                        <div className={"select"}>
                            <label>Select Payment Method</label>
                        </div>
                        <div className={"cash"} onClick={handleCashClick}>
                            <img src={"../images/COD.png"} alt={"cashondelivery"} width={100}/>
                            <p>Cash On Delivery</p>
                        </div>
                        <div id="payment-button" className={"khalti"}>
                            <img src={"../images/khalti.jpg"} alt={"khalti"} width={100}/>
                            <p>Khalti Digital Wallet</p>
                            <button id="payment-button"></button>

                        </div>
                    </div>
                    {isConfirmPurchaseVisible && (
                        <div className={"confirm-order"}>
                            <p>Cash transactions are accommodated by our courier at the time of delivering the goods to your doorstep.</p>
                            <button>Confirm Purchase</button>
                        </div>
                    )}
                    <div className={"order-summary"}>
                        <h1>Order Summary</h1>
                        <div className={"total"}>
                            <label>Total Price</label>
                            <p>Rs.{calculatedGrandTotal()}</p>
                        </div>
                    </div>
                    <ToastContainer/>
                </div>
            </div>
            <div className={"payment-footer"}>
                <div className={"payment-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"payment-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>




                </div>
                <div className={"payment-logos"}>
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
export default Paymentmethod;

// import React, { useEffect } from 'react';
// import KhaltiCheckout from 'khalti-checkout-web';
//
// const Paymentmethod: React.FC = () => {
//     useEffect(() => {
//         let config = {
//             // replace this key with yours
//             publicKey: 'test_public_key_dc74e0fd57cb46cd93832aee0a390234',
//             productIdentity: '1234567890',
//             productName: 'Drogon',
//             productUrl: 'http://gameofthrones.com/buy/Dragons',
//             eventHandler: {
//                 onSuccess(payload) {
//                     console.log(payload);
//                 },
//                 // onError handler is optional
//                 onError(error) {
//                     // handle errors
//                     console.log(error);
//                 },
//                 onClose() {
//                     console.log('widget is closing');
//                 },
//             },
//             paymentPreference: ['KHALTI', 'EBANKING', 'MOBILE_BANKING', 'CONNECT_IPS', 'SCT'],
//         };
//
//         let checkout = new KhaltiCheckout(config);
//         let btn = document.getElementById('payment-button');
//         btn.onclick = function () {
//             // minimum transaction amount must be 10, i.e 1000 in paisa.
//             checkout.show({ amount: 1000 });
//         };
//     }, []); // Empty dependency array ensures this effect runs once after initial render
//
//     return (
//         <div className="payment-container">
//             <button id="payment-button">Pay now</button>
//         </div>
//     );
// };
//
// export default Paymentmethod;
// import React, { useEffect } from 'react';
// import KhaltiCheckout from 'khalti-checkout-web';
//
// const PaymentMethod: React.FC = () => {
//     useEffect(() => {
//         const config = {
//             // Replace this key with your actual Khalti public key
//             publicKey: 'your_actual_public_key_here',
//             productIdentity: '1234567890',
//             productName: 'Drogon',
//             productUrl: 'http://gameofthrones.com/buy/Dragons',
//             eventHandler: {
//                 onSuccess: (payload) => {
//                     console.log('Payment successful:', payload);
//                 },
//                 onError: (error) => {
//                     console.error('Payment error:', error);
//                 },
//                 onClose: () => {
//                     console.log('Widget is closing');
//                 },
//             },
//             paymentPreference: ['KHALTI', 'EBANKING', 'MOBILE_BANKING', 'CONNECT_IPS', 'SCT'],
//         };
//
//         const checkout = new KhaltiCheckout(config);
//         const btn = document.getElementById('payment-button');
//
//         if (btn) {
//             btn.onclick = () => {
//                 // Minimum transaction amount must be 10, i.e., 1000 in paisa.
//                 checkout.show({ amount: 1000 });
//             };
//         }
//     }, []); // Empty dependency array ensures this effect runs once after initial render
//
//     return (
//         <div className="payment-container">
//             <button id="payment-button">Pay now</button>
//         </div>
//     );
// };
//
// export default PaymentMethod;
//
