import React, { ChangeEvent } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { removeError, setError } from '../../actions/ui'
import { Dispatch } from 'redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { starRegisterWithEmailPasswordName } from '../../actions/auth'

interface FormData {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export const RegisterScreen: React.FC = () => {

  const { name, email, password, password2, handleInputChange, reset } =

    useForm<FormData>({
      name: '',
      email: '',
      password: '',
      password2: ''
    })

  type HandleRegisterEvent = ChangeEvent<HTMLFormElement>;

  const dispach: Dispatch = useAppDispatch()

  /*
   *TODO: Arreglar los errores de tipado en el dispach startRegister
   *
   */

  const handleRegister = (e: HandleRegisterEvent) => {
    e.preventDefault()

    if (isFormValid()) {
      dispach(starRegisterWithEmailPasswordName(email, password, name))
    }
  }

  // useSelector: Se utiliza para mostrar el estado que querramos
  const stateSelector = (state: RootState) => state.ui
  const stateGeneral = useSelector(stateSelector)

  const isFormValid = (): boolean => {

    if (name.trim().length === 0) {
      dispach(setError('Name is required'))
      return false

    } else if (!validator.isEmail(email)) {
      dispach(setError('Email is required'))
      return false

    } else if (password !== password2 || password.length < 5) {

      dispach(setError('Password should be at least 6 characters and match each'))
      return false
    }
    dispach(removeError())
    return true
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        {
          stateGeneral.msgError !== '' && (
            <div className='auth__alert-error'>
              {stateGeneral.msgError}
            </div>
          )
        }

        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          autoComplete="off"
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={password}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          onChange={handleInputChange}
          value={password2}
        />

        <button className="btn btn-primary" type="submit">
          Register
        </button>

        <Link className="links mt-5" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  )
}
