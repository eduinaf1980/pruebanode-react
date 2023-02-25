const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')

class User {
  async all () {
    const response = await axios.get(`${URL}/users/getusers`, config.configWithToken())
    return response.data
  }

  async get (id) {
    const response = await axios.get(`${URL}/users/getuser/${id}`, config.configWithToken())
    return response.data
  }

  async create (data) {
    const response = await axios.post(`${URL}/users/createuser`, data, config.configWithToken())
    return response.data
  }

  async update (data) {
    const response = await axios.post(`${URL}/users/updateuser`, data, config.configWithToken())
    return response.data
  }

  async enable (_id) {
    const response = await axios.post(`${URL}/users/enableuser `, {'id': _id}, config.configWithToken())
    return response.data
  }

  async delete (_id) {
    const response = await axios.post(`${URL}/users/deleteuser`, {'id': _id}, config.configWithToken())
    return response.data
  }

  async filterByPage (page) {
    const response = await axios.get(`${URL}/users/getuserpag/${page}`, config.configWithToken())
    return response.data
  }

  async filterSearch (key, page) {
    const response = await axios.get(`${URL}/users/getuserfilter/${key}/${page}`, config.configWithToken())
    return response.data
  }

  async filterSelect () {
    const response = await axios.get(`${URL}/users/selectusers`, config.configWithToken())
    return response.data
  }

  async verifyEmail (email) {
    const response = await axios.get(`${URL}/users/emailusers/${email}`, config.configWithToken())
    return response.data
  }

  async verifyPhone (phone) {
    const response = await axios.get(`${URL}/users/phoneusers/${phone}`, config.configWithToken())
    return response.data
  }

  async verifyDocument (numDocument) {
    const response = await axios.get(`${URL}/users/documentusers/${numDocument}`, config.configWithToken())
    return response.data
  }
}

export default new User()