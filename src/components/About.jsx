import React from 'react';
import pic from "../images/man2.png"

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about__header">
                    <div className="common">
                        <h1>About Me</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.
                             Lorem Ipsum standard dummy text.</p>
                        <div className="border"></div>
                    </div>
                </div>

                {/* About Second Section     */}

                <div className="row padding">
                    <div className="col-6">
                        <div className="about__img">
                            <img src={pic} alt="" />
                        </div>

                    </div>

                    <div className="col-6">
                        <div className="about__data">
                            <h1>Hi There</h1>
                            <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                            <p>nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                        </div>

                        <div className="about__data2">
                            <div className="col-6">
                                <strong> Name:</strong>
                                <p>Jonathan Doe</p>
                            </div>
                            <div className="col-6">
                                <strong>Email:</strong>
                                <p>example@domain.com</p>
                            </div>
                            <div className="col-6">
                               <strong>Phone:</strong>
                                <p>+1 023 454 345</p>
                            </div>
                            <div className="col-6">
                         <strong>Linkedin:</strong>
                                <p>Jonathan_123</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;