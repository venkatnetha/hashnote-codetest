/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TempVaultFixedContract,
  TempVaultFixedContractInterface,
} from "../../Secure_Fixed.sol/TempVaultFixedContract";

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
        name: "_request",
        type: "address",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
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
  "0x608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a4c806100616000396000f3fe6080604052600436106100555760003560e01c8063236c6def1461005a57806327e235e31461008357806351cff8d9146100c0578063a4beda63146100e9578063d646a55614610126578063f8b2cb4f14610142575b600080fd5b34801561006657600080fd5b50610081600480360381019061007c91906106cd565b61017f565b005b34801561008f57600080fd5b506100aa60048036038101906100a5919061070d565b610269565b6040516100b79190610749565b60405180910390f35b3480156100cc57600080fd5b506100e760048036038101906100e2919061070d565b610281565b005b3480156100f557600080fd5b50610110600480360381019061010b919061070d565b6104bd565b60405161011d9190610749565b60405180910390f35b610140600480360381019061013b919061070d565b6104d5565b005b34801561014e57600080fd5b506101696004803603810190610164919061070d565b6105ec565b6040516101769190610749565b60405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461020f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610206906107c1565b60405180910390fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461025e9190610810565b925050819055505050565b60006020528060005260406000206000915090505481565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146102ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e6906108b2565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610370576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103679061091e565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205442116103f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e89061098a565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff166108fc6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f193505050501580156104b9573d6000803e3d6000fd5b5050565b60016020528060005260406000206000915090505481565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610544576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053b906109f6565b60405180910390fd5b346000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105929190610810565b925050819055506003426105a69190610810565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061066482610639565b9050919050565b61067481610659565b811461067f57600080fd5b50565b6000813590506106918161066b565b92915050565b6000819050919050565b6106aa81610697565b81146106b557600080fd5b50565b6000813590506106c7816106a1565b92915050565b600080604083850312156106e4576106e3610634565b5b60006106f285828601610682565b9250506020610703858286016106b8565b9150509250929050565b60006020828403121561072357610722610634565b5b600061073184828501610682565b91505092915050565b61074381610697565b82525050565b600060208201905061075e600083018461073a565b92915050565b600082825260208201905092915050565b7f6f6e6c79206f776e65722063616e2063616c6c2074686973206d6574686f6400600082015250565b60006107ab601f83610764565b91506107b682610775565b602082019050919050565b600060208201905081810360008301526107da8161079e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061081b82610697565b915061082683610697565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561085b5761085a6107e1565b5b828201905092915050565b7f6e6f74207468652073616d65206173206d73672e73656e646572000000000000600082015250565b600061089c601a83610764565b91506108a782610866565b602082019050919050565b600060208201905081810360008301526108cb8161088f565b9050919050565b7f696e76616c69642062616c616e63650000000000000000000000000000000000600082015250565b6000610908600f83610764565b9150610913826108d2565b602082019050919050565b60006020820190508181036000830152610937816108fb565b9050919050565b7f5468652074696d65206973206e6f74207965742066696e697368656400000000600082015250565b6000610974601c83610764565b915061097f8261093e565b602082019050919050565b600060208201905081810360008301526109a381610967565b9050919050565b7f5a65726f206164647265737320737570706c6965640000000000000000000000600082015250565b60006109e0601583610764565b91506109eb826109aa565b602082019050919050565b60006020820190508181036000830152610a0f816109d3565b905091905056fea26469706673582212203d2ba202aa4ac0c92e1ad9b912ca1334fa4fbbcd7c8821ca6a643566919d44f564736f6c634300080d0033";

type TempVaultFixedContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TempVaultFixedContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TempVaultFixedContract__factory extends ContractFactory {
  constructor(...args: TempVaultFixedContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TempVaultFixedContract> {
    return super.deploy(overrides || {}) as Promise<TempVaultFixedContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TempVaultFixedContract {
    return super.attach(address) as TempVaultFixedContract;
  }
  override connect(signer: Signer): TempVaultFixedContract__factory {
    return super.connect(signer) as TempVaultFixedContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TempVaultFixedContractInterface {
    return new utils.Interface(_abi) as TempVaultFixedContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TempVaultFixedContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TempVaultFixedContract;
  }
}
