import { task } from "hardhat/config";
import { getAddressFromJson, POOL_CONFIGURATOR_PROXY_ID } from "../../helpers";

task("verify-pool-configurator-impl", "Verifies the pool configurator implementation contract")
  .setAction(async (_, { ...hre }) => {
    const network = hre.network.name;
    const implementationAddress = "0x4fF7C67f038863Cf70a211b4B82C051Bd3c346bc";
 
    try {
      await hre.run("verify:verify", {
        address: implementationAddress,
        constructorArguments: [],
      });
      console.log(`Successfully verified pool configurator implementation at ${implementationAddress}`);
    } catch (error) {
      console.error(`Verification failed: ${error}`);
    }
  });