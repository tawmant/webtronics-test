import st from './Form.module.scss'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../../UI/Button/Button'
import cl from 'classnames'
import Input from '../../UI/Input/Input'
import { useRef } from 'react'
import { $api } from '../../../lib/api'

interface IFormInputs {
  name: string
  email: string
  phone: string
}
type TKeysOfIFormInputs = keyof IFormInputs
type TInputsRef = { name: TKeysOfIFormInputs; placeholder: string }[]

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
  })
  .required()

const Form = () => {
  const inputsRef = useRef<TInputsRef>([
    { name: 'name', placeholder: 'Name' },
    { name: 'phone', placeholder: 'Phone' },
    { name: 'email', placeholder: 'Email' },
  ])
  const { control, handleSubmit, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      await $api.post('/feedback', data)
      reset({ name: '', phone: '', email: '' })
    } catch (e) {
      throw e
    }
  }

  return (
    <section id="contact-us" className={st.contactUs}>
      <div className={st.wrapper}>
        <form className={st.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={st.container}>
            <h2 className="title">Contact us</h2>
            <p className={cl(st.description, 'text')}>Do you have any kind of help please contact with us.</p>
            <div className={st.inputsWrapper}>
              {inputsRef.current.map((inputItem) => (
                <Controller
                  key={inputItem.name}
                  control={control}
                  name={inputItem.name}
                  render={({ field, formState: { errors } }) => (
                    <Input {...field} placeholder={inputItem.placeholder} error={!!errors[inputItem.name]} />
                  )}
                />
              ))}
            </div>
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
