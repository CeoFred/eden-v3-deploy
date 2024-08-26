import { eAssetChainNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyDAI, strategyUSDT, strategyWETH } from "../aave/reservesConfigs";
import { ZERO_ADDRESS } from "../../helpers/constants";
import { strategyAAVE, strategyUSDC, strategyEDEN} from "./reservesConfigs";

export const AssetChainTestNetMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 42, // Replace with actual Provider ID for AssetChain
  WrappedNativeTokenSymbol: "WRWA",
  MarketId: "Asset Chain Eden Market",
  ATokenNamePrefix: "AssetChain",
  StableDebtTokenNamePrefix: "AssetChain",
  VariableDebtTokenNamePrefix: "AssetChain",
  SymbolPrefix: "RWA",
  ReservesConfig: {
    // DAI: strategyDAI,
    // USDC: strategyUSDC,
    // USDT: strategyUSDT,
    // AAVE: strategyAAVE,
    WRWA: strategyWETH,
    // EDEN: strategyEDEN,
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
      // AAVE: "0x89463A113446320ea9cc037158233746f3a24325",
      // DAI: "0x987C5698bcf886C30dce800E3DCBd20FFE5f0F1A",
      // USDC: "0x60c6E98C1916CC701c5acBf7D80A38019740Ac69",
      // USDT: "0x019154BC112c3b66b82f3cbd854b57F48189Cfa5",
      WRWA: "0xf43Bffa4e58E5F8114FbbaF7E72694D1Da2248Dd",
      // EDEN: "0x5bC3ABBA3F0C29E8B043F9609c12330A319a2FC0",
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
      WRWA: "0x1EA09B2a1E303B5b62211E90E593699426E3BE80",
    },
  },
  EModes: {
    // StableEMode: {
    //   id: "1",
    //   ltv: "9700",
    //   liquidationThreshold: "9750",
    //   liquidationBonus: "10100",
    //   label: "Stablecoins",
    //   assets: ["USDC", "USDT", "DAI"],
    // },
  },
};

export default AssetChainTestNetMarket;
