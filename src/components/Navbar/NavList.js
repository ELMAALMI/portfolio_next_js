import Link from 'next/link'
import styles from '@/styles/components/Navbar.module.css';
import { Fragment } from 'react';
const NavList = ({close}) => {
    const navItem = [{name:'Home',path:'/' ,icon:'uil uil-estate'},
                     {name:'About',path:'/about',icon:'uil uil-comment-info'},
                     {name:'Services',path:'/service',icon:'uil uil-briefcase'},
                     {name:'Skills',path:'/skille',icon:'uil uil-briefcase'},
                     {name:'Blog',path:'/blog',icon:'uil uil-blogger-alt'},
                     {name:'Contact',path:'/contact',icon:'uil uil-envelopes'}
                    ]; 
    return (
        <Fragment>
            <ul className={styles.nav__list+' grid'}>
                {
                    navItem.map(item=>(
                        <li className={styles.nav__item} key={item.name}>
                            <Link  href={item.path}>
                                <a className={styles.nav__link}> 
                                    <i className={`${item.icon} ${styles.icon}`}></i> {item.name} 
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <i onClick={close} className={`uil uil-times ${styles.close}`}></i>
        </Fragment>
    )
}

export default NavList
