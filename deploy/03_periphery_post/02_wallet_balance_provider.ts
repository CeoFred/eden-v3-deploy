import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { COMMON_DEPLOY_PARAMS } from "../../helpers/env";

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  ...hre
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const walletBalanceProviderArtifact = await deploy("WalletBalanceProvider", {
    from: deployer,
    ...COMMON_DEPLOY_PARAMS,
  });

try {
    // verify contract using hardhat verify
  // await hre.run("verify:verify", {
  //   address: walletBalanceProviderArtifact.address,
  //     constructorArguments: [],
  //   });
  } catch (error) {
    console.log("Error verifying contract", error);
  }
};

func.tags = ["periphery-post", "walletProvider"];

export default func;
