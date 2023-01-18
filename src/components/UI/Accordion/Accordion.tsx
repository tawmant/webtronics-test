import { FC, useState } from 'react'
import st from './Accordion.module.scss'
import cl from 'classnames'
import Plus from '/public/images/svg/plus.svg'
import Minus from '/public/images/svg/minus.svg'

interface IAccordionItem {
  title: string
  description: string
}
interface IAccordionProps {
  data: IAccordionItem
}

const Accordion: FC<IAccordionProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={cl(st.wrapper, { [st.active]: isOpen })}
    >
      <div className={cl(st.container, { [st.active]: isOpen })}>
        <div className={st.header}>
          <h4 className={st.titleAccordion}>{data.title}</h4>

          <div className={!isOpen ? st.plus : st.minus}>
            {!isOpen ? <Plus /> : <Minus />}
          </div>
        </div>
        <p className="text">{data.description}</p>
      </div>
    </div>
  )
}

export default Accordion
