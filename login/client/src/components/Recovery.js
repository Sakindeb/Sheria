import React from 'react';
import Avatar from "../assets/user.png"
import { Link } from "react-router-dom";
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'

import { passwordValidate } from '../helper/validate';
export default function Recovery() {

    
    return(
        <div className="container mx-auto">

<Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="flex justify-center items-center h-screen">
                <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold text-gray-500">Get Password</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Enter OTP
                        </span>
                        <form className="pt-20">
                            
                        <span className='py-4 text-lg text-left text-gray-500'>
                      Enter OTP sent to your email address.
                    </span>

                            <div className="textbox flex flex-col items-center gap-6">
                                <input  className={styles.textbox} type="text" placeholder="6-digit OTP"/>
                                <button className={styles.btn} type="submit">Recover</button>
                            </div>

                            
                            <div className="text-center py-4">
                                <span className="text-gray-500">
                                    Cant get OTP?<button className="text-black-500">Resend</button>
                                </span>
                            </div>

                            

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}
