import { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { BsShare } from 'react-icons/bs'
import { CgMoreAlt } from 'react-icons/cg'
import { FcApproval } from 'react-icons/fc'
import { GiSettingsKnobs } from 'react-icons/gi'
import { LuMusic4 } from 'react-icons/lu'
import { MdDeleteOutline, MdOutlineDriveFileMove } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { ITranscribeFile } from '../AdminSection/AdminSection'
import { Pagination } from '../ui/Pagination/Pagination'
import './adminTable.css'

const settings = [
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
]

const paginations = ['1', '2', '3', '4', '5']

interface IAdminTable {
	transcribeFile: ITranscribeFile[]
}

export const AdminTable = ({ transcribeFile }: IAdminTable) => {
	const [pagination, setPagination] = useState(0)
	return (
		<div className='admin-table'>
			<div className='admin-table-header'>
				<div className='admin-table-header-complited'>
					<input type='checkbox' />
					<span>Файл</span>
				</div>

				<div className='admin-table-header-btn'>
					<span>Добавлен</span>
					<span>Длительность</span>
					<span>Статус</span>
				</div>
			</div>

			<div>
				{transcribeFile.map(file => (
					<Link to={`/dashboard/${file.id}`} style={{ textDecoration: 'none' }}>
						<div className='admin-table-row'>
							<div className='admin-table-row-complited'>
								<input type='checkbox' />
								<span>{file.name}</span>
							</div>
							<div className='admin-table-row-btn'>
								<span>{file.dateAdded}</span>
								<span>{file.duration}</span>
								<span>
									<FcApproval size={30} />
								</span>
							</div>
							<button className='admin-table-row-setting'>
								<CgMoreAlt size={30} color='white' />
							</button>
						</div>
					</Link>
				))}
				<div className='admin-table-row-setting-menu'>
					<ul>
						{settings.map(setting => (
							<li key={setting.name}>
								{setting.icon}
								{setting.name}
							</li>
						))}
					</ul>
				</div>
			</div>
			<Pagination
				array={paginations}
				active={pagination}
				onClick={setPagination}
			/>
		</div>
	)
}
