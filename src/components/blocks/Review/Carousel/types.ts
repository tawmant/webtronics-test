export interface ICarouselItem {
  id: number
  src: string
  alt: string
}

export type TCarouselItems = ICarouselItem[]

export interface INewCarouselItem extends ICarouselItem {
  numberItem: number
}
export type TNewCarouselItems = INewCarouselItem[]
