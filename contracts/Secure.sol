// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract TempVault {
  using SafeMath for uint256;

  mapping(address => uint256) public balances;
  mapping(address => uint256) public lockTime;

  address payable owner;

  constructor() {
    owner = payable(msg.sender);
  }

  function depositCD(address _to) public payable {
    balances[_to] += msg.value;
    lockTime[_to] = block.timestamp + 1 weeks;
  }

  function increaseLockTime(address _account, uint256 _secondsToIncrease)
    public
  {
    require((msg.sender == owner));
    lockTime[_account] += _secondsToIncrease;
  }

  function withdraw(address _account) public {
    require(_account == msg.sender);
    require(balances[_account] > 0);
    require(block.timestamp > lockTime[_account]);
    payable(_account).transfer(balances[_account]);
    balances[_account] = 0;
  }

  function destruct(address _owner) public {
    selfdestruct(payable(_owner));
  }
}

contract Controller {
  using SafeMath for uint256;

  mapping(address => uint256) public balances;
  mapping(address => uint256) public lockTime;

  address payable owner;

  function depositCD(address _contract, address _to) public payable {
    (bool success, bytes memory data) = _contract.delegatecall(
      abi.encodeWithSignature("depositCD(address)", _to)
    );
  }

  function increaseLockTime(
    address _contract,
    address _account,
    uint256 _seconds
  ) public payable {
    (bool success, bytes memory data) = _contract.delegatecall(
      abi.encodeWithSignature(
        "increaseLockTime(addresss,uint)",
        _account,
        _seconds
      )
    );
  }

  function withdraw(address _contract, address _account) public payable {
    (bool success, bytes memory data) = _contract.delegatecall(
      abi.encodeWithSignature("withdraw(address)", _account)
    );
  }

  function destruct(address _contract, address _account) public payable {
    (bool success, bytes memory data) = _contract.delegatecall(
      abi.encodeWithSignature("destruct(address)", _account)
    );
    selfdestruct(payable(_account));
  }
}
