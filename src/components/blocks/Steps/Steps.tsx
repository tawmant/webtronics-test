import st from './Steps.module.scss'
import cl from 'classnames'
import { useRef } from 'react'
import { TSteps } from './types'
import Step from './Step/Step'

const Steps = () => {
  const stepsListRef = useRef<TSteps>([
    {
      id: 1,
      stepNumber: 1,
      title: 'Introduction to Front-End',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    },
    {
      id: 2,
      stepNumber: 2,
      title: 'Overview of Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    },
    {
      id: 3,
      stepNumber: 3,
      title: 'Introduction to Front-End',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    },
    {
      id: 4,
      stepNumber: 4,
      title: 'Overview of Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    },
    {
      id: 5,
      stepNumber: 5,
      title: 'Introduction to Front-End',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    },
    {
      id: 6,
      stepNumber: 6,
      title: 'Overview of Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
    },
  ])
  const odd = stepsListRef.current.filter((step, i) => i % 2 === 0),
    even = stepsListRef.current.filter((step, i) => i % 2 === 1)

  return (
    <section id="steps" className={st.steps}>
      <div className="title">Steps</div>
      <div className={st.container}>
        <ul className={cl('col-5', st.oddList)}>
          {odd.map((step) => (
            <Step key={step.id} step={step} isOddOrEven="odd" />
          ))}
        </ul>
        <div className={st.lineWrapper}>
          <div className={st.line} />
        </div>
        <ul className={cl('col-5', st.evenList)}>
          {even.map((step) => (
            <Step key={step.id} step={step} isOddOrEven="even" />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Steps
