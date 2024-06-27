import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/

/**
 * Represents the filters for the "Attested" event.
 */
export type AttestedEventFilters = Partial<{
  recipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"recipient","type":"address"}>
attester: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"attester","type":"address"}>
schemaUID: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"schemaUID","type":"bytes32"}>
}>;

/**
 * Creates an event object for the Attested event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { attestedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  attestedEvent({
 *  recipient: ...,
 *  attester: ...,
 *  schemaUID: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function attestedEvent(filters: AttestedEventFilters = {}) {
  return prepareEvent({
    signature: "event Attested(address indexed recipient, address indexed attester, bytes32 uid, bytes32 indexed schemaUID)",
    filters,
  });
};
  



/**
 * Creates an event object for the NonceIncreased event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { nonceIncreasedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  nonceIncreasedEvent()
 * ],
 * });
 * ```
 */ 
export function nonceIncreasedEvent() {
  return prepareEvent({
    signature: "event NonceIncreased(uint256 oldNonce, uint256 newNonce)",
  });
};
  

/**
 * Represents the filters for the "Revoked" event.
 */
export type RevokedEventFilters = Partial<{
  recipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"recipient","type":"address"}>
attester: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"attester","type":"address"}>
schemaUID: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"schemaUID","type":"bytes32"}>
}>;

/**
 * Creates an event object for the Revoked event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { revokedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  revokedEvent({
 *  recipient: ...,
 *  attester: ...,
 *  schemaUID: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function revokedEvent(filters: RevokedEventFilters = {}) {
  return prepareEvent({
    signature: "event Revoked(address indexed recipient, address indexed attester, bytes32 uid, bytes32 indexed schemaUID)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RevokedOffchain" event.
 */
export type RevokedOffchainEventFilters = Partial<{
  revoker: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"revoker","type":"address"}>
data: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"data","type":"bytes32"}>
timestamp: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint64","name":"timestamp","type":"uint64"}>
}>;

/**
 * Creates an event object for the RevokedOffchain event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { revokedOffchainEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  revokedOffchainEvent({
 *  revoker: ...,
 *  data: ...,
 *  timestamp: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function revokedOffchainEvent(filters: RevokedOffchainEventFilters = {}) {
  return prepareEvent({
    signature: "event RevokedOffchain(address indexed revoker, bytes32 indexed data, uint64 indexed timestamp)",
    filters,
  });
};
  

/**
 * Represents the filters for the "Timestamped" event.
 */
export type TimestampedEventFilters = Partial<{
  data: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"data","type":"bytes32"}>
timestamp: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint64","name":"timestamp","type":"uint64"}>
}>;

/**
 * Creates an event object for the Timestamped event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { timestampedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  timestampedEvent({
 *  data: ...,
 *  timestamp: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function timestampedEvent(filters: TimestampedEventFilters = {}) {
  return prepareEvent({
    signature: "event Timestamped(bytes32 indexed data, uint64 indexed timestamp)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "getAttestTypeHash" function on the contract.
 * @param options - The options for the getAttestTypeHash function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAttestTypeHash } from "TODO";
 * 
 * const result = await getAttestTypeHash();
 * 
 * ```
 */
export async function getAttestTypeHash(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x12b11a17",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getAttestation" function.
 */
export type GetAttestationParams = {
  uid: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"uid","type":"bytes32"}>
};

/**
 * Calls the "getAttestation" function on the contract.
 * @param options - The options for the getAttestation function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAttestation } from "TODO";
 * 
 * const result = await getAttestation({
 *  uid: ...,
 * });
 * 
 * ```
 */
export async function getAttestation(
  options: BaseTransactionOptions<GetAttestationParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa3112a64",
  [
    {
      "internalType": "bytes32",
      "name": "uid",
      "type": "bytes32"
    }
  ],
  [
    {
      "components": [
        {
          "internalType": "bytes32",
          "name": "uid",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "schema",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "time",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "expirationTime",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "revocationTime",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "refUID",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "attester",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "revocable",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "internalType": "struct Attestation",
      "name": "",
      "type": "tuple"
    }
  ]
],
    params: [options.uid]
  });
};




/**
 * Calls the "getDomainSeparator" function on the contract.
 * @param options - The options for the getDomainSeparator function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getDomainSeparator } from "TODO";
 * 
 * const result = await getDomainSeparator();
 * 
 * ```
 */
export async function getDomainSeparator(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xed24911d",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "getName" function on the contract.
 * @param options - The options for the getName function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getName } from "TODO";
 * 
 * const result = await getName();
 * 
 * ```
 */
export async function getName(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x17d7de7c",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getNonce" function.
 */
export type GetNonceParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "getNonce" function on the contract.
 * @param options - The options for the getNonce function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getNonce } from "TODO";
 * 
 * const result = await getNonce({
 *  account: ...,
 * });
 * 
 * ```
 */
export async function getNonce(
  options: BaseTransactionOptions<GetNonceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x2d0335ab",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.account]
  });
};


/**
 * Represents the parameters for the "getRevokeOffchain" function.
 */
export type GetRevokeOffchainParams = {
  revoker: AbiParameterToPrimitiveType<{"internalType":"address","name":"revoker","type":"address"}>
data: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"data","type":"bytes32"}>
};

/**
 * Calls the "getRevokeOffchain" function on the contract.
 * @param options - The options for the getRevokeOffchain function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRevokeOffchain } from "TODO";
 * 
 * const result = await getRevokeOffchain({
 *  revoker: ...,
 *  data: ...,
 * });
 * 
 * ```
 */
export async function getRevokeOffchain(
  options: BaseTransactionOptions<GetRevokeOffchainParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xb469318d",
  [
    {
      "internalType": "address",
      "name": "revoker",
      "type": "address"
    },
    {
      "internalType": "bytes32",
      "name": "data",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "uint64",
      "name": "",
      "type": "uint64"
    }
  ]
],
    params: [options.revoker, options.data]
  });
};




/**
 * Calls the "getRevokeTypeHash" function on the contract.
 * @param options - The options for the getRevokeTypeHash function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRevokeTypeHash } from "TODO";
 * 
 * const result = await getRevokeTypeHash();
 * 
 * ```
 */
export async function getRevokeTypeHash(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xb83010d3",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "getSchemaRegistry" function on the contract.
 * @param options - The options for the getSchemaRegistry function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getSchemaRegistry } from "TODO";
 * 
 * const result = await getSchemaRegistry();
 * 
 * ```
 */
export async function getSchemaRegistry(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf10b5cc8",
  [],
  [
    {
      "internalType": "contract ISchemaRegistry",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getTimestamp" function.
 */
export type GetTimestampParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"data","type":"bytes32"}>
};

/**
 * Calls the "getTimestamp" function on the contract.
 * @param options - The options for the getTimestamp function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getTimestamp } from "TODO";
 * 
 * const result = await getTimestamp({
 *  data: ...,
 * });
 * 
 * ```
 */
export async function getTimestamp(
  options: BaseTransactionOptions<GetTimestampParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd45c4435",
  [
    {
      "internalType": "bytes32",
      "name": "data",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "uint64",
      "name": "",
      "type": "uint64"
    }
  ]
],
    params: [options.data]
  });
};


/**
 * Represents the parameters for the "isAttestationValid" function.
 */
export type IsAttestationValidParams = {
  uid: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"uid","type":"bytes32"}>
};

/**
 * Calls the "isAttestationValid" function on the contract.
 * @param options - The options for the isAttestationValid function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isAttestationValid } from "TODO";
 * 
 * const result = await isAttestationValid({
 *  uid: ...,
 * });
 * 
 * ```
 */
export async function isAttestationValid(
  options: BaseTransactionOptions<IsAttestationValidParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe30bb563",
  [
    {
      "internalType": "bytes32",
      "name": "uid",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.uid]
  });
};




/**
 * Calls the "version" function on the contract.
 * @param options - The options for the version function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { version } from "TODO";
 * 
 * const result = await version();
 * 
 * ```
 */
export async function version(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x54fd4d50",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "attest" function.
 */
export type AttestParams = {
  request: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint64","name":"expirationTime","type":"uint64"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"bytes32","name":"refUID","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct AttestationRequestData","name":"data","type":"tuple"}],"internalType":"struct AttestationRequest","name":"request","type":"tuple"}>
};

/**
 * Calls the "attest" function on the contract.
 * @param options - The options for the "attest" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { attest } from "TODO";
 * 
 * const transaction = attest({
 *  request: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function attest(
  options: BaseTransactionOptions<AttestParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xf17325e7",
  [
    {
      "components": [
        {
          "internalType": "bytes32",
          "name": "schema",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "expirationTime",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "revocable",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "refUID",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct AttestationRequestData",
          "name": "data",
          "type": "tuple"
        }
      ],
      "internalType": "struct AttestationRequest",
      "name": "request",
      "type": "tuple"
    }
  ],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: [options.request]
  });
};


/**
 * Represents the parameters for the "attestByDelegation" function.
 */
export type AttestByDelegationParams = {
  delegatedRequest: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint64","name":"expirationTime","type":"uint64"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"bytes32","name":"refUID","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct AttestationRequestData","name":"data","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Signature","name":"signature","type":"tuple"},{"internalType":"address","name":"attester","type":"address"},{"internalType":"uint64","name":"deadline","type":"uint64"}],"internalType":"struct DelegatedAttestationRequest","name":"delegatedRequest","type":"tuple"}>
};

/**
 * Calls the "attestByDelegation" function on the contract.
 * @param options - The options for the "attestByDelegation" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { attestByDelegation } from "TODO";
 * 
 * const transaction = attestByDelegation({
 *  delegatedRequest: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function attestByDelegation(
  options: BaseTransactionOptions<AttestByDelegationParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x3c042715",
  [
    {
      "components": [
        {
          "internalType": "bytes32",
          "name": "schema",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "expirationTime",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "revocable",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "refUID",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct AttestationRequestData",
          "name": "data",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Signature",
          "name": "signature",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "attester",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "deadline",
          "type": "uint64"
        }
      ],
      "internalType": "struct DelegatedAttestationRequest",
      "name": "delegatedRequest",
      "type": "tuple"
    }
  ],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: [options.delegatedRequest]
  });
};


/**
 * Represents the parameters for the "increaseNonce" function.
 */
export type IncreaseNonceParams = {
  newNonce: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"newNonce","type":"uint256"}>
};

/**
 * Calls the "increaseNonce" function on the contract.
 * @param options - The options for the "increaseNonce" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { increaseNonce } from "TODO";
 * 
 * const transaction = increaseNonce({
 *  newNonce: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function increaseNonce(
  options: BaseTransactionOptions<IncreaseNonceParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x79f7573a",
  [
    {
      "internalType": "uint256",
      "name": "newNonce",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.newNonce]
  });
};


/**
 * Represents the parameters for the "multiAttest" function.
 */
export type MultiAttestParams = {
  multiRequests: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint64","name":"expirationTime","type":"uint64"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"bytes32","name":"refUID","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct AttestationRequestData[]","name":"data","type":"tuple[]"}],"internalType":"struct MultiAttestationRequest[]","name":"multiRequests","type":"tuple[]"}>
};

/**
 * Calls the "multiAttest" function on the contract.
 * @param options - The options for the "multiAttest" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multiAttest } from "TODO";
 * 
 * const transaction = multiAttest({
 *  multiRequests: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function multiAttest(
  options: BaseTransactionOptions<MultiAttestParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x44adc90e",
  [
    {
      "components": [
        {
          "internalType": "bytes32",
          "name": "schema",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "expirationTime",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "revocable",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "refUID",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct AttestationRequestData[]",
          "name": "data",
          "type": "tuple[]"
        }
      ],
      "internalType": "struct MultiAttestationRequest[]",
      "name": "multiRequests",
      "type": "tuple[]"
    }
  ],
  [
    {
      "internalType": "bytes32[]",
      "name": "",
      "type": "bytes32[]"
    }
  ]
],
    params: [options.multiRequests]
  });
};


/**
 * Represents the parameters for the "multiAttestByDelegation" function.
 */
export type MultiAttestByDelegationParams = {
  multiDelegatedRequests: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint64","name":"expirationTime","type":"uint64"},{"internalType":"bool","name":"revocable","type":"bool"},{"internalType":"bytes32","name":"refUID","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct AttestationRequestData[]","name":"data","type":"tuple[]"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Signature[]","name":"signatures","type":"tuple[]"},{"internalType":"address","name":"attester","type":"address"},{"internalType":"uint64","name":"deadline","type":"uint64"}],"internalType":"struct MultiDelegatedAttestationRequest[]","name":"multiDelegatedRequests","type":"tuple[]"}>
};

/**
 * Calls the "multiAttestByDelegation" function on the contract.
 * @param options - The options for the "multiAttestByDelegation" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multiAttestByDelegation } from "TODO";
 * 
 * const transaction = multiAttestByDelegation({
 *  multiDelegatedRequests: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function multiAttestByDelegation(
  options: BaseTransactionOptions<MultiAttestByDelegationParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x95411525",
  [
    {
      "components": [
        {
          "internalType": "bytes32",
          "name": "schema",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "expirationTime",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "revocable",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "refUID",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct AttestationRequestData[]",
          "name": "data",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Signature[]",
          "name": "signatures",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "attester",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "deadline",
          "type": "uint64"
        }
      ],
      "internalType": "struct MultiDelegatedAttestationRequest[]",
      "name": "multiDelegatedRequests",
      "type": "tuple[]"
    }
  ],
  [
    {
      "internalType": "bytes32[]",
      "name": "",
      "type": "bytes32[]"
    }
  ]
],
    params: [options.multiDelegatedRequests]
  });
};


/**
 * Represents the parameters for the "multiRevoke" function.
 */
export type MultiRevokeParams = {
  multiRequests: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct RevocationRequestData[]","name":"data","type":"tuple[]"}],"internalType":"struct MultiRevocationRequest[]","name":"multiRequests","type":"tuple[]"}>
};

/**
 * Calls the "multiRevoke" function on the contract.
 * @param options - The options for the "multiRevoke" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multiRevoke } from "TODO";
 * 
 * const transaction = multiRevoke({
 *  multiRequests: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function multiRevoke(
  options: BaseTransactionOptions<MultiRevokeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x4cb7e9e5",
  [
    {
      "components": [
        {
          "internalType": "bytes32",
          "name": "schema",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "uid",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct RevocationRequestData[]",
          "name": "data",
          "type": "tuple[]"
        }
      ],
      "internalType": "struct MultiRevocationRequest[]",
      "name": "multiRequests",
      "type": "tuple[]"
    }
  ],
  []
],
    params: [options.multiRequests]
  });
};


/**
 * Represents the parameters for the "multiRevokeByDelegation" function.
 */
export type MultiRevokeByDelegationParams = {
  multiDelegatedRequests: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct RevocationRequestData[]","name":"data","type":"tuple[]"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Signature[]","name":"signatures","type":"tuple[]"},{"internalType":"address","name":"revoker","type":"address"},{"internalType":"uint64","name":"deadline","type":"uint64"}],"internalType":"struct MultiDelegatedRevocationRequest[]","name":"multiDelegatedRequests","type":"tuple[]"}>
};

/**
 * Calls the "multiRevokeByDelegation" function on the contract.
 * @param options - The options for the "multiRevokeByDelegation" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multiRevokeByDelegation } from "TODO";
 * 
 * const transaction = multiRevokeByDelegation({
 *  multiDelegatedRequests: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function multiRevokeByDelegation(
  options: BaseTransactionOptions<MultiRevokeByDelegationParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x0eabf660",
  [
    {
      "components": [
        {
          "internalType": "bytes32",
          "name": "schema",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "uid",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct RevocationRequestData[]",
          "name": "data",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Signature[]",
          "name": "signatures",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "revoker",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "deadline",
          "type": "uint64"
        }
      ],
      "internalType": "struct MultiDelegatedRevocationRequest[]",
      "name": "multiDelegatedRequests",
      "type": "tuple[]"
    }
  ],
  []
],
    params: [options.multiDelegatedRequests]
  });
};


/**
 * Represents the parameters for the "multiRevokeOffchain" function.
 */
export type MultiRevokeOffchainParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}>
};

/**
 * Calls the "multiRevokeOffchain" function on the contract.
 * @param options - The options for the "multiRevokeOffchain" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multiRevokeOffchain } from "TODO";
 * 
 * const transaction = multiRevokeOffchain({
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function multiRevokeOffchain(
  options: BaseTransactionOptions<MultiRevokeOffchainParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x13893f61",
  [
    {
      "internalType": "bytes32[]",
      "name": "data",
      "type": "bytes32[]"
    }
  ],
  [
    {
      "internalType": "uint64",
      "name": "",
      "type": "uint64"
    }
  ]
],
    params: [options.data]
  });
};


/**
 * Represents the parameters for the "multiTimestamp" function.
 */
export type MultiTimestampParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}>
};

/**
 * Calls the "multiTimestamp" function on the contract.
 * @param options - The options for the "multiTimestamp" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multiTimestamp } from "TODO";
 * 
 * const transaction = multiTimestamp({
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function multiTimestamp(
  options: BaseTransactionOptions<MultiTimestampParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xe71ff365",
  [
    {
      "internalType": "bytes32[]",
      "name": "data",
      "type": "bytes32[]"
    }
  ],
  [
    {
      "internalType": "uint64",
      "name": "",
      "type": "uint64"
    }
  ]
],
    params: [options.data]
  });
};


/**
 * Represents the parameters for the "revoke" function.
 */
export type RevokeParams = {
  request: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct RevocationRequestData","name":"data","type":"tuple"}],"internalType":"struct RevocationRequest","name":"request","type":"tuple"}>
};

/**
 * Calls the "revoke" function on the contract.
 * @param options - The options for the "revoke" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { revoke } from "TODO";
 * 
 * const transaction = revoke({
 *  request: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function revoke(
  options: BaseTransactionOptions<RevokeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x46926267",
  [
    {
      "components": [
        {
          "internalType": "bytes32",
          "name": "schema",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "uid",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct RevocationRequestData",
          "name": "data",
          "type": "tuple"
        }
      ],
      "internalType": "struct RevocationRequest",
      "name": "request",
      "type": "tuple"
    }
  ],
  []
],
    params: [options.request]
  });
};


/**
 * Represents the parameters for the "revokeByDelegation" function.
 */
export type RevokeByDelegationParams = {
  delegatedRequest: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32","name":"schema","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"uid","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct RevocationRequestData","name":"data","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Signature","name":"signature","type":"tuple"},{"internalType":"address","name":"revoker","type":"address"},{"internalType":"uint64","name":"deadline","type":"uint64"}],"internalType":"struct DelegatedRevocationRequest","name":"delegatedRequest","type":"tuple"}>
};

/**
 * Calls the "revokeByDelegation" function on the contract.
 * @param options - The options for the "revokeByDelegation" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { revokeByDelegation } from "TODO";
 * 
 * const transaction = revokeByDelegation({
 *  delegatedRequest: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function revokeByDelegation(
  options: BaseTransactionOptions<RevokeByDelegationParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa6d4dbc7",
  [
    {
      "components": [
        {
          "internalType": "bytes32",
          "name": "schema",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "uid",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct RevocationRequestData",
          "name": "data",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Signature",
          "name": "signature",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "revoker",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "deadline",
          "type": "uint64"
        }
      ],
      "internalType": "struct DelegatedRevocationRequest",
      "name": "delegatedRequest",
      "type": "tuple"
    }
  ],
  []
],
    params: [options.delegatedRequest]
  });
};


/**
 * Represents the parameters for the "revokeOffchain" function.
 */
export type RevokeOffchainParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"data","type":"bytes32"}>
};

/**
 * Calls the "revokeOffchain" function on the contract.
 * @param options - The options for the "revokeOffchain" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { revokeOffchain } from "TODO";
 * 
 * const transaction = revokeOffchain({
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function revokeOffchain(
  options: BaseTransactionOptions<RevokeOffchainParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xcf190f34",
  [
    {
      "internalType": "bytes32",
      "name": "data",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "uint64",
      "name": "",
      "type": "uint64"
    }
  ]
],
    params: [options.data]
  });
};


/**
 * Represents the parameters for the "timestamp" function.
 */
export type TimestampParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"data","type":"bytes32"}>
};

/**
 * Calls the "timestamp" function on the contract.
 * @param options - The options for the "timestamp" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { timestamp } from "TODO";
 * 
 * const transaction = timestamp({
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function timestamp(
  options: BaseTransactionOptions<TimestampParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x4d003070",
  [
    {
      "internalType": "bytes32",
      "name": "data",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "uint64",
      "name": "",
      "type": "uint64"
    }
  ]
],
    params: [options.data]
  });
};


