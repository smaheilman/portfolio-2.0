import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section className='contact'>
            <h1 className='contactMe'>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='names'>
                    <input className='name' type="text" name="name" onBlur={handleChange} defaultValue={name} placeholder='Name'/>
                </div>
                <div className='emails'>
                    <input className='email' type="email" name="email" onBlur={handleChange} defaultValue={email} placeholder='Email'/>
                </div>
                <div className='messages'>
                    <textarea className='message' name="message" rows="5" onBlur={handleChange} defaultValue={message} placeholder='Message' />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className='submit' type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;