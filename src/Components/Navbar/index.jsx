import styles from "./styles.module.css";
import {Ayush_Resume} from '../../Sections/Ayush_Resume.pdf'



function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">Ayush</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					About
				</a>
				<a href="#education" className={styles.nav_link}>
					Education
				</a>
				<a href="#work" className={styles.nav_link}>
					Work
				</a>
				<a href="#contact" className={styles.nav_link}>
					Contact
				</a>
				<button className={styles.nav_resume_btn}><a href="Ayush_Resume.pdf" download="Ayush_Resume.pdf">Resume</a></button>
			</div>
		</nav>
	);
}

export default Navbar;
