import useScrollAnimation from '../hooks/useScrollAnimation';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/beniel15',
    icon: FiGithub,
    color: '#333',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/beniel-v-7b969a300/',
    icon: FiLinkedin,
    color: '#0A66C2',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Beniel15/',
    icon: SiLeetcode,
    color: '#FFA116',
  },
  {
    name: 'Email',
    url: 'mailto:benielraja1503@gmail.com',
    icon: FiMail,
    color: '#2563eb',
  },
  {
    name: 'Phone',
    url: 'tel:+916374027877',
    icon: FiPhone,
    color: '#16a34a',
  },
];

function Contact() {
  const fadeRef = useScrollAnimation();

  return (
    <section id="contact" className="section connect">
      <div ref={fadeRef} className="container section-animate">
        <div className="section-header fade-in">
          <span className="section-tag">Connect</span>
          <h2 className="section-title">Connect With Me</h2>
        </div>

        <div className="connect-grid">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="connect-card fade-in"
              >
                <div className="connect-icon" style={{ color: link.color }}>
                  <Icon />
                </div>
                <span className="connect-name">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
