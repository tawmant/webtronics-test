import st from './Review.module.scss'
import cl from 'classnames'
import Carousel from './Carousel/Carousel'
import { useRef } from 'react'
import { TCarouselItems } from './Carousel/types'

const Review = () => {
  const carouselItemsRef = useRef<TCarouselItems>([
    { id: 1, src: '/images/png/carousel/img1.png', alt: 'img1' },
    { id: 2, src: '/images/png/carousel/img2.png', alt: 'img2' },
    { id: 3, src: '/images/png/carousel/img3.png', alt: 'img3' },
  ])
  return (
    <section id="review" className={st.review}>
      <h2 className="title">Review</h2>
      <div className={st.container}>
        <div className={cl(['col-4', st.left])}>
          <h4 className={st.leftTitle}>Best courses ever</h4>
          <p className="text">
            Good course, up to this point, still ongoing. The only downside, why
            I gave 4,5 stars, because the "teacher" sometimes feel like, he is
            lost, and takes up quite a time, to correct himself, and check back
            etc.
          </p>
        </div>
        <div className={cl(['col-8', st.right])}>
          <Carousel carouselItems={carouselItemsRef.current} />
        </div>
      </div>
    </section>
  )
}

export default Review
