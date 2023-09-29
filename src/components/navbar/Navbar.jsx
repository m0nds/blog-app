"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  const { mode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/monds.png"
            className={mode === "dark" ? "light" : null}
            width={100}
            height={20}
            alt=""
          />
        </Link>
        <div
          className={styles.hamburgerIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt4 />}
        </div>
      </div>
      <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );

  // return (
  //   // <div className={styles.container}>
  //   //   {/* Mobile Menu */}
  //   //   <div className={styles.mobileView}>
  //   //     <Link href="/" className={styles.mobileLogo}>
  //   //       <Image
  //   //         src="/monds.png"
  //   //         className={mode === "dark" ? "light" : null}
  //   //         width={100}
  //   //         height={20}
  //   //         alt=""
  //   //       />
  //   //     </Link>
  //   //     <div className={styles.mobileLinks}>
  //   //       <button onClick={() => setToggle(!toggle)}>
  //   //         {toggle ? <HiX /> : <HiMenuAlt4 />}
  //   //       </button>
  //   //       {toggle ? (
  //   //         <div className={styles.mobileList}>
  //   //           {links.map((link) => (
  //   //             <Link
  //   //               key={link.id}
  //   //               href={link.url}
  //   //               className={styles.mobileLink}
  //   //             >
  //   //               {link.title}
  //   //             </Link>
  //   //           ))}
  //   //           {session.status === "authenticated" && (
  //   //             <button className={styles.mobileLogout} onClick={signOut}>
  //   //               Logout
  //   //             </button>
  //   //           )}
  //   //         </div>
  //   //       ) : null}
  //   //     </div>
  //   //   </div>
  //   //   {/*Desktop View*/}
  //   //   <div className={styles.desktopView}>
  //   //     <Link href="/" className={styles.logo}>
  //   //       <Image
  //   //         src="/monds.png"
  //   //         className={mode === "dark" ? "light" : null}
  //   //         width={100}
  //   //         height={20}
  //   //         alt=""
  //   //       />
  //   //     </Link>
  //   //     <div className={styles.links}>
  //   //       <DarkModeToggle />
  //   //       {links.map((link) => (
  //   //         <Link key={link.id} href={link.url} className={styles.link}>
  //   //           {link.title}
  //   //         </Link>
  //   //       ))}
  //   //       {session.status === "authenticated" && (
  //   //         <button className={styles.logout} onClick={signOut}>
  //   //           Logout
  //   //         </button>
  //   //       )}
  //   //     </div>
  //   //   </div>
  //   // </div>
  // );
};

export default Navbar;
