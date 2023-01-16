import React, { ComponentPropsWithRef, FC } from 'react'
import st from './Input.module.scss'
import cl from 'classnames'

interface IInputProps extends ComponentPropsWithRef<'input'> {
  error?: boolean
}

const Input: FC<IInputProps> = (props) => {
  const isError = props.error
  return (
    <div className={cl([st.wrapper, isError ? st.errorWrapper : ''])}>
      <input className={cl([st.input, isError ? st.errorInput : ''])} {...props} />
    </div>
  )
}

export default Input
