// components/StoreHeader.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={styles.navDesktop}>
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

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.navMobile}
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MainHeader;
