import Card from '../shared/Card'

import { Link } from 'react-router-dom'

function About() {
	return (
		<Card>
			<div className='about'>
				<h1>About This Project</h1>
				<p>This is a react app to leave feedback for a service.</p>
				<p>Version: 1.0.0</p>
				<p>
					<Link to='/'>Back to home</Link>
				</p>
			</div>
		</Card>
	)
}

export default About
