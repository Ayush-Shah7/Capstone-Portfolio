import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>Ayush.</h1>
			<h1 className={styles.heading_2}>I build things for the web.</h1>
			<p className={styles.desc}>
			Knack of building applications with front and back and opertaions.
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;
