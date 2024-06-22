import { useDisconnect, useActiveWallet } from "thirdweb/react";

const DisconnectButton: React.FC = () => {
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  return (
    <button onClick={() => wallet && disconnect(wallet)}>Disconnect</button>
  );
};

export default DisconnectButton;
