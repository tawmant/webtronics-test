import { FC } from 'react'
import st from './Image.module.scss'
import ImageNext from 'next/image'

export interface IImageProps {
  src: string
  alt: string
}

const Image: FC<IImageProps> = ({ src, alt }) => {
  return (
    <div className={st.imageWrapper}>
      <ImageNext src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  )
}

export default Image
