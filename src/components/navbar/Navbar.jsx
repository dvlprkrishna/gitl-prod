'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false); // State to track scrolling

  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'Solutions',
      url: '/solutions'
    },
    {
      id: 3,
      title: 'Industry Focus',
      url: '/industry-focus'
    },
    {
      id: 4,
      title: 'About Us',
      url: '/about-us'
    },
    {
      id: 5,
      title: 'Careers',
      url: '/careers'
    },
    {
      id: 6,
      title: 'Insights',
      url: '/insights'
    },
    {
      id: 7,
      title: 'Contact Us',
      url: '/contact-us'
    },
  ]

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Listen for scroll event and update hasScrolled state
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  // Attach scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        // variants={navVariants}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 99,
          color: hasScrolled ? '#000' : '#FFFFFF',
          borderBottom: hasScrolled ? '1px solid #dadada' : '0',
          backgroundColor: hasScrolled ? '#ffffff' : 'transparent', // Set background color
        }}
      >
        <header className={styles.header}>
          <Link href='/'>
            <Image src={hasScrolled ? '/GITLLOGO.svg' : '/godrejLogoWhite.png'} alt='godrej logo' width='125' height='45' />
          </Link>
          <nav>
            {links.map((link)=>{
              // return <Link href={link.url} key={link.id} className={link.url === '/contact-us' ? hasScrolled? `${styles['contact-link-dark']}` : `${styles['contact-link']} ${styles['link']}`: ``} >{link.title}</Link>

              return <Link href={link.url} key={link.id} className={(link.url === '/contact-us' ? (hasScrolled ? `${styles['contact-link-dark']} ` : `${styles['contact-link']} `) : (hasScrolled ? `${styles.link}`: `${styles.darkLink}`)) } >{link.title}</Link>


            })}
          </nav>
        </header>
        {/* <motion.div className={styles['progress-bar']} style={{ scaleX }} /> */}
      </motion.nav>
    </>
  );
};

export default Navbar;