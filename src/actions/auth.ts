import { AnyAction } from 'redux'
import { types } from '../types/types'
import { googleAuthProvider } from '../firebase/firebase-config.js'
import { getAuth, signInWithPopup } from 'firebase/auth'

interface AccionLogin {
  type: string;
  payload: {
    uid: string;
    name: string;
  };
}

type DispatchType = (value: AnyAction) => void;

type StartLoginEmailType = (email: String, Password: String) => any;

export const startLoginEmailPassword: StartLoginEmailType = (
  email,
  password
) => {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(login('123', 'fabian'))
    }, 3500)
  }
}

export const startGoogleLogin = (): any => {
  return (dispatch: DispatchType) => {
    const auth = getAuth()
    signInWithPopup(auth, googleAuthProvider).then((result) => {
      const { user } = result
      dispatch(login(user.uid, user.displayName))
    })
  }
}

export const login = (uid: string, name: string): AccionLogin => {
  return {
    type: types.login,
    payload: {
      uid,
      name
    }
  }
}
