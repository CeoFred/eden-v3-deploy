import { eAssetChainNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyDAI, strategyUSDT, strategyWETH } from "../aave/reservesConfigs";
import { ZERO_ADDRESS } from "../../helpers/constants";
import { strategyAAVE, strategyLINK, strategyUSDC, strategyWBTC, strategyWRWA, strategyCRV, strategySUSHI } from "./reservesConfigs";

export const AssetChainTestNetMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 42, // Replace with actual Provider ID for AssetChain
  WrappedNativeTokenSymbol: "WRWA",
  MarketId: "AssetChain Eden Market",
  ATokenNamePrefix: "AssetChain",
  StableDebtTokenNamePrefix: "AssetChain",
  VariableDebtTokenNamePrefix: "AssetChain",
  SymbolPrefix: "RWA",
  ReservesConfig: {
    DAI: strategyDAI,
    LINK: strategyLINK,
    USDC: strategyUSDC,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    USDT: strategyUSDT,
    AAVE: strategyAAVE,
    WRWA: strategyWRWA,
    CRV: strategyCRV,
    SUSHI: strategySUSHI,
  },
  ReserveAssets: {
    [eAssetChainNetwork.main]: {
      DAI: "0xYourMainnetAddress",
      LINK: "0xYourMainnetAddress",
      USDC: "0xYourMainnetAddress",
      WBTC: "0xYourMainnetAddress",
      WETH: "0xYourMainnetAddress",
      USDT: "0xYourMainnetAddress",
      AAVE: "0xYourMainnetAddress",
      WRWA: "0xYourMainnetAddress",
      CRV: "0xYourMainnetAddress",
      SUSHI: "0xYourMainnetAddress",
    },
    [eAssetChainNetwork.testnet]: {
      AAVE: ZERO_ADDRESS,
      DAI: ZERO_ADDRESS,
      LINK: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      WRWA: ZERO_ADDRESS,
    },
  },
  ChainlinkAggregator: {
    [eAssetChainNetwork.main]: {
      AAVE: "0xYourMainnetAggregatorAddress",
      DAI: "0xYourMainnetAggregatorAddress",
      LINK: "0xYourMainnetAggregatorAddress",
      USDC: "0xYourMainnetAggregatorAddress",
      WBTC: "0xYourMainnetAggregatorAddress",
      WETH: "0xYourMainnetAggregatorAddress",
      USDT: "0xYourMainnetAggregatorAddress",
      SUSHI: "0xYourMainnetAggregatorAddress",
      CRV: "0xYourMainnetAggregatorAddress",
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC", "USDT", "DAI"],
    },
  },
};

export default AssetChainTestNetMarket;
