"use client";

import { useActiveAccount } from "thirdweb/react";
import Header from "./Header";
import Claims from "./Claims"; 
import SignIn from "@/components/SignIn";

const ClaimsPage: React.FC = () => {
  const activeAccount = useActiveAccount();

  return (
    <div className="outer-container py-1 w-full mx-auto max-w-screen-xl">
      <div className="inner-container mx-auto">
        <div className="items-center">          
          <Header activeAccount={activeAccount || null} />
        </div>
        {!activeAccount ? (
          <div className="flex justify-center mb-10">
            <SignIn />
          </div>
        ) : (
            <>              
            <Claims />
          </>
        )}
      </div>
    </div>
  );
};

export default ClaimsPage;
