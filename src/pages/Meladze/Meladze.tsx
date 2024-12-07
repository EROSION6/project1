import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AdminSetting } from '../../components/AdminSetting/AdminSetting'
import { Modal } from '../../components/ui/Modal/Modal'
import './meladze.css'

interface IGenerateImageModal {
	showGenerateImageModal: boolean
	setShowGenerateImageModal: (value: boolean) => void
	handleSaveImageModal: () => void
	handleGenerateImageModal: () => void
}

export const Meladze = () => {
	const [showGenerateImageModal, setShowGenerateImageModal] = useState(false)
	const [option, setOption] = useState(0)

	const handleSaveImageModal = () => {
		toast.success('Все успешно сохранилось!', {
			position: 'top-right',
			autoClose: 2000,
			theme: 'dark',
		})
	}

	const handleGenerateImageModal = () => {
		setShowGenerateImageModal(false)
	}

	const renderContent = () => {
		switch (option) {
			case 0:
				return (
					<p>Живая сессия, так или иначе, заканчивает автономный фузз...</p>
				)
			case 1:
				return <p>Короткий текст</p>
			case 2:
				return <p>Рерайт</p>
			case 3:
				return (
					<div>
						<img src='/public/img/Rectangle 666.png' alt='' />
						<button onClick={() => setShowGenerateImageModal(true)}>
							Сгенерировать изображение
						</button>
						<p>Живая сессия, так или иначе, заканчивает автономный фузз...</p>
					</div>
				)
			default:
				return null
		}
	}

	return (
		<div className='meladze'>
			<div className='meladze-content'>
				<div className='meladze-content-header'>
					<h2>
						Валерий Меладзе - Притяженья больше нет (feat. Виа Гра) (2003).mp4
					</h2>
					<div className='meladze-content-header-time'>
						<span>21 октября 12:20</span>
						<span>23 мин.</span>
					</div>
				</div>
				<div className='meladze-content-tabs'>
					{[
						'Оригинальный текст',
						'Короткий текст',
						'Рерайт',
						'Статья для блога',
					].map((tab, index) => (
						<button
							key={index}
							onClick={() => setOption(index)}
							className={option === index ? 'active-tabs' : ''}
						>
							{tab}
						</button>
					))}
				</div>
				<div className='meladze-content-info'>{renderContent()}</div>
			</div>
			<AdminSetting />
			<GenerateImageModal
				setShowGenerateImageModal={setShowGenerateImageModal}
				showGenerateImageModal={showGenerateImageModal}
				handleSaveImageModal={handleSaveImageModal}
				handleGenerateImageModal={handleGenerateImageModal}
			/>
		</div>
	)
}

const GenerateImageModal = ({
	setShowGenerateImageModal,
	showGenerateImageModal,
	handleSaveImageModal,
	handleGenerateImageModal,
}: IGenerateImageModal) => (
	<Modal
		style={{ display: !showGenerateImageModal ? 'none' : 'flex' }}
		onClose={setShowGenerateImageModal}
		classNames='generate-image-modal'
	>
		<h2>Выберите изображение</h2>
		<div className='generate-image-modal-content'>
			<div className='generate-image-modal-content-grid'>
				{[...Array(4)].map((_, index) => (
					<img key={index} src='/public/img/Rectangle 666.png' alt='' />
				))}
			</div>
			<button onClick={handleSaveImageModal}>Сохранить выбранное</button>
		</div>
		<div className='generate-image-modal-search'>
			<b>Сгенерировать по своему описанию</b>
			<textarea></textarea>
			<button
				className='generate-image-modal-search-btn'
				onClick={handleGenerateImageModal}
			>
				Сгенерировать
			</button>
			<ToastContainer />
			<span>Осталось 15 генераций</span>
		</div>
	</Modal>
)
