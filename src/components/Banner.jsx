import React from 'react';
import Navbar from './Navbar';
import man from "../images/man-01.png"
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaPlay } from "react-icons/fa"

const Banner = () => {
    return (
        <div className="banner">
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="banner__content">
                            <div className="banner__content__first">
                                <ul className="banner__ul">
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /> </li>
                                    <li><FaPinterest /></li>
                                    <li><FaInstagram /> </li>
                                </ul>
                                <h1>I am Jonathan Doe</h1>
                                <p>I am Abdullah, professional Web Developer with long time experience</p>
                                <div className="banner__btn">
                                    <a href="" className="btn btn-outline">My Portfolio</a>
                                    
                                    <a href="" className="btn btn-smart"><FaPlay className="play"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={man} alt=""/>
                        </div>
      
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;