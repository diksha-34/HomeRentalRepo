import React, { useRef, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const ContactUsPage = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6d4kdwc', 'template_67bnoyo', form.current, {
        publicKey: 'GkIPgIcWnJBGUmASO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} >
          <div className="p-8 rounded-lg shadow-lg bg-white mx-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-black-600">Contact Us</h1>
            {messageSent && <p className="text-black-600 text-center mt-4">Message sent successfully!</p>}
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <TextField fullWidth id="name" label="Name" variant="outlined" size="small" type="text" name="user_name" />
              </div>
              <div className="mb-4">
                <TextField fullWidth id="email" label="Email" variant="outlined" size="small" type="email" name="user_email" />
              </div>
              <div className="mb-4">
                <TextField fullWidth id="subject" label="Subject" variant="outlined" size="small" type="text" name="subject" />
              </div>
              <div className="mb-6">
                <TextField fullWidth id="message" label="Message" multiline rows={4} variant="outlined" size="small" type="text" name="message" />
              </div>
              <div className="flex justify-center">
                <Button type="submit" variant="contained" color="success" size="large">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} alignContent={'center'}>
          <div className="p-8 rounded-lg shadow-lg bg-white mx-4">
            <div className="my-10 text-center">
              <p><strong>Address:</strong> 2301 Ravenswood Rd Madison, WI 53711</p>
              <p><strong>Phone:</strong> (315) 905-2321</p>
              <p><strong>Mail:</strong> info@findhouse.com</p>
              <ul className="flex justify-center space-x-5 mt-4">
                <li><FaTwitter className="text-green-800 text-4xl" /></li>
                <li><FaFacebook className="text-green-800 text-4xl" /></li>
                <li><FaInstagram className="text-green-800 text-4xl" /></li>
                <li><HiOutlineHome className="text-green-800 text-4xl" /></li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUsPage;