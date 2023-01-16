import { FC, ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import st from './Layout.module.scss'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={st.layout}>
      <img src="/images/svg/background.svg" alt="bg" className={st.layoutBg} />
      <div className={st.container}>
        <Header />
        <main className={st.main}>{children}</main>
        {/*<Footer />*/}
      </div>
    </div>
  )
}

export default Layout
