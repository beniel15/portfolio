import useScrollAnimation from '../hooks/useScrollAnimation';
import {
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa6';
import { VscCode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'SQL', icon: FaDatabase, color: '#336791' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'VS Code', icon: VscCode, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

function Skills() {
  const fadeRef = useScrollAnimation();

  return (
    <section id="skills" className="section skills">
      <div ref={fadeRef} className="container section-animate">
        <div className="section-header fade-in">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category fade-in">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-cards">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="skill-card">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        <Icon />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
