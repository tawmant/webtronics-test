import st from './Hero.module.scss'
import cl from 'classnames'
import Button from '../../UI/Button/Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className={st.hero}>
      <span className={st.bg} />
      <h2 className={st.titleFirst}>Front-End</h2>
      <p className={cl(st.description, 'text')}>
        Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and
        more).
      </p>
      <div className={st.btnWrapper}>
        <Link href="#contact-us" scroll={false}>
          <Button>Start my career change</Button>
        </Link>
      </div>
      <h2 className={st.titleSecond}>Developer</h2>
      <p className={st.subtitle}>Courses</p>
    </section>
  )
}

export default Hero
