// Synchronous [solidity]
// Asynchronous [JavaScript]

// cooking

// Synchronous
// 1. Put popcorn in microwave --> Promise
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asynchronous
// 1. Put popcorn in microwave
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  // http://127.0.0.1:7545
  // Compile in our code
  // Compile them seperately
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const wallet = new ethers.Wallet(
    "0x578f756dd1e637bb78dff004cff8517f384f3be491cce3147e4a4f53bcbb8396",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync("SimpleStorage_sol_SimpleStorage.bin", "utf8");
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); // Stop Here!!! wait for contract to deploy
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
