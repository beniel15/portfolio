import useScrollAnimation from '../hooks/useScrollAnimation';
import { FiUser } from 'react-icons/fi';

function About() {
  const fadeRef = useScrollAnimation();

  return (
    <section id="about" className="section about">
      <div ref={fadeRef} className="container section-animate">
        <div className="section-header fade-in">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-content fade-in">
          <div className="about-icon">
            <FiUser />
          </div>
          <div className="about-text">
            <p>
              I am currently pursuing my Bachelor of Engineering in Computer Science
              and Engineering at Bannari Amman Institute of Technology.
            </p>
            <p>
              I have a strong interest in backend and full stack web development. I enjoy
              designing REST APIs, working with databases, and building practical
              applications that solve real-world problems. I am currently improving my
              problem-solving skills and preparing for Software Developer roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
