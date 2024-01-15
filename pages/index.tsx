import { SessionInfo } from "@/components/SessionInfo";
import { Web3Modal } from "@/components/Web3Modal";
import React from "react";

const Home = () => {
  return (
    <main className="grid min-h-screen place-items-center p-24">
      <SessionInfo />
    </main>
  );
};

export default Home;
