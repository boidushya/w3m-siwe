"use client";

import React from "react";

import { useSession } from "next-auth/react";
import type { SIWESession } from "@web3modal/siwe";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import LoadingIcon from "./ui/LoadingIcon";
import { Web3Modal } from "./Web3Modal";
import { truncate } from "@/utils/functions";

const getIconFromStatus = (
  status: "authenticated" | "loading" | "unauthenticated"
) => {
  switch (status) {
    case "authenticated":
      return (
        <div className="rounded-full py-1 px-2 pr-3 text-sm text-green-200 flex items-center gap-1 bg-green-950">
          <CheckIcon className="text-green-400" /> Authenticated
        </div>
      );
    case "loading":
      return (
        <div className="rounded-md h-6 w-6 grid place-items-center bg-stone-800">
          <LoadingIcon />
        </div>
      );
    case "unauthenticated":
      return (
        <div className="rounded-full py-1 px-2 pr-3 text-sm text-red-200 flex items-center gap-1 bg-red-950">
          <Cross2Icon className="text-red-400" /> Unauthenticated
        </div>
      );
    default:
      return "❓";
  }
};

export const SessionInfo = () => {
  const { data, status } = useSession();
  const session = data as unknown as SIWESession;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Web3Modal SIWE</CardTitle>
          <CardDescription>
            Information related to the connected SIWE session
          </CardDescription>
        </CardHeader>
        <CardContent className="divide-y">
          <div className="flex items-center justify-between py-2">
            <span className="text-stone-500"> Session Status </span>
            <span>{getIconFromStatus(status)}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-stone-500">Network</span>
            <span>
              {session?.chainId ? `eip155:${session?.chainId}` : "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-stone-500">Address</span>
            <span>{truncate(session?.address) || "N/A"}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Web3Modal />
        </CardFooter>
      </Card>
    </div>
  );
};
