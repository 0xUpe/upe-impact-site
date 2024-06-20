import { createThirdwebClient, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { SmartWalletOptions } from "thirdweb/wallets";
import { createWallet, inAppWallet, walletConnect, smartWallet } from "thirdweb/wallets";
import { darkTheme } from "thirdweb/react";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
	throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
	clientId: clientId,
});

export const chain = baseSepolia;

if (!process.env.NEXT_PUBLIC_TEMPLATE_FACTORY_ADDRESS || !process.env.NEXT_PUBLIC_TEMPLATE_ALLY_DROP_ADDRESS) {
    throw new Error('Required environment variables are not defined');
}

export const factoryAddress = process.env.NEXT_PUBLIC_TEMPLATE_FACTORY_ADDRESS as string;
export const allyDropAddress = process.env.NEXT_PUBLIC_TEMPLATE_ALLY_DROP_ADDRESS as string;
export const allyDropTokenId = process.env.NEXT_PUBLIC_TEMPLATE_ALLY_DROP_TOKEN_ID;

export const allyDropContract = getContract({
	address: allyDropAddress,
	chain,
	client,
});

export const accountAbstraction: SmartWalletOptions = {
	chain,
	factoryAddress,
	sponsorGas: true,
};

export const wallets = [
	//createWallet("com.coinbase.wallet"),
	inAppWallet({
    smartAccount: {
      chain: baseSepolia,
      sponsorGas: true,
      factoryAddress: factoryAddress,
    },
    auth: {
      options: [
        "email",        
      ],
    },
    hidePrivateKeyExport: false,
  }),
];

export const customTheme = darkTheme({
	colors: {
		borderColor: 'white',
		modalBg: "#231F20",
		primaryText: "white",
		secondaryText: "white",
	}
});