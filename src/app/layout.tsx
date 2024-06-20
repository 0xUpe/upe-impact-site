import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impact | Upe",
  description: "Impact tracking and reccognition for Upe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-upe-grey`}>
        <main className="pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-xl mx-auto">
          <ThirdwebProvider>{children}</ThirdwebProvider>
        </main>
      </body>
    </html>
  );
}
