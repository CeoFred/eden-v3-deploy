import { eAssetChainNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyDAI, strategyUSDT, strategyWETH,strategyLINK } from "../aave/reservesConfigs";
import { ZERO_ADDRESS } from "../../helpers/constants";
import { strategycNGN, strategyUSDC, strategyEDEN} from "./reservesConfigs";

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
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    WRWA: strategyWETH,
    EDEN: strategyEDEN,
    LINK: strategyLINK,
    CNGN:strategycNGN,
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
        DAI: ZERO_ADDRESS,
        USDC: ZERO_ADDRESS,
       USDT: ZERO_ADDRESS,
      WRWA: ZERO_ADDRESS,
      EDEN: ZERO_ADDRESS,
      LINK: ZERO_ADDRESS,
      CNGN: "0xc125329d053761c9d4Fb167986027a8eeeCCF73f",

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
    [eAssetChainNetwork.testnet]: {
      WRWA: "0xd8EccdC2b114eBc4B565Cb399Cb99620d9816194",
      EDEN:"0xBBf418E266E87A7ea553D530E175f95d145Cc88F",
      DAI:"0xC9065F8f9b75C30D7D84471295592C2f3eB295eD",
      USDC:"0x233cB21Da63516e5cB5aCe464B7fe28107819c4C",
      USDT:"0x654BB967d8dE9759840fcC202E5f9c72d88f9381",
      CNGN:"0x19c1E0eAe5D11246517f629f3F213aAB782C0C29"
        },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC", "DAI","USDT"],
    },
  },
};

export default AssetChainTestNetMarket;
