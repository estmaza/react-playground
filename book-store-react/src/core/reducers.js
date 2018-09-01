import { combineReducers } from 'redux'
import * as a from './actions-base'

export const initialState = {
  books: [],
  authors: [],
  loading: false,
  errors: []
}

function errors(state = [], action) {
  switch (action.type) {
    case a.ERROR_ADD:
      return Object.assign({}, state, {
        errors: [
          ...state.errors,
          action.error
        ]
      })
    default:
      return state
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case a.LOADING_START:
      return Object.assign({}, state, { loading: true })
    case a.LOADING_END:
      return Object.assign({}, state, { loading: false })
    default:
      return state
  }
}

const bookStoreApp = combineReducers({
  errors,
  loading
})

export default bookStoreApp