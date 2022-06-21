pragma solidity ^0.8.13;

// OpenZeppelin safe math library is not needed after solidity 0.8.0 version, its inbuilt into solidity compiler.
// from solidity 0.8.0, the underflow and overflow check is performed during compile time.
contract TempVaultFixedContract {
  mapping(address => uint256) public balances;
  mapping(address => uint256) public lockTime;

  address payable owner;

  constructor() {
    owner = payable(msg.sender);
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "only owner can call this method");
    _;
  }

  function getBalance(address _request) public view returns (uint256 balance) {
    return balances[_request];
  }

  function depositCD(address _to) public payable {
    require(_to != address(0), "Zero address supplied");
    balances[_to] += msg.value;
    lockTime[_to] = block.timestamp + 3 seconds;
  }

  function increaseLockTime(address _account, uint256 _secondsToIncrease)
    public
    onlyOwner
  {
    lockTime[_account] += _secondsToIncrease;
  }

  function withdraw(address _account) public {
    require(_account == msg.sender, "not the same as msg.sender");
    require(balances[_account] > 0, "invalid balance");
    require(
      block.timestamp > lockTime[_account],
      "The time is not yet finished"
    );
    //Follow the effects first followed by the interaction
    balances[_account] = 0;
    payable(_account).transfer(balances[_account]);
  }

  /**selfdestruct will send the contract balance to the supplied address or msg.sender and delets the contract from the EVM
   *  This should be used based on the contract reqiuiremens which mandates the contract destruction at some point of time.
   */
  //function destruct() public onlyOwner {
  //selfdestruct(payable(owner));
  //}
}
