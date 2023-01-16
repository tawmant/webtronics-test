const vw = (size: number, width = 1920) => `${(size / width) * 100}vw`
const vh = (size: number, height = 1080) => `${(size / height) * 100}vh`

export const customSize = {
  vh,
  vw,
}
