import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  return (
    <div className="container">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 10,
        }}
        whileHover={{ scale: 1, rotate: 2 }}
        whileTap={{
          scale: 1,
          borderRadius: "100%",
        }}
        className="pfp"
      >
        <img src={props.img} alt="" />
      </motion.div>

      <Heading firstWord="Hanna" secondWord="Kastrytsa" />
      <div className="hero-typewriter">
        <Typewriter
          options={{
            strings: [
              "Interaction Designer",
              "UX/UI Enthusiast",
              "Interface Architect",
              "Developer"
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
      </div>
      {/* <HeroHeading /> */}
      <div className="button-effect">
        <div className="hero-text">
          <p className="hero-desc">{props.description}</p>
        </div>
        {/* Find me on:
        <div className="hero-socials">
          {socials.map((social, index) => (
            <a key={index} href={social.url}>
              <img src={`/socials/${social.icon}`} alt="" />
            </a>
          ))}
        </div> */}
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
