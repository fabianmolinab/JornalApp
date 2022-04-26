import { types } from '../types/types'

/*
 *
 * {
 *  uid: 'kjsflkjslkjf',
 *  name: 'Fabian'
 * }
 *
 * */
type AuthReducerAction = {
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
