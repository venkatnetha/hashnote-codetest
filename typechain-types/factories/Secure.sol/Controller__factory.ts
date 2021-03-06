/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Controller,
  ControllerInterface,
} from "../../Secure.sol/Controller";

const _abi = [
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
        name: "_contract",
        type: "address",
      },
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
        name: "_contract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "destruct",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_seconds",
        type: "uint256",
      },
    ],
    name: "increaseLockTime",
    outputs: [],
    stateMutability: "payable",
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
        name: "_contract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610827806100206000396000f3fe6080604052600436106100555760003560e01c8063026cf25b1461005a5780631d7bb8081461007657806327e235e314610092578063a4beda63146100cf578063dabd77a31461010c578063f940e38514610128575b600080fd5b610074600480360381019061006f91906105ed565b610144565b005b610090600480360381019061008b9190610663565b610257565b005b34801561009e57600080fd5b506100b960048036038101906100b491906106b6565b61035a565b6040516100c691906106f2565b60405180910390f35b3480156100db57600080fd5b506100f660048036038101906100f191906106b6565b610372565b60405161010391906106f2565b60405180910390f35b610126600480360381019061012191906105ed565b61038a565b005b610142600480360381019061013d91906105ed565b61048a565b005b6000808373ffffffffffffffffffffffffffffffffffffffff168360405160240161016f919061071c565b6040516020818303038152906040527f1beb2615000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516101f991906107b1565b600060405180830381855af49150503d8060008114610234576040519150601f19603f3d011682016040523d82523d6000602084013e610239565b606091505b50915091508273ffffffffffffffffffffffffffffffffffffffff16ff5b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516024016102849291906107c8565b6040516020818303038152906040527f3c1e101a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161030e91906107b1565b600060405180830381855af49150503d8060008114610349576040519150601f19603f3d011682016040523d82523d6000602084013e61034e565b606091505b50915091505050505050565b60006020528060005260406000206000915090505481565b60016020528060005260406000206000915090505481565b6000808373ffffffffffffffffffffffffffffffffffffffff16836040516024016103b5919061071c565b6040516020818303038152906040527fd646a556000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161043f91906107b1565b600060405180830381855af49150503d806000811461047a576040519150601f19603f3d011682016040523d82523d6000602084013e61047f565b606091505b509150915050505050565b6000808373ffffffffffffffffffffffffffffffffffffffff16836040516024016104b5919061071c565b6040516020818303038152906040527f51cff8d9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161053f91906107b1565b600060405180830381855af49150503d806000811461057a576040519150601f19603f3d011682016040523d82523d6000602084013e61057f565b606091505b509150915050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105ba8261058f565b9050919050565b6105ca816105af565b81146105d557600080fd5b50565b6000813590506105e7816105c1565b92915050565b600080604083850312156106045761060361058a565b5b6000610612858286016105d8565b9250506020610623858286016105d8565b9150509250929050565b6000819050919050565b6106408161062d565b811461064b57600080fd5b50565b60008135905061065d81610637565b92915050565b60008060006060848603121561067c5761067b61058a565b5b600061068a868287016105d8565b935050602061069b868287016105d8565b92505060406106ac8682870161064e565b9150509250925092565b6000602082840312156106cc576106cb61058a565b5b60006106da848285016105d8565b91505092915050565b6106ec8161062d565b82525050565b600060208201905061070760008301846106e3565b92915050565b610716816105af565b82525050565b6000602082019050610731600083018461070d565b92915050565b600081519050919050565b600081905092915050565b60005b8381101561076b578082015181840152602081019050610750565b8381111561077a576000848401525b50505050565b600061078b82610737565b6107958185610742565b93506107a581856020860161074d565b80840191505092915050565b60006107bd8284610780565b915081905092915050565b60006040820190506107dd600083018561070d565b6107ea60208301846106e3565b939250505056fea264697066735822122090c7a43a16274be4180c55ff023c6e3cf1e4b1944cef63f5c50fb1e8dc5d611d64736f6c634300080d0033";

type ControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Controller__factory extends ContractFactory {
  constructor(...args: ControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Controller> {
    return super.deploy(overrides || {}) as Promise<Controller>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Controller {
    return super.attach(address) as Controller;
  }
  override connect(signer: Signer): Controller__factory {
    return super.connect(signer) as Controller__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ControllerInterface {
    return new utils.Interface(_abi) as ControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Controller {
    return new Contract(address, _abi, signerOrProvider) as Controller;
  }
}
