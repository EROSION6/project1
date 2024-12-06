export const AudioVideoConversion = () => {
	return (
		<div className='main-functions-content-block-content'>
			<div className='main-functions-content-block-content-block'>
				<h4 className='main-functions-content-block-content-block__title'>
					Аудио и видео:
				</h4>
				<p className='main-functions-content-block-content-block__descr'>
					Наш сервис поддерживает все популярные форматы аудио и видео файлов:
					MP3, WAV, M4A, MP4, MOV и AAC и многие другие.
				</p>
				<div className='main-functions-content-block-content-block-add'>
					<span className='main-functions-content-block-content-block-add__item'>
						<span>MP3</span>
					</span>
					<span className='main-functions-content-block-content-block-add__item'>
						<span>WAV</span>
					</span>
					<span className='main-functions-content-block-content-block-add__item'>
						<span>MP4</span>
					</span>
					<span className='main-functions-content-block-content-block-add__item'>
						<span>AVI</span>
					</span>
				</div>
			</div>
			<div className='main-functions-content-block-content-block'>
				<h4 className='main-functions-content-block-content-block__title'>
					Интеграция с популярными платформами:
				</h4>
				<p className='main-functions-content-block-content-block__descr'>
					По вашему запросу загружаем материалы с популярных платформ видео
					контента таких как YouTube, RuTube, VK Video и быстро экспортируем из
					них текст содержания на нужном вам языке.
				</p>
				<div className='main-functions-content-block-content-block-add'>
					<span className='main-functions-content-block-content-block-add__item'>
						<img
							src='./img/youtube_icon.png'
							className='item_img'
							alt='YouTube'
						/>
					</span>
					<span className='main-functions-content-block-content-block-add__item'>
						<img src='./img/vk_icon.png' className='item_img' alt='VK' />
					</span>
					<span className='main-functions-content-block-content-block-add__item'>
						<img
							src='./img/rutube_icon.png'
							className='item_img'
							alt='RuTube'
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
