import { task } from "hardhat/config";

task(
  `deploy-EdenOracle`,
  `Deploys the EdenOracle contract`
).setAction(async (_, hre) => {
  if (!hre.network.config.chainId) {
    throw new Error("INVALID_CHAIN_ID");
  }

  console.log(`\n- EdenOracle deployment`);
  const { deployer } = await hre.getNamedAccounts();
  const artifact = await hre.deployments.deploy("AaveOracle", {
    from: deployer,
    args: [
      "0x4674905e7EFf208790f001c4C226844B3B7051bf",
      [
  '0xBe4c30Bbeb576a95ff6b1A5C43046124cBdE8326',
  '0x5409a37617DADFAEE1f372d9A547381F8e3D067E',
  '0xe37095D4919F06f876Be619378D53BFccFe239f9',
  '0x5A6b3cc4c7275E0Ea4F2ADa35Df4a47410D9d6Df',
  '0x8Da9e319242C15B4829BE86046C5BcAe45c57ee1',
  '0xFFbA4F1Eb3a61ba3967e0Ace6397436102bB2bDf',
  '0xc125329d053761c9d4Fb167986027a8eeeCCF73f'
],
 [
  '0x08E3bE0CBde83d6F042104586DA83Cfd1d6da7d8',
  '0x1865673A3EAcFd1876bAe5d5c08d18CE9121B185',
  '0x58CB18483D4E879f2b18A96264912e1c2D0B96f6',
  '0x316830Bf3211188CAeEDE8Ee489E576207bBB1c8',
  '0x2658240e628E0CDc456E998E340a9297774fC763',
  '0x3A60C65407a99a71c7ff26c9054030fd820b57A2',
  '0xe537c1ebaed0773adC1B9796ebe980736E5EaE33'
],
"0x0000000000000000000000000000000000000000",
"0x0000000000000000000000000000000000000000",
"100000000"
    ]
  });

  console.log("EdenOracle deployed at:", artifact.address);
  console.log(`\tFinished EdenOracle deployment`);
});
