import "../assets/css/AdminLogin.css";
import { Link } from "react-router-dom";

const AdminLogin: React.FC = () => {
    return (
        <div className={"al-container"}>
            <div className={"al-form"}>
                <div className={"al-header"}>
                    <div className={"al-logo"}>
                        <img
                            src={"../images/Logo.png"}
                            alt={"loginlogo"}
                        />
                    </div>
                    <div className={"al-text"}>
                        <h1>Login</h1>
                    </div>
                </div>
                <div className={"al-body"}>
                    <input type={"text"} placeholder={"Username"} />

                    <input type={"password"} placeholder={"Password"} />


                </div>
                <div className={"al-footer"}>
                    <div className="al-forgot">
                        <label>
                            <input type="checkbox" name="remember_me" /> Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <div className={"al-btn"}>
                        <button>Login</button>
                    </div>
                    <div className={"al-link"}>
                        <label>Don't have an account?</label> <Link to="/admin/register">Register</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminLogin;
