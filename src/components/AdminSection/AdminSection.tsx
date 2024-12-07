import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AdminTable } from '../AdminTable/AdminTable'
import { Modal } from '../ui/Modal/Modal'
import './adminSection.css'

interface IFolder {
	id: number
	name: string
}

export interface ITranscribeFile {
	id: number
	name: string
	files: number
	dateAdded: string
	duration: string
}

interface ICreateFolderModalProps {
	hanldleCreateFolderName: (event: React.MouseEvent<HTMLButtonElement>) => void
	folderName: string
	setFolderName: (value: string) => void
	showCreateFolderModal: boolean
	setShowCreateFolderModal: (value: boolean) => void
}

interface ICreateTranscribeFile {
	hanldleTranscribeFile: (event: React.MouseEvent<HTMLButtonElement>) => void
	files: string
	setFiles: (value: string) => void
	showTranscribeFile: boolean
	setShowTranscribeFile: (value: boolean) => void
}

const monthNames = [
	'янв',
	'фев',
	'мар',
	'апр',
	'май',
	'июн',
	'июл',
	'авг',
	'сен',
	'окт',
	'ноя',
	'дек',
]

export const AdminSection = () => {
	const [transcribeFile, setTranscribeFile] = useState<ITranscribeFile[]>([])
	const [folders, setFolders] = useState<IFolder[]>([])

	const [isLoading, setLoading] = useState(false)

	const [files, setFiles] = useState('')
	const [folderName, setFolderName] = useState('')
	const [showCreateFolderModal, setShowCreateFolderModal] = useState(false)
	const [showTranscribeFile, setShowTranscribeFile] = useState(false)

	const hanldleCreateFolderName = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (folderName !== '') {
			setFolders([
				...folders,
				{
					id: Math.random() + 1000,
					name: folderName,
				},
			])
			setShowCreateFolderModal(false)
			setFolderName('')
		}
	}

	const hanldleTranscribeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (files !== '') {
			setLoading(true)
			const currentDate = new Date()

			const formattedDate = `${currentDate.getDate()} ${
				monthNames[currentDate.getMonth()]
			} ${String(currentDate.getHours()).padStart(2, '0')}:${String(
				currentDate.getMinutes()
			).padStart(2, '0')}`

			setTranscribeFile([
				...transcribeFile,
				{
					id: Math.random() + 1000,
					name: files,
					files: Math.random() * 1000,
					dateAdded: formattedDate,
					duration: '00:00:00',
				},
			])

			setShowTranscribeFile(false)
			setFiles('')

			setTimeout(() => {
				setLoading(false)
			}, 3000)
		}
	}

	return (
		<div className='admin-section'>
			<div className='admin-section-header'>
				<h1>Ваши транскрипты</h1>
				<div className='admin-section-header-btns'>
					<button className='admin-section-header-burger'>
						<RxHamburgerMenu
							color='white'
							size={30}
							// onClick={() => setBurgerMenu(!burgerMenu)}
						/>
					</button>

					<button
						onClick={() => setShowTranscribeFile(true)}
						className='admin-section-header-report'
					>
						Отчет
					</button>
				</div>
			</div>
			{!isLoading ? (
				<AdminTable transcribeFile={transcribeFile} />
			) : (
				<div id='loader_transcribe'>
					<img src='/img/loader.svg' alt='Spinner' className='spinner' />
					<p>Транскрибируем...</p>
				</div>
			)}
			<CreateFolderModal
				folderName={folderName}
				setFolderName={setFolderName}
				hanldleCreateFolderName={hanldleCreateFolderName}
				showCreateFolderModal={showCreateFolderModal}
				setShowCreateFolderModal={setShowCreateFolderModal}
			/>
			<CreateTranscribeFile
				files={files}
				setFiles={setFiles}
				hanldleTranscribeFile={hanldleTranscribeFile}
				showTranscribeFile={showTranscribeFile}
				setShowTranscribeFile={setShowTranscribeFile}
			/>
		</div>
	)
}

const CreateFolderModal = ({
	hanldleCreateFolderName,
	folderName,
	setFolderName,
	showCreateFolderModal,
	setShowCreateFolderModal,
}: ICreateFolderModalProps) => (
	<Modal
		onClose={setShowCreateFolderModal}
		style={{ display: !showCreateFolderModal ? 'none' : 'flex' }}
	>
		<h4 className='create-folder-modal_title'>
			<strong>создать новую папку</strong>
		</h4>
		<form className='create-folder-modal_form'>
			<input
				type='text'
				value={folderName}
				placeholder='Введите название папки...'
				onChange={e => setFolderName(e.target.value)}
			/>
			<button onClick={hanldleCreateFolderName} className='btn-modal'>
				Создать
			</button>
		</form>
	</Modal>
)

const CreateTranscribeFile = ({
	files,
	setFiles,
	hanldleTranscribeFile,
	showTranscribeFile,
	setShowTranscribeFile,
}: ICreateTranscribeFile) => (
	<Modal
		onClose={setShowTranscribeFile}
		style={{ display: !showTranscribeFile ? 'none' : 'flex' }}
	>
		<h4 className='create-transcribe-file_title'>
			<strong>Транскрибировать файл</strong>
		</h4>
		<div className='create-transcribe-file_forms'>
			{files === '' ? (
				<img src='/public/img/field.jpeg' alt='' />
			) : (
				<img src='/public/img/field.png' alt='' />
			)}
			<span>или</span>
			<div className='create-transcribe-file_forms-add'>
				<input
					type='file'
					id='files'
					value={files}
					style={{ opacity: 0 }}
					onChange={e => setFiles(e.target.value)}
				/>
				<label htmlFor='files' className='create-transcribe-file_choose'>
					Выбрать файл
				</label>
			</div>
			<div className='create-transcribe-file_options'>
				<select name='' id=''>
					<option value='0'>🇷🇺 Русский</option>
					<option value='1'>Английский</option>
				</select>
				<button onClick={hanldleTranscribeFile} className='btn-modal'>
					Транскрибировать
				</button>
			</div>
		</div>
	</Modal>
)
