import { Link } from 'react-router-dom'
import './callsCard.css'

export const CallsCard = () => {
	return (
		<Link to={'/dashboard/calls/22'} style={{ textDecoration: 'none' }}>
			<div className='calls-card'>
				<span>2024</span>
				<p>332323425 записей</p>
			</div>
		</Link>
	)
}
