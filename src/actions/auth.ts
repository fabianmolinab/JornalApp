import { AnyAction } from 'redux'
import { types } from '../types/types'

interface AccionLogin {
  type: string;
  payload: {
    uid: number;
    name: string;
  };
}

type DispatchType = (value: AnyAction) => void;

type StartLoginType = (email: String, Password: String) => any;

export const startLoginEmailPassword: StartLoginType = (email, password) => {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(login(123, 'fabian'))
    }, 3500)
  }
}

export const login = (uid: number, name: string): AccionLogin => {
  return {
    type: types.login,
    payload: {
      uid,
      name
    }
  }
}
