import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/lib/trpc-provider";
import { AuthProvider } from "@/contexts/AuthContext";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RIVOAURA - Fantasy Cricket Platform",
  description: "100% Free Fantasy Cricket Platform - Build your dream team, compete with thousands, and master the game of cricket strategy.",
  keywords: "fantasy cricket, free fantasy sports, cricket game, team builder, cricket strategy",
  openGraph: {
    title: "RIVOAURA - Fantasy Cricket Platform",
    description: "100% Free Fantasy Cricket Platform - Build your dream team and compete",
    url: "https://rivoauralive.com",
    siteName: "RIVOAURA",
    images: [
      {
        url: "/logo-rivoaura.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIVOAURA - Fantasy Cricket Platform",
    description: "100% Free Fantasy Cricket Platform",
    images: ["/logo-rivoaura.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <TRPCProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </TRPCProvider>
        <Analytics />
      </body>
    </html>
  );
}
