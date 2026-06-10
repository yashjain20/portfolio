import './Education.css'
import { education } from '../../data/education'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const Education = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section 
      ref={ref}
      id="education" 
      className={`education section fade-in-up ${isVisible ? 'visible' : ''}`}
      aria-labelledby="education-title"
    >
      <div className="container">
        <h2 id="education-title" className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className="education-card"
            >
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <h4 className="education-school">{edu.school}</h4>
              <p className="education-location">
                {edu.location}
                {edu.gpa && <span className="education-gpa"> · GPA {edu.gpa}</span>}
              </p>
              <p className="education-description">{edu.description}</p>
              <div className="education-coursework">
                <h5>Relevant Coursework:</h5>
                <div className="coursework-tags">
                  {edu.coursework.map((course, idx) => (
                    <span key={`${edu.id}-course-${idx}`} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
