type Object = {
  login: string
  logout: string
  uiSetError: string
  uiRemoveError: string
  uiStartLoading: string
  uiFinishLoading: string
}

export const types: Object = {
  login: '[Auth] Login',
  logout: '[Auth] Logout',

  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error',

  uiStartLoading: '[UI] Start Loading',
  uiFinishLoading: '[UI] Finish Loading'

}
