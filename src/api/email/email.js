const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')

class Email {
  async addFile (data) {
    const response = await axios.post(`${URL}/email/addfile`, data, config.configWithToken())
    return response.data
  }
}

export default new Email()
