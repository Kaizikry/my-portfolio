import "./globals.css";
import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Your Name | Digital designer & developer",
  description: "Selected work and notes from Your Name.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body className="scroll-smooth">{children}</body>
    </html>
  );
}