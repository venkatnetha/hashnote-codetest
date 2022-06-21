// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

// OpenZeppelin safe math library is not needed after solidity 0.8.0 version, its inbuilt into solidity compiler.
// from solidity 0.8.0, the underflow and overflow check is performed during compile time.

contract PwnedFixed {
  address public owner;
  mapping(address => uint256) public balances;

  constructor() public {}

  function getBalance(address _request) public view returns (uint256 balance) {
    return balances[_request];
  }

  function deposit(address _to) public payable {
    require(_to != address(0), "zero address supplied");
    require(msg.value > 0, "Zero ether sent- send some ether to deposit");
    balances[_to] += msg.value;
  }

  //To prevent the re-entrancy attack from the contract-
  // follow the check-effect-interaction pattern
  // check if the balance is valid and present in the account
  // perform the effect- deduct the balance from the account
  // perform the interaction- by call transfer or call method
  // check for the transfer result - if transfer reverts - reset the account balance
  function withdraw(uint256 _amount) public {
    require(_amount > 0, "Zero amount withdrawals not allowed");
    require(
      balances[msg.sender] >= _amount,
      "Not enough balance to withdraw from the account- deposit first"
    );
    balances[msg.sender] -= _amount;
    (bool result, ) = msg.sender.call{ value: _amount }("");
    if (!result) {
      balances[msg.sender] += _amount;
    }
  }

  receive() external payable {}
}
