import { useEffect } from "react"
import {useUserInfoStore} from '../stores/useUserInfoStore'

export interface UserInfo  {
  address:string
  userName:string
}

export const useUserInfo = () => {
  const {info, save,clear:clearInfo} = useUserInfoStore()
  
  const clear = () => {
    window.sessionStorage.clear()
    clearInfo()
  }

  const updateUserInfo = (userInfo: any) => {
    save(userInfo)
    window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  return {
    clear,
    userInfo:info,
    updateUserInfo
  }
}