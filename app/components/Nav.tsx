"use client";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Image
      src="/stackline_logo.svg"
      className={styles.logo}
      alt="logo"
      width={100}
      height={100}
    />
     </nav>
  );
};
