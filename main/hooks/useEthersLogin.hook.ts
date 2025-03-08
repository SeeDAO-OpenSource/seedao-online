import { BrowserProvider, hexlify, JsonRpcSigner, toBeHex, toUtf8Bytes } from 'ethers';
import { polygon } from 'wagmi/chains';
import { useUserInfo } from './useUserInfo.hook';

export const useEthersLogin = () => {
  const { updateUserInfo } = useUserInfo();

  const checkNetwork = async (provider: BrowserProvider) => {
    try {
      const network = await provider.getNetwork();
      if (network.chainId !== BigInt(polygon.id)) {
        await provider.send('wallet_switchEthereumChain', [{
          chainId: `0x${polygon.id.toString(16)}`
        }]);
      }
      return true;
    } catch (error) {
      console.error('Network switch failed:', error);
      return false;
    }
  };

  const login = async () => {
    if (!window.ethereum) {
      alert('请安装MetaMask钱包');
      return false;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      await provider.send('eth_requestAccounts', []);

      if (!(await checkNetwork(provider))) {
        return false;
      }

      const signer: JsonRpcSigner = await provider.getSigner();
      const address = await signer.getAddress();
      const nonce = Math.random().toString(36).substring(2);
      const message = `Welcome to SeeDAO online world!\nNonce: ${nonce}`;
      
      const signature = await provider.send('personal_sign', [
        hexlify(toUtf8Bytes(message)),
        address.toLowerCase()
      ]);

      updateUserInfo({
        address,
        signature,
        chainId: polygon.id
      });

      return true;
    } catch (error) {
      console.error('登录失败:', error);
      return false;
    }
  };

  return { login };
};