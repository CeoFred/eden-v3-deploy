import { eAssetChainNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyWETH } from "../aave/reservesConfigs";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {  strategyUSDC, strategyUSDT} from "./reservesConfigs";

export const AssetChainTestNetMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 42, // Replace with actual Provider ID for AssetChain
  WrappedNativeTokenSymbol: "WRWA",
  MarketId: "AssetChain Eden Market",
  ATokenNamePrefix: "AssetChain",
  StableDebtTokenNamePrefix: "AssetChain",
  VariableDebtTokenNamePrefix: "AssetChain",
  SymbolPrefix: "Rwa",
  ReservesConfig: {
    USDC: strategyUSDC,
    WRWA: strategyWETH,
    USDT: strategyUSDT,
  },
  ReserveAssets: {
    [eAssetChainNetwork.main]: {
      USDC: "0x2B7C1342Cc64add10B2a79C8f9767d2667DE64B2",
      WRWA: "0x2584D40B5553E81Bb9deC0b6CD1a2E504AAB1709",
      USDT:"0x26E490d30e73c36800788DC6d6315946C4BbEa24",
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
      USDC: "0xf0Ec014Fde27e864C885cd433E1a76765f37d149",
      WRWA: "0x9794D8B3152aaD47790332Ae4695901a9F826d54",
      USDT:"0x67b9f799c354e3602A7a55F62F37192ced9f8fd0"
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
      ltv: "9000",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC","USDT"],
    },
  },
};

export default AssetChainTestNetMarket;
