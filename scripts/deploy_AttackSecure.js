const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const AttackSecure = await hre.ethers.getContractFactory("AttackSecure");

  console.log("After contract factory");

  const attacksecure = await AttackSecure.deploy(
    "address of the deployed Secure contract as argument"
  );
  console.log("After deploy");

  const txHash = attacksecure.deployTransaction.hash;

  console.log(txHash);

  const txReceipt = await ethers.provider.waitForTransaction(txHash);

  console.log("txReceipt");

  const attack = await attacksecure.deployed();

  // nft contract address
  console.log("contract address at:", attack.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
