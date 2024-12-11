import PropTypes from "prop-types";
import Heading from "./Heading";
import Typewriter from "typewriter-effect";
import Skill from "./Skill";
import skills from "../content/skills";
import { Grid, Box } from '@mui/material';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const Hero = (props) => {

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const getRandomXs = () => Math.floor(Math.random() * (2 - 1 + 1)) + 2;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="head-container">
      <div className="head-content" >
        <Heading firstWord="Hanna" secondWord="Kastrytsa" />
        <div className="hero-typewriter">
          <Typewriter
            options={{
              strings: [
                "Interaction Designer",
                "UX Researcher",
                "Prototyping Specialist",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
            }}
            className="typewriter"
          />
        </div>
        <div className="hero-text">
          <p className="hero-desc">{props.description}</p>
        </div>

        <section id="skills">
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
           <Grid container spacing={0.2} justifyContent="left">
          {skills.map((skill, index) => (
            <motion.div key={skill.id || index} variants={skillVariants}>
            <Skill skill={skill}/>
          </motion.div>
          ))}
        </Grid>
        </motion.div>
      </section>

      </div>

      <div className="portrait">
        <img src={props.img} alt="" />
      </div>
      
    </div>
  );
};
export default Hero;
Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
