// "use client";

import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cookieStore = cookies();
  const showLoginLink = cookieStore.get("auth")?.value !== "true";

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={inter.className}>Welcome</h1>
        <div className={styles.linkGroup}>
          {showLoginLink && <a href="/login">Login</a>}
          <a href="/create">Create</a>
          <a href="/view">View</a>
        </div>
      </div>
    </main>
  );
}
