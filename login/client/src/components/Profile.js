import React from 'react';
import Avatar from "../assets/user.png"
import { Link } from "react-router-dom";
import styles from '../styles/Username.module.css'
import extend from '../styles/Profile.module.css'

import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'

import { profileValidation } from '../helper/validate';
export default function Profile() {

    const formik = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            email:'',
            address:'',
            mobile:''
        },
        validate: profileValidation,
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
            <div className={`${styles.glass} ${extend.glass}`} style={{paddingTop: "1em", width: "40%"}}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold text-gray-900">Profile</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-900">
                            You can update your details
                        </span>
                        <form className="py-1" onSubmit={formik.handleSubmit}>
                            <div className="profile flex justify-center py-4">
                                <img src= {Avatar} className={`${styles.profile_img} ${extend.profile_img}`} alt="Avatar"/>
                            </div>

                            <div className="textbox flex flex-col items-center gap-6">
                            <div className="name flex w-3/4 gap-10">
                            <input {...formik.getFieldProps('firstname')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder="First name"/>
                                <input {...formik.getFieldProps('lastname')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder="Last name"/>
                                </div>
                                <div className="name flex w-3/4 gap-10">
                            <input {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder="Mobile No"/>
                                <input {...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder="Email"/>
                                </div>
                                

                             
                                <input {...formik.getFieldProps('address')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder="Address"/>


                                <button className={styles.btn} type="submit">Update details</button>
                            </div>

                            
                            <div className="text-center py-4">
                                <span className="text-gray-900">
                                    Continue later? <Link className="text-yellow-900" to="/username">Logout</Link>
                                </span>
                            </div>

                            

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}
