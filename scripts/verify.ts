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
  // const contractAddress = "0xF7AD2F64A82f0E7572326CaDE8D48163e40f7CcF";
  // const constructorArgs = ["0x8ECB1EFea1A0EE25f29091a6BbCacf5400f8A2D2","0x5dAA96364bD8e0c4f95004ADb4bDe0F2aFe933C9","0x5dAA96364bD8e0c4f95004ADb4bDe0F2aFe933C9"]; 

  // await verifyContract("0x5575900AB3C4D90F77EB26Cf8499762FFA263084", ["0x5dAA96364bD8e0c4f95004ADb4bDe0F2aFe933C9"]);


  // await verifyContract(contractAddress, constructorArgs);

//   await verifyContract("0x847F25e2360e410Be44F7521EAD4524d0f17089b", [
//       "0x4674905e7EFf208790f001c4C226844B3B7051bf",
//       [
//   '0xBe4c30Bbeb576a95ff6b1A5C43046124cBdE8326',
//   '0x5409a37617DADFAEE1f372d9A547381F8e3D067E',
//   '0xe37095D4919F06f876Be619378D53BFccFe239f9',
//   '0x5A6b3cc4c7275E0Ea4F2ADa35Df4a47410D9d6Df',
//   '0x8Da9e319242C15B4829BE86046C5BcAe45c57ee1',
//   '0xFFbA4F1Eb3a61ba3967e0Ace6397436102bB2bDf',
//   '0xc125329d053761c9d4Fb167986027a8eeeCCF73f'
// ],
//  [
//   '0x08E3bE0CBde83d6F042104586DA83Cfd1d6da7d8',
//   '0x1865673A3EAcFd1876bAe5d5c08d18CE9121B185',
//   '0x58CB18483D4E879f2b18A96264912e1c2D0B96f6',
//   '0x316830Bf3211188CAeEDE8Ee489E576207bBB1c8',
//   '0x2658240e628E0CDc456E998E340a9297774fC763',
//   '0x3A60C65407a99a71c7ff26c9054030fd820b57A2',
//   '0x16311969e1bE93a0B9c089EdB7Ba9dBb36188539'
// ],
// "0x0000000000000000000000000000000000000000",
// "0x0000000000000000000000000000000000000000",
// "100000000"
//     ]
//   );


// verify faucet contract
  const faucet = "0x598c9Ca8ce5A7D32cbD61eef87B2E1F240c87979"
  const faucetConstructorArgs = [
    "0x5dAA96364bD8e0c4f95004ADb4bDe0F2aFe933C9",
    false,
    10000
  ]
  await verifyContract(faucet, faucetConstructorArgs);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
