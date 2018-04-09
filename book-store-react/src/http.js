const API_ROOT = 'https://localhost:44340/api';

const requests = {
  del: url =>
    fetch(`${API_ROOT}${url}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(res => res.json()),

  get: url =>
    fetch(`${API_ROOT}${url}`).then(res => res.json()),

  put: (url, data) =>
    fetch(`${API_ROOT}${url}`, {
      body: JSON.stringify(data),
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(res => res.json()),

  post: (url, data) =>
    fetch(`${API_ROOT}${url}`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: 'include'
    }).then(res => res.json())
};

const Books = {
  all: () =>
    requests.get('/books'),
  get: (id) =>
    requests.get(`/books/${id}`)
}

export default {
  Books
};
