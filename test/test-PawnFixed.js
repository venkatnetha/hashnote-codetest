const { ethers } = require("hardhat");
const { assert, expect, assertReverts } = require("chai");
const { Contract } = require("ethers");

require("@nomiclabs/hardhat-waffle");

describe("PwnedFixed", function () {
  beforeEach(async () => {
    // Deploy the contract
    const PwnedFixed = await ethers.getContractFactory("PwnedFixed");
    pwned = await PwnedFixed.deploy();
    await pwned.deployed();
  });

  it("Should call deposit with the amount and address", async function () {
    // Get the signer
    const accounts = await hre.ethers.getSigners();
    deployer = accounts[0];

    // Amount to save
    const ethAmount = "0.0000000000000001";
    const weiAmount = ethers.utils.parseEther(ethAmount);
    const transaction = {
      value: weiAmount,
    };

    // deposit the amount
    await pwned.deposit(deployer.address, transaction);
    expect((await pwned.getBalance(deployer.address)).toString()).to.be.equal(
      transaction.value.toString()
    );
  });

  it("Should withdraw the amount", async function () {
    const accounts = await hre.ethers.getSigners();
    deployer = accounts[0];

    // Amount to deposit
    const ethAmount = "0.0000000000000001";
    const weiAmount = ethers.utils.parseEther(ethAmount);
    const transaction = {
      value: weiAmount,
    };

    // deposit the amount
    await pwned.deposit(deployer.address, transaction);

    // Withdraw the amount
    await pwned.withdraw(await pwned.getBalance(deployer.address));

    expect((await pwned.getBalance(deployer.address)).toString()).to.be.eq("0");
  });
});
