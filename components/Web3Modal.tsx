"use client";

import { siweConfig } from "@/utils/siweConfig";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import chains from "@/utils/chains";
import { metadata } from "@/utils/constants";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Missing NEXT_PUBLIC_PROJECT_ID");

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  siweConfig,
  chains,
  enableAnalytics: true,
  metadata,
});

export const Web3Modal = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <div className="flex items-center justify-between w-full gap-8">
        <w3m-network-button />
        <w3m-button />
      </div>
    </WagmiConfig>
  );
};
