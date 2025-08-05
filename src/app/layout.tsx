import "./globals.css";
import Providers from "@/components/Providers"; // <- Import the client wrapper
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Auth App",
  description: "Authentication with NextAuth and MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers> {/* Wrap here */}
      </body>
    </html>
  );
}
