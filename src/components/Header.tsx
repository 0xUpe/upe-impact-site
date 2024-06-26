import Image from "next/image";
import upeIcon from "@public/upe_favicon.png";
import MenuItem from "./MenuItem"; 
import { Account } from "thirdweb/wallets"; 

interface HeaderProps {
  activeAccount: Account | null;
}

const Header: React.FC<HeaderProps> = ({ activeAccount }) => {
  return (
    <header className="flex flex-col items-center mb-10 md:mb-10 p-1 pt-7">
      <Image
        src={upeIcon}
        alt=""
        width={120}
        height={120}        
      />
      <h1 className="text-2xl md:text-4xl lg:text-6xl tracking-tighter mb-6 text-zinc-100">
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
        <div className="grid justify-center items-center w-full lg:w-1/3 md:w-2/5 px-4">
          <h2 className="text-xl text-center font-semibold mb-4">Available Badges</h2>
          <MenuItem
            title="Upe Local Community Ally"
            image="/badges/ally.png"
            href="/ally"
            description="I believe in Upe's mission to crowdsource and syndicate local community information to everyone in Santa Cruz, Guanacaste."
          />
        </div>
      )}
    </header>
  );
};

export default Header;
