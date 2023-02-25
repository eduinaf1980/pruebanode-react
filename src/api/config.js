import { getItem } from '../utils/index'

export const configWithToken = () => {
  return ({
    headers: {
      'Authorization': `Bearer ${getItem('token')}`
    }
  })
}

export const configWithTokenAndMultipart = () => {
  return ({headers: {
    ...configWithToken().headers,
    'contentType': 'multipart/form-data'
  }})
}

export default {
  configWithToken,
  configWithTokenAndMultipart
}
