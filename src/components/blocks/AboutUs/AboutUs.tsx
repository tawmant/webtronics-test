import React, { useRef } from 'react'
import st from './AboutUs.module.scss'
import MentorCard from './MentorCard/MentorCard'
import cl from 'classnames'
import Image from '../../UI/Image/Image'
import { customSize } from '../../../styles/custom-function'

const AboutUs = () => {
  const mentorsRef = useRef([
    {
      name: 'Azamat Askarov',
      description: 'Front-end engineers work closely with designers',
      avatar: '/images/png/mentor-azamat.png',
    },
    {
      name: 'Azamat Askarov',
      description: 'Front-end engineers work closely with designers',
      avatar: '/images/png/mentor-azamat.png',
      customStyles: {
        margin: `${customSize.vw(-50)} ${customSize.vw(21)} 0`,
      },
    },
    {
      name: 'Azamat Askarov',
      description: 'Front-end engineers work closely with designers',
      avatar: '/images/png/mentor-azamat.png',
    },
  ])
  return (
    <section className={st.aboutUs}>
      <h2 className="title">About Us</h2>
      <div className={st.container}>
        <div className={cl(['col-6', st.left])}>
          <h4 className={st.leftTitle}>Mentors</h4>
          <div className={st.imageWrapper}>
            <Image src="/images/png/mentors-line.png" alt="line" />
          </div>

          <div className={st.cards}>
            {mentorsRef.current.map((mentor) => (
              <MentorCard key={mentor.name} data={mentor} />
            ))}
          </div>
        </div>
        <div className={cl(['col-6', st.right])}>
          <img src="/images/png/front-text-bg.png" alt="bg" />
          <p className="text">
            Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This
            Career Path will teach you not only the necessary languages and technologies, but how to think like a
            front-end engineer, too.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
