import './ContactUs.scss';
import React  from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ()=>{

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s0j3eki', 'template_6ptan4b', form.current, 'WIQJ-LIsfPZtG3GD-')
        .then((result) => {
            console.log(result.text);
            alert("Thank you for your message, we'll be in touch soon !")
            window.location.reload(false)
        }, (error) => {
            console.log(error.text);
            alert("Failed to send the message, Please try again.")
        });
  };

    return (
        <div className='form'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name"  required/>
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Subject</label>
                <input type="text" name="user_subject" required/>
                <label>Message</label>
                <textarea name="message" required />
                <input type="submit" className='button' value="Send" />
            </form>
        </div>
    );

};
export default ContactUs;