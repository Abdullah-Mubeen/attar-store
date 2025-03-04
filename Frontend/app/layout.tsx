import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import LayoutWrapper from "./LayoutWrapper"; // Import the wrapper

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Jameel Fragrance | Luxury Attars & Perfumes",
  description:
    "Discover the finest collection of luxury attars and perfumes at Jameel Fragrance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LayoutWrapper>{children}</LayoutWrapper>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
