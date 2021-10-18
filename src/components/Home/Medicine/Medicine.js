import React from 'react';
import './Medicine.css'
const Medicine = (props) => {
    const {medicine} =props;
    const { img, Medicinename, Rate, Medicineprice, Description} =medicine;
    return (
        <div className="medicine">
            <img src={img} alt="" width="400px" height="250px" />
            <h3>Name: {Medicinename}</h3>
            <h3>Rating: {Rate}</h3>
            <h5>Price: {Medicineprice}</h5>
            <p className="">Description: {Description}</p>
        </div>
    );
};

export default Medicine;