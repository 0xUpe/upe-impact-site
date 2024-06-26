import React from 'react';
import { ConnectButton, ConnectEmbed, useActiveAccount } from 'thirdweb/react';
import { client, wallets, accountAbstraction, baseSepolia, customTheme } from '@/constants';

const SignIn: React.FC = () => {
  const account = useActiveAccount();
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

export default SignIn;