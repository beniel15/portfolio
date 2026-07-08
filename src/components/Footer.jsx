import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const footerLinks = [
  { name: 'GitHub', url: 'https://github.com/beniel15', icon: FiGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/beniel-v-7b969a300/', icon: FiLinkedin },
  { name: 'LeetCode', url: 'https://leetcode.com/u/Beniel15/', icon: SiLeetcode },
  { name: 'Email', url: 'mailto:benielraja1503@gmail.com', icon: FiMail },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copy">&copy; 2026 Beniel Raja V</p>

        <div className="footer-links">
          <span className="footer-links-title">Quick Links</span>
          <ul>
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <Icon /> {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
