import { createThirdwebClient, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { SmartWalletOptions } from "thirdweb/wallets";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { darkTheme } from "thirdweb/react";

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
export const allyDropTokenId = 0n;

export const allyDropContract = getContract({
  address: allyDropAddress,
  chain,
  client,
});

export const accountAbstraction: SmartWalletOptions = {
  factoryAddress,
  chain,
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
      options: ["email"],
    },
    hidePrivateKeyExport: false,    
  }),
];

export const customTheme = darkTheme({
  colors: {
    borderColor: 'white',
    modalBg: "#231F20",
    accentButtonBg: "#EC3492",
    accentButtonText: "#ffffff",
    accentText: "#EC3492",
    connectedButtonBg: "#EC3492",
    connectedButtonBgHover: "#EC3492",
    inputAutofillBg: "#EC3492",
    modalOverlayBg: "#EC3492",
    primaryButtonBg: "#EC3492",
    primaryButtonText: "#EC3492",
    primaryText: "#FFFFFF",
    scrollbarBg: "#EC3492",
    secondaryButtonBg: "#EC3492",
    secondaryButtonHoverBg: "#EC3492",
    secondaryButtonText: "#EC3492",
    secondaryIconColor: "#EC3492",
    secondaryIconHoverBg: "#EC3492",
    secondaryIconHoverColor: "#EC3492",
    secondaryText: "#FFFFFF",
    selectedTextBg: "#EC3492",
    selectedTextColor: "#EC3492",
    separatorLine: "#EC3492",
    skeletonBg: "#EC3492",
    success: "#EC3492",
    tertiaryBg: "#EC3492",
    tooltipBg: "#EC3492",
    tooltipText: "#EC3492",
  },
  fontFamily: "Quicksand",  
});

// Export all constants at the end
export { baseSepolia };
