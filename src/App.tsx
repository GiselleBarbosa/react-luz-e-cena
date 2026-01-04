import Banner from "./Components/Banner";
import Link from "./Components/Links";

function App() {
	return (
		<>
			<Banner src="../public/images/Banners/banner.png" alt="Banner" />
			<Link href="/" target='_blank'> Link</Link>
		</>
	);
}

export default App;
