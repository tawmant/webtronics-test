import st from './FAQ.module.scss'
import cl from 'classnames'
import { useRef } from 'react'
import Accordion from '../../UI/Accordion/Accordion'

const FAQ = () => {
  const questionsRef = useRef([
    {
      id: 1,
      title: 'What is the price?',
      description:
        'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    },
    {
      id: 2,
      title: 'What is the price?',
      description:
        'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    },
    {
      id: 3,
      title: 'What is the price?',
      description:
        'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    },
    {
      id: 4,
      title: 'What is the price?',
      description:
        'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    },
    {
      id: 5,
      title: 'What is the price?',
      description:
        'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
    },
  ])

  return (
    <section id="FAQ" className={st.faq}>
      <h2 className="title">Frequently Asked Questions</h2>
      <div className={st.container}>
        <div className={cl(['col-4', st.left])}>
          <p className="text">
            Do you have any kind of questions? We are here to help.
          </p>
          <img src="/images/png/question-mark.png" alt="question mark" />
        </div>
        <div className={cl(['col-7', st.right])}>
          <ul className={st.list}>
            {questionsRef.current.map((question) => (
              <li key={question.id}>
                <Accordion data={question} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FAQ
