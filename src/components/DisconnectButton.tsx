import { useRouter } from "next/navigation";
import { useDisconnect, useActiveWallet } from "thirdweb/react";

const DisconnectButton: React.FC = () => {
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();
  const router = useRouter();

  const handleDisconnect = async () => {
    if (wallet) {
      await disconnect(wallet);
      router.push("/");
    }
  };

  return (
    <div className="disconnect m-2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button
        className="bg-upe-pink hover:bg-upe-silver text-white font-bold py-2 px-4 rounded"
        onClick={handleDisconnect}
      >
        Disconnect
      </button>
    </div>
  );
};

export default DisconnectButton;
