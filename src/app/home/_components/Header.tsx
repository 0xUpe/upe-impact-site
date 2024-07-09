import { Account } from "thirdweb/wallets"; 

interface HeaderProps {
  activeAccount: Account | null;
}

const Header: React.FC<HeaderProps> = ({ activeAccount }) => {
  return (
    <header className="flex flex-col items-center mb-10 md:mb-10 p-1">      
      <h1 className="text-2xl md:text-4xl lg:text-6xl tracking-tighter my-2 text-zinc-100">
        {activeAccount ? (
          <>
            Welcome back to <span className="text-upe-pink">Upe Impact</span>
          </>
        ) : (
          <>
            Welcome to <span className="text-upe-pink">Upe Impact</span>
          </>
        )}
      </h1>
      <h2 className="text-xl font-semibold text-center text-zinc-400 text-base my-5 md:my-5">
          Collaborate with your community. Collect badges for your good deeds.
        </h2>
    </header>
  );
};

export default Header;
