import { FC } from 'react'
import st from './TechnologyCard.module.scss'
import { ITechnologiesItem } from '../types'
import Image from '../../../UI/Image/Image'

interface IMentorCardProps {
  data: ITechnologiesItem
}

const TechnologyCard: FC<IMentorCardProps> = (props) => {
  const { title, image } = props.data
  return (
    <li className={st.technologyWrapper}>
      <div className={st.technology}>
        <div className={st.imageWrapper}>
          <Image src={image} alt={title} />
        </div>
        <h5 className={st.title}>{title}</h5>
      </div>
    </li>
  )
}

export default TechnologyCard
