import { lazy, Suspense } from 'react'
import Loader from '../components/Loader/Loader'
const Hero = lazy(() => import('../components/blocks/Hero/Hero')),
  AboutUs = lazy(() => import('../components/blocks/AboutUs/AboutUs')),
  Technologies = lazy(
    () => import('../components/blocks/Technologies/Technologies')
  ),
  Steps = lazy(() => import('../components/blocks/Steps/Steps')),
  FAQ = lazy(() => import('../components/blocks/FAQ/FAQ')),
  Review = lazy(() => import('../components/blocks/Review/Review')),
  Gallery = lazy(() => import('../components/blocks/Gallery/Gallery')),
  Form = lazy(() => import('../components/blocks/Form/Form'))

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <AboutUs />
      <Technologies />
      <Steps />
      <FAQ />
      <Review />
      <Gallery />
      <Form />
    </Suspense>
  )
}
