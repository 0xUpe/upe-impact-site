import { useEffect, useState } from "react";
import { client } from "@/constants";
import { resolveName } from "thirdweb/extensions/ens";
import { useActiveAccount } from "thirdweb/react";

const EnsName: React.FC = () => {
  const [ensName, setEnsName] = useState<string | null>(null);
  const activeAccount = useActiveAccount();

  useEffect(() => {
    const fetchEnsName = async () => {
      if (activeAccount?.address) {
        const name = await resolveName({
          client,
          address: activeAccount.address,
        });
        setEnsName(name || null);
      }
    };

    fetchEnsName();
  }, [activeAccount]);

  if (!activeAccount) return null;

  return (
    <div>
      {ensName ? (
        <span>{ensName}</span>
      ) : (
        <span>{activeAccount.address.slice(0, 6)}...{activeAccount.address.slice(-4)}</span>
      )}
    </div>
  );
};

export default EnsName;
