import './callsInfoSidebar.css'

const callsInfoSidebarNavigation = [
	{ label: 'Общая статистика звонков', href: '#' },
	{ label: 'Категории звонков', href: '#' },
	{ label: 'Детекция проблем и эмоциональный анализ', href: '#' },
	{ label: 'Выявленные ключевые фразы и вопросы', href: '#' },
	{ label: 'Рекомендации по улучшению', href: '#' },
]

export const CallsInfoSidebar = () => {
	return (
		<nav className='calls-info-sidebar'>
			<span>Отчёт</span>
			{callsInfoSidebarNavigation.map((link, index) => (
				<a href={link.href} key={index}>
					{link.label}
				</a>
			))}
		</nav>
	)
}
