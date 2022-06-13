import { types } from '../types/types'

// ---- InitialState

type InitialStateType = {
  loading: boolean
  msgError: string
}

const initialState: InitialStateType = {
  loading: false,
  msgError: ''
}

// ----- Reducer
type UIReducerAction = {
  type: '[UI] uiSetError' | '[UI] uiRemoveError' | '[UI] Start Loading' | '[UI] Finish Loading'
  payload: {
    state: InitialStateType
    msgError: string
  }
}

export const uiReducer = (state = initialState, action: UIReducerAction) => {

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

    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      }

    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}
