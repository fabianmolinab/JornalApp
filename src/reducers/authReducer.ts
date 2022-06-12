import { types } from '../types/types'

export type AuthReducerAction = {
  type: '[Auth] Login' | '[Auth] Logout';
  payload: {
    uid: number;
    name: string;
  };
};

export const authReducer = (state = {}, action: AuthReducerAction) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.name
      }

    case types.logout:
      return {}

    default:
      return state
  }
}
