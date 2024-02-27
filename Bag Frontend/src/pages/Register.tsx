import "../assets/css/Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

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

    return (
        <div className={"register-container"}>
            <div className={"r-Signup-form"}>
                <div className={"r-Head"}>
                    <img
                        src={"images/logo.png"}
                        alt={"logo"}
                    />
                    <h1>Signup</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={"r-Body"}>
                        <input type={"text"} placeholder={"First Name"} {...register("firstName", {required: true})} />
                        <input type={"text"} placeholder={"Last Name"} {...register("lastName", {required: true})} />
                        <input type={"email"} placeholder={"Email"} {...register("email", {required: true})} />
                        <input type={"password"} placeholder={"Password"} {...register("password", {required: true})} />
                        <input type={"password"} placeholder={"Confirm Password"} {...register("confirmPassword", {required: true, validate: value => value === getValues().password || "Passwords do not match"})} />
                        {(errors.firstName || errors.lastName || errors.email || errors.password || errors.confirmPassword) && (
                            <span>All fields are required</span>
                        )}
                    </div>
                    <div className={"r-Footer"}>
                        <div className={"r-button"}>
                            <button type="submit">Sign Up</button>
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
