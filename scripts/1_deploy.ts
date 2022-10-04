/* eslint-disable node/no-missing-import */
import { ethers } from "hardhat";
import { SampleToken } from "../typechain";

async function main() {
  console.log("Deploying contract...");

  const Contract = await ethers.getContractFactory("SampleToken");
  const contract = (await Contract.deploy(1000)) as SampleToken;

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
