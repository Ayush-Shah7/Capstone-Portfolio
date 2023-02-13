import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="https://www.linkedin.com/in/ayush-kumar-47am47/" target="https://www.linkedin.com/in/ayush-kumar-47am47/" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="https://github.com/Ayush-Shah7" target="https://github.com/Ayush-Shah7" className={styles.icon} >
					<GitHubIcon  />
				</a>
				<a href="https://www.instagram.com/ayush._1310/" target="https://www.instagram.com/ayush._1310/" className={styles.icon} >
					<InstagramIcon  />
				</a>
				<a href="https://twitter.com/AyushKu17782346" target="https://twitter.com/AyushKu17782346" className={styles.icon} >
					<TwitterIcon  />
				</a>
				<div className={styles.line}></div>
			</div>
			<div className={styles.contact_bar}>
				<a href="mailto:ayushshah1979@gmail.com" className={styles.email}>
					ayushshah1979@gamil.com
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;
