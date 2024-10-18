import type { Metadata } from "next";
import styles from "./styles.module.css";

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
      <body className={styles.body}>
        <section className={styles.section}>{children}</section>
      </body>
    </html>
  );
}
