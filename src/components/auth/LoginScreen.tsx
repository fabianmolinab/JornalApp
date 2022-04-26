import { ChangeEvent, FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

interface FormData {
  email: string;
  password: string;
}

export const LoginScreen: FC = () => {
  // Use Dispach Hook que realiza el dispatch de la accion en cualquier lugar
  const dispach = useDispatch()

  const { email, password, handleInputChange, reset } = useForm<FormData>({
    email: '',
    password: ''
  })

  type HandleLoginEvent = ChangeEvent<HTMLFormElement>;

  const handleLogin = (e: HandleLoginEvent) => {
    e.preventDefault()
    dispach(login(1234, 'Fabian'))
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

          <div className="google-btn">
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
