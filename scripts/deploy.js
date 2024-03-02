const hre = require("hardhat");

async function main() {
  const TokenContract = await hre.ethers.getContractFactory('Token');
  const tokenContract = await TokenContract.deploy();
  await tokenContract.waitForDeployment();
  console.log("CONTRACT DEPLOYED TO : ", tokenContract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});