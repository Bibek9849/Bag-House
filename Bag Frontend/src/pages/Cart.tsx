import "../assets/css/Cart.css";
import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Cart: React.FC = () => {
    const calculateSubtotal = () => {
        // Assuming data is an array of items with a property itemTotalPrice
        const subtotal = data?.data.reduce((acc, item) => acc + (item.quantity * item.item.itemPerPrice), 0);
        return subtotal || 0;
    };

    const calculateGrandTotal = () => {
        // Assuming delivery charge is a fixed value of Rs. 200
        const deliveryCharge = 100;
        const grandTotal = calculateSubtotal() + deliveryCharge;
        return grandTotal || 0;
    };
    const userId = localStorage.getItem("userId");

    const {data,refetch}=useQuery({
        queryKey:["GET_Cart-ITEM_BY_USERID",userId],
        queryFn(){
            return axios.get(`http://localhost:8082/cart/getByUserId/${userId}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        }
    })

    const deleteApi = useMutation({
        mutationKey: ["DELETE-CART_ITEM"],
        mutationFn(id: number) {
            return axios.delete("http://localhost:8082/cart/deleteById/"+id, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        },
        onSuccess() {
            refetch();
            setTimeout(() => {
                toast.success('Item removed successfully!');
            }, 0);
        },
        onError(error) {
            toast.error(`Error deleting category: ${error.message}`);
        },
    });
    const handleDelete = (id: number) => {
        confirmAlert({
            title: (
                <div style={{ fontSize: '16px' }}>
                    Remove from cart
                </div>
            ),
            message: (
                <div style={{ fontSize: '14px' }}>
                    Are you sure you want to delete this item?
                </div>
            ),
            buttons: [
                {
                    label: (
                        <div style={{ fontSize: '12px' }}>
                            Cancel
                        </div>
                    ),
                    onClick: () => {
                        // No action on cancel or you can add a cancel action if needed
                    }
                },
                {
                    label: (
                        <div style={{ fontSize: '12px' }}>
                            Confirm
                        </div>
                    ),
                    onClick: () => deleteApi.mutate(id)

                }
            ]
        });
    };


    const checkoutApi=useMutation({
        mutationKey:["CHECKOUT_API"],
        mutationFn(payload){
            return axios.post("http://localhost:8082/order/saveAll",payload,{
                headers:{
                    "authorization":"Bearer "+localStorage.getItem("token")
                }
            })
        }
    })
    const [paymentMethodVisible, setPaymentMethodVisible] = useState(false);

    const handleCheckoutClick = () => {
        // Toggle the visibility of the payment method section
        setPaymentMethodVisible(!paymentMethodVisible);
    };


    const handleCheckout=(data)=>{

       let date =new Date()
console.log(data)
       const payload= data.map(i=>{
            return {
                userId:localStorage.getItem("userId"),
                itemId:i?.item?.id,
                deliveryStatus:"pending",
                deliveryTime:date.getTime(),
                deliveryDate: `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
                quantity:i?.quantity,
                size:i?.size,
                color:i?.color
            }
        })

        checkoutApi.mutate(payload,{
            onSuccess(res){
                console.log(res)
                window.location.href="/dashboard"
            },
            onError(err){
                console.log(err)
        }
        })

    }


    return (

        <div className={"c-container"}>
            <div className={"c-header"}>

                <div className={"c-logo"}>
                    <a href="/dashboard"> {/* Replace "/dashboard" with the actual URL of your dashboard page */}
                        <img
                            width={100}
                            src={"images/logo.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"c-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>
                <div className={"c-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"c-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"c-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <button><i className="fa-regular fa-heart"></i>Wishlist</button>
                    <Link to="/myaccount"><button>My Account</button></Link>
                    <Link to="/">
                        <button onClick={()=>{
                            localStorage.clear();
                            window.location.href="/login"
                        }}>Sign Out</button>
                    </Link>
                </div>
            </div>
            <div className={"c-body"}>
                <div className={"c-container"}>
                    <div className={"c-title"}>
                        <h2>My Cart</h2>
                    </div>

                    {data?.data.length > 0 ? (
                        <div className={"c-table"}>
                            <table>
                                <thead>
                                <tr>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data?.data.map((i) => (
                                    <tr key={i.id}>
                                        <td>
                                            <img src={"data:image/png;base64, " + i?.itemImage} width={100} alt={i?.itemName} />
                                        </td>
                                        <td><p>{i?.item.itemName}</p></td>
                                        <td><p>{i?.item.itemDescription}</p></td>
                                        <td><p>Rs. {i?.item.itemPerPrice}</p></td>
                                        <td><p>{i?.color}</p></td>
                                        <td><p>{i?.size}</p></td>
                                        <td><p>{i?.quantity}</p></td>
                                        <td><p>Rs. {i?.quantity * i?.item.itemPerPrice}</p></td>
                                        <td>
                                            <button className={"c-delete"} onClick={() => handleDelete(i?.id)}><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                    ) : (
                        <div className={"no-item"}>
                            <img src={"../images/empty-cart.png"} alt={"empty-cart"} width={100}/>
                            <p>There are no items in your cart.</p>
                            <Link to="/dashboard"><button>Continue Shopping</button></Link>
                        </div>
                    )}
                    {data?.data.length > 0 && (
                        <div className={"bill"}>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Subtotal:</th>
                                    <td><p>Rs. {calculateSubtotal()}</p></td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <th>Delivery Charge:</th>
                                    <td>Rs.100</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className="highlighted-row">
                                    <th>Grand Total:</th>
                                    <td>Rs. {calculateGrandTotal()}</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className={"proceed"}>
                                    <th></th>
                                    <td><button onClick={()=>handleCheckout(data?.data)}>Check Out</button></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    <ToastContainer autoClose={4000}/>
                </div>
            </div>
            <div className={"c-footer"}>
                <div className={"c-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"c-about-us"}>
                    <h1>LUGAHUB</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>




                </div>
                <div className={"c-logos"}>
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

export default Cart;
