import { http } from '../../core/http'

const root = '/books'

export const service = {
  all: () => http.get(root),
  get: (id) => http.get(`${root}/${id}`)
}