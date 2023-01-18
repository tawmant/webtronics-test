import { FC, useState } from 'react'
import CarouselItem from './CarouselItem/CarouselItem'
import { TCarouselItems, INewCarouselItem } from './types'
import cl from 'classnames'
import st from './Carousel.module.scss'
import ArrowLeft from '/public/images/svg/arrow-left.svg'

interface ICarouselProps {
  carouselItems: TCarouselItems
}

const Carousel: FC<ICarouselProps> = ({
  carouselItems: carouselItemsProps,
}) => {
  const [carouselItems, setCarouselItems] = useState<INewCarouselItem[]>(
    carouselItemsProps.map((carouselItem, i) => ({
      ...carouselItem,
      numberItem: i + 1,
    }))
  )
  const [activeItem, setActiveItem] = useState(1)

  const changeActiveHandler = (numberItem: number) => {
    if (activeItem !== numberItem) {
      const newActiveIndex = carouselItems.findIndex(
        (carouselItem) => carouselItem.numberItem === numberItem
      )
      setCarouselItems((prev) => [
        prev[newActiveIndex],
        ...[
          ...prev.slice(0, newActiveIndex),
          ...prev.slice(newActiveIndex + 1),
        ].sort((a, b) => a.numberItem - b.numberItem),
      ])
      setActiveItem(numberItem)
    }
  }

  const arrowsHandler = (typeArrow: 'prev' | 'next') => {
    const numberOfLast = carouselItems[carouselItems.length - 1].numberItem
    if (typeArrow === 'next') {
      const newActiveItem = activeItem >= numberOfLast ? 1 : activeItem + 1
      changeActiveHandler(newActiveItem)
    } else {
      const newActiveItem = activeItem <= 1 ? numberOfLast : activeItem - 1
      changeActiveHandler(newActiveItem)
    }
  }

  return (
    <div className={st.carousel}>
      <div className={st.header}>
        <div className={st.count}>
          <p className={st.current}>{activeItem}/</p>
          <p className={st.total}>{carouselItems.length}</p>
        </div>
        <div className={st.arrowsWrapper}>
          <div className={st.btnWrapper}>
            <button onClick={() => arrowsHandler('prev')} className={st.btn}>
              <ArrowLeft />
            </button>
          </div>

          <div className={st.btnWrapper}>
            <button
              onClick={() => arrowsHandler('next')}
              className={cl(st.btn, st.arrowRight)}
            >
              <ArrowLeft />
            </button>
          </div>
        </div>
      </div>

      <ul className={st.list}>
        {carouselItems.map((carouselItem) => (
          <CarouselItem
            key={carouselItem.numberItem}
            data={carouselItem}
            active={activeItem === carouselItem.numberItem}
            onChangeActive={changeActiveHandler}
          />
        ))}
      </ul>
    </div>
  )
}

export default Carousel
