import Badge from "./Badge.jsx"
import Banner from "./Banner.jsx"
import Card from "./Card.jsx"
import TestimonialImg from "./TestimonialImg.jsx"

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
				<Badge color="gray" variant="pill">Badge 1</Badge>
				<Badge color="red" variant="pill">Badge 2</Badge>
				<Badge color="yellow" variant="pill">Badge 3</Badge>
				<Badge color="green" variant="pill">Badge 4</Badge>
				<Badge color="blue" variant="pill">Badge 5</Badge>
				<Badge color="indigo" variant="pill">Badge 6</Badge>
				<Badge color="purple" variant="pill">Badge 7</Badge>
				<Badge color="pink" variant="pill">Badge 8</Badge>	
			</section>

			<h2>Banners</h2>
			<section className="banners">
				<Banner 
					headline="Congratulations!"
					variant="success"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
				</Banner>
				<Banner
					headline="Excellent!"
					variant="success" 
				/>
			</section>

			<section className="banners">
				<Banner 
					headline="Attention"
					variant="warning"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
				</Banner>
				<Banner 
					headline="Careful there!"
					variant="warning" 
				/>
			</section>

			<section className="banners">
				<Banner 
					headline="There is a problem with your application"
					variant="error"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
				</Banner>
				<Banner 
					headline="Oh, looks like there's a problem..."
					variant="error" 
				/>
			</section>	

			<section className="banners">
				<Banner 
					headline ="Update available"
					variant ="neutral"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
				</Banner>
				<Banner 
					headline ="Time to take a break"
					variant ="neutral" 
				/>
			</section>

			<h2>Cards</h2>
			<section className="cards">
				<Card 
					headline="Easy Deployment" 
					color="#228B22"
				>
					Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
				</Card>
				<Card 
					headline="Hard Deployment" 
					Icon={FaFileUpload}
				>
					Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
				</Card>
			</section>

			<h2>Testimonials</h2>
			<TestimonialImg 
				name="May Andersons" 
				title="Workcation, CTO" 
				src="https://plus.unsplash.com/premium_photo-1661521353816-9e8e1c0c9681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDB8MnwwfHx8MA%3D%3D"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
			</TestimonialImg>

			<h2>Tooltips</h2>
			<section>
				
			</section>

			<h2>Toasts</h2>
			<section>
				
			</section>

		</main>
	)
}
