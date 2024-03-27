import React from 'react'

export default function SkilllsList({ image, skillsTitle, skillsArray}) {
  return (
    <section className="skill-container">
      <img src={image} alt="" />
      <h4 className="skills-title">{skillsTitle}</h4>
      <hr />
      <ul className="skills-list">
        {skillsArray.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </section>
  );
}
