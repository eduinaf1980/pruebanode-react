const axios = require('axios')
const { URL } = require('./constant')
const config = require('./config')

class Auth {
  async login (email, password) {
    const response = await axios.post(`${URL}/users/login`, 
    {
      email: email,
      pass: password
    })
    console.log(response.data)
    return response.data
  }

  async verify () {
    const response = await axios.get(`${URL}/auth/verify`, config.configWithToken())
    return response.data
  }
}

export default new Auth()
