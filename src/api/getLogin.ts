import http from '../utils/request'

export interface LoginData {
  username: string
  password: string
}

export interface MenuItem {
  id: number
  authName: string
  icon?: string
  path?: string
  rights?: string[]
  children?: MenuItem[]
}

export interface DataType {
  id: number
  username: string
  password: string
  token: string
  rights: MenuItem[]
}

export interface InfoType {
  code: number
  data: DataType
  message: string
}

const getUserInfo = async (data: LoginData): Promise<{ data: InfoType }> => {
  return await http.post('/api/login', data)
}

export default getUserInfo
