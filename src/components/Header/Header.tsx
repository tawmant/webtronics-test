import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import st from './Header.module.scss'
import cl from 'classnames'

const Header = () => {
  return (
    <header className={st.header}>
      <Link href="/" passHref>
        <Image src="/images/svg/logo.svg" alt="logo" width={169} height={33} />
      </Link>{' '}
      <nav>
        <ul className={st.menuList}>
          <li className={st.menuItem}>
            <Link href="/#about" passHref>
              about
            </Link>
          </li>
          <li className={st.menuItem}>
            <Link href="/#about" passHref>
              about
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
