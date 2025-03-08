import { useAccount, useSwitchChain, useSignMessage } from 'wagmi'
import { useUserInfo } from './useUserInfo.hook'
import { polygon } from 'wagmi/chains'

export const useLogin = () => {
  const { switchChain } = useSwitchChain()
  const { signMessageAsync } = useSignMessage()
  const { address } = useAccount()
  const { setUserInfo } = useUserInfo()

  const login = async () => {
    try {
      // 切换到Polygon网络
      switchChain({ chainId: polygon.id })
     
      // 生成随机消息并签名
      const nonce = Math.random().toString(36).substring(2)
      const signature = await signMessageAsync({ 
        message: `Welcome to SeeDAO online world!\nNonce: ${nonce}` 
      })

      // 存储用户信息
      setUserInfo({
        address: address!,
        signature,
        chainId: polygon.id
      })

      return true
    } catch (error:any) {
      console.error('登录失败:', error)
      // 网络切换失败时恢复原链
      if (error?.message?.includes('网络切换')) {
         switchChain({ chainId: 1 }) // 回退到ETH主网
      }
      return false
    }
  }

  return {
    login
  }
}

export default useLogin