import {Link, useNavigate, useParams} from "react-router-dom";
import "../assets/css/AddCategory.css";
import {useForm} from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useMutation,useQuery} from "@tanstack/react-query";

function AddCategory() {
    const { id_p } = useParams();
    console.log(id_p)
    const { data: dataById } = useQuery({
        queryKey: ['GETBYID'],
        queryFn() {
            return axios.get(`https://40.88.27.240:8082/brand/getById/${id_p}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            });
        },
        enabled: !!id_p,
    });

    const navigate = useNavigate();
    const apiCall = useMutation({
        mutationKey: ["POST_ITEM"],
        mutationFn: (payload) => {
            console.log(payload);
            return axios.post("https://40.88.27.240:8082/brand/save", payload, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            });
        },
        onSuccess: () => {
            toast.success("Brand added successfully!", { autoClose: 4000 });
            resetForm();
        },
        onError: (error) => {
            setTimeout(() => {
                toast.error('Please fill all the fields!');
            }, 0); // Set the timeout to 4000 milliseconds (4 seconds)
        },
    });

    const { register, handleSubmit, reset: resetForm } = useForm({
        values: id_p ? dataById?.data : {},
    });

    const onSubmit = (values) => {
        apiCall.mutate(values);
    };

    return (
        <div className={"ab-container"}>
            <div className={"ab-buttons"}>
                <div className={"ab-top"}>
                    <img src={"../images/Logo.png"}
                         width={100}
                         alt={"logo"}
                    />
                    <span>Bag House</span>
                </div>
                <div className={"ab-btn"}>
                    <div className="ap-dropdown">
                        <button className="ap-dropbtn"><i className="fa-solid fa-clipboard"></i>Bag Details<i className="fa-solid fa-caret-down" style={{ marginLeft: '57px' }}></i></button>
                        <div className="ap-dropdown-content">
                            <a href="/admin/products">View Bag</a>
                            <a href="/admin/addproduct">Add Bag</a>

                        </div>
                    </div>
                    <div className="cgr-dropdown">
                        <button className="cgr-dropbtn"><i className="fa-solid fa-list"></i>Categories<i className="fa-solid fa-caret-down" style={{ marginLeft: '40px' }}></i></button>
                        <div className="cgr-dropdown-content">
                            <a href="/admin/viewcategory">View Category</a>
                            <a href="/admin/addcategory">Add Category</a>
                        </div>
                    </div>
                    <div className="brd-dropdown">
                        <button className="brd-dropbtn"><i className="fa-solid fa-tag"></i>Brands<i className="fa-solid fa-caret-down" style={{ marginLeft: '69px' }}></i></button>
                        <div className="brd-dropdown-content">
                            <a href="/admin/viewbrand">View Brand</a>
                            <a href="/admin/addbrand">Add Brand</a>
                        </div>
                    </div>
                    <Link to={"/admin/totalorders"}><button className={"products"}><i className="fa-solid fa-cart-shopping"></i>Total Orders</button></Link>
                    <Link to={"/admin/users"}><button className={"products"}><i className="fa-solid fa-users"></i>Users</button></Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"ab-display"}>
                <h2>Add Brand</h2>
                <input type={"text"} placeholder={"Enter Brand Name"}  {...register("brandName")} />
                <input className={"ab-desc"} type={"text"} placeholder={"Enter Brand Description"}  {...register("brandDescription")}/>
                <button type={"submit"}>Add Brand</button>
            </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default AddCategory;