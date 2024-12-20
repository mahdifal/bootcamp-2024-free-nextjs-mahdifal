"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { headerLinksData } from "@/constants/header-links";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {headerLinksData.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className={clsx(pathname === link.path && styles.active)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت نام</button>
    </header>
  );
};
