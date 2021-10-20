import React from 'react';
import './Testmonials.css'
const Testmonials = () => {
    return (
        <div className="testmonial">
            {/* <!-- Section: Testimonials v.3 --> */}
            <section class="team-section text-center my-5">

                {/* <!-- Section heading --> */}
                <p class="h1-responsive font-weight-bold ">Testimonials</p>
                <h2>What they say</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                {/* <!-- Section description --> */}

                {/* <!--Grid row--> */}
                <div class="row text-center">

                    {/* <!--Grid column--> */}
                    <div class="col-md-4 mb-md-0 mb-5">

                        <div class="testimonial">
                            {/* <!--Avatar--> */}
                            <div class="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" alt=""
                                    className="rounded-circle z-depth-1 img-fluid" />
                            </div>
                            {/* <!--Content--> */}
                            <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
                            <p class="font-weight-normal dark-grey-text">
                                <i class="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                            {/* <!--Review--> */}
                            <div class="orange-text">
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star-half-alt"> </i>
                            </div>
                        </div>

                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-md-4 mb-md-0 mb-5">

                        <div class="testimonial">
                            {/* <!--Avatar--> */}
                            <div class="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt=""
                                    className="rounded-circle z-depth-1 img-fluid" />
                            </div>
                            {/* <!--Content--> */}
                            <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                            <p class="font-weight-normal dark-grey-text">
                                <i class="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                            {/* <!--Review--> */}
                            <div class="orange-text">
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                            </div>
                        </div>

                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-md-4">

                        <div class="testimonial">
                            {/* <!--Avatar--> */}
                            <div class="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt=""
                                    className="rounded-circle z-depth-1 img-fluid" />
                            </div>
                            {/* <!--Content--> */}
                            <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                            <p class="font-weight-normal dark-grey-text">
                                <i class="fas fa-quote-left pr-2"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                            {/* <!--Review--> */}
                            <div class="orange-text">
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                                <i class="fas fa-star"> </i>
                                <i class="far fa-star"> </i>
                            </div>
                        </div>

                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

            </section>
            {/* <!-- Section: Testimonials v.3 --> */}
        </div>
    );
};

export default Testmonials;