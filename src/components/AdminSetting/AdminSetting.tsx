import { BiEditAlt } from 'react-icons/bi'
import { BsShare } from 'react-icons/bs'
import { FiFileText } from 'react-icons/fi'
import { GiSettingsKnobs } from 'react-icons/gi'
import { LuMusic4 } from 'react-icons/lu'
import { MdDeleteOutline, MdOutlineDriveFileMove } from 'react-icons/md'
import './adminSetting.css'

const settings = [
	{
		title: 'Экспорт',
		links: [
			{
				name: 'DOCX',
				icon: <FiFileText size={18} />,
			},
			{
				name: 'TXT',
				icon: <FiFileText size={18} />,
			},
			{
				name: 'SRT',
				icon: <FiFileText size={18} />,
			},
		],
	},
	{
		title: 'Действия',
		links: [
			{
				name: 'Поделиться',
				icon: <BsShare size={18} />,
			},
			{
				name: 'Редактировать',
				icon: <GiSettingsKnobs size={18} />,
			},
			{
				name: 'Скачать аудио',
				icon: <LuMusic4 size={18} />,
			},
			{
				name: 'Переименовать файл',
				icon: <BiEditAlt size={18} />,
			},
			{
				name: 'Переместить файл',
				icon: <MdOutlineDriveFileMove size={18} />,
			},
			{
				name: 'Удалить файл',
				icon: <MdDeleteOutline size={18} />,
			},
		],
	},
]
export const AdminSetting = () => {
	return (
		<div className='admin-setting'>
			{settings.map((group, index) => (
				<div className='admin-setting-nav' key={index}>
					<h4>{group.title}</h4>
					<ul>
						{group.links.map((link, index) => (
							<li key={index}>
								<span>{link.icon}</span>
								<span>{link.name}</span>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
