import chai, { expect } from "chai";
import ChaiAsPromised from "chai-as-promised";
import { ethers } from "hardhat";
import { SampleToken } from "../typechain";

chai.use(ChaiAsPromised);

describe("Sample token", function () {
  let contract!: SampleToken;

  before(async function () {
    // [owner, whitelistedUser, holder, externalUser] = await ethers.getSigners();
  });

  it("Contract deployment", async function () {
    const Contract = await ethers.getContractFactory("SampleToken");
    contract = (await Contract.deploy([100])) as SampleToken;

    await contract.deployed();
  });

  it("Check initial data", async function () {
    expect(await contract.name()).to.equal("Sample");
    expect(await contract.symbol()).to.equal("SMP");
    expect(await contract.totalSupply()).to.equal("100");
  });
});
