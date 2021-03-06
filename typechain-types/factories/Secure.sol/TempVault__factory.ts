/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TempVault, TempVaultInterface } from "../../Secure.sol/TempVault";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "depositCD",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "destruct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_secondsToIncrease",
        type: "uint256",
      },
    ],
    name: "increaseLockTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610697806100616000396000f3fe6080604052600436106100555760003560e01c80631beb26151461005a578063236c6def1461008357806327e235e3146100ac57806351cff8d9146100e9578063a4beda6314610112578063d646a5561461014f575b600080fd5b34801561006657600080fd5b50610081600480360381019061007c919061050f565b61016b565b005b34801561008f57600080fd5b506100aa60048036038101906100a59190610572565b610184565b005b3480156100b857600080fd5b506100d360048036038101906100ce919061050f565b610238565b6040516100e091906105c1565b60405180910390f35b3480156100f557600080fd5b50610110600480360381019061010b919061050f565b610250565b005b34801561011e57600080fd5b506101396004803603810190610134919061050f565b6103ea565b60405161014691906105c1565b60405180910390f35b6101696004803603810190610164919061050f565b610402565b005b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101de57600080fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461022d919061060b565b925050819055505050565b60006020528060005260406000206000915090505481565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461028857600080fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116102d357600080fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054421161031e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f193505050501580156103a2573d6000803e3d6000fd5b5060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60016020528060005260406000206000915090505481565b346000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610450919061060b565b9250508190555062093a8042610466919061060b565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104dc826104b1565b9050919050565b6104ec816104d1565b81146104f757600080fd5b50565b600081359050610509816104e3565b92915050565b600060208284031215610525576105246104ac565b5b6000610533848285016104fa565b91505092915050565b6000819050919050565b61054f8161053c565b811461055a57600080fd5b50565b60008135905061056c81610546565b92915050565b60008060408385031215610589576105886104ac565b5b6000610597858286016104fa565b92505060206105a88582860161055d565b9150509250929050565b6105bb8161053c565b82525050565b60006020820190506105d660008301846105b2565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006106168261053c565b91506106218361053c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610656576106556105dc565b5b82820190509291505056fea26469706673582212202483bc1639da1ec9bc5a9ca116b7c10fbf7eb98c7c8cd821730caa6e8b06b4de64736f6c634300080d0033";

type TempVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TempVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TempVault__factory extends ContractFactory {
  constructor(...args: TempVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TempVault> {
    return super.deploy(overrides || {}) as Promise<TempVault>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TempVault {
    return super.attach(address) as TempVault;
  }
  override connect(signer: Signer): TempVault__factory {
    return super.connect(signer) as TempVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TempVaultInterface {
    return new utils.Interface(_abi) as TempVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TempVault {
    return new Contract(address, _abi, signerOrProvider) as TempVault;
  }
}
