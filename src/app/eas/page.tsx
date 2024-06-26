"use client";
import { ThirdwebProvider } from "thirdweb/react";
import EASExample from "./EASExample"
import SignInWalleyModal from "@/components/SignIn";
 
function easpage() {
  return (
      <ThirdwebProvider>
          <SignInWalleyModal />
      <EASExample />
    </ThirdwebProvider>
  );
}

export default easpage;