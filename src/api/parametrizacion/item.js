const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')

class Item {
  async all () {
    const response = await axios.get(`${URL}/items`, config.configWithToken())
    return response.data
  }

  async create (data) {
    const response = await axios.post(`${URL}/items`, data, config.configWithToken())
    return response.data
  }

  async get (id) {
    const response = await axios.get(`${URL}/items/${id}`, config.configWithToken())
    return response.data
  }

  async update (data) {
    const response = await axios.put(`${URL}/items`, data, config.configWithToken())
    return response.data
  }

  async delete (id) {
    const response = await axios.delete(`${URL}/items/${id}`, config.configWithToken())
    return response.data
  }

  async verifyNit (nit) {
    const response = await axios.get(`${URL}/companies/nitcompanies/${nit}`, config.configWithToken())
    return response.data
  }

  async verifyCompany (name) {
    const response = await axios.get(`${URL}/companies/namecompanies/${name}`, config.configWithToken())
    return response.data
  }
}

export default new Item()
