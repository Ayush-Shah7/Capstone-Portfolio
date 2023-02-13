import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Education from "./Sections/Education";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";
import ContactBar from "./Components/ContactBar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
	return (
		<main className="main">
			<Navbar />
			<div className="app_section_container">
				<Home />
				<About />
				<Education />
				<Work />
				<Contact />
			</div>
			<ContactBar />
			<Footer />
		</main>
	);
}

export default App;
