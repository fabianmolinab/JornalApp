import React, { ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useAppDispatch } from '../../hooks/hooks'
import { useForm } from '../../hooks/useForm'

interface FormData {
  email: string;
  password: string;
}

export const LoginScreen: React.FC = () => {
  // Use Dispach Hook que realiza el dispatch de la accion en cualquier lugar
  const dispach:Dispatch = useAppDispatch()

  const { email, password, handleInputChange } = useForm<FormData>({
    email: '',
    password: ''
  })

  type HandleLoginEvent = ChangeEvent<HTMLFormElement>;

  const handleLogin = (e: HandleLoginEvent) => {
    e.preventDefault()
    dispach(startLoginEmailPassword(email, password))
  }

  const handleGoogleLogin = () => {
    dispach(startGoogleLogin())
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
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

        <button className="btn btn-primary mb-1" type="submit">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>

            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="links" to="/auth/register">
          Create new account
        </Link>
      </form>
    </>
  )
}
