import React from 'react';

const Restaurant = props => {
    const {
        name,
        cuisine,
        costForTwo,
        minOrder,
        deliverytTime,
        payment_methods: { card, cash },
        rating,
        votes,
        reviews,
        src
    } = props.data
    return (
        <div style ={{marginLeft : "30px"}}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "2px solid black",
                    width: "650px",
                    lineHeight: 0.8,
                    backgroundColor : "whitesmoke"
                }}>
                <img style={{ margin: "13px" }} width="250px" height="210px" src={src} alt={name} />
                <div>
                    <p style={{ color: "red" }}>
                        <h2>{name}</h2>
                    </p>
                    <p style = {{width : "250px"}}>
                        {cuisine.join(", ")}
                    </p>
                    <p>
                        Cost ₹ {costForTwo} For One
                    </p>
                    <h4>
                        Min ₹ {minOrder} - Up to {deliverytTime} Min
                    </h4>
                    {cash && card ? (
                        <h4>Accepts : All </h4>
                    ) : card ? (
                        <h4>Accepts : Card</h4>
                    ) : (
                        <h4>Accepts : Cash</h4>
                    )}
                </div>
                <div style = {{width : "120px"}}>
                    <h3 style={{ border: "1px solid black", padding: "3px",marginLeft: "80px", borderRadius: "5px", backgroundColor: "#5DC94E", marginRight: "5px"}}>{rating}</h3>
                    <p style={{ marginLeft: "45px" }}>{votes} Votes</p>
                    <p style={{ marginLeft: "30px" }}>{reviews} reviews</p>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "2px solid black",
                    width: "150px",
                    height: "40px",
                    marginBottom: "30px",
                    borderTop: 0,
                    paddingLeft: "500px",
                    paddingTop: "10px",
                    fontSize: "20px",
                    color: "green"
                }}>
                Order Online >
            </div>
        </div>
    )
}

export default Restaurant;