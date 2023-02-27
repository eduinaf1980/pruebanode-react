import { getItem } from '../utils/index'

export const configWithToken = () => {
  return ({
    headers: {
      'Authorization': `Bearer ${getItem('token')}`
    }
  })
}
export default {
  configWithToken,
}
