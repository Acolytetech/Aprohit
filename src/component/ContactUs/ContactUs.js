import React, { useState } from 'react';
import { IoLocationOutline, IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        comment: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form processing logic here (e.g., sending data to the server)
        console.log(formData);
        setMessage('Your message has been sent!'); // Display success message
        setFormData({ name: '', email: '', website: '', comment: '' }); // Reset form
    };

    return (
        <section className="contact-us" id="contact">
            <div className="contact-container">
                <div className="contact-row">
                    <div className="contact-col-6">
                        <div className="herotext pb-4">
                            <h6>Get In Touch</h6>
                            <h2>Talk or Meet with Us</h2>
                        </div>
                        <address className="clearfix d-flex align-items-center pb-2">
                            <div className="icon">
                                <IoLocationOutline />
                            </div>
                            <div className="detail">
                                <div className="heading">Get Us Here</div>
                                B 340 Kanta Khaturia Colony,<br />
                                Bikaner Rajasthan, 334003, India<br />
                            </div>
                        </address>
                        <address className="clearfix d-flex align-items-center pb-2">
                            <div className="icon">
                                <IoCallOutline   />
                            </div>
                            <div className="detail">
                                <div className="heading">Call Us</div>
                               +91 7597373091
                            </div>
                        </address>
                        <address className="clearfix d-flex align-items-center">
                            <div className="icon">
                                <IoMailOpenOutline />
                            </div>
                            <div className="detail">
                                <div className="heading">Write Us</div>
                                <a href="ppcpl2005@gmail.com " target="_blank" rel="noopener noreferrer">
                                ppcpl2005@gmail.com 
                                </a>
                            </div>
                        </address>
                    </div>
                    <div className="contact-col-6 pt-5 pt-lg-0">
                        <div className="herotext pb-4">
                            <h6>Estimate Project</h6>
                            <h2>Let Us Know Here</h2>
                        </div>
                        <form onSubmit={handleSubmit} id="ContactForm">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter your name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter your email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="website"
                                    placeholder="Enter your website"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    name="comment"
                                    placeholder="Enter your message *"
                                    rows="3"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            {message && <div id="message_post">{message}</div>}
                            <button type="submit" className="btn btn-primary mt-3">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
