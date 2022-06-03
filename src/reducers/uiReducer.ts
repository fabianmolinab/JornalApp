import { types } from '../types/types'

// ---- InitialState

type InitialStateType = {
  loading: boolean;
  nsgError: string;
}

const initialState = {
  loading: false,
  msgError: ''
}

// ----- Reducer
type AuthReducerAction = {
  type: '[UI] uiSetError' | '[UI] uiRemoveError';
  payload: {
    state: InitialStateType;
    msgError: string
  }
}

export const uiReducer = (state = initialState, action: AuthReducerAction) => {

  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload
      }

    case types.uiRemoveError:
      return {
        ...state,
        msgError: ''
      }

    default:
      return state
  }
}
