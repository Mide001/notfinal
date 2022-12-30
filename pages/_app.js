import "../styles/globals.css";
import Layout from "../src/components/Layout";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import Head from "next/head";
import { polygon } from "@wagmi/chains";
const desiredChainId = ChainId.Polygon;

const { chains, provider } = configureChains(
  [polygon], 
  [alchemyProvider({ apiKey: "https://polygon-mainnet.g.alchemy.com/v2/mdibLWbndRZk377w4MBg-f0yWt5-4puM" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "FantomFlip",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Head>
        <title>Nirvana Academy</title>
        <meta name="description" content="Nirvana Academy Decentralized Minting App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThirdwebProvider>
  );
} 


export default MyApp;