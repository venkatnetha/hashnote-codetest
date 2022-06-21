const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const PwnedFixed = await hre.ethers.getContractFactory("PwnedFixed");

  console.log("After contract factory");

  const pawned = await PwnedFixed.deploy();
  console.log("After deploy");

  const txHash = pawned.deployTransaction.hash;

  console.log(txHash);

  const txReceipt = await ethers.provider.waitForTransaction(txHash);

  console.log("txReceipt");

  const pawnedcontract = await pawned.deployed();

  // nft contract address
  console.log("contract address at:", pawnedcontract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
