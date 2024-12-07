import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import './styles/index.css'

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
