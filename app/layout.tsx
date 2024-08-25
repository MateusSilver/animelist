import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import Header from "./_components/header";
import AuthProvider from "./_providers/auth";
import { Toaster } from "./_components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime List",
  description: "by Mateus Batista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <AuthProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
