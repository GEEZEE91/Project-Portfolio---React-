import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitHub } from 'react-feather';

import TravelImg from '../assets/portfolio/trip-tide.png';
import eventImg from '../assets/portfolio/soundstream.png';
import mcImg from '../assets/portfolio/tokio-ramen.png';
import emsImg from '../assets/portfolio/book-nook-v2.png';
import BookImg from '../assets/portfolio/tech-blog.png';
import FindAMealImg from '../assets/portfolio/meal.gif';
import WeatherImg from '../assets/portfolio/weather-dashboard.png';
import JateImg from '../assets/portfolio/jate.png';

const projects = [
  {
      title: 'Traveller Mate',
      thumbnail: TravelImg,
      description: 'A MERN + GraphQL stack travel application intended designed to let users plan ahead of their travels.',
      technologies: 'MongoDB / ExpressJS / ReactJS / NodeJS / GraphQL / Amadeus API',
      url: 'https://traveller-mate.herokuapp.com/',
      github: 'https://github.com/GEEZEE91/traveller-mate'
  },
  {
    title: 'Find-A-Meal',
    thumbnail: FindAMealImg,
    description: 'This project lets the user search for a meal select the meal and have nutritional details calculated based on the ingredients. Using the The MealDB API and Edamam Nutritional Analysis API',
    technologies: 'JavaScript / jQuery /  HTML / CSS',
    url: 'https://geezee91.github.io/find-a-meal/',
    github: 'https://github.com/GEEZEE91/find-a-meal'
},
  {
      title: 'EVENT-A-GRAM ',
      thumbnail: eventImg,
      description: 'A webapp which allows users to create an account , post and search for a range of local events',
      technologies: 'MySQL / ExpressJS / Handlebars / Node.js',
      url: 'https://eventag.herokuapp.com/',
      github: 'https://github.com/GEEZEE91/EVENT-A-GRAM'
  },
  {
    title: 'Weather Dashboard',
    thumbnail: WeatherImg,
    description: 'A weather dashboard application built with OpenWeather API',
    technologies: 'JavaScript / HTML / Bootstrap',
    url: 'https://geezee91.github.io/Weather-Dashboard/',
    github: 'https://github.com/GEEZEE91/Weather-Dashboard'
},
  {
      title: 'Multiple Choice Quiz',
      thumbnail: mcImg,
      description: 'Timed Multiple Choice Quiz that enables user to test there JavaScript knowledge and keep track of there score over time so they can monitor their progress. This app is built using basic HTML, JS and CSS.',
      technologies: 'HTML / Javascript / CSS ',
      url: 'https://geezee91.github.io/JavaScript-Multiple-Choice-Quiz/',
      github: 'https://github.com/GEEZEE91/JavaScript-Multiple-Choice-Quiz'
  },
 
  {
      title: 'Book Search Engine ',
      thumbnail: BookImg,
      description: "A full-stack application uses MongoDB, Express, React, Node, and GraphQL to create a book search using Google API. Allows users to users to sihn up, search and save book titles and view photo and description info on the selected books. ",
      technologies: 'MongoDB / Express / React / Node / GraphQL',
      url: 'https://booksearchh.herokuapp.com/',
      github: 'https://github.com/GEEZEE91/Book-Search-Engine'
  },
  {
    title: 'Employee Mgmt System - Command Line',
    thumbnail: emsImg,
    description: "Command-line application that acts as a employee managment system enabliong the user to view, add and update a company's employee database. The application is built using Node.js, Inquirer, and MySQL",
    technologies: 'Node.js / Inquirer / and MySQL',
    url: 'https://github.com/GEEZEE91/Employee-Tracker',
    github: 'https://github.com/GEEZEE91/Employee-Tracker'
},
{
  title: 'Text-Editor - Progressive Web App (PWA)',
  thumbnail: JateImg,
  description: "Progressive web app thats acts just like any standard text editior that supports JavaScript with syntax highlighting. The app can be be used in browser and downloaded and installed for offline usage. By using the download button on the top left allows the user to use a copy of the app locally",
  technologies: 'Node.js / webpack / PWA',
  url: 'https://jate-text-editor91.herokuapp.com/',
  github: 'https://github.com/GEEZEE91/Text-Editor'
}


];

const animateProject = {
  hidden: { opacity: 0, y: 50 },
  animate: {
      opacity: 1, 
      y: 0,
      transition: {
          delay: 0.75,
          duration: 0.4,
          type: 'tween',
          delayChildren: 0.5,
          staggerChildren: 0.4
      }
  }
};

const animateProjectItem = {
  hidden: { opacity: 0, y: 50 },
  animate: { 
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.4,
          type: 'tween'
      }
  }
};

const Project = () => {
  return (
    <motion.div
      className="w-full grid md:grid-cols-2 gap-8"
      variants={animateProject}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {projects.map((project) => (
        <motion.div
          key={project}
          className="relative group"
          variants={animateProjectItem}
          viewport={{ once: true }}
        >
          <div className="w-full h-max aspect-auto overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-all shadow-lg cursor-pointer">
    
            <img src={project.thumbnail} alt={project.title} className="w-full" />
    
            <div className="flex rounded-lg justify-center items-center transition-all duration-700 opacity-0 bg-gradient-to-t from-[#222222] via-slate-600 to-opacity-30 group-hover:opacity-90 absolute top-0 left-0 h-full w-full">
                            
              <div class="absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 hover:opacity-100">
                <div class="flex-row text-center p-6">
                  <h3 className="mb-2 font-semibold text-sky-200 text-2xl uppercase drop-shadow-md tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm tracking-tight leading-snug drop-shadow-md">
                    {project.description}
                  </p>
                  <p className="font-['Source_Code_Pro'] text-sky-200 text-xs py-2">
                    {project.technologies}
                  </p>
                  <div className="text-center">
                    <a href={project.url} target="_blank">
                      <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-slate-500 hover:bg-white text-white hover:text-slate-800 transition-all ease-in duration-300"><ExternalLink size={20} /></button>
                    </a>
                    <a href={project.github} target="_blank">
                      <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-slate-500 hover:bg-white text-white hover:text-slate-800 transition-all ease-in duration-300"><GitHub size={20} /></button>
                    </a>
                  </div>
                </div>
              </div>   
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Project;