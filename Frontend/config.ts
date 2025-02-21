import { http, createConfig } from 'wagmi'
import { polygonAmoy, mainnet } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = 'c6b56f46e0d8f3e131375de912f95279'

export const config = createConfig({
  chains: [polygonAmoy, mainnet],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [polygonAmoy.id]: http(),
    [mainnet.id]: http(),
  },
})