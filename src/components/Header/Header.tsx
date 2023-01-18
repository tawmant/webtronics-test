import Image from 'next/image'
import Link from 'next/link'
import st from './Header.module.scss'
import { useRef } from 'react'

interface INavbar {
  href: string
  text: string
}

const Header = () => {
  const navbarRef = useRef<INavbar[]>([
    {
      href: '/#about-us',
      text: 'About',
    },
    {
      href: '/#technologies',
      text: 'Programs',
    },
    {
      href: '/#steps',
      text: 'Steps',
    },
    {
      href: '/#FAQ',
      text: 'Questions',
    },
    {
      href: '/#contact-us',
      text: 'Get in touch',
    },
  ])

  return (
    <header className={st.header}>
      <Link href="/" passHref>
        <Image src="/images/svg/logo.svg" alt="logo" width={169} height={33} />
      </Link>{' '}
      <nav>
        <ul className={st.menuList}>
          {navbarRef.current.map((navbarItem) => (
            <li key={navbarItem.href} className={st.menuItem}>
              <Link href={navbarItem.href} passHref scroll={false}>
                {navbarItem.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
