import React from 'react';
import { Link } from 'react-router-dom';
import './Medicine.css'
const Medicine = (props) => {
    const {medicine} =props;
    const {key, img, Medicinename, Rate, Medicineprice, Description} =medicine;
    return (
        <div className="medicine pb-3">
            <img src={img} alt="" width="400px" height="250px" />
            <div className="text">
                <h3>Name: {Medicinename}</h3>
                <h3>Rating: {Rate}</h3>
                <h5>Price: {Medicineprice}</h5>
                <p className="">Description: {Description}</p>

                <Link to={`/Shop/${key}`}>
                    <button className="btn btn-secondary ">Medicine Details</button>
                </Link>

            </div>
            
        </div>
    );
};

export default Medicine;