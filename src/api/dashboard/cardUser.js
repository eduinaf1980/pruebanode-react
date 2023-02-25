const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')


class cardUser {

  async getUser (id) {
    const response = await axios.get(`${URL}/dashboardparam/getuser/${id}`, config.configWithToken())
    return response.data
  }

  async getRate (company) {
    const response = await axios.get(`${URL}/dashboardparam/rate`, {
      company
    }, config.configWithToken())
    return response.data
  }

}


export default new cardUser
