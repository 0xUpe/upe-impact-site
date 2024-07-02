import { base, baseSepolia } from 'thirdweb/chains';

if (!process.env.NEXT_PUBLIC_THIRDWEB_ACTIVE_CHAIN || !process.env.NEXT_PUBLIC_THIRDWEB_FACTORY_ADDRESS || !process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID) {
  throw new Error('Required environment variables are not defined');
}

const getActiveChain = (chain?: string) => {
	switch(chain) {
		case "base":
			return base
		case "base-sepolia":
			return baseSepolia
		default:
			return baseSepolia
	}
}

export const activeChain = getActiveChain(process.env.NEXT_PUBLIC_THIRDWEB_ACTIVE_CHAIN);
export const factoryAddress = process.env.NEXT_PUBLIC_THIRDWEB_FACTORY_ADDRESS;
export const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
export const LAST_CONNECT_PERSONAL_WALLET_ID =
	'last-connect-personal-wallet-id';
