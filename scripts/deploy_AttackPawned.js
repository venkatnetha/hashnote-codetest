const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const PwnedAttack = await hre.ethers.getContractFactory("PwnedAttack");

  console.log("After contract factory");

  const pawnedattack = await PwnedAttack.deploy(
    "The address of the pawned contract as the argument to be supplied here"
  );
  console.log("After deploy");

  const txHash = pawnedattack.deployTransaction.hash;

  console.log(txHash);

  const txReceipt = await ethers.provider.waitForTransaction(txHash);

  console.log("txReceipt");

  const pawned = await pawnedattack.deployed();

  // nft contract address
  console.log("contract address at:", pawned.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
