import React, { useState } from 'react';
import { IoLocationOutline, IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import emailjs from 'emailjs-com'; // Import EmailJS
import csscontact from'./ContactUs.module.css';
 
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
    });
    const [message, setMessage] = useState('');
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
 
        // EmailJS configuration (ensure these values are correct)
        const serviceID = 'service_4yijmf2';
        const templateID = 'template_cvpt0us';
        const userID = 'afq4Z-6cPPdO6KD9B';
 
        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage('Your message has been sent!');
                setFormData({ name: '', email: '', website: '', comment: '' }); // Reset form
            }, (err) => {
                console.log('FAILED...', err);
                setMessage('Failed to send your message. Please try again.');
            });
    };
 
    return (
        <section className={csscontact.contact_us} id="contact">
            <div className={csscontact.contact_container}>
                <div className={csscontact.contact_row}>
                    <div className={csscontact.contact_col_6}>
                        <div className={csscontact.herotext}>
                            <h6>Get In Touch</h6>
                            <h2>Talk or Meet with Us</h2>
                        </div>
                        <address className={` ${csscontact.clearfix} ${csscontact.d_flex} ${csscontact.align_items_center} ${csscontact.pb_2}`}>
                            <div className={csscontact.icon}>
                                <IoLocationOutline />
                            </div>
                            <div className={csscontact.detail}>
                                <div className={csscontact.heading}>Get Us Here</div>
                                B 340 Kanta Khaturia Colony,<br />
                                Bikaner Rajasthan, 334003, India<br />
                            </div>
                        </address>
                        <address className={` ${csscontact.clearfix} ${csscontact.d_flex} ${csscontact.align_items_center}`}>
                            <div className={csscontact.icon}>
                                <IoCallOutline />
                            </div>
                            <div className={csscontact.detail}>
                                <div className={csscontact.heading}>Call Us</div>
                                <a href="tel:+917597373091" target="_blank" rel="noopener noreferrer">+91 7597373091</a>

                              
                            </div>
                        </address>
                        <address className={` ${csscontact.clearfix} ${csscontact.d_flex} ${csscontact.align_items_center}`}>
                            <div className={csscontact.icon}>
                                <IoMailOpenOutline />
                            </div>
                            <div className={csscontact.detail}>
                                <div className={csscontact.heading}>Write Us</div>
                                <a href="mailto:ppcpl2005@gmail.com" target="_blank" rel="noopener noreferrer">ppcpl2005@gmail.com</a>

                            </div>
                        </address>
                    </div>
                    <div className={`${csscontact.contact_col_6} ${csscontact.pt_5} ${csscontact.pt_lg_0}`}>
                        <div className={`${csscontact.herotext} ${csscontact.pb_4}`}>
                            <h6>Estimate Project</h6>
                            <h2>Let Us Know Here</h2>
                        </div>
                        <form onSubmit={handleSubmit} id="ContactForm">
                            <div className={csscontact.mb_3}>
                                <input
                                    type="text"
                                    className={csscontact.form_control}
                                    name="name"
                                    placeholder="Enter your name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                           
                            <div className={csscontact.mb_3}>
                                <input
                                    type="email"
                                    className={csscontact.form_control}
                                    name="email"
                                    placeholder="Enter your email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={csscontact.mb_3}>
                                <input
                                    type="Phone"
                                    className={csscontact.form_control}
                                    name="phone"
                                    placeholder="Phone *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={csscontact.mb_3}>
                                <input
                                    className={`${csscontact.form_control} ${csscontact.message_box}`}
                                    name="comment"
                                    placeholder="Enter your message "
                                    rows="3"
                                    value={formData.comment}
                                    onChange={handleChange}
                                
                                ></input>
                            </div>
                            {message && <div id="message_post">{message}</div>}
                            <button type="submit" className={`${csscontact.btn} ${csscontact.btn_primary} ${csscontact.mt_3}`}>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
 
export default ContactUs;
 