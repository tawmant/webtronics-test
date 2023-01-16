import React, { ComponentPropsWithoutRef, FC } from 'react'
import st from './Button.module.scss'
import { useRouter } from 'next/router'

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  redirect?: string
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  const router = useRouter()

  const redirectHandler = () => {
    if (props.redirect) router.push(props.redirect)
  }

  return (
    <button onClick={redirectHandler} className={st.btn} {...props}>
      {children}
    </button>
  )
}

export default Button
