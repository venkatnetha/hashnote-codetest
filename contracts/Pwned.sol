// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Pwned {
  using SafeMath for uint256;
  bool public locked;
  bytes32 private password;
  mapping(address => uint256) public balances;

  constructor(bytes32 _password) public {
    locked = true;
    password = _password;
  }

  function unlock(bytes32 _password) public {
    if (password == _password) {
      locked = false;
    }
  }

  function lock(bytes32 _password) public {
    if (password == _password) {
      locked = true;
    }
  }

  function getBalance(address _request) public view returns (uint256 balance) {
    return balances[_request];
  }

  function deposit(address _to) public payable {
    balances[_to] = balances[_to].add(msg.value);
  }

  function withdraw(uint256 _amount) public {
    require(!locked);
    if (balances[msg.sender] >= _amount) {
      (bool result, ) = msg.sender.call{ value: _amount }("");
      if (result) {
        _amount;
      }
      balances[msg.sender] -= _amount;
    }
  }

  receive() external payable {}
}
