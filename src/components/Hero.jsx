import useTypingEffect from '../hooks/useTypingEffect';
import useScrollAnimation from '../hooks/useScrollAnimation';
import HeroIllustration from './HeroIllustration';

function Hero() {
  const fadeRef = useScrollAnimation();

  const typedText = useTypingEffect([
    'Full Stack Developer',
    'Backend Developer',
    'Problem Solver',
  ]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero section">
      <div ref={fadeRef} className="container hero-container section-animate">
        <div className="hero-content fade-in">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Beniel Raja V</h1>
          <h2 className="hero-title">
            Computer Science Engineering Student |{' '}
            <span className="typing-text">{typedText}</span>
            <span className="typing-cursor">|</span>
          </h2>
          <p className="hero-description">
            I enjoy building scalable web applications using Java, Node.js, Express.js,
            MongoDB, SQL, and modern web technologies. I am passionate about solving
            problems, building real-world applications, and continuously learning new
            technologies.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-image fade-in">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

export default Hero;
