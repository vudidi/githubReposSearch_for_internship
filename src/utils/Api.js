class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  searchRepos(query) {
    return fetch(`${this._baseUrl}${query}`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }
}

export const api = new Api({
  baseUrl: "https://api.github.com/search/repositories?q=",
  headers: {
    Accept: "application/vnd.github+jso",
  },
});
