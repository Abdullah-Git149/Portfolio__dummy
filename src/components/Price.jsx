import React, { useState } from 'react';

const Price = () => {
    const [priceData] = useState([
        {
            id: 1,
            heading: "Basic",
            price: 50,
            msg1: "5GB Storage Space",
            msg2: "20GB Monthly Bandwidth",
            msg3: "My SQL Databases",
            msg4: "100 Email Account",
            msg5: "10 Free Domain Names"
        },
        {
            border:true,
            id: 2,
            heading: "Standard",
            price: 80,
            msg1: "5GB Storage Space",
            msg2: "20GB Monthly Bandwidth",
            msg3: "My SQL Databases",
            msg4: "100 Email Account",
            msg5: "10 Free Domain Names"
        },
        {
            id: 3,
            heading: "Basic",
            price: 50,
            msg1: "5GB Storage Space",
            msg2: "20GB Monthly Bandwidth",
            msg3: "My SQL Databases",
            msg4: "100 Email Account",
            msg5: "10 Free Domain Names"
        },

    ])
    return (
        <div className="price">
            <div className="container">
                <div className="price__header">
                    <div className="common">
                        <h3>CHOOSE A PLAN</h3>
                        <h1 className="h1">Pricing Plan</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum standard dummy text.</p>
                        <div className="border"></div>
                    </div>
                </div>
                <div className="priece__header2">
                    <div className="row">
                        {priceData.map((data) => (
                            <div className="col-4">
                                <div className={`price__card ${data.border && "add__border"}`} id={data.id}>
                                    <div className="price_card__heading">{data.heading}</div>
                                    <div className="price__card__rs"><span>$</span>{data.price}</div>
                                    <ul>
                                        <li>{data.msg1}</li>
                                        <li>{data.msg2}</li>
                                        <li>{data.msg3}</li>
                                        <li>{data.msg4}</li>
                                        <li>{data.msg5}</li>

                                    </ul>
                                    <div className="price__btn">
                                        <a href="" className={`btn btn-outline ${data.border && "btn__new"}`}>Purchase</a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Price;