import React from 'react';
import { ConnectEmbed } from 'thirdweb/react';
import { client, wallets, accountAbstraction, baseSepolia, customTheme } from '@/constants';

const ConnectWallet: React.FC = () => {
  return (
    <ConnectEmbed
      client={client}            
      wallets={wallets}
      showAllWallets={false}
      chain={baseSepolia}
      accountAbstraction={accountAbstraction}
      showThirdwebBranding={false}
      theme={customTheme}
    />
  );
};

export default ConnectWallet;
