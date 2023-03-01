const axios = require('axios')
const { URL } = require('../constant')

class Auth {
  async login(email, password) {
    const response = await axios.post(`${URL}/users/login`,
      {
        email: email,
        pass: password
      })
    return response.data
  }
}

export default new Auth()
