import React from 'react';

const Services = () => {
    return (
        <div className="bg-secondary p-5 mt-4 mb-4">
            <h2 className="pb-3">Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <div class ="card-body">
                        <h5 class ="card-title">Medical Services</h5>
                        <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        
                        <div class ="card-body">
                        <h5 class ="card-title">Home Services</h5>
                        <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        
                        <div class ="card-body">
                        <h5 class ="card-title">Cash on delivery</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;