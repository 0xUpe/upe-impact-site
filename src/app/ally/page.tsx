"use client";
import type React from "react";
import { claimTo, getNFT, getOwnedNFTs } from "thirdweb/extensions/erc1155"; 
import {
	ConnectButton,
	MediaRenderer,
	TransactionButton,
	useActiveAccount,
	useReadContract,
} from "thirdweb/react";
import {
	accountAbstraction,
	client,
	allyDropContract,
	allyDropTokenId,
} from "../constants";
import Link from "next/link";

// For logging
/* 
import React, { useEffect } from 'react'; 
*/

const AllyHome: React.FC = () => {
	const smartAccount = useActiveAccount();
	const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
		contract: allyDropContract,
		tokenId: allyDropTokenId,
	});
	const { data: ownedNfts } = useReadContract(getOwnedNFTs, {
		contract: allyDropContract,
		address: smartAccount?.address!,
		queryOptions: { enabled: !!smartAccount },
	});
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 text-zinc-100">
  				{ownedNfts !== undefined && ownedNfts?.[0]?.quantityOwned > 0 ? "You have Claimed your ally badge!" : "Claim your ally badge!"}
			</h1>
			<ConnectButton
				client={client}
				accountAbstraction={accountAbstraction}
				connectModal={{
					size: "compact",
				}}
			/>
			<div className="flex flex-col">
				{isNftLoading ? (
					<div className="w-full mt-24">Loading...</div>
				) : (
					<>
						{nft ? (
							<MediaRenderer
								client={client}
								src={nft.metadata.image} // Can set to URL or IPFS
								style={{ width: "100%", marginTop: "10px" }}
							/>
						) : null}
						{smartAccount ? (
						<>
							<p className="font-semibold text-center mb-2">
								You own {ownedNfts !== undefined && ownedNfts?.[0]?.quantityOwned || 0} ally badge!
							</p>
							{ownedNfts !== undefined &&ownedNfts?.[0]?.quantityOwned > 0 ? null : (
									<TransactionButton
										transaction={() =>
										claimTo({
											contract: allyDropContract,
											tokenId: allyDropTokenId,
											to: smartAccount.address,
											quantity: 1n,
										})
										}
										onError={(error) => {
										alert(`Error: ${error.message}`);
										}}
										onTransactionConfirmed={async () => {
										alert("Claim successful!");
										}}
									>
										Claim!
									</TransactionButton>
									)}
								</>
								) : (
								<p
									style={{
									textAlign: "center",
									width: "100%",
									marginTop: "10px",
									}}
								>
									Login to claim!
								</p>
								)}
					</>
				)}
			</div>
			<Link href={"/"} className="text-sm text-gray-400 mt-8">
				Back to home
			</Link>
		</div>
	);
};

export default AllyHome;
