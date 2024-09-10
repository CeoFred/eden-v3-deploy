import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { COMMON_DEPLOY_PARAMS } from "../../helpers/env";
import {
  chainlinkAggregatorProxy,
  chainlinkEthUsdAggregatorProxy,
} from "../../helpers/constants";
import { eNetwork } from "../../helpers";

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  ...hre
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const network = (
    process.env.FORK ? process.env.FORK : hre.network.name
  ) as eNetwork;

  if (!chainlinkAggregatorProxy[network]) {
    console.log(
      '[Deployments] Skipping the deployment of UiPoolDataProvider due missing constant "chainlinkAggregatorProxy" configuration at ./helpers/constants.ts'
    );
    return;
  }
  // Deploy UiIncentiveDataProvider getter helper
  const uiIncentiveDataProviderArtifact = await deploy("UiIncentiveDataProviderV3", {
    from: deployer,
  });
  // verify contract using hardhat verify
  // await hre.run("verify:verify", {
  //   address: uiIncentiveDataProviderArtifact.address,
  //   constructorArguments: [],
  // });

  // Deploy UiPoolDataProvider getter helper
  const uiPoolDataProviderArtifact = await deploy("UiPoolDataProviderV3", {
    from: deployer,
    args: [
      chainlinkAggregatorProxy[network],
      chainlinkEthUsdAggregatorProxy[network],
    ],
    ...COMMON_DEPLOY_PARAMS,
  });

  console.log(chainlinkAggregatorProxy[network]);
  console.log(chainlinkEthUsdAggregatorProxy[network]);
  console.log("chain link aggragators")

  
  // verify contract using hardhat verify
  await hre.run("verify:verify", {
    address: uiPoolDataProviderArtifact.address,
    constructorArguments: [
      chainlinkAggregatorProxy[network],
      chainlinkEthUsdAggregatorProxy[network],
    ],
  });
};

func.tags = ["periphery-post", "ui-helpers"];

export default func;
