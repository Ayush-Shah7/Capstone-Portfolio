import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
						I'm Ayush, and it's my pleasure to introduce myself. I was born and grew up in Kolkata. 
						I did my schooling at Delhi Public School and am now pursuing my B.Tech from LPU.

						<p>My strength is that I am always ready to take up new challenges and strive for excellence.</p>
						 This is because I believe success and failures are the best way to sculpt ourselves to reach our goals. 
						 And I believe in myself and my hard work and want fulfillment in everything.
					</p>
					<p className={styles.desc}>
					My short-term goal is to achieve excellence in the skills I'm mastering, take up a challenge in some good organizations, and climb the ladder of success. However, my long-term goal is to be a renowned technical engineer in an organization and reach the highest level of success. My moral is never to intend to harm anyone on purpose.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="./images/profile.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;
