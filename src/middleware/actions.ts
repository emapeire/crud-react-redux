import { MiddlewareAPI, Dispatch, Action } from 'redux'

export const persistanceLocalStorageAction =
  (api: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    next(action)
    localStorage.setItem('__reduxState__', JSON.stringify(api.getState()))
  }
