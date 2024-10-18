import styles from "./global.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MetaMask | ChainGPT Giveaway",
  description: "Do tasks and share in $1.5M giveaway tokens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
