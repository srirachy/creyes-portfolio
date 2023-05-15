import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion'; 

const Contact = () => {
  const formRef = useRef();
  const captchaRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState([]);
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const secretKey = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;

  const verifyToken = async (token) => {
    const apiRes = [];

    try {
      const response = await axios.post(`https://creyes-portfolio.vercel.app/verify-token`, {
        token,
        secretKey,
      });

      apiRes.push(response['data']);
      return apiRes;
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const curToken = captchaRef.current.getValue();
    setLoading(true);

    if (token) {
      const isToken = await verifyToken(curToken);
      setToken(isToken);
      console.log(isToken);
      if(isToken[0].success === true) {
        console.log("you are not a bot"); // remove later
        emailjs.send(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            {
              from_name: form.name,
              to_name: 'Casey',
              from_email: form.email,
              to_email: process.env.REACT_APP_PERSONAL_EMAIL,
              message: form.message,
            },
            process.env.REACT_APP_EMAIL_PUBLIC_KEY,
          )
          .then(() => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
    
            setForm({
              name: '',
              email: '',
              message: '',
            })
          }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong');
          }
        );
      } else {
        console.log("you are a bot");
      }
    }

  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#402d21] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#5e4231] py-4 px-6 placeholder:text-[#e6a377] text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#5e4231] py-4 px-6 placeholder:text-[#e6a377] text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#5e4231] py-4 px-6 placeholder:text-[#e6a377] text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <ReCAPTCHA
            className="recaptcha"
            sitekey={siteKey}
            ref={captchaRef}
          />
          <button
            type="submit"
            className="bg-[#5e4231] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#2e2018] rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");