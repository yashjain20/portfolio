import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Information Systems',
      school: 'New York University',
      location: 'New York, NY',
      period: 'Expected May 2026',
      description: 'Focused on software development, data science, and information technology management',
      coursework: [
        'Fundamental Algorithms',
        'Database Systems',
        'Data Science for Business',
        'Data Visualization'
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'Amity University',
      location: 'Noida, India',
      period: 'May 2020',
      description: 'Comprehensive study of computer science fundamentals and software engineering principles',
      coursework: [
        'Data Structures',
        'Distributed Systems',
        'Algorithm Design & Analysis',
        'Operating Systems'
      ]
    }
  ]

  return (
    <section id="education" className="education section" aria-labelledby="education-title">
      <div className="container">
        <h2 id="education-title" className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <h4 className="education-school">{edu.school}</h4>
              <p className="education-location">{edu.location}</p>
              <p className="education-description">{edu.description}</p>
              <div className="education-coursework">
                <h5>Relevant Coursework:</h5>
                <div className="coursework-tags">
                  {edu.coursework.map((course, idx) => (
                    <span key={idx} className="course-tag">{course}</span>
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
