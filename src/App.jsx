import Badge from "./Badge.jsx"
import Banner from "./Banner.jsx"
import Card from "./Card.jsx"

import { FaFileUpload } from "react-icons/fa"

export default function App() {

	return (
		<main>
			<h1>React Components Library</h1>

			<h2>Badges</h2>
			<section className="badges">
				<Badge color="gray" variant="square">Test 1</Badge>
				<Badge color="red" variant="square">Test 2</Badge>
				<Badge color="yellow" style="square">Test 3</Badge>
				<Badge color="green" variant="square">Test 4</Badge>
				<Badge color="blue" variant="square">Test 5</Badge>
				<Badge color="indigo" variant="square">Test 6</Badge>
				<Badge color="purple" variant="square">Test 7</Badge>
				<Badge color="pink" variant="square">Test 8</Badge>
			</section>

			<section className="badges">
				<Badge color="gray" variant="pill">Test 1</Badge>
				<Badge color="red" variant="pill">Test 2</Badge>
				<Badge color="yellow" variant="pill">Test 3</Badge>
				<Badge color="green" variant="pill">Test 4</Badge>
				<Badge color="blue" variant="pill">Test 5</Badge>
				<Badge color="indigo" variant="pill">Test 6</Badge>
				<Badge color="purple" variant="pill">Test 7</Badge>
				<Badge color="pink" variant="pill">Test 8</Badge>	
			</section>

			<h2>Banners</h2>
			<section className="banners">
				<Banner variant ="success">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
				</Banner>
				<Banner variant ="success" />
			</section>

			<section className="banners">
				<Banner variant ="warning">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
				</Banner>
				<Banner variant ="warning" />
			</section>

			<section className="banners">
				<Banner variant ="error">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
				</Banner>
				<Banner variant ="error" />
			</section>	

			<section className="banners">
				<Banner variant ="neutral">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
				</Banner>
				<Banner variant ="neutral" />
			</section>

			<h2>Cards</h2>
			<section className="cards">
				<Card headline="Easy Deployment" color="#228B22">
					Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
				</Card>
				<Card headline="Hard Deployment" Icon={FaFileUpload}>
					Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
				</Card>
			</section>

			<h2>Testimonials</h2>
			<section>
				
			</section>

			<h2>Tooltips</h2>
			<section>
				
			</section>

			<h2>Toasts</h2>
			<section>
				
			</section>

		</main>
	)
}
