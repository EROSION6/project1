import React, { useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const WelcomeSection = () => {
	const [isLoading, setLoading] = useState(false)
	const [isContentVisible, setContentVisible] = useState(false)
	const [linkFile, setLinkFile] = useState('')

	const [contentTabs, setContentTabs] = useState(0)

	const notify = () =>
		toast.error('Пожалуйста вставьте ссылку', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})

	const handleTabs = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (linkFile !== '') {
			setLoading(true)
			setContentVisible(false)
			setTimeout(() => {
				setLoading(false)
				setContentVisible(true)
			}, 2000)
			setLinkFile('')
		} else {
			notify()
		}
	}

	return (
		<div>
			<section className='main-welcome'>
				<div className='main-welcome-content' style={{ zIndex: 3 }}>
					<div className='main-welcome-content-mobile'>
						<span className='main-welcome-content-mobile-descr'>
							Транскрибируем
							<br />
							ваше <span className='add_magic1'>аудио</span> и<br />
							<span className='add_magic2'>видео</span> в текст
						</span>
						<p className='main-welcome-content-title__after'>
							Создаём контент для социальных сетей и блогов. <br />{' '}
							Автоматизируем аналитику колл-центров.{' '}
						</p>
					</div>
					<div className='main-welcome-content-title'>
						<p className='main-welcome-content-title__before'>
							Транскрибируем ваше
						</p>
						<p className='main-welcome-content-title-centre'>
							<span className='main-welcome-content-title-centre__text'>
								<span>аудио</span>
							</span>
							<span className='main-welcome-content-title-centre__text'>И</span>
							<span className='main-welcome-content-title-centre__text'>
								<span>видео</span>
							</span>
							<span className='main-welcome-content-title-centre__text'>
								В текст
							</span>
						</p>
						<p className='main-welcome-content-title__after'>
							Создаём контент для социальных сетей и блогов. <br />{' '}
							Автоматизируем аналитику колл-центров.
						</p>
					</div>

					{isLoading ? (
						<div id='loader'>
							<img src='./img/loader.svg' alt='Spinner' className='spinner' />
							<p>Загрузка...</p>
						</div>
					) : (
						<form
							id='myForm'
							className='main-welcome-form'
							style={{ display: isContentVisible ? 'none' : 'flex' }}
						>
							<input
								id='myFormInput'
								className='main-welcome-form__input'
								type='text'
								value={linkFile}
								placeholder='Вставьте ссылку на файл...'
								onChange={e => setLinkFile(e.target.value)}
							/>
							<button
								id='submitButton'
								className='main-welcome-form__button'
								onClick={handleTabs}
							>
								Начать транскрипцию
							</button>
							<ToastContainer style={{ top: '80px' }} />
						</form>
					)}

					{/* Контент, который будет показан после загрузки */}
					{!isLoading && isContentVisible && (
						<div id='answer' className='answer'>
							<input
								disabled
								type='search'
								className='form-url'
								id='form-url'
							/>
							<div className='buttons'>
								<button
									className={`answer__button ${
										contentTabs === 0 ? 'active' : ''
									}`}
									onClick={() => setContentTabs(0)}
								>
									Оригинальный текст
								</button>
								<button
									className={`answer__button ${
										contentTabs === 1 ? 'active' : ''
									}`}
									onClick={() => setContentTabs(1)}
								>
									Рерайт
								</button>
								<button
									className={`answer__button ${
										contentTabs === 2 ? 'active' : ''
									}`}
									onClick={() => setContentTabs(2)}
								>
									Пост в Telegram
								</button>
								<button
									className={`answer__button ${
										contentTabs === 3 ? 'active' : ''
									}`}
									onClick={() => setContentTabs(3)}
								>
									Статья для блога
								</button>
							</div>

							{/* Контент для разных вариантов */}
							<p
								id='original'
								className='answer_result'
								style={{ display: contentTabs === 0 ? 'flex' : 'none' }}
							>
								Оригинальный текст: Сегодня мы обсудим важные моменты, связанные
								с управлением временем и повышением продуктивности. Не
								забывайте, что планирование и короткие перерывы играют ключевую
								роль в достижении ваших целей.
							</p>
							<p
								id='rewrite'
								className='answer_result'
								style={{ display: contentTabs === 1 ? 'flex' : 'none' }}
							>
								Переработанный текст: В этом видео мы расскажем, как правильно
								управлять своим временем, чтобы достигать поставленных целей.
								Основное правило — заранее планируйте свой день и делайте
								небольшие перерывы.
							</p>
							<p
								id='telegram'
								className='answer_result'
								style={{ display: contentTabs === 2 ? 'flex' : 'none' }}
							>
								📢 **Новый контент готов!** 🎉 Сегодня делимся полезными
								советами о том, как повысить продуктивность. Главное — заранее
								планировать свои задачи и делать короткие перерывы.
								Подписывайтесь, чтобы получать больше полезных рекомендаций!
								#Продуктивность #Советы #Успех
							</p>
							<p
								id='blog'
								className='answer_result'
								style={{ display: contentTabs === 3 ? 'flex' : 'none' }}
							>
								**Статья для блога:** В этой статье мы рассмотрим основные шаги
								для улучшения продуктивности. Планируйте заранее, делайте
								перерывы и ставьте достижимые цели. Читайте наш блог, чтобы
								узнать больше о правильной организации времени и других полезных
								советах!
							</p>
						</div>
					)}
				</div>
			</section>
		</div>
	)
}
