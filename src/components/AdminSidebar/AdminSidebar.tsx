import { useState } from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { LuFolder, LuFolderSearch } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import './adminSidebar.css'

const navigation = [
	{
		title: 'Быстрый доступ',
		links: [
			{
				num: 0,
				to: '/dashboard/',
				title: 'Недавние',
				icon: IoTimeOutline,
			},
			{
				num: 1,
				to: '/dashboard/',
				title: 'Без категории',
				icon: LuFolderSearch,
			},
		],
	},
	{
		title: 'Папки',
		links: [
			{
				num: 2,
				to: '/dashboard/',
				title: 'Меладзе',
				icon: LuFolder,
			},
			{
				num: 3,
				to: '/dashboard/',
				title: 'Лекции Водовозов',
				icon: LuFolder,
			},
			{
				num: 4,
				to: '/dashboard/',
				title: 'Кино',
				icon: LuFolder,
			},
		],
	},
	{
		title: 'Звонки',
		links: [
			{
				num: 0,
				to: '/dashboard/calls',
				title: 'Ноябрь',
				icon: IoTimeOutline,
			},
		],
	},
]

export const AdminSidebar = () => {
	const [isActiveLink, setActiveLink] = useState(0)
	return (
		<aside className='admin-sidebar'>
			{navigation.map((side, index) => (
				<div key={index}>
					<b>{side.title}</b>
					<ul className='admin-sidebar-link'>
						{side.links.map(link => (
							<li key={link.num}>
								<Link
									to={link.to}
									onClick={() => setActiveLink(link.num)}
									className={
										isActiveLink === link.num ? 'active-admin-link' : ''
									}
								>
									<link.icon size={20} />
									<span>{link.title}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</aside>
	)
}
