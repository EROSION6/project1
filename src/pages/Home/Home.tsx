import { ServicesSection } from '../../components/ServicesSection/ServicesSection'
import { Tariffs } from '../../components/Tariffs/Tariffs'
import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection'
import '../../styles/index.css'

export const Home = () => {
	return (
		<>
			<WelcomeSection />
			<ServicesSection />
			<Tariffs />
		</>
	)
}
