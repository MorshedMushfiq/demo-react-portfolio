import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="contact_taital">My <span className="contact_taital_1">Contact</span></h1>
                        </div>
                    </div>
                    <div className="contact_section_2">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mail_section_1">
                                    <input type="text" className="mail_text" placeholder="Your Name" name="Your Name" />
                                    <input type="text" className="mail_text" placeholder="Your Email" name="Your Email" />
                                    <input type="text" className="mail_text" placeholder="Your Phone" name="Your Phone" />
                                    <textarea className="massage-bt" placeholder="Your Massage" rows="5" id="comment" name="Your Massage"></textarea>
                                    <div className="send_bt"><a href="#">Send Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project_box">
                <div className="container">
                    <div className="project_main">
                        <h1 className="hire_text">Hire me for your projects</h1>
                        <div className="callnow_bt"><a href="#">Call Now</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;