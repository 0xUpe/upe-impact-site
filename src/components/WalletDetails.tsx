import { useWalletDetailsModal } from "thirdweb/react";
import { client } from "@/constants";

const WalletDetails: React.FC = () => {

    const { open } = useWalletDetailsModal();
 
    function handleClick() {
        open({ client, theme: "dark" });
    }
 
    return <button onClick={handleClick}> Show Wallet Details </button>;
};

export default WalletDetails;

// For future use
// import WalletDetails from "./WalletDetails";
// <WalletDetails />