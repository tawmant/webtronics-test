import st from './Gallery.module.scss'
import cl from 'classnames'
import { useRef } from 'react'
import { IImageProps } from '../../UI/Image/Image'

interface IImage extends IImageProps {
  classs: string
}

const Gallery = () => {
  const imagesRef = useRef<IImage[]>([
    {
      src: '/images/png/gallery/img-1.png',
      alt: 'image',
      classs: st.img1,
    },
    {
      src: '/images/png/gallery/img-2.png',
      alt: 'image',
      classs: st.img2,
    },
    {
      src: '/images/png/gallery/img-3.png',
      alt: 'image',
      classs: st.img3,
    },
    {
      src: '/images/png/gallery/img-4.png',
      alt: 'image',
      classs: st.img4,
    },
  ])

  return (
    <section className={st.gallery}>
      <h2 className="title">Gallery</h2>
      <div className={st.container}>
        <p className={cl([st.firstDescription, 'text'])}>
          By the end of this course, you will be able to develop and publish
          your very own Google Chrome extension! In this course we will focus on
          coding exercises and projects.
        </p>
        {imagesRef.current.map((image) => (
          <div key={image.src} className={image.classs}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
        <p className={cl([st.secondDescription, 'text'])}>
          If you would like to learn web development and get a job in the tech
          industry, you are going to LOVE this course! Learn HTML, CSS,
          JavaScript, Bootstrap and more with over 15 hours of HD video
          tutorials! This course was designed to be extremely beginner friendly.
          We will begin with the very basics of HTML and build a simple web
          page.
        </p>
      </div>
    </section>
  )
}

export default Gallery
