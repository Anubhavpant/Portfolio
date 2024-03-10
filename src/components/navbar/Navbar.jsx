import styles from './Navbar.module.css';
import {getImageUrl} from "../../utils";
import { useState } from 'react';
const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);


  return (
    <nav className={styles.navbar}>
        <a  className={styles.title} href="/">AnubhavPant</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen?getImageUrl("nav/image 17.png"):getImageUrl("nav/image 16.png")} alt="menuButton"
            onClick={()=>{setMenuOpen(!menuOpen)}} />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>  
                <li>
                    <a href="#contact">Contact</a>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
