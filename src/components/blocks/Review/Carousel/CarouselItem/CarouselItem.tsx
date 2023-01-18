import { FC } from 'react'
import { INewCarouselItem } from '../types'
import st from './CarouselItem.module.scss'
import cl from 'classnames'

interface ICarouselItemProps {
  data: INewCarouselItem
  active: boolean
  onChangeActive: (numberItem: number) => void
}

const CarouselItem: FC<ICarouselItemProps> = ({
  data,
  active,
  onChangeActive,
}) => {
  return (
    <li className={st.wrapper} onClick={() => onChangeActive(data.numberItem)}>
      <div className={cl([st.item, active ? st.active : ''])}>
        <img src={data.src} alt={data.alt} />
      </div>
    </li>
  )
}

export default CarouselItem
