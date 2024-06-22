import { useDisconnect, useActiveWallet } from "thirdweb/react";

const DisconnectButton: React.FC = () => {
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  return (
    <div className="disconnect m-2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button className="bg-upe-pink hover:bg-upe-grey text-white font-bold py-2 px-4 rounded" onClick={() => wallet && disconnect(wallet)}>
      Disconnect
      </button>
    </div>
  );
};

export default DisconnectButton;