type Object = {
  login: string,
  logout: string,
  uiSetError: string,
  uiRemoveError: string
}

export const types: Object = {
  login: '[Auth] Login',
  logout: '[Auth] Logout',

  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error'
}
