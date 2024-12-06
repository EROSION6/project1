import { Link } from 'react-router-dom'

const navigation: {
	label: string
	to: string
}[] = [
	{
		label: 'Аудио и видео в текст',
		to: '#files',
	},
	{
		label: 'Преобразование и анализ',
		to: '#AI',
	},
	{
		label: 'Редактирование текста',
		to: '#text',
	},
	{
		label: 'Генерация контента',
		to: '#content',
	},
	{
		label: 'Аналитика колл-центра',
		to: '#security',
	},
	{
		label: 'Личный кабинет',
		to: '#LK',
	},
]
export const ServiceNav = () => {
	return (
		<nav className='main-functions-nav'>
			{navigation.map((link, index) => (
				<a key={index} className='main-functions-nav__link' href={link.to}>
					{link.label}
				</a>
			))}
		</nav>
	)
}
