"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { getOwnedNFTs } from "thirdweb/extensions/erc1155";
import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import {
  client,
  allyDropContract,
  allyDropAddress,
  kookDropContract,
  kookDropAddress,
} from "@/constants";
import Link from "next/link";
import SignIn from "@/components/SignIn";

const BadgesHome: React.FC = () => {
  const smartAccount = useActiveAccount();

  // Hooks to fetch owned Badges and Badge metadata
  const { data: ownedBadgesData } = useReadContract(getOwnedNFTs, {
    contract: allyDropContract,
    start: 0,
    count: 10,
    address: smartAccount?.address!,
    queryOptions: { enabled: !!smartAccount },
  });

  // Hooks to fetch owned Trophies and Trophy metadata
  const { data: ownedTrophiesData } = useReadContract(getOwnedNFTs, {
    contract: kookDropContract,
    start: 0,
    count: 10,
    address: smartAccount?.address!,
    queryOptions: { enabled: !!smartAccount },
  });

  // State for managing owned Badges and Trophies
  const [ownedBadges, setOwnedBadges] = useState<any[]>([]);
  const [ownedTrophies, setOwnedTrophies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Effect to update owned Badges and Trophies when data changes
  useEffect(() => {
    if (ownedBadgesData) {
      setOwnedBadges(ownedBadgesData);
    }
    if (ownedTrophiesData) {
      setOwnedTrophies(ownedTrophiesData);
    }
    setIsLoading(false);
  }, [ownedBadgesData, ownedTrophiesData]);

  const openSeaUrl = (contractAddress: string, tokenId: bigint) => {
    return `https://opensea.io/assets/base/${contractAddress}/${tokenId}`;
  };

  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold md:font-bold tracking-tighter mb-12 text-zinc-100 mt-4">
        {ownedBadges.length || ownedTrophies.length ? "Your Badges & Trophies" : "You do not have any Badges or Trophies!"}
      </h1>
      <SignIn />
      <div className="flex flex-col w-full">
        {isLoading ? (
          <div className="w-full mt-24">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="section">
              <h2 className="text-center text-xl font-bold mb-4">Badges</h2>
              <div className="grid grid-cols-1 gap-4">
                {ownedBadges.map((badge, index) => (
                  <div key={index} className="border border-gray-700 p-4 rounded-lg">
                    <MediaRenderer
                      client={client}
                      src={badge.metadata.image}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <h2 className="text-lg font-semibold mt-4 text-center">{badge.metadata.name}</h2>
						<ReactMarkdown
							className="text-sm text-gray-400 mt-2"
							remarkPlugins={[remarkGfm]}
							components={{
								a: ({node, ...props}) => <a {...props} style={{ color: '#EC3492' }} />
							}}
							>
							{badge.metadata.description}
						</ReactMarkdown>
					<p className="text-center mt-4">
                    <a
                      href={openSeaUrl(allyDropAddress, BigInt(badge.id))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-upe-pink mt-2"
                    >
                      View on OpenSea
					</a>
					</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="section">
              <h2 className="text-center text-xl font-bold mb-4">Trophies</h2>
              <div className="grid grid-cols-1 gap-4">
                {ownedTrophies.map((trophy, index) => (
                  <div key={index} className="border border-gray-700 p-4 rounded-lg">
                    <MediaRenderer
                      client={client}
                      src={trophy.metadata.image}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <h2 className="text-lg font-semibold mt-4 text-center">{trophy.metadata.name}</h2>
					    <ReactMarkdown
							className="text-sm text-gray-400 mt-2"
							remarkPlugins={[remarkGfm]}
							components={{
								a: ({node, ...props}) => <a {...props} style={{ color: '#EC3492' }} />
							}}
							>
							{trophy.metadata.description}
						</ReactMarkdown>
					<p className="text-center mt-4">

                    <a
                      href={openSeaUrl(kookDropAddress, BigInt(trophy.id))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-upe-pink mt-2"
                    >
                      View on OpenSea
					</a>
					</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Link href="/" className="text-sm text-gray-400 mt-8">
        Back to home
      </Link>
    </div>
  );
};

export default BadgesHome;