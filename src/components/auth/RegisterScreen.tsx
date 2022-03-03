import { Link } from 'react-router-dom'

export const RegisterScreen = (props: {}) => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />

        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password1"
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
        />

        <button className="btn btn-primary" type="submit">
          Login
        </button>

        <Link className="links mt-5" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  )
}
