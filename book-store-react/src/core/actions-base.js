// Loading
export const LOADING_START = 'LOADING_START'
export function loadingStart() {
  return { type: LOADING_START }
}

export const LOADING_END = 'LOADING_END'
export function loadingEnd() {
  return { type: LOADING_END }
}

// Errors
export const ERROR_ADD = 'ERROR_ADD'
export function errorAdd(error) {
  return { type: ERROR_ADD, error: error }
}