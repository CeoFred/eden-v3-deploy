import { run } from "hardhat";

async function verifyContract(address: string, args: any[]) {
  try {
    await run("verify:verify", {
      address,
      constructorArguments: args,
    });
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  const contractAddress = "0xF7AD2F64A82f0E7572326CaDE8D48163e40f7CcF";
  const constructorArgs = ["0x8ECB1EFea1A0EE25f29091a6BbCacf5400f8A2D2","0x5dAA96364bD8e0c4f95004ADb4bDe0F2aFe933C9","0x5dAA96364bD8e0c4f95004ADb4bDe0F2aFe933C9"]; 

  await verifyContract(contractAddress, constructorArgs);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
