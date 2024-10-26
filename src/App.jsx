import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import projects from "./content/projects";
import Carousel from './components/Carousel';
import socials from "./content/socials";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const getRandomXs = () => Math.floor(Math.random() * (2 - 1 + 1)) + 2;

  const imagesLeft = [
    "https://images.ctfassets.net/3i4n4r7kp8f6/6eJoCiVHaLSsavaHLHJnup/00709bf471ec292985a56e96a195dfbf/1.jpg",
    "https://images.ctfassets.net/3i4n4r7kp8f6/rHtpY7bfTzP4UkSzx3doZ/82a1a70bda9822b0d3e4ae3041dd0bac/2.jpg",
    "https://images.ctfassets.net/3i4n4r7kp8f6/4FFLXOD0qAxXsiovcyyPkE/f3eb978d37f076dff752afc2ffb75e86/3.jpg",
    "https://images.ctfassets.net/3i4n4r7kp8f6/7dG0l14sYhgA3evCqkay2f/36ff1a82998991fa3e9f0fffc2cc06bb/4.jpg",
    "https://images.ctfassets.net/3i4n4r7kp8f6/46mktqmDyG2pxPZ0RYkGNa/dfaef5a9b27b33d805466518a16fd353/5.jpg",
  ];

  const imagesRight = [
    "https://images.ctfassets.net/3i4n4r7kp8f6/6QZemM5XdpEiriZJIII42K/a5042aabccf4365d25b7c78d17059eac/6.jpg",
    "https://images.ctfassets.net/3i4n4r7kp8f6/2PpanLPeqx2QgOnkNRgjU1/2ba03c1ffe981c3f359feb6e9109e0df/7.jpg",
    "https://images.ctfassets.net/3i4n4r7kp8f6/11JfL04IC5Zbmjqh8Fgun0/c18f3a8102be3e7b06d57407f2cb75a0/8.jpg",
    "https://images.ctfassets.net/3i4n4r7kp8f6/zOLKaoXL7iJKRbZqranKq/01f5cab54e2951493a4347d8ae458368/9.jpg",
    "https://images.ctfassets.net/3i4n4r7kp8f6/21s759GiJssynVPJSqBwcJ/8a904239e4ddf3f57033bb53c4578364/10.jpg",
  ];

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
                short_description={project.short_description}
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
      
      <div class="spacing carousel-spacing"/>
      <section id="gallery">
        <Carousel images={imagesRight} reverse={false} imageWidth="23vw"/>
        <Carousel images={imagesLeft} reverse={true} imageWidth="23vw"/>
      </section>
      <div class="spacing carousel-spacing"/>
      <section id="contact">
        <div class="left-contact">
          <Heading firstWord="Contact" secondWord="Me" />
          <div className="hero-socials">
                {socials.map((social, index) => (
                  <a className="social-link" target="_blank" key={index} href={social.url}>
                    {social.icon}
                    <img src="./arrow.svg"></img>
                  </a>
                ))}
          </div>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
