import React from "react";
import {Form, useForm} from "react-hook-form";
import "./Forms.css";

const Forms=()=>{
    const [registerSuccess,setRegisterSuccess]=React.useState(false);
    const {register,handleSubmit,formState:{errors}}=useForm();

    const onSubmit=(data)=>{
        console.log(data);
        setRegisterSuccess(true);
    };

    return(
        <div className="container">
            {registerSuccess&&(
                <div className="register">
                    <p>Registration Sucessful!!!</p>
                </div>
            )}

            <form className="forms" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">First Name:</label>
                <input type="text" name="firstName" {...register("firstName", {required:"First Name required!"})}/>
                {errors.firstName&&<p className="error">{errors.firstName.message}</p>}

                <label htmlFor="">Last Name:</label>
                <input type="text" name="lastName" {...register("lastName", {required:"Last Name required!"})}/>
                {errors.lastName&&<p className="error">{errors.lastName.message}</p>}

                <label htmlFor="">E-mail:</label>
                <input type="text" name="email" {...register("email", {required:"E-mail is required!",pattern:{value:/^\S+@\S+$/i,message:"Invalid Email"}})}/>
                {errors.email&&<p className="error">{errors.email.message}</p>}

                <label htmlFor="">Password:</label>
                <input type="password" name="passwords" {...register("passwords", {
                    required:"Password is required!",
                    minLength:{
                        value:5,
                        message:"Password must be 5 characters long!"
                    },
                    maxLength:{
                        value:20,
                        message:"Password must be 20 characters long!"
                    }
                })}/>
                {errors.passwords&&<p className="error">{errors.passwords.message}</p>}

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Forms;