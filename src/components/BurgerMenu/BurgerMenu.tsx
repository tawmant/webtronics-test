import { FC, useState } from 'react'
import { INavbar } from '../Header/Header'
import Link from 'next/link'
import st from './BurgerMenu.module.scss'
import cl from 'classnames'

interface IBurgerMenuProps {
  navbarList: INavbar[]
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ navbarList }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={cl(st.menu, { [st.open]: isOpen })}
      >
        <span />
      </div>
      <nav className={cl(st.nav, { [st.open]: isOpen })}>
        <ul className={st.list}>
          {navbarList.map((navbarItem) => (
            <li key={navbarItem.href} onClick={() => setIsOpen(false)}>
              <Link href={navbarItem.href} passHref scroll={false}>
                {navbarItem.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default BurgerMenu
