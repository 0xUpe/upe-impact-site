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
	kookDropContract,
	kookDropTokenId,
} from "@/constants";
import SignIn from "@/components/SignIn";
import Link from "next/link";

const KookHome: React.FC = () => {
	const smartAccount = useActiveAccount();
	const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
		contract: kookDropContract,
		tokenId: kookDropTokenId,
	});
	const { data: ownedNfts } = useReadContract(getOwnedNFTs, {
		contract: kookDropContract,
		start: 0,
		count: 10,
		address: smartAccount?.address!,
		queryOptions: { enabled: !!smartAccount },
	});
	// Check if the user owns the kookDropTokenId
    const ownsKookDropToken = ownedNfts?.some(nft => nft.id === kookDropTokenId);

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 text-zinc-100 mt-4">
                {ownsKookDropToken ? "You have Claimed your Kook trophy!" : "Claim your Kook trophy!"}
			</h1>
			<p className="text-md md:text-lg lg:text-lg font-semibold text-center mb-4 mx-auto w-3/4 md:w-1/2 lg:w-1/2">
				Upe Kooks are collaborators who tap into their network to obtain important local information and motivate others to be involved in initiatives that enhance our communities in Costa Rica.
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
								You own {ownsKookDropToken ? '1' : '0'} Kook trophy!
							</p>
							{ownsKookDropToken ? null : (
									<TransactionButton
										transaction={() =>
										claimTo({
											contract: kookDropContract,
											tokenId: kookDropTokenId,
											to: smartAccount.address,
											quantity: 1n,
										})
										}
										onError={(error) => {
											alert(`Error Claiming! Are you a Kook? Drop a message in the Kook chat. Error Details: ${error.message}`);
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

export default KookHome;
