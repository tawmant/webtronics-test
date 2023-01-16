import { FC } from 'react'
import st from './MentorCard.module.scss'
import { IMentorItem } from '../types'

interface IMentorCardProps {
  data: IMentorItem
}

const MentorCard: FC<IMentorCardProps> = (props) => {
  const { name, description, avatar, customStyles } = props.data
  return (
    <li style={customStyles} className={st.card}>
      <div className={st.imageWrapper}>
        <img src={avatar} alt={name} />
      </div>
      <h4 className={st.title}>{name}</h4>
      <p className={st.description}>{description}</p>
    </li>
  )
}

export default MentorCard
