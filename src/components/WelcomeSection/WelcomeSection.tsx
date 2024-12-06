export const WelcomeSection = () => {
	return (
		<div>
			<video
				muted
				loop
				className='bg-video'
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					zIndex: 2,
					objectFit: 'cover',
					opacity: 0.2,
					left: 0,
				}}
			>
				<source src='./img/video/back.mp4' type='video/mp4' />
			</video>
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

					<form id='myForm' className='main-welcome-form'>
						<input
							id='myFormInput'
							className='main-welcome-form__input'
							type='text'
							placeholder='Вставьте ссылку на файл...'
						/>
						<button
							id='submitButton'
							className='main-welcome-form__button'
							type='submit'
						>
							Начать транскрипцию
						</button>
					</form>
					<div id='loader' style={{ display: 'none' }}>
						<img src='./img/loader.svg' alt='Spinner' className='spinner' />
						<p>Загрузка...</p>
					</div>
					<div id='answer' className='answer' style={{ display: 'none' }}>
						<input disabled type='search' className='form-url' id='form-url' />
						<div className='buttons'>
							<button
								className='answer__button active'
								onClick={() => console.log('click')}
							>
								Оригинальный текст
							</button>
							<button
								className='answer__button'
								onClick={() => console.log('click')}
							>
								Рерайт
							</button>
							<button
								className='answer__button'
								onClick={() => console.log('click')}
							>
								Пост в Telegram
							</button>
							<button
								className='answer__button'
								onClick={() => console.log('click')}
							>
								Статья для блога
							</button>
						</div>

						{/* <!-- Контент для разных вариантов --> */}
						<p id='original' className='answer_result'>
							Оригинальный текст: Сегодня мы обсудим важные моменты, связанные с
							управлением временем и повышением продуктивности. Не забывайте,
							что планирование и короткие перерывы играют ключевую роль в
							достижении ваших целей.
						</p>
						<p
							id='rewrite'
							className='answer_result'
							style={{ display: 'none' }}
						>
							Переработанный текст: В этом видео мы расскажем, как правильно
							управлять своим временем, чтобы достигать поставленных целей.
							Основное правило — заранее планируйте свой день и делайте
							небольшие перерывы.
						</p>
						<p
							id='telegram'
							className='answer_result'
							style={{ display: 'none' }}
						>
							📢 **Новый контент готов!** 🎉 Сегодня делимся полезными советами
							о том, как повысить продуктивность. Главное — заранее планировать
							свои задачи и делать короткие перерывы. Подписывайтесь, чтобы
							получать больше полезных рекомендаций! #Продуктивность #Советы
							#Успех
						</p>
						<p id='blog' className='answer_result' style={{ display: 'none' }}>
							**Статья для блога:** В этой статье мы рассмотрим основные шаги
							для улучшения продуктивности. Планируйте заранее, делайте перерывы
							и ставьте достижимые цели. Читайте наш блог, чтобы узнать больше о
							правильной организации времени и других полезных советах!
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
