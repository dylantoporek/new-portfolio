import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import { Home } from "./components/home/Home";
import { ChakraProvider } from "@chakra-ui/react";


// Bold name in heading
// change working in about me to be more professional and build lore
// indicatior that each job can be clicked for a dropdown
// change colors for more pop

export default function IndexPage() {
  return (
      <Home />
  )
}

export const metadata: Metadata = {
  title: "Dylan Toporek",
};
