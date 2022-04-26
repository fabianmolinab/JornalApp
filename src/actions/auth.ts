import { types } from '../types/types'

interface AccionLogin {
  type: string;
  payload: {
    uid: number;
    name: string;
  };
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
