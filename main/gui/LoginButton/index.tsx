import React, {  useMemo } from 'react'
import { formatAddress } from '../../utils'
import styles from './style.module.less'
import { useUserInfo } from '../../hooks/useUserInfo.hook'
import { useEthersLogin } from '../../hooks/useEthersLogin.hook'

const LoginButton = () => {
  const { login } = useEthersLogin()
  const { userInfo,clear: clearUserInfo} = useUserInfo()

  const account = useMemo(() => {
    const addr = userInfo?.address
    return addr ? formatAddress(addr, 6, -4): null
  }, [userInfo])

  const handleClick = async () => {
    if(!account){
      await login() 
    } else{
      return account
    }
  }

  //退出登录
  const handleLoginOut = async () => {
    if (account) {
       clearUserInfo()
    }
  }

  return (
      <div className={styles.ctn}>
        {/* <img
          src={userInfo.avatar}
          className={styles.avatar}
          alt=""
        /> */}
        <div className={styles.account} onClick={handleClick}>{account || '登录'}</div>
        {
          account && <div className={styles.dropdownCtn}>
            <div className={styles.dropdown}>
              <div onClick={handleLoginOut} className={styles.signOut}>
              退出
              </div>
            </div>
          </div>
        }
      </div>
  )
}

export default LoginButton
