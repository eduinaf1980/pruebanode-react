const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')

class Company {
  async all () {
    const response = await axios.get(`${URL}/companies`, config.configWithToken())
    return response.data
  }

  async create (data) {
    const response = await axios.post(`${URL}/companies`, data, config.configWithToken())
    return response.data
  }

  async get (data) {
    const response = await axios.post(`${URL}/companies/1`, data, config.configWithToken())
    return response.data
  }

  async update (data) {
    const response = await axios.put(`${URL}/companies`, data, config.configWithToken())
    return response.data
  }

  async delete (nit) {
    const response = await axios.delete(`${URL}/companies/${nit}`, config.configWithToken())
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

export default new Company()
