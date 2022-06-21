const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ValutFixed = await hre.ethers.getContractFactory("TempVaultFixed");

  console.log("After contract factory");

  const valut = await ValutFixed.deploy();
  console.log("After deploy");

  const txHash = valut.deployTransaction.hash;

  console.log(txHash);

  const txReceipt = await ethers.provider.waitForTransaction(txHash);

  console.log("txReceipt");

  const valutcontract = await valut.deployed();

  // nft contract address
  console.log("contract address at:", valutcontract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
