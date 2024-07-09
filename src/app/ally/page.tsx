"use client";

import React from "react";
import { claimTo, getNFT, getOwnedNFTs } from "thirdweb/extensions/erc1155"; 
import {
	MediaRenderer,
	TransactionButton,
	useActiveAccount,
	useReadContract,
} from "thirdweb/react";
import {
	client,
	allyDropContract,
	allyDropTokenId,
} from "@/constants";
import SignIn from "@/components/SignIn";
import Link from "next/link";
import useConfetti from "@/hooks/useConfetti";

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
	const showConfetti = useConfetti();

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold md:font-bold tracking-tighter mb-8 text-zinc-100 mt-4">
                {ownsAllyDropToken ? "You have Claimed your Ally badge!" : "Claim your Ally badge!"}
			</h1>
			<p className="text-md md:text-lg lg:text-lg font-semibold text-center mb-4 mx-auto w-3/4 md:w-1/2 lg:w-1/2">
				I believe in Upe&apos;s mission to crowdsource and syndicate local community information to everyone in Santa Cruz, Guanacaste.
			</p>
			<SignIn	/>
			<div className="flex flex-col">
				{isNftLoading ? (
					<div className="w-full mt-24">Loading...</div>
				) : (
					<>
						{nft ? (
							<Link href="/trophy-case">
								<MediaRenderer
									client={client}
									src={nft.metadata.image} // Can set to URL or IPFS
									style={{ width: "100%", marginTop: "10px" }}
								/>
							</Link>
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
											showConfetti();
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
		</div>
	);
};

export default AllyHome;
