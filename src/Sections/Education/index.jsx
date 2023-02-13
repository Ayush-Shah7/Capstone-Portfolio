import { useState } from "react";
import Heading from "../../Components/Heading";
import constant from "../../constant.json";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import styles from "./styles.module.css";

function Education() {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<section id="education">
			<Heading index="02" heading="Where I’ve Studied" />
			<div className={styles.container}>
				<div className={styles.left}>
					{constant.education.map((education, index) => (
						<div
							className={
								index === currentIndex
									? `${styles.tab} ${styles.active_tab}`
									: `${styles.tab}`
							}
							onClick={() => setCurrentIndex(index)}
						>
							{education.company}
						</div>
					))}
				</div>
				<div className={styles.right}>
					<h1 className={styles.title}>
						{constant.education[currentIndex].title}{" "}
						<a
							href={constant.education[currentIndex].link}
							target="_blank"
							rel="noreferrer"
						>
							@ {constant.education[currentIndex].company}
						</a>
					</h1>
					<p className={styles.duration}>
						{constant.education[currentIndex].duration}
					</p>
					{constant.education[currentIndex].desc.map((point) => (
						<p className={styles.desc}>
							<PlayArrowIcon /> {point}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}

export default Education;
