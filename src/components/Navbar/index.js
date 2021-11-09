import React, { useContext, useState } from 'react'
import styles from '@/styles/components/Navbar.module.css'
import Link from 'next/link'
import NavList from './NavList'
import AuthContext from '@/context/index';

const Navbar = ()=>{
    const [toggle,setToggle] = useState(false);
    const toggleHandler = (e)=>setToggle(!toggle);
    const {handeldarkTheme,darkTheme} = useContext(AuthContext);
    return (
        <header className={styles.header}>
            <nav className={styles.nav+" container"}>
                <Link href="/">
                    <a className={styles.nav__logo}>Bedimcode</a>
                </Link>
                <div className={`${styles.nav__menu} ${toggle?styles.show:''}`} >
                    {
                        (<NavList close={toggleHandler} />)
                    }
                </div>
                <div className={styles.nav__btns}>
                    <i onClick={handeldarkTheme} className={`uil ${darkTheme?'uil-sun':'uil-moon'} ${styles.change__theme}`}></i>
                    <div className={styles.nav__toggle}>
                        <i onClick={toggleHandler} className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
