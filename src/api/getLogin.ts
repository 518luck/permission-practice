import http from '../utils/request'

import type { User } from '../mock/login'

export interface LoginData {
  username: string
  password: string
}

interface infoType {
  code: number
  data: User[]
  message: string
}

const getUserInfo = (data: LoginData): Promise<{ data: infoType }> => {
  return http.post('/api/login', data)
}

export default getUserInfo
