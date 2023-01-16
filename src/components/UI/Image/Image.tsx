import { FC } from 'react'
import st from './Image.module.scss'
import Image from 'next/image'

export interface IImageProps {
  src: string
  alt: string
}

const ImageCustom: FC<IImageProps> = ({ src, alt }) => {
  return (
    <div className={st.imageWrapper}>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  )
}

export default ImageCustom
