const { ethers } = require("hardhat");
const { assert, expect, assertReverts } = require("chai");
const { Contract } = require("ethers");

require("@nomiclabs/hardhat-waffle");

describe("TempVaultFixedContract", function () {
  beforeEach(async () => {
    // Deploy the contract
    const SecureFixed = await ethers.getContractFactory(
      "TempVaultFixedContract"
    );
    secure = await SecureFixed.deploy();
    await secure.deployed();
  });

  it("Should call deposit with the amount and address", async function () {
    // Get the signer
    const accounts = await hre.ethers.getSigners();
    deployer = accounts[0];

    // Amount to deposit
    const ethAmount = "0.0000000000000001";
    const weiAmount = ethers.utils.parseEther(ethAmount);
    const transaction = {
      value: weiAmount,
    };

    // Save the amount
    await secure.depositCD(deployer.address, transaction);
    expect((await secure.getBalance(deployer.address)).toString()).to.be.equal(
      transaction.value.toString()
    );
  });

  it("Should withdraw the amount", async function () {
    function delay(interval) {
      return it("should delay", (done) => {
        setTimeout(() => done(), interval);
      }).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
    }

    const accounts = await hre.ethers.getSigners();
    deployer = accounts[0];

    // Amount to deposit
    const ethAmount = "0.0000000000000001";
    const weiAmount = ethers.utils.parseEther(ethAmount);
    const transaction = {
      value: weiAmount,
    };

    // deposit the amount
    await secure.depositCD(deployer.address, transaction);

    delay(30000);
    // Withdraw the amount
    await secure.withdraw(deployer.address);

    expect((await secure.getBalance(deployer.address)).toString()).to.be.eq(
      "0"
    );
  });
});
