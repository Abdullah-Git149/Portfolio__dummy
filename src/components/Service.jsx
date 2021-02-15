import React, { useState } from 'react';
import { FaCamera, FaGithub, FaConnectdevelop, FaAppleAlt, FaFileVideo, FaSearchPlus } from 'react-icons/fa';

const Service = () => {
    const [serviceData] = useState([
        {
            id: 1,
            icon: <FaGithub />,
            heading: "Web Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
            Explicabo, atque error? Odit, quas tenetur vel beatae"
        },
        {
            id: 2,
            icon: <FaCamera />,
            heading: "PhotoGraphy",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
            Explicabo, atque error? Odit, quas tenetur vel beatae"
        },
        {
            id: 3,
            icon: <FaConnectdevelop />,
            heading: "Web Design",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
            Explicabo, atque error? Odit, quas tenetur vel beatae"
        },
        {
            id: 4,
            icon: <FaAppleAlt />,
            heading: "App Developing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
            Explicabo, atque error? Odit, quas tenetur vel beatae"
        },
        {
            id: 5,
            icon: <FaFileVideo />,
            heading: "Video Editing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
            Explicabo, atque error? Odit, quas tenetur vel beatae"
        },
        {
            id: 6,
            icon: <FaSearchPlus />,
            heading: "SEO Expart",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
            Explicabo, atque error? Odit, quas tenetur vel beatae"
        }
    ])
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3>SERVICES</h3>
                        <h1>My Servies</h1>
                        <p>Lorem ipsum dolor sigendi minus cum. Quos quod quo, porro id eaque voluptate dolorem</p>
                        <div className="border"></div>
                    </div>
                </div>

                <div className="row">
                    {
                        serviceData.map((data) => (

                            <div className="col-4">
                                <div id={data.id}>
                                    <div className="service__box">  
                                        <ul className="icon"><li>{data.icon}</li></ul>
                                        <div className="service__box__heading">{data.heading}</div>
                                        <div className="service__box__p">{data.text} </div>

                                    </div>
                                </div>
                            </div>


                        ))
                    }


                    {/* <div className="col-4">
                        <div className="service__box">
                            <FaGithub className="icon" />
                            <div className="service__box__heading">Web Developer</div>
                            <div className="service__box__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo, atque error? Odit, quas tenetur vel beatae </div>

                        </div>
                    </div>

                    <div className="col-4">
                        <div className="service__box">
                            <FaGithub className="icon" />
                            <div className="service__box__heading">Web Developer</div>
                            <div className="service__box__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo, atque error? Odit, quas tenetur vel beatae </div>

                        </div>
                    </div>

                    <div className="col-4">
                        <div className="service__box">
                            <FaGithub className="icon" />
                            <div className="service__box__heading">Web Developer</div>
                            <div className="service__box__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo, atque error? Odit, quas tenetur vel beatae </div>

                        </div>
                    </div>

                    <div className="col-4">
                        <div className="service__box">
                            <FaGithub className="icon" />
                            <div className="service__box__heading">Web Developer</div>
                            <div className="service__box__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo, atque error? Odit, quas tenetur vel beatae </div>

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Service;