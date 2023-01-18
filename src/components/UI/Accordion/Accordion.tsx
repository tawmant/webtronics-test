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
        <div className={st.row}>
          <div>
            <h4 className={st.titleAccordion}>{data.title}</h4>
            <p className="text">{data.description}</p>
          </div>
          <div className={!isOpen ? st.icon : ''}>
            {!isOpen ? <Plus /> : <Minus />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
