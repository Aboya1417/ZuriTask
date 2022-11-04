import React from "react";
import '../App.css';

function Contact() {
    return (

        <div className="Apps" >



            <div class="content">
                <div class="tab-pane active">
                    <div class="card">

                        <div class="card ">



                            <div class="card-body">
                                <div class="card-header">

                                    <h5 class="card-category text-center"><b>Contact Me</b></h5>
                                </div>

                                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                                <form class="row g-3">
                                    <div class="col-md-6">
                                        <label for="firstname" class="form-label">First Name</label>
                                        <input placeholder="Enter Your First Name" type="text" class="form-control" id="firstname" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="lastname" class="form-label">Last Name</label>
                                        <input placeholder="Enter Your Last Name" type="text" class="form-control" id="lastname" />
                                    </div>
                                    <div class="col-12">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="yourname@email.com" />
                                    </div>
                                    <div class="col-12">
                                        <label for="message" class="form-label">Message</label>
                                        <textarea type="text" class="form-control" id="message" placeholder="Send me a message and i'll reply as soon as possible.... " />
                                    </div>

                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                                            <label class="form-check-label" for="gridCheck">
                                                You agree to providing your data to Udo Bassey who may cantact you.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary form-control">Send Message</button>
                                    </div>
                                </form>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;