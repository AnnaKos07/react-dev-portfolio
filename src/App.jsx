import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import projects from "./content/projects";
import Skill from "./components/Skill";
import skills from "./content/skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import { Grid, Box } from '@mui/material';

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const getRandomXs = () => Math.floor(Math.random() * (2 - 1 + 1)) + 2;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />
      <div class="spacing"/>

      <section id="projects">
        <Heading firstWord="My" secondWord="Projects" />
        <motion.div
          className="project-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                name={project.name}
                description={project.description}
                responsibilities={project.responsibilities}
                achievements={project.achievements}
                img={project.img}
                link={project.link}
                source={project.source}
              />
            </div>
          ))}
        </motion.div>
      </section>
      <div class="spacing"/>
      <section id="skills">
        <Heading firstWord="Skills"/>
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
           <Grid container spacing={0.2} justifyContent="left">
          {skills.map((skill, index) => (
            <motion.div variants={skillVariants}>
            <Skill skill={skill}/>
          </motion.div>
          ))}
        </Grid>
        </motion.div>
      </section>
      <div class="spacing"/>
      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
