import {Link} from "react-router-dom";
import "../assets/css/Users.css";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
function Users() {
    const {data}=useQuery({
        queryKey:["GET_ITEM_ALL"],
        queryFn(){
            return axios.get("https://40.88.27.240:8082/user/getAll", {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            })
        }
    })
    return (
        <div className={"u-container"}>
            <div className={"u-buttons"}>
                <div className={"u-top"}>
                    <a href="/admin/products">
                        <img src={"../images/Logo.png"}
                             width={100}
                             alt={"logo"}
                        />

                    </a>
                    <span>Bag House</span>
                </div>
                <div className={"u-btn"}>
                    <div className="ap-dropdown">
                        <button className="ap-dropbtn"><i className="fa-solid fa-clipboard"></i>Bag Details<i className="fa-solid fa-caret-down" style={{ marginLeft: '57px' }}></i></button>
                        <div className="ap-dropdown-content">
                            <a href="/admin/products">View Bag</a>
                            <a href="/admin/addproduct">Add Bag</a>

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
                    
                </div>
            </div>
            <div className={"u-display"}>
                <h2>Total Users</h2>
                <table   id="productTable">
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.data.map((i) => (
                        <tr>
                            <td><p>{i?.id}</p></td>
                            <td><p>{i?.firstName}</p></td>
                            <td ><p>{i?.lastName}</p></td>
                            <td ><p>{i?.email}</p></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Users;
