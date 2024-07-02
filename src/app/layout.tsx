import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Thirdweb5Provider } from '@/lib/third-web/provider';
import Head from 'next/head';


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
        <Head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<meta property='og:title' content='Upe Impact' />
				<meta
					property='og:description'
					content='Upe Impact is a web app designed to facilitate the coordination of community betterment projects and track their results on-chain.'
				/>
				<meta property='og:image' content='/upe_favicon.png' />
				<meta property='og:url' content='https://i.u.pe' />
			</Head>
      <body className={`${inter.className} bg-upe-grey`}>
        <main className="pb-10 min-h-[100vh] container max-w-screen-xl mx-auto">
          <Thirdweb5Provider>{children}</Thirdweb5Provider>
        </main>
      </body>
    </html>
  );
}
