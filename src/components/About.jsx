import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from '../assets/GinaZivkovic.jpg';

const About = () => {
  return (
    <div id="about" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center w-1/2 md:w-full pb-8 md:pr-12 md:pb-0">
          <motion.img
            src={AboutImg}
            className="shadow-lg rounded-full"
            alt="Hi, I'm Gina!"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            viewport={{ once: true }}
          />
        </div>
        <div>
          <motion.p
            className="pb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            viewport={{ once: true }}
          >
            I am a Full Stack Web Developer, 
            
            who  recently graduated from the University of Western Australia Software Programming Bootcamp with an A+. I have learnt a lot during from the course but now am even more excited to learn more and further develop my skills and stay up to date with the latest developments.
            
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.25 }}
            viewport={{ once: true }}
          >
            I have a Bachelor's Degree in Accounting and Finance and have worked in relevant accounting and business roles for the last 11 years.

             </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.50 }}
            viewport={{ once: true }}
          >

            
            I aim to develop my software programming skills further and combine them with my business background to develop highly customised business solutions. Helping small and medium-sized businesses implement highly targeted solutions that meet their distinct functionality requirements, improve productivity, and streamline processes with software programming.

          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;