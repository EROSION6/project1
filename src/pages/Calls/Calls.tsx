import { CallsCard } from '../../components/CallsCard/CallsCard'
import './calls.css'

export const Calls = () => {
	return (
		<div className='calls'>
			<div className='calls-content'>
				<div className='calls-content-header'>
					<h2>Звонки</h2>
					<button>Отчет</button>
				</div>
				<div className='calls-content-grid'>
					<CallsCard />
					<CallsCard />
					<CallsCard />
					<CallsCard />
				</div>
			</div>
		</div>
	)
}
