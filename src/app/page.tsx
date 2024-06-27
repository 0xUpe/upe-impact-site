"use client";

import { ConnectEmbed, useActiveAccount } from "thirdweb/react";
import { client, wallets, accountAbstraction, base, customTheme } from "./constants";
import Header from "./components/Header";
import DisconnectButton from "./components/DisconnectButton";
import Badges from "./components/Badges";
import WhatIsUpe from "./components/WhatIsUpe";
import OCS from "./components/OCS";
import Allies from "./components/Allies";
import Projects from "./components/Projects";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const Home: React.FC = () => {
  const activeAccount = useActiveAccount();

  return (
    <div className="outer-container py-1 w-full mx-auto max-w-screen-xl">
      <div className="inner-container mx-auto">
        <div className="items-center">
          {activeAccount && <DisconnectButton />}
          <Header activeAccount={activeAccount || null} />
        </div>
        <div className="flex justify-center mb-10">
          <ConnectEmbed
            client={client}            
            wallets={wallets}
            showAllWallets={false}
            chain={base}
            accountAbstraction={accountAbstraction}
            showThirdwebBranding={false}
            theme={customTheme}
          />
        </div>
        {!activeAccount ? (
          <>
            <div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded mb-10 w-11/12 mx-auto"></div>
            <Badges />
            <WhatIsUpe />
            <OCS />
            <div className="allies-outer bg-upe-gradient w-full p-2 md:p-6 lg:p-8 max-w-screen-xl">
              <Allies />
              <Projects />
            </div>
            <Join />
            <Footer />
          </>
        ) : (
          <>
            <Menu />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
