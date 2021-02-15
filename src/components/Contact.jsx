import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import pic from "../images/logo.png"

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__header">
                    <div className="common width75">
                        <div className="contact__img">
                            <img src={pic} alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                        <ul>
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                            <li><FaPinterest /></li>
                        </ul>
                     
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Contact;