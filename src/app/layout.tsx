import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import the Space Grotesk font locally
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf", // Ensure this path is correct
  variable: "--font-space-grotesk", // CSS variable name
  weight: "100 900", // Font weight range, adjust as needed
});

export const metadata: Metadata = {
  title: "ChainGPT Giveaway",
  description: "Do tasks and share in $1.5M giveaway tokens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
