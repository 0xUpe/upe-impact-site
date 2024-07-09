import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Thirdweb5Provider } from '@/lib/third-web/provider';
import Nav from '@/components/Nav';
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton"; 

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impact | Upe",
  description: "Impact tracking and recognition for Upe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Upe Impact" />
        <meta
          property="og:description"
          content="Upe Impact is a web app designed to facilitate the coordination of community betterment projects and track their results on-chain."
        />
        <meta property="og:image" content="/upe_favicon.png" />
        <meta property="og:url" content="https://i.u.pe" />
      </head>
      <body className={`${inter.className} bg-upe-grey`}>
        <main className="pb-10 min-h-[100vh] container max-w-screen-xl mx-auto">
          <Thirdweb5Provider>
            <Nav />
            {children}
            <Footer />
            <BackToTopButton />
          </Thirdweb5Provider>
        </main>
      </body>
    </html>
  );
}
