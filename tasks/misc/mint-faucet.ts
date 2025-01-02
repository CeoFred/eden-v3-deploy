import { task } from "hardhat/config";
import {
  getFaucet,
} from "../../helpers/contract-getters";
import { waitForTx } from "../../helpers/utilities/tx";

task(
  `mint-faucet`,
  `Minta faucet token to address`
).setAction(async ({}, hre) => {
  const { deployer } = await hre.getNamedAccounts();
  const signer = await hre.ethers.getSigner(deployer);

  const faucetContract = await getFaucet("0x598c9Ca8ce5A7D32cbD61eef87B2E1F240c87979");

  const signedFauced = await faucetContract.connect(signer)

  await waitForTx(
    await signedFauced.setMaximumMintAmount(1_000_000*10**6)
  );

  console.log(
    `Successfully updated max mintable amount`
  );

    await waitForTx(await signedFauced.mint("0x8Da9e319242C15B4829BE86046C5BcAe45c57ee1","0x5dAA96364bD8e0c4f95004ADb4bDe0F2aFe933C9",1_000_000*10**6))

 console.log(
    `Successfully minted tokens`
  );

 
});
