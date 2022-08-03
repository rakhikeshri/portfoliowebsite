import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h3>icon</h3>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <h3>icon</h3>
              <h5>Clients</h5>
              <small>-----</small>
            </article>
            <article className='about__card'>
              <h3>icon</h3>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At culpa aspernatur, delectus ea, sed consectetur facere hic obcaecati laborum, minus quibusdam dicta soluta doloremque ipsa quis nihil commodi quas voluptatem.</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
