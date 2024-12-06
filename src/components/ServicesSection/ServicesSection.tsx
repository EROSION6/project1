import { ServiceContent } from '../ServiceContent/ServiceContent'
import { ServiceNav } from '../ServiceNav/ServiceNav'
import { ServiceTitle } from '../ServiceTitle/ServiceTitle'

export const ServicesSection = () => {
	return (
		<section id='services' className='main-functions'>
			<ServiceTitle />
			<div className='main-functions-wrapper'>
				<ServiceNav />
				<div>
					<ServiceContent />
				</div>
			</div>
		</section>
	)
}
