"use client";

import React, { useEffect, useState } from "react";
import { getNFT, getOwnedNFTs } from "thirdweb/extensions/erc1155"; 
import {	
	MediaRenderer,
	useActiveAccount,
	useReadContract,
} from "thirdweb/react";
import {	
	client,
	allyDropContract,
	allyDropAddress,
} from "@/constants";
import Link from "next/link";
import SignIn from "@/components/SignIn";

const BadgesHome: React.FC = () => {
	const smartAccount = useActiveAccount();
	const tokenIds = [0n, 1n, 2n, 3n, 4n];

	// Hooks to fetch owned NFTs and NFT metadata
	const { data: ownedNftsData } = useReadContract(getOwnedNFTs, {
		contract: allyDropContract,
		start: 0,
		count: 10,
		address: smartAccount?.address!,
		queryOptions: { enabled: !!smartAccount },
	});

	const { data: nft0 } = useReadContract(getNFT, { contract: allyDropContract, tokenId: 0n });
	const { data: nft1 } = useReadContract(getNFT, { contract: allyDropContract, tokenId: 1n });
	const { data: nft2 } = useReadContract(getNFT, { contract: allyDropContract, tokenId: 2n });
	const { data: nft3 } = useReadContract(getNFT, { contract: allyDropContract, tokenId: 3n });
	const { data: nft4 } = useReadContract(getNFT, { contract: allyDropContract, tokenId: 4n });

	const nfts = [nft0, nft1, nft2, nft3, nft4];

	// State for managing owned NFTs
	const [ownedNfts, setOwnedNfts] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	// Effect to update owned NFTs when data changes
	useEffect(() => {
		if (ownedNftsData) {
			setOwnedNfts(ownedNftsData);
			setIsLoading(false);
		}
	}, [ownedNftsData]);

	const openSeaUrl = (contractAddress: string, tokenId: bigint) => {
		return `https://opensea.io/assets/base-sepolia/${contractAddress}/${tokenId}`;
	};

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 text-zinc-100 mt-4">
                {ownedNfts?.length ? "Your Badges" : "You do not have any Badges"}
			</h1>
			<SignIn />
			<div className="flex flex-col w-full">
				{isLoading ? (
					<div className="w-full mt-24">Loading...</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{tokenIds.map((tokenId, index) => {
							const nft = nfts[index];
							const ownsToken = ownedNfts?.some(nft => BigInt(nft.id) === tokenId);

							return ownsToken && nft ? (
								<div key={tokenId.toString()} className="flex flex-col items-center border border-gray-700 p-4 rounded-lg">
									<MediaRenderer
										client={client}
										src={nft.metadata.image}
										style={{ width: "100%", marginTop: "10px" }}
									/>
									<h2 className="text-lg font-semibold mt-4 text-center">{nft.metadata.name}</h2>
									<p className="text-sm text-gray-400 text-center mt-2">{nft.metadata.description}</p>
									<p className="text-sm text-gray-400 text-center mt-2">Token ID: {tokenId.toString()}</p>
									{Array.isArray(nft.metadata.attributes) && nft.metadata.attributes.length > 0 ? (
										<div className="mt-4">
											<h3 className="text-md font-semibold text-center">Traits:</h3>
											<ul className="text-sm text-gray-400 text-center mt-2">
												{nft.metadata.attributes.map((trait: any, traitIndex: number) => (
													<li key={traitIndex}>
														<strong>{trait.trait_type}:</strong> {trait.value}
													</li>
												))}
											</ul>
										</div>
									) : (
										<p className="text-sm text-gray-400 text-center mt-2">No traits available</p>
									)}
									<a
										href={openSeaUrl(allyDropAddress, tokenId)}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-blue-500 mt-2"
									>
										View on OpenSea
									</a>
								</div>
							) : null;
						})}
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
