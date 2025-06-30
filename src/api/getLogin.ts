import http from '../utils/request'

export interface LoginData {
  username: string
  password: string
}

const getUserInfo = (data: LoginData) => {
  return http.post('/api/login', data)
}

export default getUserInfo
