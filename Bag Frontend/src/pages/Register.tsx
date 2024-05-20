import "../assets/css/Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
// import Baglogo  from "../../images/logo.png"

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function Register() {
    const apiCall = useMutation<void, Error, FormData>({
        mutationKey: ['POST_USER_REGISTER'],
        mutationFn: async (formData) => {
            try {
                const response = await axios.post('http://localhost:8082/user/save', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                return response.data;
            } catch (error) {
                throw new Error(error.response?.data || error.message);
            }
        },
        onError: (error) => {
            toast.error(`Error: ${error.message}`);
        },
    });

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormData>();
    console.log(errors)
    const onSubmit = async (data: FormData) => {
        try {
            await apiCall.mutateAsync(data);
            toast.success('Registration successful!');
            console.log('Registration successful');
            // Handle successful registration, e.g., redirect to login page
        } catch (error) {
            console.error('Error during registration', error);
        }
    };
console.log()
    console.log("registerpage")
    return (
        <div className={"register-container"}>
            <div className={"r-Signup-form"}>
                <div className={"r-Head"}>
                    <img
                        src={"images/Logo.png"}
                        alt={"logo"}
                    />
                    <h1>Register</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={"r-Body"}>
                        <input type={"text"} placeholder={"First Names"} {...register("firstName", {required: true})} />
                        {errors.firstName && <p className="error">{errors.firstName.type}</p>}
                        {errors.firstName?.message!=="" && <p className="error">{errors.firstName?.message}</p>}


                        <input type={"text"} placeholder={"Last Name"} {...register("lastName", {required: true})} />
                        {errors.lastName && <p className="error">{errors.lastName.type}</p>}
                        {errors.lastName?.message!=="" && <p className="error">{errors.lastName?.message}</p>}


                        <input type={"email"} placeholder={"Email"} {...register("email", {required: true})} />
                        {errors.email && <p className="error">{errors.email.type}</p>}
                        {errors.email?.message!=="" && <p className="error">{errors.email?.message}</p>}


                        <input type={"password"} placeholder={"Password"} {...register("password", {required: true})} />
                        {errors.password && <p className="error">{errors.password.type}</p>}
                        {errors.password?.message!=="" && <p className="error">{errors.password?.message}</p>}

                        <input type={"password"} placeholder={"Confirm Password"} {...register("confirmPassword", {required: true, validate: value => value === getValues().password || "Passwords do not match"})} />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword.type}</p>}
                        {errors.confirmPassword?.message!=="" && <p className="error">{errors.confirmPassword?.message}</p>}


                        
                    </div>
                    <div className={"r-Footer"}>
                        <div className={"r-button"}>
                            <button type="submit">Register</button>
                        </div>
                        <div className={"r-login-link"}>
                            <label>Already have an account?</label> <Link to="/Login">Login</Link>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;
