// components/StoreHeader.js
import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <nav className={styles.nav}>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      <div className={styles.center}>
        <Link href="/" className={styles.logo}>store</Link>
      </div>

      <div className={styles.right}>
        <Link href="/cart" className={styles.icon}><FaShoppingCart /></Link>
        <Link href="/account" className={styles.icon}><FaUser /></Link>
      </div>
    </header>
  );
};

export default Header;
