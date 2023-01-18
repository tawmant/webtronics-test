import { IStep } from '../types'
import { FC } from 'react'
import st from './Step.module.scss'
import cl from 'classnames'

interface IStepProps {
  step: IStep
  isOddOrEven: 'odd' | 'even'
}

const Step: FC<IStepProps> = ({ step, isOddOrEven }) => {
  const isOdd = isOddOrEven === 'odd'

  return (
    <li className={cl(st.wrapper, { [st.even]: !isOdd })}>
      <img
        className={st.stepBorder}
        src="/images/png/step-border.png"
        alt="step border"
      />
      <img
        className={st.stepArrow}
        src="/images/png/step-arrow.png"
        alt="step arrow"
      />

      <div className={st.container}>
        <p className={st.stepNumber}>Step {step.stepNumber}</p>
        <h4 className={st.stepTitle}>{step.title}</h4>
        <p className={cl('text', st.description)}>{step.description}</p>
      </div>
    </li>
  )
}

export default Step
