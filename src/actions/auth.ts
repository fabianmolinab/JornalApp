import { AnyAction } from 'redux'
import { types } from '../types/types'
import { googleAuthProvider } from '../firebase/firebase-config.js'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { finishLoading, startLoading } from './ui'

interface AccionLogin {
  type: string;
  payload: {
    uid: string;
    name: string | null;
  };
}

type DispatchType = (value: AnyAction) => void;

type StartLoginEmailType = (email: string, password: string) => (dispatch: DispatchType) => void;

export const startLoginEmailPassword: StartLoginEmailType = (
  email,
  password
) => {
  return (dispatch) => {

    dispatch(startLoading())

    const auth = getAuth()

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))

        dispatch(finishLoading())
      })
      .catch(e => {
        console.log(e)
        dispatch(finishLoading())
      })
  }
}

/*
 * starRegisterWithEmailPasswordName Registra el nuevo usuario en Firebase con todos los parametros: email, password, name
 */

export const starRegisterWithEmailPasswordName = (email: string, password: string, name: string) => {
  return (dispatch: DispatchType) => {

    const auth = getAuth()

    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {

        await updateProfile(user, { displayName: name })

        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(e => {
        console.log(e)
      })
  }
}

// Inicio de Sección con Google
export const startGoogleLogin = () => {
  return (dispatch: DispatchType) => {

    const auth = getAuth()

    signInWithPopup(auth, googleAuthProvider).then((result) => {

      const { user } = result
      dispatch(login(user.uid, user.displayName))

    })
  }
}

export const login = (uid: string, name: string | null): AccionLogin => {
  return {
    type: types.login,
    payload: {
      uid,
      name
    }
  }
}
