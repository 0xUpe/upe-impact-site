import Image from "next/image";
import upeIcon from "@public/upe_favicon.png";
import ClaimItem from "./ClaimItem"; 
import { Account } from "thirdweb/wallets"; 
import Link from "next/link";

interface HeaderProps {
  activeAccount: Account | null;
}

const Header: React.FC<HeaderProps> = ({ activeAccount }) => {
  return (
    <header className="flex flex-col items-center mb-10 md:mb-10 p-1 pt-7">
      <Link href="/">
      <Image
        src={upeIcon}
        alt=""
        width={120}
        height={120}        
        />
        </Link>
      <h1 className="text-2xl md:text-4xl lg:text-6xl tracking-tighter my-6 text-zinc-100">
        {activeAccount ? (
          <>
            <span className="text-upe-pink">Upe Impact</span> Member Dashboard
          </>
        ) : (
          <>
            Welcome to <span className="text-upe-pink">Upe Impact</span>
          </>
        )}
      </h1>
      <h2 className="text-xl font-semibold text-center text-zinc-400 text-base mb-5 md:mb-5">
        {activeAccount
          ? "Hey there 👋🏽 community player, 🏆 Claim your local impact badges. 🏆"
          : "Collaborate with your community. Collect badges for your good deeds."}
      </h2>
      {activeAccount && (
        <div className="on-deck justify-center items-center">
        <h2 className="text-xl text-center font-semibold mt-6 mb-4">Available Badges</h2>
        <div className="grid gap-4 grid-cols-2 lg:w-3/4 md:w-7/8 justify-center items-center w-[fit-content] mx-auto px-4">          
          <ClaimItem
              title="Upe Local Community Ally"
              image="/badges/ally.png"
              href="/ally"
              description="I believe in Upe's mission to crowdsource and syndicate local community information to everyone in Santa Cruz, Guanacaste."
              claimable="Available to All"
          />
          <ClaimItem
          title="Genesis Kook"
          image="/badges/kook.png"
          href="/kook"
            description="Upe Kooks are collaborators who tap into their network to obtain important local information and motivate others to be involved in initiatives that enhance our communities in Costa Rica."
            claimable="For the Kooks"    
        />
        </div></div>
      )}
    </header>
  );
};

export default Header;
