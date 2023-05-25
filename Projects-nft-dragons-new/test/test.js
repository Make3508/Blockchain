const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("Dragons", function () {
  let dragonFactory, contract, signerAddress, signer;
  beforeEach(async function () {
    dragonFactory = await ethers.getContractFactory("Dragons");
    contract = await dragonFactory.deploy();
    signer = ethers.provider.getSigner(0);
    [signerAddress] = await ethers.provider.listAccounts();
  });

  it("it should set the owner to be the deployer of the contract", async function () {
    assert.equal(await contract.owner(), signerAddress);
  });
  it("it should withdraw the correct amount", async function () {
    let withdrawAmount = ethers.utils.parseUnits("1", "ether");
    await expect(contract.withdraw(withdrawAmount)).to.be.reverted;
  });
});
