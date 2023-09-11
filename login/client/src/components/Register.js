import React from 'react';
import Avatar from "../assets/user.png"
import { Link } from "react-router-dom";
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'

import { registerValidation } from '../helper/validate';
export default function Register() {

    const formik = useFormik({
        initialValues: {
            email:'',
            username:'',
            password:''
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            console.log(values)
        }
    })
    return(
        
        <div className="container mx-auto">

<Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="flex justify-center items-center h-screen">
            <div className={styles.glass} style={{paddingTop: "1em", height: "700px"}}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold text-gray-500">Karibu TLS</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Sheria Mkononi!
                        </span>
                        <form className="py-1" onSubmit={formik.handleSubmit}>
                            <div className="profile flex justify-center py-4">
                                <img src= {Avatar} className={styles.profile_img} alt="Avatar"/>
                            </div>

                            <div className="textbox flex flex-col items-center gap-6">
                                <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder="Email"/>
                                <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder="Username"/>
                                <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder="Password"/>


                                <button className={styles.btn} type="submit">Register</button>
                            </div>

                            
                            <div className="text-center py-4">
                                <span className="text-gray-500">
                                    Already registered? <Link className="text-yellow-900" to="/username">Login now</Link>
                                </span>
                            </div>

                            

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}
