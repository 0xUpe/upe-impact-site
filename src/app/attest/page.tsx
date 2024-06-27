"use client;";
import { TransactionButton } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { getContract } from "thirdweb";
import { attest } from "@/thirdweb/84532/0x4200000000000000000000000000000000000021";
import { SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { use } from "react";


const AttestationComponent = () => {
  // Contract Address for the EAS
  const easContractAddress = "0x4200000000000000000000000000000000000021";
  
  // Instantiate the contract using the thirdweb hook
  const { contract: easContract } = "0x4200000000000000000000000000000000000021";

  // Create an instance of SchemaEncoder to encode the data
  const schemaEncoder = new SchemaEncoder("string statement");
  const encodedData = schemaEncoder.encodeData([{ name: "statement", value: "Just a Test3", type: "string" }]);
  
  // Prepare the attestation request object
  const attestationRequest = {
    schema: "0xf58b8b212ef75ee8cd7e8d803c37c03e0519890502d5e99ee2412aae1456cafe",
    data: {
      recipient: "0x0000000000000000000000000000000000000000",
      expirationTime: 0n,  // BigInt notation for zero
      revocable: true,
      refUID: "0xYourUniqueIdentifierHere",  // Replace with actual refUID
      data: encodedData,  // This is the encoded data from SchemaEncoder
      value: 0n  // BigInt notation for zero, adjust if necessary
    }
  };

  // Function to handle the attest function call
  const handleAttest = async () => {
    return attest({
      contract: easContract,
      request: attestationRequest
    });
  };

  return (
    <div>
      <h1>Attestation Transaction</h1>
      <TransactionButton
        transaction={handleAttest}
        onSuccess={(result) => console.log("Transaction successful:", result)}
        onError={(error) => console.error("Transaction failed:", error)}
      />
    </div>
  );
};

export default AttestationComponent;


