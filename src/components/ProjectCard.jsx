import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Modal, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const ProjectCard = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <div className="project-card" onClick={openModal}>
        <div className="project-img">
          <img src={props.img[0]} alt={props.name} />
        </div>
        <div className="project-content">
          <div className="project-title">
            <h2>{props.name}</h2>
          </div>
        </div>
      </div>

      <Modal open={isModalOpen} onClose={closeModal}>
        <Box className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left">
          <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 1 }}
                className="swiper-container"
              >
                {props.img.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt={`Project Slide ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
          <div className="modal-right">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <div className="modal-title">
              <h2>{props.name}</h2>
            </div>
            <div className="modal-description">
              <p>{props.description}</p>
              <br/>
              <h4>Responsibilities</h4>
                <div className="tags">
                  {props.responsibilities.map((resp, index) => (
                      <div key={index}>
                        {resp}
                      </div>
                    ))}
                </div>
                <br/>
              <h4>Achievements</h4>
              <p>{props.achievements}</p>
              <br/> 
                <div className='buttons'>
                  <a href={props.link} target="_blank" className="modal-button-pri">
                    Read design case
                  </a>
                  <a href={props.source} target="_blank" className="modal-button-sec">
                    Visit website
                  </a>
                </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default ProjectCard;
