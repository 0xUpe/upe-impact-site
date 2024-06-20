"use client"
import Image from "next/image";

import { ConnectButton, ConnectEmbed, useActiveAccount, useDisconnect, useActiveWallet, lightTheme, darkTheme } from "thirdweb/react";
import { Account } from "thirdweb/wallets";
import { base, baseSepolia, ethereum, optimism } from "thirdweb/chains";
import { accountAbstraction, client, wallets, customTheme } from "./constants";
import upeIcon from "@public/upe_favicon.png";
import fbIcon from "@public/fbicon.svg";
import twIcon from "@public/twicon.svg";
import igIcon from "@public/igicon.svg";
import Link from "next/link";

interface HeaderProps {
  activeAccount: Account | null;
}

export default function Home() {
	// This hook checks if a wallet is connected
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
						chain={baseSepolia}
						accountAbstraction={accountAbstraction}
						showThirdwebBranding={false}
						theme={customTheme}
					/>
				</div>

				{!activeAccount && (
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
				)}

				{activeAccount && (
					<>
						<Menu  />
						<Footer />
					</>
				)}
			</div>
		</div>
	);
}

function Header({ activeAccount }: HeaderProps) {
  return (
    <header className="flex flex-col items-center mb-10 md:mb-10 p-1 pt-7">
      <Image
        src={upeIcon}
        alt=""
        width={120}
        height={120}
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl tracking-tighter mb-6 text-zinc-100">
		{activeAccount ? 
			<>
			<span className="text-upe-pink">Upe Impact</span> Member Dashboard
			</> 
			: 
			<>
			Welcome to <span className="text-upe-pink">Upe Impact</span>
			</>
		}
	  </h1>
      <h2 className="text-xl font-semibold text-center text-zinc-400 text-base mb-5 md:mb-5">
        {activeAccount 
            ? <>Hey there 👋🏽 community player, <br /> 🏆 Claim your local impact badges. 🏆</> 
            : "Collaborate with your community. Collect badges for your good deeds."
        }
        </h2>  

		{activeAccount && (
			<div className="grid justify-center items-center md:w-1/3 sm:w-full">
				<h2 className="text-xl text-center font-semibold mb-4">Available Badges</h2>	
			<MenuItem
					  title="Upe Local Community Ally"
					  image="/badges/ally.png"
			href="/ally"
					  description="I believe in Upe’s mission to crowdsource and syndicate local community information to everyone in Santa Cruz, Guanacaste."
			/>
		</div>
		)}
    </header>
  );
}

function DisconnectButton() {
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();
 
  return (
        <button onClick={() => wallet && disconnect(wallet)}>Disconnect</button>

  );
}

function Menu() {
	return (
		<div>
			<h2 className="text-xl text-center font-semibold mb-4">COMING SOON! For Previous Upe Builders</h2>
			<div className="grid gap-4 lg:grid-cols-3 justify-center mx-auto w-[fit-content]">
				<MenuItem
					title="Season 2 Community Voter"
					image="/badges/voter.png"
					href="#"
					description="Voting is empowering. Every week, the Upe community collectively decides what gets featured in the Upe digest. We shared over 500 events and 100 more voters weighed in."
					isComingSoon={true}

				/>
				<MenuItem
					title="Carnival for a Cause Contributor"
					image="/badges/carnival.png"
					href="#"
					description="The first “Carnival for a Cause” brought together 600+ locals for a fun-filled day of carnival-style games while also supporting 12 different community causes. Upe ♥️ our initial Carnie cohort."
					isComingSoon={true}
				/>
				<MenuItem
					title="Genesis Kook"
					image="/badges/kook.png"
					href="#"
					description="Upe Kooks are collaborators who tap into their network to obtain important local information and motivate others to be involved in initiatives that enhance our communities in Costa Rica."
					isComingSoon={true}
				/>
								<MenuItem
					title="Season 2 Contributor"
					image="/badges/s2.png"
					href="#"
					description="For Season 2, locals collaborated to provide a public good. Using the Upe platform, contributors banded together to crowdsource and syndicate community information."
					isComingSoon={true}
				/>
				<MenuItem
					title="Season 1 Egg"
					image="/badges/s1.png"
					href="#"
					description="Participants of Upe Season 1 were part of our first radical local community experiment. Our idea was simple yet profound: let the community curate, own, and capitalize on their information."
					isComingSoon={true}
				/>
				<MenuItem
					title="Genesis Builder"
					image="/badges/genesis.png"
					href="#"
					description="Upe Genesis Community Builders put in time building a community knowledge base for information about our local communities’ businesses and organizations."
					isComingSoon={true}
				/>
			</div>
		</div>
	);
}

interface MenuItemProps {
    title: string;
    image: string;
    href: string;
    description: string;
    isComingSoon?: boolean;
}

function MenuItem(props: MenuItemProps) {
    const content = (
        <div className="flex flex-col border border-upe-silver-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700 items-center justify-center mx-auto w-[fit-content]">
            <h2 className="text-lg font-semibold mb-2 text-center">{props.title}</h2>
            <Image src={props.image} width={1080} height={1080} alt={props.title} className="w-32 h-32 mb-2" />
            <p className="text-sm text-zinc-400">{props.description}</p>
            {props.isComingSoon && <p className="text-sm text-upe-pink font-semibold mt-2">Coming Soon</p>}
        </div>
    );

    return props.isComingSoon ? content : <Link href={props.href}>{content}</Link>;
}

interface BadgeItemProps {
  title: string;
  image: string;
}

function BadgeItem(props: BadgeItemProps) {
  return (
    <div className="flex flex-col border border-white-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700 items-center">
      <Image src={props.image} width={1080} height={1080} alt={props.title} className="w-16 h-16 mb-2" />
      <h3 className="text-lg text-center font-semibold">{props.title}</h3>
    </div>
  );
}

function Badges() {
  return (
	      <div className="badges-outer bg-upe-gradient w-full p-2 md:p-6 lg:p-6 max-w-screen-xl">
      		  <div className="badges-inner bg-upe-grey px-4 py-8 sm:px-6 lg:px-8 mx-auto max-w-screen-lg rounded-xl">
        		<h2 className="text-xl text-center mb-10"><span className="text-upe-pink">Upe Impact</span> Badges for Local Communities in Guanacaste, Costa Rica</h2>
        		<div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center mx-auto w-[fit-content]">
					<BadgeItem
					title="Upe Local Community Ally"
					image="/badges/ally.png"
					/>
					<BadgeItem
					title="Genesis Builder"
					image="/badges/genesis.png"
					/>
					<BadgeItem
					title="Season 1 Egg"
					image="/badges/s1.png"
					/>
					<BadgeItem
					title="Season 2 Contributor"
					image="/badges/s2.png"
					/>
					<BadgeItem
					title="Season 2 Community Voter"
					image="/badges/voter.png"
					/>
					<BadgeItem
					title="Genesis Kook"
					image="/badges/kook.png"
					/>
					<BadgeItem
					title="Carnival for a Cause Contributor"
					image="/badges/carnival.png"  
					/>
					<BadgeItem
					title="More!"
					image="/badges/more.png"  
					/>
				</div>
			</div>
   	 </div>
  );
}

interface OCSItemProps {
	image: string;
	title: string;
	width: string;
}

function OCSItem(props: OCSItemProps) {
  return (
	<div className={`flex flex-col p-0 items-center mx-auto ${props.width}`}>
      <Image src={props.image} width={300} height={150} alt={props.title} className="w-50 mb-2" />
    </div>
  );
}

function OCS() {
  return (
	  <div>
		  <div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded my-20 w-11/12 mx-auto"></div>
		  <div className="flex items-center justify-center mt-20">
    		<Image src={upeIcon} alt="" width={60} height={60} style={{ filter: "drop-shadow(0px 0px 24px #a726a9a8)" }} />
			  <h3 className="text-xl text-center ml-4"><span className="text-upe-pink">Upe Impact</span> was built during</h3>			  
		  </div>
		  	<Image src="/home/onchainsummerw.png" width={946} height={279} alt="Onchain Summer" className="mx-auto" />
			<div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-start mx-auto w-[fit-content]">
				<OCSItem
				  image="/ocs/base.png"
				  title="Base"
				  width="w-2/6"
					/>
				<OCSItem
				  image="/ocs/coinbase.png"
				  title="Coinbase"
				  width="w-2/6"
					/>
				<OCSItem
				  image="/ocs/nouns.png"
				  title="Nouns DAO"
				  width="w-full"
			  />
				<div className="flex flex-col p-0 items-center m-auto">
      				<p className="">for the Nouns DAO track, “Unplugged: <br/> Making a difference IRL&lt;-&gt;URL”</p>
    			</div>
		  </div>
			<div className="flex justify-center my-10">
        		<a href="https://devfolio.co/projects/upe-impact-521d" target="_blank" rel="noopener noreferrer" className="bg-upe-pink text-white px-4 py-2 rounded">
          			SEE APPLICATION
        		</a>
      		</div>
		  <div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded mt-10 mb-20 w-11/12 mx-auto"></div>
		</div>		  		
  );
}

interface AlliesItemProps {
	image: string;
	title: string;
}

function AlliesItem(props: AlliesItemProps) {
  return (
    <div className="flex flex-col p-4 items-center mx-auto w-[fit-content]">
      <Image src={props.image} width={300} height={150} alt={props.title} className="w-50 mb-2" />
    </div>
  );
}

function Allies() {
  return (
	  <div>
		<h3 className="text-xl text-center mt-10">Our Allies & Supporters</h3>
			<div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-[fit-content]  mx-auto">
				<AlliesItem
					image="/allies/pn.png"
					title="Public Nouns"
					/>
				<AlliesItem
					image="/allies/gm.png"
					title="General Magic"
					/>
				<AlliesItem
					image="/allies/ens.png"
					title="ENS Public Good Small-Grants"
			  />
			  <AlliesItem
					image="/allies/mc.png"
					title="Metacamp"
					/>
		  	</div>
		</div>		  		
  );
}

interface ProjectsItemProps {
	image: string;
	title: string;
	href: string;
}

function ProjectsItem(props: ProjectsItemProps) {
  return (
    <div className="flex flex-col p-4 items-center">
      <Image src={props.image} width={300} height={150} alt={props.title} className="w-50 mb-2" />
      <a href={props.href} target="_blank" rel="noopener noreferrer" className="text-white-500 underline">
        {props.title}
      </a>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h3 className="text-xl text-center mt-10">See Our Projects on</h3>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-start w-[fit-content] mx-auto">
        <ProjectsItem
          image="/projects/giv.png"
          title="for Contributors"
          href="https://giveth.io/project/upe-crowdsourcing-community-info-in-costa-rica?tab=updates"
        />
        <ProjectsItem
          image="/projects/gc.png"
          title="for Upe Impact"
          href="https://explorer.gitcoin.co/#/round/42161/25/127"
        />
      </div>
    </div>
  );
}

function WhatIsUpe() {
	return (
	<div className="what-is-upe-outer bg-white w-full p-2 md:p-6 lg:p-6 max-w-screen-xl">
		<div className="what-is-upe-inner w-full p-2 md:p-6 lg:p-6 max-w-screen-lg flex flex-col md:flex-row items-center justify-center mx-auto bg-white rounded border-upe-grey border-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10">
			<div className="flex flex-col items-center">
					<h2 className="text-4xl font-bold mb-4 text-upe-grey">WHAT IS <span className="text-upe-pink">UPE IMPACT</span>?</h2>
					<div className="w-full">
						<Image src="/home/arrow.png" alt="Upe Impact" width={484} height={241} />
					</div>
			</div>
			<div className="flex flex-col items-center">
				<p className="mb-4 text-upe-grey"><span className="text-upe-pink">Upe Impact</span> is a web app designed to facilitate the coordination of community betterment projects and track their results on-chain. With an integrated authentication system the application generates user smart accounts upon login, ensuring secure access for all users, regardless of their technical expertise, from web3 natives to novices.
				</p>
				<a href="#" rel="noopener noreferrer" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded bg-upe-pink">LEARN MORE</a>
			</div>
		</div>
	</div>
  );
}

function Join() {
    return (
        <div className="join w-full p-2 md:p-6 lg:p-6 max-w-screen-xl flex flex-col md:flex-row items-center justify-center mx-auto">
			<div className="md:w-6/10 w-[fit-content] mx-auto w-full">
				<div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded mb-10 w-11/12"></div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Join the Initiative. <br/> Become an Upe <br/> Contributor.</h3>
                <p className="mt-4">Be a steward of your local community&apos;s information.</p>
				<a href="https://u.pe/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded bg-upe-pink">START TODAY</a>
				<div className="h-1 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 rounded my-10 w-11/12"></div>
				<GetSocial />
            </div>
            <div className="flex justify-center md:w-4/10 mt-6 md:mt-0 w-[fit-content] mx-auto w-full">
                <Image src="/home/upemobile.png" width={415} height={841} alt="Upe Home" className="w-1/2 h-auto" />
            </div>
        </div>
    );
}

function GetSocial() {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-full max-w-screen-xl grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">GET SOCIAL</h2>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com/hola.upe/" target="_blank" rel="noopener noreferrer">
			<Image src={fbIcon} alt="Upe FB" width={32} height={32} style={{ filter: "drop-shadow(0px 0px 24px #a726a9a8)" }} />
          </a>
          <a href="https://twitter.com/upelocal" target="_blank" rel="noopener noreferrer">
            <Image src={twIcon} alt="Upe FB" width={32} height={32} style={{ filter: "drop-shadow(0px 0px 24px #a726a9a8)" }} />
          </a>
          <a href="https://www.instagram.com/upe.local/" target="_blank" rel="noopener noreferrer">
            <Image src={igIcon} alt="Upe FB" width={32} height={32} style={{ filter: "drop-shadow(0px 0px 24px #a726a9a8)" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
	return (
		<div className="flex flex-col items-center mt-20">
			<Link
				className="text-center text-sm text-gray-400"
				target="_blank"
				href="https://github.com/0xUpe/upe-impact-site"
			>
				View code on GitHub
			</Link>
		</div>
	);
}
