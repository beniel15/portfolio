import useScrollAnimation from '../hooks/useScrollAnimation';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const educationData = [
  {
    icon: FaGraduationCap,
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering',
    institution: 'Bannari Amman Institute of Technology',
    detail: 'CGPA: 7.5',
    year: 'Present',
  },
  {
    icon: FaSchool,
    degree: 'Higher Secondary',
    field: '',
    institution: 'Mahatma Montessori Higher Secondary School',
    detail: '',
    year: 'Completed',
  },
];

function Education() {
  const fadeRef = useScrollAnimation();

  return (
    <section id="education" className="section education">
      <div ref={fadeRef} className="container section-animate">
        <div className="section-header fade-in">
          <span className="section-tag">Education</span>
          <h2 className="section-title">My Academic Journey</h2>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.degree} className="timeline-item fade-in">
                <div className="timeline-marker">
                  <Icon />
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-degree">{item.degree}</h3>
                  {item.field && <p className="timeline-field">{item.field}</p>}
                  <p className="timeline-institution">{item.institution}</p>
                  {item.detail && <p className="timeline-detail">{item.detail}</p>}
                </div>
                {index < educationData.length - 1 && <div className="timeline-line" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
