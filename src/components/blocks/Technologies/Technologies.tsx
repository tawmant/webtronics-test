import React, { useRef } from 'react'
import st from './Technologies.module.scss'
import TechnologyCard from './TechnologyCard/TechnologyCard'
import { ITechnologiesItem } from './types'

const Technologies = () => {
  const technologiesRef = useRef<ITechnologiesItem[]>([
    { title: 'Angular', image: '/images/png/technologies/angular.png' },
    { title: 'React', image: '/images/png/technologies/react.png' },
    { title: 'Vue.js', image: '/images/png/technologies/vue.png' },
    { title: 'JavaScript', image: '/images/png/technologies/js.png' },
  ])
  return (
    <section id="technologies" className={st.technologies}>
      <div className={st.container}>
        <div className={st.containerText}>
          <h2 className="title">Programming technologies</h2>
          <p className="text">
            By the end, you’ll have the portfolio and interview skills you need to start your new career.
          </p>
        </div>
        <div className={st.cards}>
          {technologiesRef.current.map((technology) => (
            <TechnologyCard key={technology.title} data={technology} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
