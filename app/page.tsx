import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import { Home } from "./components/home/Home";
import { ChakraProvider } from "@chakra-ui/react";

export default function IndexPage() {
  return (
      <Home />
  )
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
