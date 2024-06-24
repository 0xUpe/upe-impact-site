"use client";

import React from "react";
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
} from "../../constants";
import Link from "next/link";

const AllyHome: React.FC = () => {
	const smartAccount = useActiveAccount();
	const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
		contract: allyDropContract,
		tokenId: allyDropTokenId,
	});
	const { data: ownedNfts } = useReadContract(getOwnedNFTs, {
		contract: allyDropContract,
		start: 0,
		count: 10,
		address: smartAccount?.address!,
		queryOptions: { enabled: !!smartAccount },
	});
	// Check if the user owns the allyDropTokenId
    const ownsAllyDropToken = ownedNfts?.some(nft => nft.id === allyDropTokenId);

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 text-zinc-100 mt-4">
                {ownsAllyDropToken ? "You have Claimed your Ally badge!" : "Claim your Ally badge!"}
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
								You own {ownsAllyDropToken ? '1' : '0'} ally badge!
							</p>
							{ownsAllyDropToken ? null : (
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
