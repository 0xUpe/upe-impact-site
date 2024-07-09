"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import Header from "./_components/Header";
import Badges from "@/components/Badges";
import WhatIsUpe from "@/components/WhatIsUpe";
import OCS from "@/components/OCS";
import Allies from "@/components/Allies";
import Projects from "@/components/Projects";
import Join from "@/components/Join";
import SignIn from "@/components/SignIn";
import { getOwnedNFTs } from "thirdweb/extensions/erc1155";
import { allyDropContract, allyDropTokenId } from "@/constants";

const HomePage: React.FC = () => {
  const activeAccount = useActiveAccount();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  // Hooks to fetch owned NFTs
  const { data: ownedNfts, isLoading } = useReadContract(getOwnedNFTs, {
    contract: allyDropContract,
    start: 0,
    count: 10,
    address: activeAccount?.address!,
    queryOptions: { enabled: !!activeAccount },
  });

  // Check if the user owns the allyDropTokenId
  const ownsAllyDropToken = ownedNfts?.some(nft => nft.id === allyDropTokenId);

  useEffect(() => {
    if (activeAccount && !isLoading) {
      if (ownsAllyDropToken) {
        router.push("/dashboard");
      } else {
        router.push("/ally");
      }
      setIsChecking(false);
    } else if (!activeAccount) {
      setIsChecking(false);
    }
  }, [activeAccount, ownsAllyDropToken, isLoading, router]);

  if (isChecking) {
    return <div>Loading...</div>; // Replace this with your loading indicator
  }

  return (
    <div className="outer-container py-1 w-full mx-auto max-w-screen-xl">
      <div className="inner-container mx-auto">
        <div className="items-center">
          <Header activeAccount={activeAccount || null} />
        </div>
        {!activeAccount && (
          <div className="flex justify-center mb-10">
            <SignIn />
          </div>
        )}
        <div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded mb-10 w-11/12 mx-auto"></div>
        <Badges />
        <WhatIsUpe />
        <OCS />
        <div className="allies-outer bg-upe-gradient w-full p-2 md:p-6 lg:p-8 max-w-screen-xl">
          <Allies />
          <Projects />
        </div>
        <Join />
      </div>
    </div>
  );
};

export default HomePage;
