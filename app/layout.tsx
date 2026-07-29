import "./globals.css";
import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website built with Next.js and Tailwind CSS",
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