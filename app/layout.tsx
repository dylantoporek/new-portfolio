import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./styles/globals.css";

const description =
  "Dylan Toporek is a full stack engineer in New York City building precise, captivating, and accessible digital experiences.";

export const metadata: Metadata = {
  title: "Dylan Toporek",
  description,
  openGraph: {
    title: "Dylan Toporek — Full Stack Engineer",
    description,
    type: "website",
    siteName: "Dylan Toporek",
  },
  twitter: {
    card: "summary",
    title: "Dylan Toporek — Full Stack Engineer",
    description,
  },
};

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
