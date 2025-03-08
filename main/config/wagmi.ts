import { createConfig, http } from 'wagmi'
import { polygon } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'

 const wagmiConfig = createConfig({
  chains: [polygon],
  transports: {
    [polygon.id]: http()
  },
  connectors: [
    metaMask(),
    walletConnect({ projectId: 'f4e3bd64fc0cef24dd27c6f09d005fe3' })  // @Ricky https://cloud.reown.com 
  ]
})

export default wagmiConfig