import "../assets/css/AdminRegister.css";
import {Link} from "react-router-dom";
function AdminRegister() {
    return (
        <div className={"ar-container"}>
            <div className={"ar-Signup-form"}>
                <div className={"ar-Head"}>
                    <img
                        src={"../images/logo.png"}
                        alt={"logo"}
                    />
                    <h1>Signup</h1>
                </div>
                <div className={"ar-Body"}>
                    <input type={"text"} placeholder={"First Name"} />
                    <input type={"text"} placeholder={"Last Name"} />
                    <input type={"email"} placeholder={"Email"} />
                    <input type={"password"} placeholder={"Password"} />
                    <input type={"password"} placeholder={"Confirm Password"} />


                </div>
                <div className={"ar-Footer"}>
                    <div className={"ar-checkbox"}>
                        <label>
                            <input type="checkbox" name="remember_me" /> I have read and accept the terms and conditions and privacy policy.
                        </label>
                    </div>
                    <div className={"ar-button"}>
                        <Link to="/admin/login"><button>Sign In</button></Link>
                        <button>Sign Up</button>
                    </div>



                </div>


            </div>

        </div>

    );
}

export default AdminRegister;