import {
  getSessionItem,
  removeSessionItem,
  setSessionItem
} from '../utils/storage'
import { UserInfo } from '../hooks/useUserInfo.hook'
import { create } from 'zustand'

type State = { info?: UserInfo }

type Actions = {
  save: (qty: UserInfo) => void
  update: (qty: Omit<UserInfo, 'token'>) => void
  clear: () => void
}

const initVal = () => {
  const info = getSessionItem('userInfo')

  if (info) return JSON.parse(info)

  return undefined
}

const useUserInfoStore = create<State & Actions>((set) => ({
  info: initVal(),
  save: async (info) => {
    if (info) {
      // setSessionItem('token', info?.token)
      setSessionItem('userInfo', JSON.stringify(info))
      set({ info })
    }
  },
  update: (info: Omit<UserInfo, 'token'>) => {
    const token = getSessionItem('token')
    if (info && token) {
      const infoWithToken = { ...info, token }
      setSessionItem('userInfo', JSON.stringify(info))
      set({ info: infoWithToken })
    }
  },
  clear: () => {
    removeSessionItem('token')
    removeSessionItem('userInfo')
    set({ info: undefined })
  }
}))

export { useUserInfoStore }
