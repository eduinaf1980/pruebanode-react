const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')


class General {

  async getGeneralInfo () {
    const response = await axios.get(`${URL}/dashboardparam/generalinfo`, config.configWithToken())
    return response.data
  }
}


export default new General
