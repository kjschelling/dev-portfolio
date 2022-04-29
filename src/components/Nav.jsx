import React from "react"
import logo from "../images/logo.png";
import styles from "../styles/Nav.module.css"
import clsx from "clsx";

function Nav(props) {
    return (
        <div className={clsx(styles.nav, "full bg-black-900")}>
            <div className={clsx(styles.navItems, "flex")}>
                <img src={logo} className={clsx(styles.navLogo)} />
                <div className={clsx(styles.navLinks, "float-right")}>
                    <a href="#" className={styles.navItem}> <strong>.01</strong> About</a>
                    <a href="#" className={styles.navItem}> <strong>.02</strong> Projects</a>
                    <a href="#" className={styles.navItem}> <strong>.03</strong> Experience</a>
                    <a href="#" className={styles.navItem}> <strong>.04</strong> Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Nav;