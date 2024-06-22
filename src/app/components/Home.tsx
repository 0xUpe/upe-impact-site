"use client";

import { ConnectEmbed, useActiveAccount } from "thirdweb/react";
import { client, wallets, accountAbstraction, baseSepolia, customTheme } from "../constants";
import Header from "./Header";
import DisconnectButton from "./DisconnectButton";
import Badges from "./Badges";
import WhatIsUpe from "./WhatIsUpe";
import OCS from "./OCS";
import Allies from "./Allies";
import Projects from "./Projects";
import Join from "./Join";
import Footer from "./Footer";
import Menu from "./Menu";

const Home: React.FC = () => {
  const activeAccount = useActiveAccount();

  return (
    <div className="outer-container py-1 w-full mx-auto max-w-screen-xl">
      <div className="inner-container mx-auto">
        <div className="flex justify-between items-center w-full mb-4">
          <Header activeAccount={activeAccount || null} />
          {activeAccount && <DisconnectButton />}
        </div>
        <div className="flex justify-center mb-10">
          <ConnectEmbed
            client={client}
            wallets={wallets}
            showAllWallets={false}
            chain={baseSepolia}
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
